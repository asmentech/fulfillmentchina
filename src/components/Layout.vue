<template>
    <div class="layout">
        <el-container>
            <el-aside width="256px" class="aside">
                <el-image style="margin: 64px 0 50px 33%" src="/src/assets/logo.svg"></el-image>
                <el-menu :default-active="store.state.tagActive" @select="handleClick" background-color="#091242" text-color="#fff" active-text-color="#FFBE34">
                    <el-menu-item v-for="(item) in menu" :key="item.key" :index="item.key">
                        <el-icon>
                            <el-image v-if="item.key == selectedKey" :src="'/src/assets/'+item.key+'.svg'" class="svg-selected"></el-image>
                            <el-image v-else :src="'/src/assets/'+item.key+'.svg'"></el-image>
                        </el-icon>
                        <span style="margin-left: 10px">{{item.title}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="container">
                <el-header class="header">
                    <div style="display: flex;align-items: center">
                        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
                            <a v-if="index === 0">
                                <el-icon style="vertical-align: middle" @click="goBack">
                                    <ArrowLeft />
                                </el-icon>
                            </a>
                            <a v-else>{{ item.title }}</a>
                        </el-breadcrumb-item>
                    </div>
                    <div style="display: flex;align-items: center">
                        <el-image src="../src/assets/ringbell.svg" style="margin-right: 20px"></el-image>
                        <el-avatar :size="45" style="margin-right: 20px"></el-avatar>
                        <div>Mary</div>
                        <el-dropdown style="margin-left: 80px">
                            <el-icon>
                                <arrow-down />
                            </el-icon>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="logout">Log Out</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const store = useStore();

const menu = ref([
    {key: 'dashboard',title: 'Dashboard'},
    {key: 'client',title: 'Client'},
    // {key: 'warehouse',title: 'Warehouse In'},
    {key: 'shiptofba',title: 'Ship to FBA'},
    {key: 'products',title: 'Products'},
    {key: 'inventory',title: 'Storage'},
    {key: 'billing',title: 'Billing'},
    {key: 'profile',title: 'Profile'},
    {key: 'support',title: 'Support'},
])
const breadcrumbs = computed(() => {
    return store.state.breadcrumbs;
});
const selectedKey = ref(store.state.tagActive)
const handleClick = function(index) {
    store.commit('setTagActive', index);
    selectedKey.value = store.state.tagActive;
    router.push(`/${index}`)
}
const goBack = function() {
    router.go(-1);
}
const logout = function() {
    ElMessageBox.confirm('Are you sure to log out?').then(() => {
        router.push('/login')
    }).catch(() => {})
}
watch(
    () => router.currentRoute.value,
    (val) => {
        const matched = val.matched || [];
        const breadcrumbs = [];
        matched.forEach(ele => {
            let obj = {
                title: ele.meta.title,
                path: ele.path
            };
            if(obj.title) {
                breadcrumbs.push(obj);
            }
        })
        store.commit('setBreadcrumbs', breadcrumbs);
    },
    { immediate: true }
)

</script>



<style lang="less" scoped>
.aside {
    background: #091242;
    min-height: 100vh;
    font-size: 16px;
    font-weight: 500;
}
.container {
    width: 100%;
    .header {
        padding: 36px 12% 0 4.5%;
        display: flex;
        justify-content: space-between;
        align-items: center
    };
    .main {
        padding: 24px 7% 24px 7%;
    }
}

.svg-selected {
    overflow: hidden; // 超出部分隐藏
    filter: drop-shadow(#FFBE34 100px 0);
    transform: translateX(-100px);
}
</style>

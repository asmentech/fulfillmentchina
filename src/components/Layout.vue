<template>
    <div class="layout">
        <el-container>
            <el-aside width="256px" class="aside">
                <el-image style="margin: 64px 0 50px 33%" src="/src/assets/logo.svg"></el-image>
                <el-menu default-active="dashboard" @select="handleClick" background-color="#091242" text-color="#fff" active-text-color="#FFBE34">
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
                </el-header>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const store = useStore();

const menu = ref([
    {key: 'dashboard',title: 'Dashboard'},
    // {key: 'warehouse',title: 'Warehouse In'},
    {key: 'shiptofba',title: 'Ship to FBA'},
    {key: 'products',title: 'Products'},
    {key: 'inventory',title: 'Storage'},
    {key: 'billing',title: 'Billing'},
    {key: 'profile',title: 'Profile'},
    {key: 'support',title: 'Support'},
])
const selectedKey = ref('dashboard')
const handleClick = function(index) {
    selectedKey.value = index;
    store.commit('setTagActive', index);
    router.push(`/${index}`)
}
const logout = function() {
    ElMessageBox.confirm('Are you sure to log out?').then(() => {
        router.push('/login')
    }).catch(() => {})
}


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
        padding: 36px 12% 0 10%;
        display: flex;
        justify-content: flex-end;
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

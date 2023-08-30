<template>
    <div class="layout">
        <el-container>
            <el-aside width="256px" class="aside">
                <el-image style="margin: 64px 0 50px 0" src="/src/assets/logo.svg"></el-image>
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
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref([
    {key: 'dashboard',title: 'Dashboard'},
    {key: 'warehouse',title: 'Warehouse In'},
    {key: 'shiptofba',title: 'Ship to FBA'},
    {key: 'products',title: 'Products'},
    {key: 'inventory',title: 'Inventory'},
    {key: 'billing',title: 'Billing'},
    {key: 'profile',title: 'Profile'},
    {key: 'support',title: 'Support'},
])
const selectedKey = ref('dashboard')
const handleClick = function(index) {
    selectedKey.value = index;
}
</script>



<style lang="less" scoped>
.aside {
    background: #091242;
    min-height: 100vh;
    font-size: 16px;
    font-weight: 500;
}
.svg-selected {
    overflow: hidden; // 超出部分隐藏
    filter: drop-shadow(#FFBE34 100px 0);
    transform: translateX(-100px);
}
</style>

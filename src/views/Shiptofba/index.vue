<template>
    <div class="container">
        <div class="top">Ship to FBA</div>
        <el-divider style="margin-top: 15px"></el-divider>
        <div class="middle">
            <div style="display: flex">
                <el-input placeholder="Search here" style="width: 240px">
                    <template #prefix>
                        <el-icon style="color: #FFBE34"><search /></el-icon>
                    </template>
                </el-input>
                <el-button icon="Filter" class="plain-btn" style="margin-left: 32px">Filters</el-button>
            </div>
            <div>
                <el-button @click="createNew" icon="Ship" style="width: 192px" color="#FFBE34">Ship to FBA</el-button>
            </div>
        </div>
        <div class="bottom">
            <el-table></el-table>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const createNew = function() {
    router.push('/newShipment')
}
</script>

<style lang="less" scoped>
.container {
    margin-left: -3%;
}
.top {
    display: flex;
    justify-content: space-between;
    color: #091242;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    align-items: center;
}
.middle {
    display: flex;
    justify-content: space-between;
}
.bottom {
    margin-top: 25px;
    border-radius: 15px;
    background: var(--white-100, #FFF);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    padding: 10px;
}
</style>
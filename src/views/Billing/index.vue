<template>
    <div class="container">
        <div class="top">Billing</div>
        <el-tabs v-model="activeTab" style="margin-top: 15px">
            <el-tab-pane label="Storage costs." name="storage">
                <div class="middle">
                    <div style="display: flex">
                        <el-input placeholder="Search here" style="width: 240px">
                            <template #prefix>
                                <el-icon style="color: #FFBE34"><search /></el-icon>
                            </template>
                        </el-input>
                        <el-button icon="Filter" class="plain-btn" style="margin-left: 32px">Filters</el-button>
                    </div>
                </div>
                <div class="bottom">
                    <el-table></el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Shipping costs." name="ship">
                <div class="middle">
                    <div style="display: flex">
                        <el-input placeholder="Search here" style="width: 240px">
                            <template #prefix>
                                <el-icon style="color: #FFBE34"><search /></el-icon>
                            </template>
                        </el-input>
                        <el-button icon="Filter" class="plain-btn" style="margin-left: 32px">Filters</el-button>
                    </div>
                </div>
                <div class="bottom">
                    <el-table></el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
        
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('storage');
const createNew = function() {
    router.push('/newShipment')
}
const newStorage = function() {
    router.push('/newStorage')
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
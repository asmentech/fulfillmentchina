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
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="Date" />
                        <el-table-column prop="productName" label="Product Name" />
                        <el-table-column prop="state" label="State">
                            <template #default="item">
                                <el-tag v-if="item.row.state == 1" type="success" round>paid</el-tag>
                                <el-tag v-if="item.row.state == 2" type="danger" round>to be paid</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="orderNum" label="Order Number" />
                        <el-table-column prop="duration" label="Duration" />
                        <el-table-column label="Action" width="280">
                            <template #default="item">
                                <el-button v-if="item.row.state == 2" style="color: #FFF" round color="#FFBE34">Pay</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
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
const tableData = ref([
    {date: '11', productName: 'name',state: 1,duration: '1415', orderNum: '1112'},
    {date: '11', productName: 'name',state: 2,duration: '14312', orderNum: '1112'},
])

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
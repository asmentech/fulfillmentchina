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
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date" />
                <el-table-column prop="productName" label="Product Name" />
                <el-table-column prop="state" label="State">
                    <template #default="item">
                        <el-tag v-if="item.row.state == 1" type="warning" round>In Transit</el-tag>
                        <el-tag v-if="item.row.state == 2" type="success" round>Paid</el-tag>
                        <el-tag v-if="item.row.state == 3" type="danger" round>Pending</el-tag>
                        <el-tag v-if="item.row.state == 4" color="#CFDDFF" style="color: #2A57CA" round>Invoiced</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="deliverAddress" label="Deliver Address" />
                <el-table-column prop="orderNum" label="Order Number" />
                <el-table-column label="Action" width="280">
                    <template #default>
                        <el-button style="color: #FFF" round color="#67C23A">View</el-button>
                        <el-button color="#2A57CA" round>Edit</el-button>
                        <el-button style="color: #FFF" round color="#FF4B4B">Cancel</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tableData = ref([
    {date: '11', productName: 'name',state: 1,deliverAddress: 'address', orderNum: '1112'},
    {date: '11', productName: 'name',state: 2,deliverAddress: 'address', orderNum: '1112'},
    {date: '11', productName: 'name',state: 3,deliverAddress: 'address', orderNum: '1112'},
    {date: '11', productName: 'name',state: 4,deliverAddress: 'address', orderNum: '1112'},
])
const createNew = function() {
    router.push('/newShipment')
}
const toDetail = function() {
    router.push('/shipmentDetails')
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
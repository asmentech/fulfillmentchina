<template>
    <div class="container">
        <div class="top">
            <div style="font-size: 36px;font-weight: 600">Inventory</div>
            <el-button icon="CirclePlus" color="#FFBE34" @click="createNew">Add new items</el-button>
        </div>
        <el-divider style="margin-top: 15px"></el-divider>
        <div class="bottom">
            <el-col :span="7">
                <div class="bottom-table">
                    <div class="title">
                        <div style="font-size: 20px;font-weight: 700">Top Selling Stock</div>
                        <div style="font-size: 10px;line-height: 32px">See All</div>
                    </div>
                    <div class="type">
                        <div>Name</div>
                        <div>Sold</div>
                        <div>In Stock</div>
                    </div>
                    <div class="number" v-for="(item,index) in sellingList" :key="index">
                        <div>{{item.name}}</div>
                        <div>{{item.sold}}</div>
                        <div>{{item.inStock}}</div>
                    </div>
                </div>
                <div style="margin-top: 64px" class="bottom-table">
                    <div class="title">
                        <div style="font-size: 20px;font-weight: 700">low Quantity Stock</div>
                        <div style="font-size: 10px;line-height: 32px">See All</div>
                    </div>
                    <div class="type">
                        <div>Name</div>
                        <div>Sold</div>
                        <div>In Stock</div>
                    </div>
                    <div class="number" v-for="(item,index) in sellingList" :key="index">
                        <div>{{item.name}}</div>
                        <div>{{item.sold}}</div>
                        <div>{{item.inStock}}</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="16" class="bottom-table" style="padding: 10px">
                <el-table>

                </el-table>
            </el-col>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const sellingList = ref([
    {name: '#1',sold: 2000,inStock: 1500},
    {name: '#2',sold: 2614,inStock: 2121},
    {name: '#3',sold: 5161,inStock: 4188},
    {name: '#4',sold: 5113,inStock: 5151},
])
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
    font-weight: 500;
    align-items: center;
}
.bottom {
    display: flex;
    margin-top: 48px;
    .bottom-table {
        border-radius: 15px;
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
        padding: 19px 26px;
        font-weight: 500;
        background: #F2F2F2;
        .title {
            display: flex;
            justify-content: space-between;
        }
        .type {
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
        }
        .number {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 400;
            line-height: 30px;
        }
    }
}
</style>
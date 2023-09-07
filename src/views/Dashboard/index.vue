<template>
    <div class="container">
        <div class="top">
            <div>
                <div>Hello Mary,</div>
                <div style="font-size: 36px;font-weight: 600">Good Morning</div>
            </div>
            <div>
                <el-date-picker placeholder="Select" style="margin-right: 42px"></el-date-picker>
                <el-button icon="FolderAdd" class="plain-btn" style="margin-right: 42px;">Create New Product</el-button>
                <el-button icon="Ship" color="#FFBE34" @click="createNew">Create New Shipment</el-button>
            </div>
        </div>
        <div class="middle">
            <el-col :span="7" class="middle-item">
                <div><el-image src="../src/assets/invLarge.svg"></el-image></div>
                <div style="color: #D3D3D3;font-size: 13px;margin-top: 20px">Inventory</div>
                <div style="display: flex;justify-content: space-between">
                    <span style="font-size: 32px;font-weight: 700">19,324</span>
                    <el-image src="../src/assets/rightArrow.svg"></el-image>
                </div>
            </el-col>
            <el-col :span="7" class="middle-item">
                <div><el-image src="../src/assets/prodLarge.svg"></el-image></div>
                <div style="color: #D3D3D3;font-size: 13px;margin-top: 20px">Product</div>
                <div style="display: flex;justify-content: space-between">
                    <span style="font-size: 32px;font-weight: 700">29</span>
                    <el-image src="../src/assets/rightArrow.svg"></el-image>
                </div>
            </el-col>
            <el-col :span="7" class="middle-item">
                <div><el-image src="../src/assets/ShipLarge.svg"></el-image></div>
                <div style="color: #D3D3D3;font-size: 13px;margin-top: 20px">Shipping Orders</div>
                <div style="display: flex;justify-content: space-between">
                    <span style="font-size: 32px;font-weight: 700">29</span>
                    <el-image src="../src/assets/rightArrow.svg"></el-image>
                </div>
            </el-col>
        </div>
        <div class="bottom">
            <el-col :span="16" class="bottom-table">
                <el-table>

                </el-table>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="7" class="bottom-table" style="padding: 20px 27px">
                <div style="font-size: 24px;font-weight: 600">Live Tracking</div>
                <el-divider style="margin-top: 16px"></el-divider>
                <div style="display: flex;justify-content: space-between">
                    <div>
                        <div style="font-size: 12px">Tracking Number</div>
                        <div style="font-size: 12px;color: #A3A3A3">#123456789</div>
                    </div>
                    <div>
                        <el-button class="plain-btn" style="margin-right: 15px" icon="ArrowLeft" circle></el-button>
                        <el-button class="plain-btn" icon="ArrowRight" circle></el-button>
                    </div>
                </div>
                <div>

                </div>
            </el-col>
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
.top {
    display: flex;
    justify-content: space-between;
    color: #091242;
    font-family: Inter;
    font-weight: 500;
    align-items: center;
}
.middle {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    .middle-item {
        border-radius: 15px;
        background: #F2F2F2;
        padding: 28px 36px;
    }
}
.bottom {
    display: flex;
    margin-top: 48px;
    .bottom-table {
        border-radius: 15px;
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
        padding: 10px;
    }
}
</style>
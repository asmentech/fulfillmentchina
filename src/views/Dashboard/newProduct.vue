<template>
    <div class="container">
        <!-- <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button> -->
        <div class="top">Add New Product</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <el-scrollbar height="560px">
                <div style="font-size: 24px;font-weight: 600;display: flex;justify-content: space-between">
                    <div>Product</div>
                    <el-button icon="Memo" color="#FFBE34" style="margin-top: 5px">Save this Info</el-button>
                </div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                    <el-form label-position="top" style="margin-top: 20px">
                        <div style="font-size: 16px;font-weight: 500;margin: 10px 0">Basic information</div>
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="Product Name">
                                        <el-input placeholder="enter here"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>
                                <el-col :span="7">
                                    <el-form-item label="Product Pictures"></el-form-item>
                                </el-col>
                            </el-row>
                            <el-col :span="7">
                                <el-form-item label="Package Information">
                                    <el-input><template #append>units/carton</template></el-input>
                                </el-form-item>
                            </el-col>
                            <el-form-item label="Estimated dimensions of each Carton" style="margin-top: 20px">
                                <div style="display: flex">
                                    <el-input style="width: 20%" placeholder="width"><template #append>CM</template></el-input>
                                    <span style="margin: 0 15px">×</span>
                                    <el-input style="width: 20%" placeholder="length"><template #append>CM</template></el-input>
                                    <span style="margin: 0 15px">×</span>
                                    <el-input style="width: 20%" placeholder="height"><template #append>CM</template></el-input>
                                </div>
                            </el-form-item>
                            <el-form-item label="Estimated Weight of each Carton (kg)">
                                <el-input style="width: 260px"><template #append>kg</template></el-input>
                            </el-form-item>
                            <el-form-item label="HS Code">
                                <el-input style="width: 260px"></el-input>
                            </el-form-item>
                    </el-form>
                    <div class="form-bottom">
                        <el-button color="#FFBE34" icon="Check">submit</el-button>
                        <el-button color="#F2F2F2" icon="Close">Cancel</el-button>
                    </div>
                </el-scrollbar>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="7" class="left-form">
                <div style="font-size: 24px;font-weight: 600">Summary</div>
                <el-divider></el-divider>
                <div class="sum-item">
                    <div style="font-size: 16px">Products1</div>
                    <div style="margin-top: 20px">Product Information</div>
                    <div>Warehouse</div>
                    <div>To Address</div>
                    <div>Shipping Method</div>
                    <div class="total">
                        <div>Amount</div>
                        <div>$-</div>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('sender');
const isSave = ref(false);
const timeUnit = ref(0);
const goBack = () => {
    router.go(-1);
}
</script>

<style lang="less" scoped>
.top {
    display: flex;
    justify-content: space-between;
    color: #091242;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    align-items: center;
    margin-top: 20px;
}
.bottom {
    display: flex;
    margin-top: 30px;
    .left-form {
        border-radius: 15px;
        background: var(--white-100, #FFF);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
        padding: 15px 30px;
        .form-bottom {
            display: flex;
            justify-content: flex-end;
            margin-top: 24px;
        };
        .sum-item {
            border-radius: 15px;
            background: #F2F2F2;
            padding: 15px 20px;
            font-weight: 500;
            font-size: 12px;
            .total {
                border-radius: 8px;
                background: #D2D2D2;
                padding: 8px 14px;
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                font-weight: 600;
                margin-top: 20px
            }
        }
    };
}
:deep(.el-tabs__item) {
    height: 55px;
}
.ware-title {
    font-size: 10px;
    font-weight: 600;
}
.ware-num {
    font-size: 14px;
    font-weight: 400;
}
</style>
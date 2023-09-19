<template>
    <div class="container">
        <!-- <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button> -->
        <div class="top">Create New Storage</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <el-scrollbar height="560px">
                <div style="font-size: 24px;font-weight: 600">Storage Item</div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                    <el-form label-position="top" style="margin-top: 20px">
                        <div style="font-size: 16px;font-weight: 500;margin: 10px 0">Product</div>
                        <el-row style="margin-top: 24px">
                            <el-col :span="9">
                                <el-form-item>
                                    <el-select style="width: 362px" placeholder="select a product"></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="9">
                                <el-form-item>
                                    <el-button color="#F2F2F2" style="width: 362px" icon="Plus">Add a new product</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div style="font-size: 16px;font-weight: 500;margin: 10px 0">Product Infomation</div>
                        <el-row>
                            <el-col :span="9">
                                <el-form-item label="Num">
                                    <el-input><template #append>cartons</template></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="5">
                                <el-form-item label="Estimated total volume">
                                    <div class="est-total">
                                        500 <span style="color: #3A3A3A">CBM</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="Estimated total weight">
                                    <div class="est-total">
                                        500 <span style="color: #3A3A3A">kg</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div style="font-size: 16px;font-weight: 500;margin: 10px 0">Warehousing Options</div>
                            <el-row>
                                <el-col :span="9">
                                    <el-form-item label="Warehouse">
                                        <el-input placeholder="enter here"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>
                                <el-col :span="9">
                                    <el-form-item label="Estimated storage time">
                                        <div style="display: flex">
                                            <el-select placeholder="select here"></el-select>
                                            <el-select style="width: 96px;margin-left: 16px"></el-select>
                                        </div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                    </el-form>
                    <div class="form-bottom" style="margin-top: 20px">
                        <el-checkbox v-model="isSave" label="Save this contact info"></el-checkbox>
                        <div>
                            <el-button link type="danger" icon="Delete">clear form</el-button>
                            <el-button color="#F2F2F2" style="width: 90px;font-weight: 500">Next</el-button>
                        </div>
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
        padding: 15px 25px;
        .form-bottom {
            display: flex;
            justify-content: space-between;
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
.est-total {
    border-radius: 4px;
    border: 1px;
    background: #FFBE34;
    padding: 2px 16px;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
}
</style>
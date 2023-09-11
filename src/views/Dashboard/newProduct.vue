<template>
    <div class="container">
        <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button>
        <div class="top">Add New Product</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <el-scrollbar height="560px">
                <div style="font-size: 24px;font-weight: 600">Product</div>
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
                                    <el-form-item label="Product Category">
                                        <el-select placeholder="select here"></el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="Note">
                                        <div>
                                            <div style="display: flex">
                                                <el-input placeholder="total weight"><template #append>kg</template></el-input>
                                                <el-input placeholder="total weight" style="margin-left: 30px"><template #append>CBM</template></el-input>
                                            </div>
                                            <el-input placeholder="total pieces" style="margin-top: 32px"></el-input>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>
                                <el-col :span="7">
                                    <el-form-item label="Product Pictures">
                                        
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        <div style="font-size: 16px;font-weight: 500;margin: 24px 0">Warehousing Options</div>
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="Warehouse">
                                        <el-select placeholder="select a warehouse" style="width: 375px"></el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>
                                <el-col :span="9">
                                    <el-form-item label="Warehousing Time">
                                        <div style="display: flex">
                                            <el-input-number :min="1" style="width: 175px"></el-input-number>
                                            <el-select v-model="timeUnit" style="width: 100px;margin-left: 8px" placeholder="select">
                                                <el-option :key="0" :value="0" label="day(s)"></el-option>
                                                <el-option :key="1" :value="1" label="month(s)"></el-option>
                                                <el-option :key="2" :value="2" label="year(s)"></el-option>
                                            </el-select>
                                        </div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        <div style="font-size: 16px;font-weight: 500;margin: 24px 0">Shipping Options</div>
                            <el-form-item label="Destination">
                                <div style="display: flex">
                                    <el-select style="width: 75px" placeholder=""></el-select>
                                    <el-select style="width: 75px;margin-left: 16px" placeholder=""></el-select>
                                    <el-select style="width: 180px;margin-left: 16px" placeholder="select"></el-select>
                                </div>
                            </el-form-item>
                    </el-form>
                    <div class="form-bottom">
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
        padding: 20px 40px;
        .form-bottom {
            display: flex;
            justify-content: space-between;
            margin-top: 24px;
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
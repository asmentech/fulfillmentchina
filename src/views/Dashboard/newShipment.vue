<template>
    <div class="container">
        <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button>
        <div class="top">Create New Shipment</div>
        <div class="bottom">
            <el-col :span="16" class="left-form" v-if="step == 1">
                <el-scrollbar height="560px">
                <div style="font-size: 24px;font-weight: 600">Shipment Item</div>
                <el-divider></el-divider>
                <el-form label-position="top">
                    <div style="font-size: 16px;font-weight: 500;margin-top: 10px">Sender</div>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item>
                                    <el-select style="width: 362px" placeholder="select a sender"></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item>
                                    <el-button color="#F2F2F2" style="width: 362px" icon="Plus">Add a new sender</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    <el-divider></el-divider>
                    <!-- <div style="font-size: 16px;font-weight: 500">Add a new sender</div>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="Name">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="FBA Address">
                                    <el-select style="width: 362px"></el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="Phone Number">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Email">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="City">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Address">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row> -->
                    <div style="font-size: 16px;font-weight: 500">Receiver</div>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="select FBA warehouse">
                                    <el-select style="width: 362px" placeholder="select FBA warehouse"></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Warehouse Number">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="Postal Code">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Country">
                                    <el-select></el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-divider></el-divider>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="Product">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Estimated total weight">
                                    <div class="est-total">
                                        500 <span style="color: #3A3A3A">kg</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 24px">
                            <el-col :span="10">
                                <el-form-item label="Product Infomation">
                                    <el-input style="width: 240px"><template #append>cartons</template></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4"></el-col>
                            <el-col :span="10">
                                <el-form-item label="Estimated total weight">
                                    <div class="est-total">
                                        500 <span style="color: #3A3A3A">CBM</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                </el-form>
                <div class="form-bottom">
                    <el-checkbox v-model="isSave" label="Save this contact info"></el-checkbox>
                    <div>
                        <el-button link type="danger" icon="Delete">clear form</el-button>
                        <el-button color="#F2F2F2" style="width: 90px;font-weight: 500" @click="toStep2">Next</el-button>
                    </div>
                </div>
                </el-scrollbar>
            </el-col>
            <el-col :span="16" class="left-form" v-if="step == 2">
                <div style="font-size: 24px;font-weight: 600">Select A service</div>
                <el-divider></el-divider>
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
const step = ref(1);
const goBack = () => {
    router.go(-1);
}
const toStep2 = () => {
    step.value = 2
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
            justify-content: space-between
        }
    };
}
:deep(.el-tabs__item) {
    height: 55px;
}
.est-total {
    border-radius: 4px;
    border: 1px;
    background: #FFBE34;
    padding: 0px 16px;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
}
</style>
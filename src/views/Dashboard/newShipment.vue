<template>
    <div class="container">
        <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button>
        <div class="top">Create New Shipment</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <el-scrollbar height="560px">
                <div style="font-size: 24px;font-weight: 600">Shipment Item</div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                <el-form label-position="top" style="margin-top: 20px">
                    <div style="font-size: 16px;font-weight: 500;margin-top: 10px">Saved Sender</div>
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
                    <div style="font-size: 16px;font-weight: 500;margin-top: 24px">Add a new sender</div>
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
                                <el-form-item label="Company Name">
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
            justify-content: space-between
        }
    };
}
:deep(.el-tabs__item) {
    height: 55px;
}
</style>
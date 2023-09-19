<template>
    <div class="container">
        <!-- <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button> -->
        <div class="top">Create New FC Order</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <div style="font-size: 24px;font-weight: 600">FC Item</div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                <el-tabs v-model="activeTab" stretch>
                    <el-tab-pane label="Sender Info." name="sender">
                        <el-form label-position="top" style="margin-top: 20px">
                        <div style="font-size: 16px;font-weight: 500;margin-top: 10px">Select a Warehouse</div>
                        <div style="display: flex;justify-content: space-between;margin-top: 24px">
                            <el-form-item>
                                <el-select placeholder="Select a warehouse"></el-select>
                            </el-form-item>
                            <el-image></el-image>
                            <div>
                                <div class="ware-title">Warehouse Name:</div>
                                <div class="ware-num">{{22222}}</div>
                                <div class="ware-title" style="margin-top: 30px">Warehouse Area Specification:</div>
                                <div class="ware-num">{{3333}}</div>
                                <div class="ware-title" style="margin-top: 30px">Warehouse Address:</div>
                                <div class="ware-num">{{4444}}</div>
                            </div>
                        </div>
                        <div style="font-size: 16px;font-weight: 500;margin-top: 24px">Selection of warehousing services</div>
                        <div style="margin-top: 30px">
                            <el-form-item label="Basic Services">
                                
                            </el-form-item>
                        </div>
                        </el-form>
                        <div class="form-bottom">
                            <el-checkbox v-model="isSave" label="Save this contact info"></el-checkbox>
                            <div>
                                <el-button link type="danger" icon="Delete">clear form</el-button>
                                <el-button color="#F2F2F2" style="width: 90px;font-weight: 500">Next</el-button>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
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
.ware-title {
    font-size: 10px;
    font-weight: 600;
}
.ware-num {
    font-size: 14px;
    font-weight: 400;
}
</style>
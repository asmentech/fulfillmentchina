<template>
    <div class="container">
        <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button>
        <div class="top">Client Details</div>
        <div class="bottom">
            <el-col :span="7" class="left-form">
                <div style="font-size: 24px;font-weight: 600">
                    {Name}
                </div>
                <el-divider></el-divider>
            </el-col>
            <el-col :span="7" class="left-form">
                <div style="font-size: 24px;font-weight: 600">Storage Information</div>
                <el-divider></el-divider>
            </el-col>
            <el-col :span="7" class="left-form">
                <div style="font-size: 24px;font-weight: 600">Shipment Information</div>
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
    justify-content: space-between;
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
:deep(.el-descriptions__body .el-descriptions__table .el-descriptions__cell) {
    font-weight: 600;
    font-size: 12px;
}
.ware-title {
    font-size: 10px;
    font-weight: 600;
}
.ware-num {
    font-size: 14px;
    font-weight: 400;
}
.des-label {
    font-size: 12px;
    font-weight: 600;
}
</style>
<template>
    <div class="container">
        <!-- <el-button color="#FFBE34" icon="Back" size="small" style="width: 80px" @click="goBack">Back</el-button> -->
        <div class="top">Storage Details</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <div style="font-size: 24px;font-weight: 600">{storageNum
                    }</div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                    <div style="font-size: 16px;font-weight: 500;margin: 10px 0">Basic information</div>
                        <div class="des-title">Product Name</div>
                        <el-input style="width: 360px"></el-input>
                        <div class="des-title">Product Information</div>
                        <div style="display: flex">
                            <el-input style="width: 160px"><template #append>cartons</template></el-input>
                            <el-input style="width: 240px;margin-left: 32px"><template #append>units/carton</template></el-input>
                        </div>
                        <div style="display: flex">
                            <div>
                                <div class="des-title">Estimated Weight of each Carton (kg)</div>
                                <el-input style="width: 160px"></el-input>
                            </div>
                            <div style="margin-left: 40px">
                                <div class="des-title">Estimated total weight</div>
                                <el-input style="width: 160px"></el-input>
                            </div>
                        </div>
                        <div style="display: flex">
                            <div>
                                <div class="des-title">Estimated dimensions of each Carton</div>
                                <div style="display: flex">
                                    <el-input style="width: 100px"></el-input>
                                    <el-input style="width: 100px"></el-input>
                                    <el-input style="width: 100px"></el-input>
                                </div>
                            </div>
                            <div style="margin-left: 40px">
                                <div class="des-title">Estimated total volume</div>
                                <el-input style="width: 160px"></el-input>
                            </div>
                        </div>
                        <div style="display: flex">
                            <div>
                                <div class="des-title">Warehouse</div>
                                <el-input style="width: 160px"></el-input>
                            </div>
                            <div style="margin-left: 180px">
                                <div class="des-title">Storage Time</div>
                                <el-input style="width: 160px"></el-input>
                            </div>
                        </div>
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
.des-title {
    font-size: 12px;
    font-weight: 400;
    margin: 22px 0 22px 0
}
</style>
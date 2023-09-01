<template>
    <div class="container">
        <div class="top">Create New Shipment</div>
        <div class="bottom">
            <el-col :span="16" class="left-form">
                <div style="font-size: 24px;font-weight: 600">Shipment Item</div>
                <el-divider style="margin-bottom: 0px"></el-divider>
                <el-tabs v-model="activeTab" stretch>
                    <el-tab-pane label="Sender Info." name="sender">
                        <div style="font-size: 16px;font-weight: 500;margin-top: 10px">Saved Sender</div>
                        <div style="font-size: 16px;font-weight: 500;margin-top: 10px">Add a new sender</div>
                        <el-form label-position="top" style="margin-top: 20px">
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="Name">
                                        <el-input></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4"></el-col>
                                <el-col :span="10">
                                    <el-form-item label="FBA Address">
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
                    </el-tab-pane>
                    <el-tab-pane label="Customer Info." name="customer"></el-tab-pane>
                    <el-tab-pane label="Item" name="item"></el-tab-pane>
                    <el-tab-pane label="Shipment Details" name="detail"></el-tab-pane>
                    <el-tab-pane label="Shipping Method" name="method"></el-tab-pane>
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

const activeTab = ref('sender');
const isSave = ref(false);
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
}
.bottom {
    display: flex;
    margin-top: 48px;
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
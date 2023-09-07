<template>
    <div class="container">
        <div class="top">
            <span>Profile</span>    
        </div>
        <div class="middle">
            <div style="width: 55%">
                <el-avatar :size="80"></el-avatar>
                <el-form label-position="top" style="margin-top: 20px">
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="First Name">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="10">
                            <el-form-item label="Last Name">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="E-mail">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="10">
                            <el-form-item label="Mobile Number">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="Gender">
                                <el-radio-group v-model="gender">
                                    <el-radio :label="0">Male</el-radio>
                                    <el-radio :label="1">Female</el-radio>
                                    <el-radio :label="2">Non-binary</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="10">
                            <el-form-item label="ID">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const gender = ref(0);
</script>

<style lang="less" scoped>
.container {
    margin-left: -3%;
}
.top {
    display: flex;
    justify-content: space-between;
    color: #091242;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    align-items: center;
}
.middle {
    display: flex;
    justify-content: center;
    padding-right: 7%;
    margin-top: 60px;
}
</style>
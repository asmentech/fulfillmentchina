<template>
    <div class="container">
        <div class="top">
            <span>Support</span>    
        </div>
        <div class="middle">
            
            <span style="font-size: 36px;font-weight: 500">Need Some Help?</span>
        </div>
        <div class="middle">
            <el-input style="width: 66%" placeholder="search here" prefix-icon="Search"></el-input>
        </div>
        <div class="middle" style="justify-content: space-evenly;margin-top: 60px">
            <div class="sup-container">
                <div class="sup-item">
                    <el-image src="../src/assets/supPerson.svg"></el-image>
                </div>
                <div class="sup-item" style="margin-top: 50px">Get Started</div>
            </div>
            <div class="sup-container">
                <div class="sup-item">
                    <el-image src="../src/assets/supApi.svg"></el-image>
                </div>
                <div class="sup-item" style="margin-top: 50px;font-size: 24px;line-height: 48px">Integration & API</div>
            </div>
            <div class="sup-container">
                <div class="sup-item">
                    <el-image src="../src/assets/supFaq.svg"></el-image>
                </div>
                <div class="sup-item" style="margin-top: 50px">FaQ</div>
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
    padding: 0 10% 0 10%;
    margin-top: 36px
}
.sup-container {
    border-radius: 15px;
    background: #F2F2F2;
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    padding: 60px;
    font-size: 32px;
    font-weight: 500;
    width: 16%;
    cursor: pointer;
    .sup-item {
        display: flex;
        justify-content: center;
    }
}
</style>
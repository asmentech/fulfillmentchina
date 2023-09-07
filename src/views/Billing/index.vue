<template>
    <div class="container">
        <div class="top">
            <span>Billing</span>
            <!-- <el-button icon="CirclePlus" style="width: 192px" color="#FFBE34">Add new products</el-button> -->
        </div>
        <el-divider style="margin-top: 15px"></el-divider>
        <div class="bottom">
            <el-table></el-table>
        </div>
    </div>
</template>

<script setup>

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
    justify-content: space-between;
}
.bottom {
    margin-top: 25px;
    border-radius: 15px;
    background: var(--white-100, #FFF);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    padding: 10px;
}
</style>
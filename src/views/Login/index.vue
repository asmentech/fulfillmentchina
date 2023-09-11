<template>
    <div class="container">
        <div class="background"></div>
        <div class="login-container" v-if="step == 0">
            <div class="sign-in">
                Already have an account?<a style="color: #1565D8;cursor: pointer;margin-left: 10px">Sign In</a>
            </div>
            <div class="sign-box">
                <div style="width: 75%">
                    <div style="font-size: 30px;font-weight: 700">Join Us!</div>
                    <div style="font-weight: 400;color: #8692A6">To begin this journey, tell us what type of account you’d be opening.</div>
                    <div class="join-item" @click="stepChange(1)">
                        <el-image src="../src/assets/joinIndi.svg"></el-image>
                        <div style="margin-left: 26px">
                            <div style="font-weight: 500">Individual</div>
                            <div style="color: #8692A6;font-size: 14px">Personal account to manage all you activities.</div>
                        </div>
                        <el-button style="margin-left: 10px" icon="Right" link color="#8692A6"></el-button>
                    </div>
                    <div class="join-item">
                        <el-image src="../src/assets/joinBus.svg"></el-image>
                        <div style="margin-left: 26px">
                            <div style="font-weight: 500">Business</div>
                            <div style="color: #8692A6;font-size: 14px">Own or belong to a company, this is for you.</div>
                        </div>
                        <el-button style="margin-left: 10px" icon="Right" link color="#8692A6"></el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-container" v-if="step == 1">
            <div class="step1">
                <el-button icon="ArrowLeft" link @click="stepChange(0)">Back</el-button>
                <div>
                    <span style="color: #BDBDBD;margin-right: 10px">STEP(1/3)</span>Personal Info.
                </div>
            </div>
            <div class="sign-box" style="margin-top: 60px">
                <div style="width: 75%">
                    <div style="font-size: 30px;font-weight: 700">Register Individual Account!</div>
                    <div style="font-weight: 400;color: #8692A6">For the purpose of industry regulation, your details are required.</div>
                    <el-form label-position="top" style="margin-top: 40px">
                        <el-form-item label="Your Fullname*">
                            <el-input style="height: 48px;" placeholder="Enter your name"></el-input>
                        </el-form-item>
                        <el-form-item label="Email Address*">
                            <el-input style="height: 48px;" placeholder="Enter email"></el-input>
                        </el-form-item>
                        <el-form-item label="Create Password*">
                            <el-input v-model="signForm.password" show-password style="height: 48px;" placeholder="Enter password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div>
                        <el-checkbox v-model="isAgree">
                            <span>I agree to </span>
                            <span @click="toTC" style="text-decoration-line: underline">terms & conditions</span>
                        </el-checkbox>
                    </div>
                    <el-button color="#1565D8" @click="stepChange(2)" style="width: 100%;height: 48px;margin-top: 24px">Register Account</el-button>
                </div>
            </div>
        </div>
        <div class="login-container" v-if="step == 2">
            <div class="step1">
                <el-button icon="ArrowLeft" link @click="stepChange(1)">Back</el-button>
                <div>
                    <span style="color: #BDBDBD;margin-right: 10px">STEP(2/3)</span>Residency Info.
                </div>
            </div>
            <div class="sign-box" style="margin-top: 60px">
                <div style="width: 75%">
                    <div style="font-size: 30px;font-weight: 700">Complete Your Profile!</div>
                    <div style="font-weight: 400;color: #8692A6">For the purpose of industry regulation, your details are required.</div>
                    <el-form label-position="top" style="margin-top: 40px">
                        <el-form-item label="Phone Number">
                            <el-input style="height: 48px;" placeholder="Enter phone number"></el-input>
                        </el-form-item>
                        <el-form-item label="Your Address">
                            <el-input style="height: 48px;" placeholder="Enter address"></el-input>
                        </el-form-item>
                        <el-form-item label="Country / residence">
                            <el-select style="width: 100%" size="large"></el-select>
                        </el-form-item>
                    </el-form>
                    <el-button color="#1565D8" @click="stepChange(3)" style="width: 100%;height: 48px;margin-top: 24px">Save & Continue</el-button>
                </div>
            </div>
        </div>
        <div class="login-container" v-if="step == 3">
            <div class="step1">
                <el-button icon="ArrowLeft" link @click="stepChange(2)">Back</el-button>
                <div>
                    <span style="color: #BDBDBD;margin-right: 10px">STEP(3/3)</span>Bank Veification.
                </div>
            </div>
            <div class="sign-box" style="margin-top: 60px">
                <div style="width: 75%">
                    <div style="font-size: 30px;font-weight: 700">Complete Your Profile!</div>
                    <div style="font-weight: 400;color: #8692A6">For the purpose of industry regulation, your details are required.</div>
                    <el-form label-position="top" style="margin-top: 40px">
                        <el-form-item label="Bank verification number (BVN)">
                            <el-input style="height: 48px;" placeholder="Enter BVN"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button color="#1565D8" style="width: 100%;height: 48px;margin-top: 24px">Save & Continue</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const step = ref(0);
const isAgree = ref(false)

const signForm = reactive({
    password: ''
})

const login = () => {
    router.push('/dashboard')
}
const stepChange = function(s = 0) {
    step.value = s;
}
const toTC = () => {
    console.log('tc')
}
</script>

<style lang="less" scoped>
.container {
    max-height: 100vh;
    display: flex;
    justify-content: center;
    .background {
        background-image: url("/src/assets/loginBg.png");
        background-size: 100% 100%;
        width: 66%;
        height: 100vh;
    };
    .login-container {
        width: 33%;
        padding: 70px 81px;
        .sign-in {
            font-size: 18px;
            font-weight: 400;
            color: #8692A6;
            display: flex;
            justify-content: flex-end;
        };
        .sign-box {
            margin-top: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            .join-item {
                border-radius: 6px;
                border: 1px solid #1565D8;
                background: #F5F9FF;
                box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
                padding: 26px;
                margin-top: 35px;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
    }
}
.step1 {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
}
</style>
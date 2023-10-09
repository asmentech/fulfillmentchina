<template>
    <el-container class="ly-container">
        <el-header class="ly-header">
            <div style="display: flex;align-items: center">
                <el-image src=" /logo.png" style="width: 30px"></el-image>
                <span class="title-text">Fulfillment China</span>
            </div>
            <el-dropdown>
                <el-button type="primary" link>
                    Menu<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="scrollTo('ourFeatures')">Features</el-dropdown-item>
                        <el-dropdown-item @click="scrollTo('caseStudies')">Case Studies</el-dropdown-item>
                        <el-dropdown-item @click="scrollTo('ourFee')">Our Fees</el-dropdown-item>
                        <el-dropdown-item @click="scrollTo('getAquote')">Get a quote</el-dropdown-item>
                        <el-dropdown-item @click="scrollTo('qna')">FAQ's</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-header>
        <div class="ly-content">
            <div class="first-page">
                <div class="save-you">SAVING YOU FROM SUPPLY CHAIN LOSSES</div>
                <div class="save-you-sub">FULLFILLMENT-CHINA optimizes carton flow from supplier
                        to Amazon FBA. Affordable China storage, direct Amazon
                        shipping, and efficient software streamline your operations.
                        Experience hassle-free eCommerce fulfillment with our tech-driven
                        solutions. Partner with us to secure your supply chain and fuel business
                        growth!
                </div>
                <!-- <el-button color="#FFBE34" class="login-btn" style="margin: 45px 0">GET STARTED</el-button> -->
            </div>
            <div class="features" id="ourFeatures">Our Features</div>
            <div class="feature-item">
                <el-image src="/mobile/feature1.png" style="margin-left: 30%;margin-top: 10px"></el-image>
                <div class="feature-one">Intelligent China Warehousing</div>
                <!-- <div class="feature-two">#Extremely low cost, automated#</div> -->
                <div class="feature-three">We utilize robots and automation systems for 24/7 unmanned 
                    operations, greatly reducing labor costs. Real-time inventory 
                    monitoring and optimized storage workflows ensure accurate and 
                    efficient order processing.
                </div>
            </div>
            <div class="feature-item">
                <el-image src="/mobile/feature2.png" style="margin-left: 30%;margin-top: 10px"></el-image>
                <div class="feature-one">Intelligent Logistics & Tracking</div>
                <!-- <div class="feature-two">#Data-driven, precise predictions#</div> -->
                <div class="feature-three">Through deep learning and predictive analytics algorithms, 
                    our intelligent logistics systems provide accurate delivery 
                    time estimates, dynamically optimize routes, and enable 
                    proactive exception handling.
                </div>
            </div>
            <div class="feature-item">
                <el-image src="/mobile/feature3.png" style="margin-left: 32%;margin-top: 10px"></el-image>
                <div class="feature-one">Integrated Smart Supply Chain</div>
                <!-- <div class="feature-two">#Zero gap connections, end-to-end visibility#</div> -->
                <div class="feature-three">Via our proprietary blockchain and Iot technologies, we 
                    achieve zero-gap connectivity from factory to doorstep for 
                    rapid product flow. Customers can conduct virtual testing 
                    and optimal design through digital twin simulations.
                </div>
            </div>
            <div class="features">How We Help Your Business Grow</div>
            <div class="features-sub" style="padding: 0 10%">Fulfillment China takes care of it all. 
                From preparing your product for sale to delivering it to your 
                customers' doorsteps. Warehousing, packing, and shipping – we've got you covered!
            </div>
            <el-image src=" /howBiz.png" style="margin-top: 36px;padding: 0 10%"></el-image>
            <div class="we-box">
                <div class="we-text1">WE MANAGE</div>
                <!-- <div class="we-text15" style="margin-top: 22px;">Fulfillment China guides your carton's journey to Amazon.</div> -->
                <div class="we-text2" style="margin-top: 30px;">Our software automatically updates your shipping plans with tracking IDs, 
                    while our team handles tariffs and duties payable at the port. Additionally, 
                    we provide you with 7501 entry summary extracts.
                </div>
            </div>
            <div class="we-box" style="background-image: url('/wepic2.png');color: #091242">
                <div class="we-text1">WE SIMPLIFY</div>
                <!-- <div class="we-text15" style="margin-top: 22px;">Our software serves as your essential supply chain management tool.</div> -->
                <div class="we-text2" style="margin-top: 30px">Gain comprehensive stock level visibility, restock easily 
                    in our warehouse, generate shipping plans with a simple click, access immediate 
                    quotes from three carriers, and save valuable time.
                </div>
            </div>
            <div style="padding: 0 10%">
                <div class="bestrate-title">Fulfillent China Price Promise</div>
                <el-image src="/mobile/bestrate.png"></el-image>
                <div class="bestrate-text">
                    <div>At Fulfillment China, our cutting-edge algorithm compares shipping costs 
                        for Amazon sellers using over 1,168 data points per order.</div>
                </div>
            </div>
            <div style="padding: 0 10%">
                <div class="bestrate-title">Tailored for Small and Mid-Sized Businesses</div>
                <div class="bestrate-text" style="display: flex;align-items: center">
                    <el-col :span="6">
                        <el-image src="/mobile/malepic.png"></el-image>
                    </el-col>
                    <div style="margin-left: 20px">Limited budget? Short on time to manage your own fulfillment team? Fulfillment China is the answer.</div>
                </div>
                <div style="display: flex;justify-content: space-evenly;margin: 20px 0">
                    <el-col :span="7">
                        <el-image src="/mobile/moqSVG.png"></el-image>
                        <div>NO MOQ Required</div>
                    </el-col>
                    <el-col :span="7">
                        <el-image src="/mobile/cubeSVG.svg"></el-image>
                        <div>60-day Free Warehousing</div>
                    </el-col>
                    <el-col :span="7">
                        <el-image src="/mobile/coinSVG.svg"></el-image>
                        <div>40% Savings On Shipping Cost</div>
                    </el-col>
                </div>
            </div>
            <div class="middle-page" id="caseStudies">
                <div style="display: flex;align-item: center;justify-content: center">
                    <div>Welcome to Your New Supply Chain Partner</div>
                    <el-image src="/svgs/midlogo.svg" style="width: 25%"></el-image>
                </div>
            </div>
            <div style="padding: 0 8%;display: flex;align-items: center">
                <el-col :span="8">
                    <el-image src="/mobile/store.png"></el-image>
                </el-col>
                <div style="margin-left: 20px">
                    <div class="bestrate-title" style="text-align: left">Store In China</div>
                    <div class="bestrate-text">
                        <div>Storing with Fulfillment China is cost-effective. You save on US storage costs, and we handle receiving for free.</div>
                    </div>
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Single Warehouse, Global Reach</div>
                <div class="features-sub" style="text-align: center">Maximize your Amazon reach with Fulfillment China. Access US 
                    and UK markets easily. Centralize goods for global distribution. Our software simplifies carton distribution with a click.
                </div>
                <el-image src="/mobile/single.png" style="margin-top: 20px"></el-image>
            </div>
            <div style="padding: 0 8%;display: flex;align-items: center">
                <el-col :span="8">
                    <el-image src="/mobile/savetime.png"></el-image>
                </el-col>
                <div style="margin-left: 20px">
                    <div class="bestrate-title" style="text-align: left">Save Time</div>
                    <div class="bestrate-text">
                        <div>Managing your supply chain can be time-consuming. We simplify this process for you.</div>
                    </div>
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Eliminate 3PL's</div>
                <div class="features-sub">
                    Fulfillment China cuts out the need for US 3PLs. We ship directly to Amazon, 
                    saving you fees and costs.
                </div>
                <el-image src="/mobile/3pls.png" style="margin-left: 6%;margin-top: 20px"></el-image>
            </div>
            <div style="padding: 0 8%;display: flex;align-items: center">
                <div style="margin-right: 20px">
                    <div class="bestrate-title" style="text-align: left">Maximize your savings</div>
                    <div class="bestrate-text">
                        <div>Our supply chain runs smoothly. We make goods in China and ship them to the US, where they're stored in a 3PL facility.</div>
                    </div>
                </div>
                <el-col :span="8">
                    <el-image src="/mobile/cash.png"></el-image>
                </el-col>
            </div>
            <div style="padding: 0 8%;display: flex;align-items: center">
                <div style="margin-right: 20px">
                    <div class="bestrate-title" style="text-align: left">Streamlined Dashboard Control</div>
                    <div class="bestrate-text">
                        <div>The Fulfillment China dashboard simplifies everything. At a glance, you see what goods are stored, cubic meters in our warehouse, 
                            incoming cartons, items in transit, and more.</div>
                    </div>
                </div>
                <el-col :span="8">
                    <el-image src="/mobile/computer.png"></el-image>
                </el-col>
            </div>
            <div class="guar-page" style="margin-top: 60px" id="ourFee">
                <div style="font-size: 12px;font-weight: 500">Our supply chain money saving</div>
                <div style="font-size: 28px;font-weight: 700">GUARANTEE</div>
            </div>
            <div style="padding: 0 10%">
                <div class="features">Fulfillment China saves you money</div>
                <div class="vs-title">
                    CASE STUDY #1 <span style="font-weight: 400">- Fulfillment China vs Full Container Load (FCL)</span>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">$14,972</el-col>
                    <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">31.9%</el-col>
                    <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">26%</el-col>
                    <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                </div>
            </div>
            <div style="padding: 0 10%;margin-top: 30px">
                <div class="vs-title">
                    CASE STUDY #2 <span style="font-weight: 400">- Fulfillment China vs Less Container Load (FCL)</span>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">$2,474</el-col>
                    <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">31.9%</el-col>
                    <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                </div>
                <div class="vs-item">
                    <el-col :span="6" class="vs-price">42.9%</el-col>
                    <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                </div>
            </div>
            <div style="padding: 0 5%">
                <div class="features">Simple pricing for everyone</div>
                <div style="display: flex;justify-content: space-evenly;text-align: center">
                    <el-col :span="7">
                        <div class="free-title">Receiving</div>
                        <div class="free-logo">FREE</div>
                        <div class="bestrate-text" style="font-size: 6px;">
                            We don't charge anything to receive your cartons
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="free-title">Access</div>
                        <div class="free-logo">FREE</div>
                        <div class="bestrate-text" style="font-size: 6px;">
                            Our software is designed to save you time, and give you full control like never before
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="free-title">Carton Prep</div>
                        <div class="free-logo">FREE</div>
                        <div class="bestrate-text" style="font-size: 6px;">
                            Per carton for picking, prepping and container loading
                        </div>
                    </el-col>
                </div>
            </div>
            <div style="padding: 0 10%">
                <div class="features">Test Drive Our Rates...</div>
            </div>
            <div style="padding: 0 10%">
                <div style="display: flex;align-items: center;background: #D9D9D9;padding: 2%;border-radius: 6px">
                    <span>Select your Market :</span>
                    <el-radio-group fill="#091242" v-model="chosenCountry" size="small" style="margin-left: 20px">
                        <el-radio-button label="US" />
                        <el-radio-button label="UK" />
                    </el-radio-group>
                </div>
                <el-form label-position="left" label-width="140" style="margin-top: 20px">
                    <el-form-item label="Carton length">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="Carton width">
                        <el-input></el-input>
                        <el-switch v-model="lengthUnit" 
                        style="--el-switch-on-color: #FFBE34; --el-switch-off-color: #FFBE34" 
                        active-text="in" inactive-text="cm"></el-switch>
                    </el-form-item>
                    <el-form-item label="Carton height">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="Carton weight">
                        <el-input></el-input>
                        <el-switch v-model="weightUnit" style="--el-switch-on-color: #FFBE34;
                         --el-switch-off-color: #FFBE34" active-text="lb" inactive-text="kg"></el-switch>
                    </el-form-item>
                    <el-form-item label="Number of cartons">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="FBA warehouse">
                        <el-select></el-select>
                    </el-form-item>
                </el-form>
                <el-button style="width: 100%;height: 40px;font-size: 20px" color="#091242">CACULATE</el-button>
            </div>
            <div style="padding: 0 10%">
                <div class="features">
                    Freight Forwarders vs Fulfillment China
                </div>
            </div>
            <div style="padding: 0 5%">
                <el-row class="compare-item">
                    <el-col :span="8"></el-col>
                    <el-col :span="8" style="font-weight: 900">3PL in USA</el-col>
                    <el-col :span="8" style="font-weight: 900">Fulfillment China</el-col>
                </el-row>
                <el-row class="compare-item" v-for="(item, index) in compareList" :key='index' :style="index%2 == 1 ? '':'background: #D9D9D9'">
                    <el-col style="text-align: left; color: black" :span="8">{{item.title}}</el-col>
                    <el-col :span="8" class="compare-text">
                        <embed src="/svgs/compareno.svg" type="image/svg+xml" />
                        <div style="color: black">{{item.bads}}</div>
                    </el-col>
                    <el-col :span="8" class="compare-text">
                        <embed src="/svgs/compareyes.svg" type="image/svg+xml" />
                        <div style="color: black">{{item.goods}}</div>
                    </el-col>
                </el-row>
            </div>
            <div style="padding: 0 12%" id="getAquote">
                <div style="font-size: 25px;">Get in touch with us</div>
                <div style="margin-top: 17px">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</div>
                <div style="display: flex;align-items: center;margin-top: 22.5px">
                    <el-icon style="font-size: 24px" color="#F6B426"><Message /></el-icon>
                    <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                        Email contact@logistics.com
                    </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 22.5px">
                    <el-icon style="font-size: 24px" color="#F6B426"><Phone /></el-icon>
                    <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                        Call Us (00) 112 365 489
                    </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 22.5px">
                    <el-icon style="font-size: 24px" color="#F6B426"><Clock /></el-icon>
                    <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                        Mon-Sat 9.00-18.00 (Sunday Closed)
                    </div>
                </div>
            </div>
            <div style="padding: 0 12%;margin-top: 20px">
                <div style="display: flex">
                    <el-input v-model="quoteForm.name" placeholder="Your name*"></el-input>
                    <el-input v-model="quoteForm.email" style="margin-left: 28px" placeholder="Email*"></el-input>
                </div>
                <div style="display: flex;margin-top: 32px">
                    <el-input v-model="quoteForm.phoneNumber" placeholder="Phone Number*"></el-input>
                    <el-input v-model="quoteForm.city" style="margin-left: 28px" placeholder="City*"></el-input>
                </div>
                <div style="margin-top: 32px">
                    <el-input v-model="quoteForm.message" type="textarea" :rows="3" placeholder="Your Message"></el-input>
                </div>
                <div style="margin-top: 32px">
                    <el-button style="color: #000;font-size: 16px;font-weight: 600;width: 197px;height: 36px" color="#FFBE34">Submit Message</el-button>
                </div>
            </div>
            <div style="padding: 0 8%;margin: 40px 0" id="qna">
                <el-collapse>
                    <el-collapse-item title="What is Fulfillment China?">
                        <div>
                            Fulfillment China is a total supply chain solution where we manage the 
                            storage of your goods in our Chinese warehouses, we prep your cartons, and 
                            we ship your goods directly into Amazon’s fulfilment centres. On top of this, 
                            you get access to our user-friendly software management platform to help you 
                            manage and oversee your entire E-comm supply chain with the click of a button.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Who need to use Fulfillment China?">
                        <div>
                            All sellers can use Fulfillment China. Whether you're shipping full containers
                            (FCL) or just doing less than container loads (LCL), our solution is perfect 
                            for any size seller. What's important for us is that Fulfillment China helps 
                            Amazon sellers of all sizes implement efficiencies into their supply chain 
                            processes to ensure they maximise profits and save money.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="My storage and shipping into Amazon?">
                        <div>
                            Yes. We store your goods in our secure warehouses in China and our 
                            product dashboard allows you to track how many units and cartons you have available 
                            to send directly into Amazon. When you're ready to send cartons into Amazon, simply 
                            pick your SKU's and carton quantities, create your Amazon shipping plans with the click 
                            of a button, and once you're happy with everything, we then generate an instant shipping 
                            quote for you. We take care of the rest as we pick, prep, and ship your cartons to Amazon. 
                            All this is done from within our system. There's no need to go to Seller Central to create 
                            your shipping plans, no need to attach and send us shipping labels, this is all automated by 
                            our supply chain system.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <el-footer height="600" class="ly-footer">
            <div>
                <embed src="/svgs/footerlogo.svg" type="">
                <span style="font-weight: 900;font-size: 32px"> Fulfillment China</span>
            </div>
            <div style="color: #BBBEC7">
                <div>We store & ship your goods directly</div>
                <div>to Amazon. Saving you money.</div>
            </div>
            <div style="display: flex;justify-content: space-evenly;margin: 20px 0">
                <facebooklogo></facebooklogo>
                <youtubelogo></youtubelogo>
                <linkedinlogo></linkedinlogo>
            </div>
            <div>
                <div style="font-weight: 500;font-size: 27px">Useful Links</div>
                <div><el-button link style="color: #BBBEC7" @click="scrollTo('ourFeatures')">Features</el-button></div>
                <div><el-button link style="color: #BBBEC7" @click="scrollTo('caseStudies')">Case Studies</el-button></div>
                <div><el-button link style="color: #BBBEC7" @click="scrollTo('ourFee')">Our Fees</el-button></div>
                <div><el-button link style="color: #BBBEC7" @click="scrollTo('getAquote')">Get a quote</el-button></div>
                <div><el-button link style="color: #BBBEC7">FAQ's</el-button></div>
            </div>
            <div>
                <div style="font-weight: 500;font-size: 27px">Help</div>
                <div><el-button link style="color: #BBBEC7">Privacy Policy</el-button></div>
                <div><el-button link style="color: #BBBEC7">Terms and Conditions</el-button></div>
            </div>
            <div>
                <div style="font-weight: 500;font-size: 27px">Contact Us</div>
                <div><el-button link style="color: #BBBEC7">Facebook</el-button></div>
                <div><el-button link style="color: #BBBEC7">Linked In</el-button></div>
                <div><el-button link style="color: #BBBEC7">YouTube</el-button></div>
            </div>
            <div class="copyright">Fulfillment China Copyright © 2022</div>
        </el-footer>
    </el-container>
</template>

<script setup>
import facebooklogo from './facebooklogo.vue'
import youtubelogo from './youtubelogo.vue'
import linkedinlogo from './linkedinlogo.vue'
import {ref, reactive} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const chosenCountry = ref('US');
const lengthUnit = ref(false);
const weightUnit = ref(false);
const quoteForm = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    message: ''
})
const compareList = [
    {title: 'Can goods be consolidated, stored & FBA prepped in China for efficiency?',bads: '',goods: 'Fulfillment China becomes your Chinese storage facility'},
    {title: 'Can shipping plans be created in Seller Central in under 5 seconds?',bads: '',goods: 'Do shipping plans in our software in under 5 seconds'},
    {title: 'Is it easy to get quotes?',bads: 'Emails and information is sent back & forth before you receive a quote',goods: 'Our quotes are instant when creating shipping plans'},
    {title: 'Does the quote compare every type of pricing rate to help the seller save money?',bads: 'You only get a KG rate or a CBM rate',goods: 'We compare all pricing rates to give you the best rate'},
    {title: 'Is payment required upfront?',bads: 'You have to pay for your whole shipment upfront draining you of cashflow',goods: 'The Fulfillment China model is based on smaller weekly shipments'},
    {title: `Are tracking ID's updated in Seller Central?`,bads: '',goods: 'Our software solution incorporates full automation into your supply chain'},
    {title: 'Are tariffs managed automatically?',bads: '',goods: 'We automate this process and even provide 7501 entry summary forms'},
    {title: 'Can risk be reduced?',bads: 'Your entire order is on the water which increases risk of stock outs',goods: 'Your entire order is never on the water with Fulfillment China reducing risk'},
    {title: 'Can 3PL costs be eliminated?',bads: 'Freight forwarders cannot eliminate expensive 3PL costs at all',goods: `Fulfillment China eliminates expensive 3PL's saving you $1,000's of dollars because we ship your goods direct to Amazon`},
    {title: 'Do you need to purchase bonds?',bads: '',goods: 'We take care of this for you'}
];
const scrollTo = function(menuId) {
    let ele = document.getElementById(menuId);
    ele.scrollIntoView({behavior: 'smooth'});
}
const toLogin = function() {
    // router.push('/login')
}
</script>

<style lang="less" scoped>
.ly-container {
  width: 100%;
  height: 100%;
  max-width: 768px;
  font-family: Inter;
  font-weight: 300;
  font-size: 13px;
  line-height: normal;
}
.ly-content {
    width: 100%;
    background: #FFF;
    .first-page {
        background-image: url(" /ffChina.png");
        background-size: 100% 100%;
        padding: 0 5% 30px 5%;
        .save-you {
            color: #ffbf34;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-weight: 900;
            padding-top: 60px;
        }
        .save-you-sub {
            color: #ffffff;
            text-align: center;
            font-family: Inter;
            padding-top: 10px;
            font-size: 13px;
        }
    }
    .features {
        color: #4D4D4D;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-weight: 600;
        margin: 40px 0 20px 0;
    }
    .feature-item {
        padding: 0 7%;
        .feature-one {
            color: #000;
            font-size: 18px;
            font-weight: 600;
            margin: 10px 0;
        }
        .feature-two {
            color: #000;
            font-size: 16px;
            font-weight: 500;
        }
        .feature-three {
            color: #000;
        }
    }
    .we-box {
        text-align: center;
        padding-top: 140px;
        padding-bottom: 25px;
        margin: 40px 5% 0 5%;
        background-image: url("/wepic1.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: #FFFFFF;
        .we-text1 {
            font-family: Inter;
            font-size: 16px;
            font-weight: 600;
        }
        .we-text2 {
            font-family: Inter;
            margin: 0 5%;
        }
    }
    .bestrate-title {
        color: #1C1F35;
        font-family: Inter;
        font-size: 18px;
        margin: 24px 0;
        font-weight: 600;
        text-align: center;
    }
    .bestrate-text {
        color: #1C1F35;
        font-family: Inter;
    }
    .middle-page {
        background-image: url(" /midpic.png");
        background-size: 100% 100%;
        padding: 10% 15%;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
    }
    .guar-page {
        background-image: url(" /guarantee.png");
        text-align: center;
        background-size: 100% 100%;
        padding: 8%;
        color: #FFF;
        font-size: 15px;
        font-weight: 400;
    }
}
.ly-footer {
    width: 100%;
    background: #091242;
    color: #FFF;
    padding: 64px 10% 0 10%;
}
.nav-item {
    display: flex;
    align-items: center;
}
.compare-item {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    font-size: 12px;
    .compare-text {
        font-weight: 400;
        font-family: Inter;
    }
}
.ly-header {
    background: #091242;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-text {
        color: rgba(244, 244, 244, 0.96);
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
    }
    .nav-btn {
        color: #F4F4F4;
        font-family: Inter;
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
    }
}
    .login-btn {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
    }
    .vs-title {
        color: #091242;
        font-family: Inter;
        font-size: 13px;
        font-weight: 700;
    }
    .vs-price {
        color: #091242;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        background: #FFBE34;
        text-align: center;
        padding: 5px;
        margin-right: 15px;
        width: 100%;
    }
    .free-title {
        color: #091242;
        font-family: Inter;
        font-size: 9px;
        font-weight: 700;
    }
    .free-logo {
        color: #FFBE34;
        font-family: Inter;
        font-size: 24px;
        font-weight: 900;
    }
    .carton-calc {
        color: #091242;
        text-align: center;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
    }

.copyright {
    text-align: center;
    color: #BBBEC7;
    font-family: Inter;
    padding: 21px 0 21px 0;
}
.vs-item {
    display: flex;
    align-items: center;
    margin: 10px 0
}
</style>
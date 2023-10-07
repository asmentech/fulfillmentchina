<template>
    <el-container class="ly-container">
        <el-header class="ly-header">
            <div style="display: flex;align-item: center">
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
                <el-button color="#FFBE34" class="login-btn" style="margin: 45px 0">GET STARTED</el-button>
            </div>
            <div class="features" id="ourFeatures">Our Features</div>
            <div class="feature-item">
                <el-image src="/feature1.png"></el-image>
                <div class="feature-one">Intelligent China Warehousing</div>
                <div class="feature-two">#Extremely low cost, automated#</div>
                <div class="feature-three">We utilize robots and automation systems for 24/7 unmanned 
                    operations, greatly reducing labor costs. Real-time inventory 
                    monitoring and optimized storage workflows ensure accurate and 
                    efficient order processing.
                </div>
            </div>
            <div class="feature-item">
                <el-image src="/feature2.png"></el-image>
                <div class="feature-one">Intelligent Logistics & Tracking</div>
                <div class="feature-two">#Data-driven, precise predictions#</div>
                <div class="feature-three">Through deep learning and predictive analytics algorithms, 
                    our intelligent logistics systems provide accurate delivery 
                    time estimates, dynamically optimize routes, and enable 
                    proactive exception handling.
                </div>
            </div>
            <div class="feature-item">
                <el-image src=" /feature3.png"></el-image>
                <div class="feature-one">Integrated Smart Supply Chain</div>
                <div class="feature-two">#Zero gap connections, end-to-end visibility#</div>
                <div class="feature-three">Via our proprietary blockchain and Iot technologies, we 
                    achieve zero-gap connectivity from factory to doorstep for 
                    rapid product flow. Customers can conduct virtual testing 
                    and optimal design through digital twin simulations.
                </div>
            </div>
            <div class="features">How We Help Your Business Grow</div>
            <div class="features-sub" style="padding: 0 8%">Fulfillment China takes care of it all. 
                From preparing your product for sale to delivering it to your 
                customers' doorsteps. Warehousing, packing, and shipping – we've got you covered!
            </div>
            <el-image src=" /howBiz.png" style="margin-top: 36px;padding: 0 8%"></el-image>
            <div class="we-box">
                <div class="we-text1">WE MANAGE</div>
                <div class="we-text15" style="margin-top: 22px;">Fulfillment China guides your carton's journey to Amazon.</div>
                <div class="we-text2" style="margin-top: 30px;">Our software automatically updates your shipping plans with tracking IDs, 
                    while our team handles tariffs and duties payable at the port. Additionally, 
                    we provide you with 7501 entry summary extracts.
                </div>
            </div>
            <div class="we-box" style="background-image: url('/wepic2.png');color: #091242">
                <div class="we-text1">WE SIMPLIFY</div>
                <div class="we-text15" style="margin-top: 22px;">Our software serves as your essential supply chain management tool.</div>
                <div class="we-text2" style="margin-top: 30px">Gain comprehensive stock level visibility, restock easily 
                    in our warehouse, generate shipping plans with a simple click, access immediate 
                    quotes from three carriers, and save valuable time.
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Fulfillent China Price Promise</div>
                <div class="bestrate-text">
                    <div>At Fulfillment China, we've revolutionized shipping cost comparisons 
                        for Amazon sellers with our groundbreaking algorithm.</div>
                    <div>All shipments from our warehouse are meticulously analyzed with over 1,168 data points per order, ensuring you get 
                        the best possible price and combination for every shipment.</div>
                    <div>With a single click, receive instant shipping quotes for your Amazon shipping plans, comparing every combination in seconds!</div>
                    <div style="font-weight: 900;margin: 20px 0 20px 0">
                        <div>We compare: Cubic meter (cbm) vs Kilogram rates</div>
                        <div>· Carrier speeds: Regular service, Matson CLX, and CLX+</div>
                        <div>· UPS/FedEx vs Trucking last-mile delivery rates</div>
                        <div>· Combination deliveries vs truck or UPS/FedEx only</div>
                    </div>
                    <div>Our shipping algorithm effortlessly handles complexities like different order quantities, carton sizes, 
                        weights, and serves over 185 different FBA warehouse locations.</div>
                    <div>Fulfillment China is equipped with the infrastructure to fulfill any combination you need, securing 
                        the best possible price, guaranteed!</div>
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Tailored for Small and Mid-Sized Businesses</div>
                <div class="bestrate-text">
                    <div>Limited budget? Short on time to manage your own fulfillment team? Look 
                        no further. Whether you're a thriving direct-to-consumer brand or a business 
                        in need of a crowdfunding fulfillment partner, Fulfillment China has the solution.
                    </div>
                    <div style="font-size: 20px;font-weight: 500;margin-top: 30px">We Handle It All !</div>
                    <div>From liaising with your suppliers to researching packaging, sourcing parts, 
                        and components, our team provides in-house-level service, ensuring your 
                        fulfillment needs are met seamlessly.
                    </div>
                </div>
                <div style="font-size: 10px;margin: 24px 0">
                    <div>
                        <el-image src="/svgs/moqSVG.svg"></el-image>
                        <div>NO MOQ Required</div>
                    </div>
                    <div>
                        <el-image src="/svgs/cubeSVG.svg"></el-image>
                        <div>60-day Free Warehousing</div>
                    </div>
                    <div>
                        <el-image src="/svgs/coinSVG.svg"></el-image>
                        <div>40% Savings On Shipping Cost</div>
                    </div>
                </div>
            </div>
            <div class="middle-page" id="caseStudies">
                <div>Welcome to Your New</div>
                <div>Supply Chain Partner</div>
                <div style="display: flex;align-item: center;justify-content: center;margin-top: 30px">
                    <el-image src="/svgs/midlogo.svg" style="width: 10%"></el-image>
                    <span class="middle-title"> Fulfillment China</span>
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Store In China</div>
                <div class="bestrate-text">
                    <div>Storing with Fulfillment China presents numerous benefits. Besides creating 
                        a central hub for streamlined product distribution across Amazon markets, 
                        you enjoy substantial cost savings in storage versus US 3PL fees.</div>
                    <div style="margin-top: 30px">By storing your cartons with Fulfillment China, you'll slash your US 
                        storage costs by around 40%. What's more, those US receiving fees? They 
                        disappear when you ship to us. We handle the reception for you, absolutely 
                        free.</div>
                    <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 24px">GET STARTED</el-button>
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Single Warehouse, Global Reach</div>
                <div class="features-sub" style="line-height: 30px">Take charge of your worldwide Amazon 
                    marketplace reach with unmatched precision and technology. Fulfillment China is your 
                    gateway to both the US and UK markets. Centralize all your goods, gaining unmatched control for effortless global carton 
                    distribution. Our advanced software management system empowers you, offering seamless 
                    control over UK or US carton distribution with just a click.
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Save Time</div>
                <div class="bestrate-text" style="line-height: 30px">
                    <div>Efficiently managing your supply chain can be time-consuming. A prime example 
                        is creating shipping plans for numerous Fulfillment China. When Amazon 
                        designates multiple FBA warehouses for each Fulfillment China in your plan, 
                        you're then tasked with downloading and organizing FBA labels, filling 
                        spreadsheets, and emailing your 3PL with attached labels and forms.</div>
                    <div style="margin-top: 30px;line-height: 30px" >This process demands time and energy. Fulfillment 
                        China is here to give you that time back. With a simple click, you can swiftly 
                        generate shipping plans for multiple SKUs, receive competitive shipping 
                        quotes, and transmit your FBA labels to our warehouse in under 3 seconds.</div>
                </div>
                <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 24px">GET STARTED</el-button>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Eliminate 3PL's</div>
                <div class="features-sub" style="line-height: 30px">Fulfillment China eradicates the 
                    necessity for US-based 3PLs, shipping your products directly into Amazon. What's 
                    more, bid farewell to 3PL receiving fees, SPD shipping 
                    charges from Amazon, costly monthly storage fees, and high carton preparation 
                    costs.
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Maximize your savings</div>
                <div class="bestrate-text">
                    <div>Our supply chain operates on autopilot, streamlining the process. 
                        Traditionally, we manufacture goods in China and engage a freight forwarder 
                        to ship the entire batch to the US, followed by storing them in a 3PL 
                        facility.</div>
                    <div style="margin-top: 30px">However, this approach demands substantial 
                        upfront investments to transport goods to the US and incurs extra SPD 
                        delivery expenses from the 3PL to Amazon. This traditional method often 
                        results in significant financial leakage within your supply chain.</div>
                    <div style="margin-top: 30px">
                        Enter Fulfillment China – the solution that keeps more money in your 
                        pocket. How? We employ regular DIRECT TO AMAZON shipments each week, 
                        reducing your initial cash outlay, bolstering your bank account, and 
                        eliminating additional SPD shipping costs.
                    </div>
                    <div style="margin-top: 30px">
                        With Fulfillment China, the necessity to bulk ship ALL your goods to the 
                        US in a single shipment becomes obsolete.
                    </div>
                </div>
                <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 24px">GET STARTED</el-button>
            </div>
            <div style="padding: 0 8%">
                <div class="bestrate-title">Streamlined Dashboard Control</div>
                <div class="bestrate-text">
                    <div>Managing your storage, creating shipping plans, sending FBA labels to your 
                        3PL for SPD shipping and stock control can be very complex.</div>
                    <div style="margin-top: 30px">The SKUdrop dashboard simplifies the way we manage 
                        the above processes. In one glance, you can instantly see what goods you’re 
                        storing, how many cubic meters you have at our warehouse, what’s cartons are 
                        incoming, what’s in transit and more.</div>
                </div>
                <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 24px">GET STARTED</el-button>
            </div>
            <div class="guar-page" style="margin-top: 60px" id="ourFee">
                <div style="font-size: 22px;font-weight: 500">Our supply chain money saving</div>
                <div style="font-size: 48px;font-weight: 800">GUARANTEE</div>
                <div>We're confident that Fulfillment China will significantly reduce your total supply chain costs. We wholeheartedly stand behind this assurance.</div>
                <div style="font-size: 18px;font-weight: 700;margin-top: 24px">We stand by that statement.</div>
                <div>By opting for Fulfillment China, you eliminate expenses 
                    like bonds, container drop-off fees at your supplier's factory, container delivery 
                    charges from port to 3PL, 3PL receiving, storage and prep fees, as well as Amazon 
                    SPD shipping costs. All our shipping quotes offer DOOR-TO-DOOR coverage, coupled 
                    with the most affordable storage solutions globally.
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Fulfillment China saves you money</div>
                <el-image src=" /casestudy1.png"></el-image>
                <div class="vs-title">
                    CASE STUDY #1 <span style="font-weight: 400">- Fulfillment China vs Full Container Load (FCL)</span>
                </div>
                <div class="vs-price">$14,972</div>
                <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                <div class="vs-price">31.9%</div>
                <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                <div class="vs-price">26%</div>
                <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                <el-button size="large" color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 20px">VIEW CASE STUDY</el-button>
            </div>
            <div style="padding: 0 8%;margin-top: 30px">
                <el-image src=" /casestudy2.png"></el-image>
                <div class="vs-title">
                    CASE STUDY #2 <span style="font-weight: 400">- Fulfillment China vs Less Container Load (FCL)</span>
                </div>
                <div class="vs-price">$2,474</div>
                <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                <div class="vs-price">31.9%</div>
                <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                <div class="vs-price">42.9%</div>
                <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                <el-button size="large" color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 20px">VIEW CASE STUDY</el-button>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Simple pricing for everyone</div>
                <div class="free-title">Receiving</div>
                <div class="free-logo">FREE</div>
                <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">We don't charge anything to receive your cartons</div>
                <el-divider></el-divider>
                <div class="free-title">Access</div>
                <div class="free-logo">FREE</div>
                <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">Our software is designed to save you time, and give you full control like never before</div>
                <el-divider></el-divider>
                <div class="free-title">Carton Prep</div>
                <div class="free-logo">FREE</div>
                <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">Per carton for picking, prepping and container loading</div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">Test Drive Our Rates...</div>
                <div class="features-sub">Remember, the Fulfillment China model works best with regular weekly shipments</div>
            </div>
            <div style="padding: 0 8%">
                <div style="display: flex;background: #D9D9D9;padding: 1%;border-radius: 6px">
                    <span style="font-weight: 500">Select your Market :</span>
                    <el-image src=" /usflag.png" style="height: 15px;width: 30px;margin: auto"></el-image>
                    <el-radio-group fill="#091242" v-model="chosenCountry" size="small">
                        <el-radio-button label="US" />
                        <el-radio-button label="UK" />
                    </el-radio-group>
                    <el-image src=" /ukflag.png" style="height: 15px;width: 30px;margin: auto"></el-image>
                </div>
                <div style="margin: 20px 0"> Enter your carton details below</div>
                <el-form label-position="right">
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
                    <el-form-item label="Select FBA warehouse">
                        <el-select></el-select>
                    </el-form-item>
                </el-form>
                <div>From China direct to Amazon US</div>
                <el-button style="width: 162px;height: 40px;font-size: 20px" color="#091242">CACULATE</el-button>
                <div style="background: #D9D9D9;border-radius: 6px;padding: 3%;margin-top: 30px">
                    Note: Shipping rates do not include tariffs, taxes or duties. We do not do DDP shipping
                </div>
            </div>
            <div style="padding: 0 8%">
                <div class="features">
                    Freight Forwarders vs Fulfillment China
                </div>
                <div class="features-sub">
                    Fulfillment China offers a superior supply chain solution compared to traditional freight forwarders. Our platform is designed 
                    by sellers, for sellers, so we understand your needs and have incorporated them into every aspect of our service.
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
  display: flex;
  place-items: center;
  max-width: 768px;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
}
.ly-content {
    width: 100%;
    background: #FFF;
    .first-page {
        background-image: url(" /ffChina.png");
        background-size: 100% 100%;
        padding: 0 8%;
        .save-you {
            color: #ffbf34;
            text-align: center;
            font-family: Inter;
            font-size: 24px;
            font-weight: 900;
            padding-top: 60px;
        }
        .save-you-sub {
            color: #ffffff;
            text-align: center;
            font-family: Inter;
            padding-top: 10px;
        }
    }
    .features {
        color: #4D4D4D;
        text-align: center;
        font-family: Inter;
        font-size: 32px;
        font-weight: 500;
        margin: 40px 0;
    }
    .feature-item {
        padding: 0 8%;
        .feature-one {
            color: #000;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
        }
        .feature-two {
            color: #000;
            font-family: Inter;
            font-size: 20px;
            font-style: italic;
        }
        .feature-three {
            color: #000;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            margin-top: 24px
        }
    }
    .we-box {
        text-align: center;
        padding-top: 200px;
        padding-bottom: 45px;
        margin: 25px 5% 0 5%;
        background-image: url("/wepic1.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: #FFFFFF;
        .we-text1 {
            font-family: Inter;
            font-size: 32px;
            font-weight: 500;
        }
        .we-text2 {
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            margin: 0 5%;
        }
        .we-text15 {
            font-family: Inter;
            font-size: 14px;
            font-weight: 900;
        }
    }
    .bestrate-title {
        color: #1C1F35;
        font-family: Inter;
        font-size: 36px;
        margin: 36px 0;
        font-weight: 500;
    }
    .bestrate-text {
        color: #1C1F35;
        font-family: Inter;
    }
    .middle-page {
        background-image: url(" /midpic.png");
        background-size: 100% 100%;
        padding: 10%;
        color: #FFF;
        font-family: Inter;
        font-size: 24px;
        font-weight: 600;
        .middle-title {
            color: #F4F4F4;
            font-family: Inter;
            font-size: 18px;
            font-weight: 700;
        }
    }
    .guar-page {
        background-image: url(" /guarantee.png");
        background-size: 100% 100%;
        padding: 10%;
        color: #FFF;
        font-size: 15px;
        font-weight: 400;
    }
}
.ly-footer {
    width: 100%;
    background: #091242;
    color: #FFF;
    padding: 64px 10% 0 8%;
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
        font-size: 24px;
        font-weight: 700;
    }
    .vs-price {
        color: #091242;
        font-family: Inter;
        font-size: 40px;
        font-weight: 500;
        background: #D9D9D9;
        border-radius: 12px;
        text-align: center;
    }
    .free-title {
        color: #091242;
        font-family: Inter;
        font-size: 24px;
        font-weight: 700;
    }
    .free-logo {
        color: #FFBE34;
        font-family: Inter;
        font-size: 60px;
        font-weight: 900;
    }
    .carton-calc {
        color: #091242;
        text-align: center;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 19.5px; /* 162.5% */
    }

.copyright {
    text-align: center;
    color: #BBBEC7;
    font-family: Inter;
    padding: 21px 0 21px 0;
}
</style>
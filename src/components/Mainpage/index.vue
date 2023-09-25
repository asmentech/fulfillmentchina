<template>
    <el-container class="ly-container">
        <el-header class="ly-header">
            <el-row style="height: 100%">
                <el-col :span="12" class="nav-item">
                    <el-image src=" /logo.png" style="margin-left: 96px"></el-image>
                    <span class="title-text" style="margin-left: 8px">Fulfillment China</span>
                </el-col> 
                <el-col :span="12" class="nav-item">
                    <el-button class="nav-btn" link @click="scrollTo('ourFeatures')">Features</el-button>
                    <el-button class="nav-btn" link @click="scrollTo('caseStudies')">Case Studies</el-button>
                    <el-button class="nav-btn" link @click="scrollTo('ourFee')">Our Fees</el-button>
                    <el-button class="nav-btn" link @click="scrollTo('getAquote')">Get a quote</el-button>
                    <el-button class="nav-btn" link @click="scrollTo('qna')">FAQ's</el-button>
                    <el-button color="#FFBE34" class="login-btn" style="width: 190px" @click="toLogin">SIGN UP</el-button>
                    <el-button color="#FFBE34" class="login-btn" style="width: 185px" @click="toLogin">LOG IN</el-button>
                </el-col>
            </el-row>
        </el-header>
        <div class="ly-content">
            <div class="main-content">
                <div class="first-page">
                    <div class="save-you">SAVING YOU FROM SUPPLY CHAIN LOSSES</div>
                    <div class="save-you-sub" style="margin: 0 17% 0 17%">FULLFILLMENT-CHINA optimizes carton flow from supplier
                        to Amazon FBA. Affordable China storage, direct Amazon
                        shipping, and efficient software streamline your operations.
                        Experience hassle-free eCommerce fulfillment with our tech-driven
                        solutions. Partner with us to secure your supply chain and fuel business
                        growth!
                    </div>
                    <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 208px">GET STARTED</el-button>
                </div>
                <el-row justify="center" id="ourFeatures">
                    <span class="features">Our Features</span>
                </el-row>
                <el-row justify="space-evenly">
                    <el-col :span="6" style="display: flex">
                        <div class="feature-item">
                            <el-image style="margin-left: 20%;height: 171px" src="/feature1.png"></el-image>
                            <div class="feature-one">Intelligent China Warehousing</div>
                            <div class="feature-two">#Extremely low cost, automated#</div>
                            <div class="feature-three">We utilize robots and automation systems for 24/7 unmanned 
                                operations, greatly reducing labor costs. Real-time inventory 
                                monitoring and optimized storage workflows ensure accurate and 
                                efficient order processing.
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6" style="display: flex">
                        <div class="feature-item">
                            <el-image style="margin-left: 20%;height: 145px" src="/feature2.png"></el-image>
                            <div class="feature-one">Intelligent Logistics & Tracking</div>
                            <div class="feature-two">#Data-driven, precise predictions#</div>
                            <div class="feature-three">Through deep learning and predictive analytics algorithms, 
                                our intelligent logistics systems provide accurate delivery 
                                time estimates, dynamically optimize routes, and enable 
                                proactive exception handling.
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6" style="display: flex">
                        <div class="feature-item">
                            <el-image style="margin-left: 20%;height: 171px" src=" /feature3.png"></el-image>
                            <div class="feature-one">Integrated Smart Supply Chain</div>
                            <div class="feature-two">#Zero gap connections, end-to-end visibility#</div>
                            <div class="feature-three">Via our proprietary blockchain and Iot technologies, we 
                                achieve zero-gap connectivity from factory to doorstep for 
                                rapid product flow. Customers can conduct virtual testing 
                                and optimal design through digital twin simulations.
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row justify="center">
                    <div class="features" style="padding-bottom: 40px">How We Help Your Business Grow</div>
                </el-row>
                <el-row justify="center">
                    <div class="features-sub">Fulfillment China takes care of it all. 
                        From preparing your product for sale to delivering it to your 
                        customers' doorsteps. Warehousing,
                    </div>
                </el-row>
                <el-row justify="center">
                    <div class="features-sub">
                        packing, and shipping – we've got you covered!
                    </div>
                </el-row>
                <el-row justify="center">
                    <el-image src=" /howBiz.png" style="padding-top: 82px"></el-image>
                </el-row>
                <el-row justify="space-evenly">
                    <el-col :span="7" class="we-box">
                        <div class="we-text1" style="color: #FFFFFF">
                            <el-image src=" /wepic1.png" class="we-pic"></el-image>
                            WE MANAGE
                        </div>
                        <div class="we-text15" style="margin: 22px 15% 0 15%;color: #FFFFFF">Fulfillment China guides your carton's journey to Amazon.</div>
                        <div class="we-text2" style="margin-top: 30px;color: #FFFFFF">Our software automatically updates your shipping plans with tracking IDs, 
                            while our team handles tariffs and duties payable at the port. Additionally, 
                            we provide you with 7501 entry summary extracts.
                        </div>
                    </el-col>
                    <el-col :span="7" class="we-box" style="background: #FFBE34;">
                        <el-image src=" /wepic2.png" class="we-pic" style="left: 25%"></el-image>
                        <div class="we-text1">WE SIMPLIFY</div>
                        <div class="we-text15" style="margin: 22px 15% 0 15%;">Our software serves as your essential supply chain management tool.</div>
                        <div class="we-text2" style="margin-top: 30px">Gain comprehensive stock level visibility, restock easily 
                            in our warehouse, generate shipping plans with a simple click, access immediate 
                            quotes from three carriers, and save valuable time.
                        </div>
                    </el-col>
                </el-row>
                <el-row style="padding-top: 120px">
                    <el-col :span="3"></el-col>
                    <el-col :span="9">
                        <el-image src=" /bestrate.png" style="margin-left: 25px"></el-image>
                    </el-col>
                    <el-col :span="9" style="padding: 90px 0 0 40px">
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
                    </el-col>
                </el-row>
                <el-row style="padding-top: 200px">
                    <el-col :span="3"></el-col>
                    <el-col :span="9">
                        <div style="background: rgb(7,20,56);border-radius: 500px;width: 75%;height: 75%;transform: translateX(0)">
                            <el-image src=" /maleimg.png" style="border-radius: 500px;position: relative;bottom: 30%">
                            </el-image>
                        </div>
                    </el-col>
                    <el-col :span="9" style="padding: 0 0 0 40px">
                        <div class="bestrate-title" style="line-height: 40px">Tailored for Small and </div>
                        <div class="bestrate-title">Mid-Sized Businesses</div>
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
                        <el-row justify="space-between" class="moq-list" style="margin-top: 53px">
                            <el-col :span="8" style="display: flex;">
                                <el-image src="/src/svgs/moqSVG.svg" style="height: 58px"></el-image>
                                <div style="margin: 10px 0 0 8px">NO MOQ Required</div>
                            </el-col>
                            <el-col :span="8" style="display: flex;">
                                <el-image src="/src/svgs/cubeSVG.svg" style="height: 72px"></el-image>
                                <div style="margin: 10px 0 0 2px">60-day Free Warehousing</div>
                            </el-col>
                            <el-col :span="8" style="display: flex;">
                                <el-image src="/src/svgs/coinSVG.svg" style="height: 75px"></el-image>
                                <div style="margin: 10px 0 0 2px">40% Savings On Shipping Cost</div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <div class="middle-page" id="caseStudies">
                    <el-col :span="2"></el-col>
                    <el-col :span="9">
                        <div>Welcome to Your New</div>
                        <div>Supply Chain Partner</div>
                    </el-col>
                    <el-col :span="12">
                        <el-image src="/src/svgs/midlogo.svg"></el-image>
                        <span class="middle-title"> Fulfillment China</span>
                    </el-col>
                </div>
                <el-row style="padding-top: 200px">
                    <el-col :span="2"></el-col>
                    <el-col :span="9">
                        <el-image src=" /storage.png"></el-image>
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="8" style="padding-top: 80px">
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
                    </el-col>
                </el-row>
                <div>
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 40px">Single Warehouse, Global Reach</div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub" style="line-height: 30px">Take charge of your worldwide Amazon 
                            marketplace reach with unmatched precision and technology. Fulfillment China is your 
                            gateway to both
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub" style="line-height: 30px">the US and UK markets. Centralize all your goods, gaining unmatched control for effortless global carton 
                            distribution. Our advanced software management system
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub" style="line-height: 30px">empowers you, offering seamless 
                            control over UK or US carton distribution with just a click.
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <el-image src=" /singlewarehouse.png" style="padding-top: 142px"></el-image>
                    </el-row>
                </div>
                <el-row style="margin-top: 180px;padding-bottom: 100px">
                    <el-col :span="4"></el-col>
                    <el-col :span="8" style="padding-top: 80px">
                        <div class="bestrate-title">Save Time</div>
                        <div class="bestrate-text">
                            <div>Efficiently managing your supply chain can be time-consuming. A prime example 
                                is creating shipping plans for numerous Fulfillment China. When Amazon 
                                designates multiple FBA warehouses for each Fulfillment China in your plan, 
                                you're then tasked with downloading and organizing FBA labels, filling 
                                spreadsheets, and emailing your 3PL with attached labels and forms.</div>
                            <div style="margin-top: 30px">This process demands time and energy. Fulfillment 
                                China is here to give you that time back. With a simple click, you can swiftly 
                                generate shipping plans for multiple SKUs, receive competitive shipping 
                                quotes, and transmit your FBA labels to our warehouse in under 3 seconds.</div>
                        </div>
                        <el-button color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 24px">GET STARTED</el-button>
                    </el-col>
                    <el-col :span="8" style="padding-top: 80px">
                        <el-image src=" /savetime.png"></el-image>
                    </el-col>
                </el-row>
                <div>
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 40px">Eliminate 3PL's</div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub" style="line-height: 30px">Fulfillment China eradicates the 
                            necessity for US-based 3PLs, shipping your products directly into Amazon. What's 
                            more, bid farewell to 3PL
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub" style="line-height: 30px">receiving fees, SPD shipping 
                            charges from Amazon, costly monthly storage fees, and high carton preparation 
                            costs.
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <el-image src=" /3pls.png" style="padding-top: 142px"></el-image>
                    </el-row>
                </div>
                <el-row style="margin-top: 140px">
                    <el-col :span="2"></el-col>
                    <el-col :span="10" style="padding-top: 80px;margin-left: 30px">
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
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="8" style="padding-top: 150px">
                        <el-image src=" /cash.png"></el-image>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 140px">
                    <el-col :span="2"></el-col>
                    <el-col :span="8" style="padding-top: 40px;margin-left: 30px">
                        <el-image src=" /computer.png"></el-image>
                    </el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="10" style="padding-top: 80px">
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
                    </el-col>
                </el-row>
                <div class="guar-page" style="margin-top: 110px" id="ourFee">
                    <div style="font-size: 45px;font-weight: 500;line-height: 55px">Our supply chain money saving</div>
                    <div style="font-size: 110px;font-weight: 800;line-height: 132px">GUARANTEE</div>
                    <div>We're confident that Fulfillment China will significantly reduce your total supply chain costs. We wholeheartedly stand behind this assurance.</div>
                    <div style="font-size: 16px;font-weight: 500;line-height: 55px">We stand by that statement.</div>
                    <div style="margin: 0 20% 0 20%">By opting for Fulfillment China, you eliminate expenses 
                        like bonds, container drop-off fees at your supplier's factory, container delivery 
                        charges from port to 3PL, 3PL receiving, storage and prep fees, as well as Amazon 
                        SPD shipping costs. All our shipping quotes offer DOOR-TO-DOOR coverage, coupled 
                        with the most affordable storage solutions globally.
                    </div>
                </div>
                <div>
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 100px">Fulfillment China saves you money</div>
                    </el-row>
                    <el-row justify="center">
                        <el-col :span="3">
                            <el-image src=" /casestudy1.png"></el-image>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="12">
                            <div class="vs-title">
                                CASE STUDY #1 <span style="font-weight: 400">- Fulfillment China vs Full Container Load (FCL)</span>
                            </div>
                            <el-row justify="space-between">
                                <el-col :span="6">
                                    <div class="vs-price">$14,972</div>
                                    <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="vs-price">31.9%</div>
                                    <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="vs-price">26%</div>
                                    <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="2">
                            <el-button size="large" color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 40%">VIEW CASE STUDY</el-button>
                        </el-col>
                    </el-row>
                    <el-divider style="width: 75%;margin-left: 12.5%"></el-divider>
                    <el-row justify="center">
                        <el-col :span="3">
                            <el-image src=" /casestudy2.png"></el-image>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="12">
                            <div class="vs-title">
                                CASE STUDY #2 <span style="font-weight: 400">- Fulfillment China vs Less Container Load (FCL)</span>
                            </div>
                            <el-row justify="space-between">
                                <el-col :span="6">
                                    <div class="vs-price">$2,474</div>
                                    <div class="bestrate-text">Saved in hard supply chain costs by using Fulfillment China</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="vs-price">31.9%</div>
                                    <div class="bestrate-text">Reduction in storage fees by storing at Fulfillment China</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="vs-price">42.9%</div>
                                    <div class="bestrate-text">Reduction in prep fees by using Fulfillment China</div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                        <el-col :span="2">
                            <el-button size="large" color="#FFBE34" class="login-btn" style="width: 220px;margin-top: 40%">VIEW CASE STUDY</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 100px">Simple pricing for everyone</div>
                    </el-row>
                    <el-row justify="center">
                        <el-col :span="4" style="text-align: center">
                            <div class="free-title">Receiving</div>
                            <div class="free-logo">FREE</div>
                            <el-divider></el-divider>
                            <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">We don't charge anything to receive your cartons</div>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="4" style="text-align: center">
                            <div class="free-title">Access</div>
                            <div class="free-logo">FREE</div>
                            <el-divider></el-divider>
                            <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">Our software is designed to save you time, and give you full control like never before</div>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="4" style="text-align: center">
                            <div class="free-title">Carton Prep</div>
                            <div class="free-logo">FREE</div>
                            <el-divider></el-divider>
                            <div class="bestrate-text" style="font-size: 24px;font-weight: 500;line-height: 32.5px">Per carton for picking, prepping and container loading</div>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 15px">Test Drive Our Rates...</div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub">Remember, the Fulfillment China model works best with regular weekly shipments
                        </div>
                    </el-row>
                </div>
                <div style="margin: 60px 0% 0 20%">
                    <div style="display: flex;background: #D9D9D9;width: 400px;padding: 8px 0px 8px 14px;border-radius: 6px">
                        <span style="font-weight: 500">Select your Market :</span>
                        <el-image src=" /usflag.png" style="height: 22.5px;width: 40px;margin: auto"></el-image>
                        <el-radio-group fill="#091242" v-model="chosenCountry" size="small">
                            <el-radio-button label="US" />
                            <el-radio-button label="UK" />
                        </el-radio-group>
                        <el-image src=" /ukflag.png" style="height: 22.5px;width: 40px;margin: auto"></el-image>
                    </div>
                    <div style="padding: 8px 0px 8px 14px;font-weight: 500;margin-top: 19px"> Enter your carton details below</div>
                    <div class="carton-calc" style="display: flex;padding: 8px 0 8px 14px;">
                        <div style="margin-left: 68px">Carton length</div>
                        <div style="margin-left: 95px">Carton width</div>
                        <div style="margin-left: 95px">Carton height</div>
                        <div style="margin-left: 78px">Carton weight</div>
                        <div style="margin-left: 70px">Number of cartons</div>
                        <div style="margin-left: 40px">Select FBA warehouse</div>
                        <div style="margin-left: 35px">From China direct to Amazon US</div>
                    </div>
                    <div style="display: flex;padding: 8px 0 8px 14px;font-weight: 500">
                        <span style="margin-top: 18px">FC1</span>
                        <el-input style="width: 108px;height: 56px;margin-left: 25px"></el-input>
                        <span style="margin-top: 18px;margin-left: 25px">X</span>
                        <el-input style="width: 108px;height: 56px;margin-left: 25px"></el-input>
                        <span style="margin-top: 18px;margin-left: 25px">X</span>
                        <el-input style="width: 108px;height: 56px;margin-left: 25px"></el-input>
                        <el-input style="width: 108px;height: 56px;margin-left: 50px"></el-input>
                        <el-input style="width: 108px;height: 56px;margin-left: 50px"></el-input>
                        <el-select size="large" style="width: 108px;height: 56px;margin-left: 50px;"></el-select>
                        <el-button style="width: 162px;height: 56px;margin-left: 50px;font-size: 20px" color="#091242">CACULATE</el-button>
                    </div>
                    <div style="display: flex;padding: 8px 0 8px 14px;font-weight: 500">
                        <el-switch v-model="lengthUnit" style="--el-switch-on-color: #FFBE34; --el-switch-off-color: #FFBE34;margin-left: 225px" active-text="in" inactive-text="cm"></el-switch>
                        <el-switch v-model="weightUnit" style="--el-switch-on-color: #FFBE34; --el-switch-off-color: #FFBE34;margin-left: 240px" active-text="lb" inactive-text="kg"></el-switch>
                    </div>
                    <div style="display: flex;background: #D9D9D9;width: 550px;padding: 8px 0px 8px 14px;border-radius: 6px;margin-left: 42.5%">
                        <span style="font-size: 12px;line-height: 24px">Note: Shipping rates do not include tariffs, taxes or duties. </span>
                        <span style="font-size: 14px;font-weight: 700;line-height: 24px">We do not do DDP shipping</span>
                    </div>
                </div>
                <div style="margin-top: 100px">
                    <el-row justify="center">
                        <div class="features" style="padding-bottom: 15px">
                            Freight Forwarders vs Fulfillment China
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub">
                            Fulfillment China offers a superior supply chain solution compared to traditional freight forwarders. Our platform is designed 
                        </div>
                    </el-row>
                    <el-row justify="center">
                        <div class="features-sub">
                            by sellers, for sellers, so we understand your needs and have incorporated them into every aspect of our service.
                        </div>
                    </el-row>
                </div>
                <div style="margin: 0 20% 0 20%">
                    <el-row class="compare-item">
                        <el-col :span="8"></el-col>
                        <el-col :span="8" style="font-weight: 900;font-size: 32px;font-family: Inter;">3PL in USA</el-col>
                        <el-col :span="8" style="font-weight: 900;font-size: 32px;font-family: Inter;">Fulfillment China</el-col>
                    </el-row>
                    <el-row class="compare-item" v-for="(item, index) in compareList" :key='index' :style="index%2 == 1 ? '':'background: #D9D9D9'">
                        <el-col style="text-align: left" :span="8">{{item.title}}</el-col>
                        <el-col :span="8" class="compare-text">
                            <embed src="/src/svgs/compareno.svg" type="image/svg+xml" />
                            <div>{{item.bads}}</div>
                        </el-col>
                        <el-col :span="8" class="compare-text">
                            <embed src="/src/svgs/compareyes.svg" type="image/svg+xml" />
                            <div>{{item.goods}}</div>
                        </el-col>
                    </el-row>
                </div>
                <el-row style="margin-top: 140px;padding-bottom: 180px" id="getAquote">
                    <el-col :span="5"></el-col>
                    <el-col :span="5">
                        <div style="font-size: 35px;font-weight: 600;">Get in touch with us</div>
                        <div style="font-weight: 500;font-size: 16px;margin-top: 17px">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</div>
                        <div style="display: flex;align-items: center;margin-top: 42.5px">
                            <el-icon style="font-size: 24px" color="#F6B426"><Message /></el-icon>
                            <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                                <div>Email</div>
                                <div>contact@logistics.com</div>
                            </div>
                        </div>
                        <div style="display: flex;align-items: center;margin-top: 42.5px">
                            <el-icon style="font-size: 24px" color="#F6B426"><Phone /></el-icon>
                            <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                                <div>Call Us</div>
                                <div>(00) 112 365 489</div>
                            </div>
                        </div>
                        <div style="display: flex;align-items: center;margin-top: 42.5px">
                            <el-icon style="font-size: 24px" color="#F6B426"><Clock /></el-icon>
                            <div style="font-size: 14px;font-weight: 500;margin-left: 16px">
                                <div>Mon - Sat 9.00 - 18.00 </div>
                                <div>Sunday Closed</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" style="margin-left: 76px">
                        <div style="display: flex">
                            <el-input v-model="quoteForm.name" style="height: 50px" placeholder="Your name*"></el-input>
                            <el-input v-model="quoteForm.email" style="height: 50px;margin-left: 28px" placeholder="Email*"></el-input>
                        </div>
                        <div style="display: flex;margin-top: 32px">
                            <el-input v-model="quoteForm.phoneNumber" style="height: 50px" placeholder="Phone Number*"></el-input>
                            <el-input v-model="quoteForm.city" style="height: 50px;margin-left: 28px" placeholder="City*"></el-input>
                        </div>
                        <div style="margin-top: 32px">
                            <el-input v-model="quoteForm.message" type="textarea" :rows="5" placeholder="Your Message"></el-input>
                        </div>
                        <div style="margin-top: 32px">
                            <el-button style="color: #000;font-size: 16px;font-weight: 600;width: 197px;height: 50px" color="#FFBE34">Submit Message</el-button>
                        </div>
                    </el-col>
                </el-row>
                <div style="margin: 0 25% 0 25%;margin-bottom: 120px" id="qna">
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
                        <el-collapse-item title="What sort of Amazon sellers can use Fulfillment China?">
                            <div>
                                All sellers can use Fulfillment China. Whether you're shipping full containers
                                 (FCL) or just doing less than container loads (LCL), our solution is perfect 
                                 for any size seller. What's important for us is that Fulfillment China helps 
                                 Amazon sellers of all sizes implement efficiencies into their supply chain 
                                 processes to ensure they maximise profits and save money.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="So Fulfillment China takes care of my storage and shipping into Amazon, is that correct?">
                            <div>
                                Yes. That's correct. We store your goods in our secure warehouses in China and our 
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
        </div>
        <el-footer height="600" class="ly-footer">
            <el-row class="footer-content" justify="center">
                <el-col :span="2"></el-col>
                <el-col :span="6">
                    <div>
                        <embed src="/src/svgs/footerlogo.svg" type="">
                        <span style="font-weight: 900;font-size: 32px"> Fulfillment China</span>
                    </div>
                    <div style="margin-left: 40px;color: #BBBEC7">
                        <div>We store & ship your goods directly</div>
                        <div>to Amazon. Saving you money.</div>
                    </div>
                    <div style="padding: 40px">
                        <facebooklogo></facebooklogo>
                        <youtubelogo style="margin-left: 12px"></youtubelogo>
                        <linkedinlogo style="margin-left: 12px"></linkedinlogo>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div style="font-weight: 500;font-size: 27px;margin-bottom: 20px">Useful Links</div>
                    <div><el-button link style="color: #BBBEC7" @click="scrollTo('ourFeatures')">Features</el-button></div>
                    <div><el-button link style="color: #BBBEC7" @click="scrollTo('caseStudies')">Case Studies</el-button></div>
                    <div><el-button link style="color: #BBBEC7" @click="scrollTo('ourFee')">Our Fees</el-button></div>
                    <div><el-button link style="color: #BBBEC7" @click="scrollTo('getAquote')">Get a quote</el-button></div>
                    <div><el-button link style="color: #BBBEC7">FAQ's</el-button></div>
                </el-col>
                <el-col :span="4">
                    <div style="font-weight: 500;font-size: 27px;margin-bottom: 20px">Help</div>
                    <div><el-button link style="color: #BBBEC7">Privacy Policy</el-button></div>
                    <div><el-button link style="color: #BBBEC7">Terms and Conditions</el-button></div>
                </el-col>
                <el-col :span="4">
                    <div style="font-weight: 500;font-size: 27px;margin-bottom: 20px">Contact Us</div>
                    <div><el-button link style="color: #BBBEC7">Facebook</el-button></div>
                    <div><el-button link style="color: #BBBEC7">Linked In</el-button></div>
                    <div><el-button link style="color: #BBBEC7">YouTube</el-button></div>
                </el-col>
            </el-row>
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
 :deep(.el-select .el-input__wrapper)  {
    height: 56px;
 }
.ly-container {
  width: 100%;
  height: 100%;
}
.ly-footer {
    background: #091242;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px; /* 125.926% */
    padding: 134px 0 0 0;
}
.main-content {
    align-items: center;
    .first-page {
        background-image: url(" /ffChina.png");
        background-size: 100% 100%;
        min-height: 770px;
        text-align: center;
        .save-you {
            color: #ffbf34;
            text-align: center;
            font-family: Inter;
            font-size: 50px;
            font-weight: 900;
            padding-top: 120px;
        }
        .save-you-sub {
            color: #ffffff;
            text-align: center;
            font-family: Inter;
            font-size: 20px;
            font-weight: 400;
            padding-top: 10px;
        }
    }
    .middle-page {
        background-image: url(" /midpic.png");
        background-size: 100% 100%;
        min-height: 504px;
        display: flex;
        align-items: center;
        color: #FFF;
        font-family: Inter;
        font-size: 48px;
        font-weight: 600;
        line-height: 60px; /* 125% */
        .middle-title {
            color: #F4F4F4;
            font-family: Inter;
            font-size: 91.917px;
            font-weight: 700;
            line-height: 40.852px; /* 44.444% */
        }
    }
    .guar-page {
        background-image: url(" /guarantee.png");
        background-size: 100% 100%;
        min-height: 504px;
        padding-top: 60px;
        text-align: center;
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 30px; /* 200% */
    }
    .features {
        color: #4D4D4D;
        text-align: center;
        font-family: Inter;
        font-size: 48px;
        font-weight: 500;
        padding-top: 125px;
        padding-bottom: 66px;
    }
    .feature-item {
        margin: auto;
        .feature-one {
            color: #000;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 145.833% */
        }
        .feature-two {
            color: #000;
            font-family: Inter;
            font-size: 20px;
            font-style: italic;
            font-weight: 400;
            line-height: 35px;
        }
        .feature-three {
            color: #000;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
            line-height: 28px;
            margin-top: 35px
        }
    }
    .we-box {
        width: 600px;
        // height: 370px;
        flex-shrink: 0;
        background: #212529;
        text-align: center;
        padding: 70px 48px 70px 48px;
        margin-top: 290px;
        transform: translateX(0);
        .we-text1 {
            color: #091242;
            font-family: Inter;
            font-size: 32px;
            font-weight: 500;
            line-height: 38.4px; /* 120% */
        }
        .we-text2 {
            color: #4D4D4D;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 30px; /* 214.286% */
        }
        .we-text15 {
            color: #4D4D4D;
            font-family: Inter;
            font-size: 14px;
            font-weight: 900;
            line-height: 30px; /* 214.286% */
        }
        .we-pic {
            position: fixed;
            left: 20%;
            top: -45%;
        }
    }
    .bestrate-title {
        color: #1C1F35;
        font-family: Inter;
        font-size: 48px;
        font-weight: 500;
        line-height: 85px; /* 125% */
    }
    .bestrate-text {
        color: #1C1F35;
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 27px; /* 200% */
    }
    .moq-list {
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px; /* 150.268% */
    }
}
.nav-item {
    display: flex;
    align-items: center;
}
.compare-item {
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 110px;
    padding: 0 35px 0 35px;
    border-radius: 8px;
    .compare-text {
        font-weight: 400;font-size: 12px;font-family: Inter;
    }
}
.ly-header {
    background: #091242;
    height: 83px;
    .title-text {
        color: rgba(244, 244, 244, 0.96);
        font-family: Inter;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
    }
    .nav-btn {
        color: #F4F4F4;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        margin-right: 15px;
    }
}
    .login-btn {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
    }
    .vs-title {
        color: #091242;
        font-family: Inter;
        font-size: 29px;
        font-weight: 700;
        line-height: 45px; /* 155.172% */
    }
    .vs-price {
        color: #091242;
        font-family: Inter;
        font-size: 50px;
        font-weight: 500;
        line-height: 80px; /* 120% */
        background: #D9D9D9;
        border-radius: 12px;
        text-align: center;
    }
    .free-title {
        color: #091242;
        font-family: Inter;
        font-size: 36px;
        font-weight: 900;
        line-height: 50px; /* 83.333% */
    }
    .free-logo {
        color: #FFBE34;
        font-family: Inter;
        font-size: 95px;
        font-weight: 900;
        line-height: 130px;
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
    font-size: 15px;
    font-weight: 400;
    margin-top: 48px;
    padding: 21px 0 21px 0;
}
</style>
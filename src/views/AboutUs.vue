<template>
  <div class="aboutus">
    <div class="top-container">
        <h1 class="top-introduction">ABOUT US</h1>
        <p class="top-content">Founded in April 2011, LeWa Mobile Limited is a mobile internet company located in Zhangjiang High-Tech Software Park (HQ), providing Android ROM with in-depth customization and Operating Platform with distributive services and contents as well.</p>
        <p class="top-content"><strong>LeWaOS</strong> creates more chances and enhances competitiveness for worldwide OEMs, moreover, supplies more smart equipment with connectivity capability and service. The achievement lies in the integration from underlying architecture, protocol layer, data and algorithm, privacy and security, multi-media, interaction, visual design to supply chain and localized services.</p>
        <p class="top-content"><strong>REVA Operating Platform</strong> serves brand vendors, manufactures and advertisers to attract and keep end users’ stickiness, maximize the profitability of mobile device industry by the means of supplying contents distribution and big data presentation, OS-level system security and control mechanism.</p>
        <div class="top-img-wrip">
            <div class="top-vis">
                <div class="top-img-shade">
                    <img src="../assets/about_vision.png">
                    <p>VISION</p>
                    <span>To make every mobile terminal supported by more pleasant internet service.</span>
                </div>
            </div>
            <div class="top-mis">
                <div class="top-img-shade">
                    <img src="../assets/about_mission.png">
                    <p>MISSION</p>
                    <span>To discover and create happiness</span>
                </div>
            </div>
        </div>
    </div>
    <ul class="history-container">
        <li class="history-item">
            <span class="his-left his-year">2011</span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-content">
                Establishment <br>
                Obtained Angel Financing <br>
                Released OS1.0
            </span>
        </li>
        <li class="history-item">
            <span class="his-left his-content">
                Owned millions of users <br>
                Released OS2.0-OS4.1 <br>
                Obtained Series A Investment led by Tencent
            </span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-year">2012</span>
        </li>
        <li class="history-item">
            <span class="his-left his-year">2013</span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-content">
                Released OS5.0 <br>
                LeWa OS got Google CTS certification <br>
                Reached strategic cooperation with TCL and Nokia
            </span>
        </li>
        <li class="history-item">
            <span class="his-left his-content">
                Obtained Series B Investment led by Intel <br>
                Owned more than 7 million users <br>
                Released OS5.1-OS6.0
            </span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-year">2014</span>
        </li>
        <li class="history-item">
            <span class="his-left his-year">2015</span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-content">
                Released OS6.5 based on Android L. <br>
                Overseas business rised sharply <br>
                One of top 50 most valuable companies in China
            </span>
        </li>
        <li class="history-item">
            <span class="his-left his-content">
                Adjusted strategy and enter overseas market entirely <br>
                Released many new phone models with Intex, Karbonn, Himax, Alcatel, and Panasonic <br>
                Released two bran-new products
            </span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-year">2016</span>
        </li>
        <li class="history-item">
            <span class="his-left his-year">2017</span>
            <span class="his-center">
                <span class="his-circle"></span>
            </span>
            <span class="his-right his-content">Coming soon…</span>
        </li>
    </ul>
    <div class="holder-container">
        <img src="../assets/about_holders.png">
    </div>
    <ul class="contact-container">
        <li class="contact-pic">
            <img src="../assets/about_pic.png">
        </li>
        <li class="contact-us">
            <h2>Join Us</h2>
            <p>LeWa is an equal opportunity employer, and all qualified applicants will receive consideration for employment without regard to any characteristic protected by law.  <br><br>
            If you are ready to challenge yourself and advance your career in a performance-driven culture that recognizes and rewards achievement, we would like to meet you. Welcome to send your request to <strong> hr@lewatek.com </strong>. Your requests will be kept confidential and shared strictly on a need-to-know basis only. <br><br>
            Interviewing at LeWa is a rigorous and rewarding experience. This valuable learning process helps us assess your skill set and determine whether you will be comfortable within our culture. At the same time, you learn more about our company, the position, and the people you will potentially be working with.
            </p>
        </li>
        <li class="contact-us">
            <h2>Contact Us</h2>
            <form action="">
                <input type="text" name="name" value="Name"><br>
                <input type="text" name="email" value="Email"><br>
                <textarea type="text" name="message">Message</textarea><br>
                <button type="submit">Contact Us</button>
            </form>
        </li>
        <li class="contact-map">
            <img src="../assets/about_position.jpg">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'aboutus',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
    background-image: url(../assets/bg_about.jpg);
}
.top-container .top-introduction {
    position: relative;
    padding-top: 0;
}
.top-content {
    padding-bottom: 20px;
    letter-spacing: 0.56px;
}
.top-img-wrip {
    width: 80%;
    position: absolute;
    left: 10%;
    bottom: -114px;
    cursor: pointer;
    font-size: 0;
    text-align: center;
    box-shadow: 0 12px 42px 12px rgba(0,0,0,0.08);
}

.top-img-wrip>div {
    display: inline-block;
    width: 50%;
    height: 228px;
    vertical-align: top;
}

.top-img-shade {
    width: 100%;
    height: 100%;
    padding-top: 42px;
    text-align: center;
    background: #fff;
}

.top-img-shade p {
    font-size: 24px;
    font-weight: bold;
    padding: 20px 0;
}
.top-vis p {
    color: #4A46E4;
}
.top-mis p {
    color: #F03349;
}
.top-img-shade span {
    font-size: 14px;
    color: #696969;
}

.history-container {
    width: 100%;
    padding-top: 150px;
    text-align: center;
    background-image: url(../assets/history_ver.png);
    background-repeat: no-repeat;
    background-size: 6px 100%;
    background-position: center 0;
    cursor: pointer;
}
.history-item {
    padding: 30px 0;
}
.history-item > span {
    width: 30%;
    display: inline-block;
    vertical-align: middle;
}
.his-left {
    text-align: right;
    margin-right: -10%;
}
.his-right {
    text-align: left;
    margin-left: -10%;
}
.his-content {
    font-size: 16px;
    color: #515151;
    line-height: 26px;
}
.his-year {
    color: #D5D5D5;
    transition: color 1s;
}
.his-circle {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #fff;
    border: 6px solid #eee;
    border-radius: 25px;
    transition: border-color 1s;
}
.history-item:hover .his-circle {
    border-color: #00B42F;
}
.history-item:hover .his-year {
    font-weight: bold;
    color: #00B42F;
}


.holder-container {
    width: 90%;
    margin: 0 auto;
    padding: 70px 0;
    text-align: center;
    background: #fff;
    box-shadow: 0 12px 42px 12px rgba(0,0,0,0.08);
}
.holder-container img {
    max-width: 90%;
}
.contact-container {
    width: 100%;
    padding-top: 110px;
    font-size: 0;
}
.contact-container > li {
    display: inline-block;
    width: 50%;
    height: 700px;
    vertical-align: top;
}
@media screen and (max-width: 980px) {
    .contact-container > li {
        width: 100%;
        border-bottom: 1px solid #fff;
    }
}
.contact-container  h2 {
    font-weight: normal;
    font-size: 40px;
    padding-bottom: 30px;
}
.contact-pic img,
.contact-map img {
    width: 100%;
    height: 100%;
}
.contact-us {
    background: #00B430;
    color: #fff;
    padding: 50px;
}
.contact-us > p {
    font-size: 16px;
    line-height: 26px;
}
.contact-us input,
.contact-us textarea {
    width: 80%;
    height: 50px;
    margin-top: 20px;
    background: #00B430;
    font-size: 16px;
    color: #fff;
    border: 0;
    border-bottom: 2px solid #fff;
}
.contact-us textarea {
    height: 180px;
}
.contact-us button {
    display: block;
    width: 170px;
    height: 50px;
    line-height: 50px;
    margin: 70px 0 0 30%;
    color: #00B42F;
    background: #fff;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
}
.contact-us button:hover {
    background: #eee;
}
</style>

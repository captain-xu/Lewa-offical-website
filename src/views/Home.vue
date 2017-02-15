<template>
  <div class="home">
    <div class="top-container">
        <img src="../assets/logo_reva.png" class="top-logo">
        <h1 class="top-introduction">An operating platform based on Android OS</h1>
        <p class="top-content">Based on the competitiveness on Android OS, the operating platform, RevaNow, contains REVA Mobile Service and REVA Backend System to manage and monetize data and traffic together with phone manufactures, by the means of providing contents distribution and big data analysis, OS-level system security and control mechanism.</p>
        <p class="top-content">We are proud to be a close partner of many worldwide phone brands in the past years, and we will always persist in developing this kind of relationship, and spare no effort to further your interests.</p>
        <!-- <div class="top-demo">
            <img src="../assets/icon_play_btn.png" width="55" height="55">
            <p class="top-demo-text">SEE DEMO</p>
        </div> -->
    </div>
    <!-- <div class="top-video">
        <video id="video" width="640" height="480">
            <source src="../assets/video.mp4" type="video/mp4">
        </video>
    </div> -->
    <div class="customer-container">
        <ul class="customer-promise">
            <li>
                <img src="../assets/merits_promise.png" width="150" height="150">
                <h2>DMP</h2>
                <p>collect, analyze and operate data, turning data into valuable asset and create more.</p>
            </li>
            <li>
                <img src="../assets/merits_users.png" width="150" height="150">
                <h2>User profile</h2>
                <p>build user profile system associated with each specific user.</p>
            </li>
            <li>
                <img src="../assets/merits_happiness.png" width="150" height="150">
                <h2>Customization</h2>
                <p>extend and enrich the brand image based on phone hardware.</p>
            </li>
            <li>
                <img src="../assets/merits_sharing.png" width="150" height="150">
                <h2>Monetization</h2>
                <p>maintain users and monetize traffic in the long term depending on data-centric solutions.</p>
            </li>
        </ul>
        <h2 class="customer-stories">Phone Brand</h2>
        <div class="customer-logos">
            <img src="../assets/phone_brand.png">
        </div>
        <h2 class="customer-stories">Mobile Advertising Platform</h2>
        <div class="customer-logos">
            <img src="../assets/phone_platform.png">
        </div>
        <ul class="customer-achieve">
            <li>
                <h4>User appraisal</h4>
                <p class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                <p class="contents">Our latest achievements: several Apps and the operating platform based on OS developed by LeWa have been launched successively, and the products are being promoted along with phone brands. <br> THANKS for your attention!</p>
            </li>
            <li>
                <h4>Team building</h4>
                <p class="stars"></p>
                <p>MerryChristmas—Christmas and New Year are approaching. LeWa Reva wishes you peace, joy and happiness!
                    <br>
                    <br>
                    <br> @lewa</p>
            </li>
            <li>
                <h4>Information and reports</h4>
                <p class="contents">LeWa has reached strategic partnership with Karbonn. All Karbonn phones to be released will carry #KandyUI, which is a customized operating system developed by LeWa, exclusive for Karbonn. Quattro L50 HD is the first phone after reaching strategic partnership, and being sold in Indian market now.</p>
            </li>
            <li>
                <h4>News</h4>
                <img class="news-left" src="../assets/new_left.jpg">
                <img class="news-right" src="../assets/news_right.jpg">
                <p class="contents">Lewa Team had a business trip in India from early November, visited leading mobile advertising platforms including Inmobi, Affle, Airpush, Vserv, SVG Media and Indian local content providers Justdial and Zomato. LeWa and the promising partners conducted the multidimensional communication and achieved some consensus and cooperation. </p>
            </li>
        </ul>
    </div>
    <div class="data-board">
        <ul class="data-value">
            <li>
                <p class="data-val-total">{{total}}</p>
                <label id="data_top">Total users</label>
            </li>
            <li>
                <p class="data-val-brands">{{brands}}</p>
                <label>Phone Brands</label>
            </li>
            <li>
                <p class="data-val-models">{{models}}</p>
                <label>Phone Models</label>
            </li>
        </ul>
        <h2>Get <strong>In Touch</strong></h2>
        <p>Make sure that people understand what you are trying to say. Whether in marketing, management, or just everyday conversations.<br> Through feedback, communication can be an effective tool in the world of business and everywhere else.</p>
        <input type="text" name="email" placeholder="Your e-mail address..."><br>
        <button type="submit">SUBSCRIBE</button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'home',
  data () {
    return {
      total: 0,
      brands: 0,
      models: 0
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      let widowHeight = $(window).height();
      let scroll_top = $(document).scrollTop();
      let data_top = $('#data_top').offset().top - widowHeight;
      if (scroll_top >= data_top) {
        // $(window).off('scroll');
        var auto = setInterval(() => {
          if (this.brands < 30) {
            ++this.total;
            ++this.brands;
            ++this.models;
          } else {
            this.total = '40,000,000';
            this.brands = '30+';
            this.models = '200+';
            clearInterval(auto);
          }
        }, 50)
      }
    });
  },
  beforeDestory() {
      $(window).off('scroll');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-container{
  background-image: url(../assets/bg_home.jpg);
}
.top-demo {
  padding-top: 120px;
  text-align: center;
}
.top-demo img {
  cursor: pointer;
}
.top-demo .top-demo-text {
  padding-top: 30px;
  opacity: 0.5;
}
.top-video {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
#video {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -240px;
  margin-left: -320px;
  cursor: pointer;
}

.customer-container {
  width: 90%;
  margin: 0 auto;
  padding: 150px 0 100px;
  text-align: center;
}
.customer-promise {
  font-size: 0;
}
.customer-promise li {
  display: inline-block;
  width: 25%;
  vertical-align: top;
}
.customer-promise li > h2 {
  padding: 30px 0 20px;
  font-size: 20px;
  color: #152844;
}
.customer-promise li > p {
  width: 90%;
  display: inline-block;
  color: #8FA6B7;
  font-size: 13px;
}
.customer-stories {
  padding: 130px 0 80px;
  color: #152844;
  font-size: 48px;
  font-weight: normal;
}
.customer-logos {
  max-width: 1166px;
  margin: 0 auto;
  padding: 56px 86px;
  box-shadow: 0 12px 42px 12px rgba(0,0,0,0.08);
}
.customer-achieve {
  padding-top: 150px;
  font-size: 0;
  width: 100%;
  max-width: 986px;
  margin: 0 auto;
}
.customer-achieve li {
  display: inline-block;
  width: calc(50% - 26px);
  max-width: 480px;
  min-height: 250px;
  margin-bottom: 26px;
  padding: 15px 32px 24px;
  font-size: 14px;
  box-shadow: 0 12px 42px 12px rgba(0,0,0,0.08);
  vertical-align: top;
}
.customer-achieve h4 {
  padding-bottom: 12px;
  text-align: left;
  color: #898989;
}
.customer-achieve li:nth-child(1),
.customer-achieve li:nth-child(3) {
  margin-right: 26px;
}
.customer-achieve .stars {
  padding-bottom: 30px;
  color: #F6A623;
  min-height: 50px;
}
.customer-achieve .contents {
  line-height: 24px;
}
.customer-achieve .news-left {
    width: 55%;
    float: left;
    height: 175px;
    margin-right: 3%;
}
.customer-achieve .news-right {
    width: 42%;
    float: left;
    height: 175px;
}
.data-board {
    background: linear-gradient(#3E65BC, #1FA0EA);
    filter: progid: DXImageTransform.Microsoft.Gradient(startColorStr=#3E65BC, endColorStr=#1FA0EA);
    padding: 80px 0;
    text-align: center;
}
.data-board .data-value {
  width: 80%;
  min-width: 980px;
  height: 528px;
  margin: 0 auto;
  padding-top: 150px;
  background-image: url(../assets/bg_world.png);
  background-size: 90% 100%;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
}
.data-value li {
  display: inline-block;
  width: 30%;
}
.data-value li > p {
  font-size: 50px;
  color: #fff;
}
.data-value li > label {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.78)
}
.data-board > h2 {
  font-size: 46px;
  color: #fff;
  font-weight: lighter;
  margin-top: -50px;
  padding-bottom: 76px;
}
.data-board > p {
  color: #fff;
  padding-bottom: 80px;
}
.data-board input[name="email"] {
  width: 60%;
  height: 56px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  text-align: center;
}
.data-board button {
  width: 220px;
  height: 55px;
  margin-top: 80px;
  background: transparent;
  color: #fff;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.data-board button:hover {
  border-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
}
.data-board button:active {
  border-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}
</style>

<template>
  <div class="revanow">
    <div class="top-container">
      <img src="../assets/logo_reva.png" class="top-logo">
      <h1 class="top-introduction">An operating platform based on Android OS</h1>
      <p class="top-content">Based on the competitiveness on Android OS, the operating platform, RevaNow, contains REVA Mobile Service and REVA Backend System to manage and monetize data and traffic together with phone manufactures, by the means of providing contents distribution and big data analysis, OS-level system security and control mechanism.</p>
      <p class="top-content">We are proud to be a close partner of many worldwide phone brands in the past years, and we will always persist in developing this kind of relationship, and spare no effort to further your interests.</p>
      <div class="top-img-wrip">
          <div class="top-rms" @click="toRms()">
              <div class="top-img-shade">
                  <p>RMS</p>
                  <span>REVA Mobile Service</span>
              </div>
          </div>
          <div class="top-rbs">
              <div class="top-img-shade">
                  <p>RBS</p>
                  <span>REVA Backend System</span>
              </div>
          </div>
      </div>
    </div>
    <div class="modular-container">
      <h2 class="modular-title"><strong>RBS</strong> data analytics and advertising platform</h2>
      <div class="modular-preview">
          <div class="preview-left">
              <ul class="preview-left-btn">
                  <li v-for="item in 4" @click="slide('reva', item)" v-bind:class="{active: revaActive == item}"></li>
              </ul>
          </div>
          <div class="preview-right">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="reva in revaImg">
                        <img v-bind:src="reva">
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="app-container">
      <div class="data-wriper">
          <h2 class="data-title"><strong>REVA</strong> BY The Numbers</h2>
          <ul class="data-content">
              <li v-for="item in numData">
                  <p>{{item.num}}</p>
                  <label>{{item.name}}</label>
              </li>
          </ul>
      </div>
      <h2 class="app-title"><strong>RMS</strong>-App groups</h2>
      <h3 class="app-subtitle"><em>Experience + Service</em></h3>
      <p class="app-content">
          Launcher  An easy-to-use launcher redefining speediness byond your imagination
      </p>
      <ul class="app-icon">
          <li v-for="(icon, index) in appIcon" @click="slide('app', index)" v-bind:class="{active: appActive == index}">
              <img v-bind:src="icon.src"><br />
              <span><img src="../assets/icon_play.png">{{icon.name}}</span>
          </li>
      </ul>
      <div class="app-preview">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="pre in appPreview">
                      <img v-bind:src="pre">
                  </div>
              </div>
          </div>
        </div>
    </div>
    <div class="app-cover"></div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'revanow',
  data () {
    return {
      scrollWatch: true,
      reva: '',
      app: '',
      numData: [{
        name: 'Ad Platforms',
        num: 0
      }, {
        name: 'App Requests Monthly',
        num: 0
      }, {
        name: 'Campaigns',
        num: 0
      }, {
        name: 'Countries',
        num: 0
      }, {
        name: 'Unique Users',
        num: 0
      }],
      revaActive: 1,
      revaImg: [
        require('../assets/reva_tracker_show.png'),
        require('../assets/reva_ad_show.png'),
        require('../assets/reva_push_show.png'),
        require('../assets/reva_update_show.png')
      ],
      appActive: 1,
      appIcon: [{
        name: 'Discovery',
        src: require('../assets/app_discover.png')
      }, {
        name: 'Hi-News',
        src: require('../assets/app_news.png')
      }, {
        name: 'Launcher',
        src: require('../assets/app_home.png')
      }, {
        name: 'X-Screen',
        src: require('../assets/app_xscreen.png')
      }, {
        name: 'Lock Screen',
        src: require('../assets/app_lockscreen.png')
      }, {
        name: 'Xender Play',
        src: require('../assets/app_xender.png')
      }],
      appPreview: [
        require('../assets/rms_discover.png'),
        require('../assets/rms_news.png'),
        require('../assets/rms_launcher.png'),
        require('../assets/rms_xscreen.png'),
        require('../assets/rms_lockscreen.png'),
        require('../assets/rms_xender.png')
      ]
    }
  },
  mounted () {
    this.ready();
  },
  methods: {
    ready() {
      var that = this;
      $(window).scrollTop(0);
      $(window).on('scroll', () => {
        if (that.scrollWatch) {
          let widowHeight = $(window).height();
          let scroll_top = $(document).scrollTop();
          let data_top = $('.data-content').find("li").first().find('label').offset().top - widowHeight;
          if (scroll_top >= data_top) {
            var auto = setInterval(() => {
              if (that.numData[0].num < 30) {
                for (let i = 0; i < that.numData.length; i++) {
                  let item = that.numData[i];
                  item.num ++ ;
                }
              } else {
                that.numData[0].num = '50+';
                that.numData[1].num = '10 Billion';
                that.numData[2].num = '1100+';
                that.numData[3].num = '30+';
                that.numData[4].num = '20 Million';
                clearInterval(auto);
              }
            }, 50)
          }
        }
      });
      const revaSwiper = new Swiper('.preview-right .swiper-container', {
          effect : 'coverflow',
          slidesPerView: 1.2,
          centeredSlides: true,
          slideToClickedSlide:true,
          coverflow: {
            rotate: -1,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : false
          },
          onSlideChangeStart: function(swiper){
            slideRevaIndex(swiper.activeIndex);
          }
      });
      const appSwiper = new Swiper('.app-preview .swiper-container', {
          effect : 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          initialSlide :2,
          slideToClickedSlide:true,
          coverflow: {
            rotate: -1,
            stretch: 66,
            depth: 80,
            modifier: 3,
            slideShadows : false
          },
          onSlideChangeStart: function(swiper){
              slideAppIndex(swiper.activeIndex);
          }
      });
      that.reva = revaSwiper;
      that.app = appSwiper;
      function slideRevaIndex(num) {
        that.revaActive = num + 1;
      };
      function slideAppIndex(num) {
        that.appActive = num;
      };
      // return function () {
      //   return {
      //     reva: revaSwiper,
      //     app: appSwiper
      //   };
      // };
    },
    toRms() {
      let widowHeight = $(window).height();
      let rmsposition = $('.app-cover').offset().top - widowHeight;
      $('html,body').animate({ scrollTop: rmsposition }, 200);
    },
    slide(str, num) {
      // let swiper = this.ready()();
      if (str === 'reva') {
        this.reva.slideTo(num - 1, 1000, false);
        this.revaActive = num;
      } else {
        this.app.slideTo(num, 1000, false);
        this.appActive = num;
      }
    }
  },
  destroyed () {
    this.scrollWatch = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
    background-image: url(../assets/bg_reva.jpg);
}

.top-img-wrip {
    width: 100%;
    position: absolute;
    bottom: -168px;
    cursor: pointer;
    font-size: 0;
    text-align: center;
}

.top-img-wrip>div {
    display: inline-block;
    width: 40%;
    max-width: 636px;
    height: 336px;
    background-size: 100% 100%;
    transition: background-size 1s linear;
}

.top-img-wrip .top-rms {
    background-image: url(../assets/reva_rms.png);
}

.top-img-wrip .top-rbs {
    background-image: url(../assets/reva_rbs.png);
}

.top-img-wrip .top-rms:hover,
.top-img-wrip .top-rbs:hover {
    background-size: 105% 105%;
}

.top-img-shade {
    width: 100%;
    height: 100%;
    padding-top: 124px;
    text-align: center;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 12px 42px 12px rgba(0, 0, 0, 0.08);
}

.top-img-shade p {
    font-size: 40px;
    font-weight: bold;
    color: #404D73;
    margin-bottom: 24px;
}

.top-img-shade span {
    font-size: 24px;
    color: #2E3E6A;
    opacity: .5;
}

.modular-container {
    padding-top: 300px;
}

.modular-container .modular-title {
    color: #152844;
    text-align: center;
    font-weight: normal;
    font-size: 46px;
    padding: 0 10%;
}

.modular-container .modular-preview {
    width: 100%;
    padding: 0 10% 180px;
}

.modular-preview .preview-left {
    letter-spacing: 12px;
    text-align: center;
    padding: 78px 0;
}

.modular-preview .preview-left-btn>li {
    display: inline-block;
    width: 115px;
    height: 115px;
    margin-right: 20px;
    cursor: pointer;
    background-size: 100% 100%;
}

.modular-preview .preview-left-btn>li:nth-child(1) {
    background-image: url(../assets/reva_tracker.png);
}

.modular-preview .preview-left-btn>li:nth-child(2) {
    background-image: url(../assets/reva_ad.png);
}

.modular-preview .preview-left-btn>li:nth-child(3) {
    background-image: url(../assets/reva_push.png);
}

.modular-preview .preview-left-btn>li:nth-child(4) {
    background-image: url(../assets/reva_update.png);
}

.modular-preview .preview-left-btn>li:nth-child(1).active {
    background-image: url(../assets/reva_trackerActive.png);
}

.modular-preview .preview-left-btn>li:nth-child(2).active {
    background-image: url(../assets/reva_adActive.png);
}

.modular-preview .preview-left-btn>li:nth-child(3).active {
    background-image: url(../assets/reva_pushActive.png);
}

.modular-preview .preview-left-btn>li:nth-child(4).active {
    background-image: url(../assets/reva_updateActive.png);
}

.data-wriper {
    padding: 100px 0;
    background-image: url(../assets/bg_world.png);
    background-position: center 0;
    background-repeat: no-repeat;
    // background-size: 80% 100%;
}
.data-title {
    color: #fff;
    text-align: center;
    font-weight: normal;
    font-size: 46px;
    padding: 0 10%;
}
.data-content {
    width: 90%;
    margin: 0 auto;
    padding: 200px 0;
    font-size: 0;
}
.data-content > li {
    display: inline-block;
    width: 20%;
    text-align: center;
    vertical-align: top;
}
.data-content > li > p {
    font-size: 50px;
    padding-bottom: 20px;
    color: #fff;
}
.data-content > li > label {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.35);
}
@media screen and (max-width: 1380px) {
    .data-content > li > p {
        font-size: 42px;
    }
}
@media screen and (max-width: 1250px) {
    .data-content > li > p {
        font-size: 36px;
    }
    .data-content > li > label {
        font-size: 18px;
    }
}
@media screen and (max-width: 980px) {
    .data-content > li > p {
        font-size: 32px;
    }
}

.preview-right .swiper-container {
    width: 100%;
    max-width: 980px;
    height: 650px;
    box-shadow: 0 12px 42px 12px rgba(0, 0, 0, 0.08);
}

.preview-right img {
    width: 100%;
    height: 100%;
}

.app-container {
    width: 100%;
    padding-top: 180px;
    text-align: center;
    color: #fff;
    background: linear-gradient(#0E356D, #4D6EB8);
    filter: progid: DXImageTransform.Microsoft.Gradient(startColorStr=#0E356D, endColorStr=#4D6EB8);
}

.app-container .app-title {
    font-weight: normal;
    font-size: 48px;
}

.app-container .app-subtitle {
    font-weight: normal;
    padding: 30px 0;
}

.app-container .app-content {
    opacity: .52;
    line-height: 22px;
}

.app-container .app-icon {
    padding: 100px 0;
}

.app-container .app-icon>li {
    display: inline-block;
    padding-right: 50px;
    cursor: pointer;
}

.app-icon>li>img {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
    transition: all .2s linear;
}

.app-icon>li>span {
    letter-spacing: 1.75px;
    color: #D5DCE8;
    transition: all .2s linear;
}

.app-icon>li:hover>img {
    width: 62px;
    height: 62px;
    margin-bottom: 16px;
}

.app-icon>li:hover>span {
    font-size: 15px;
    letter-spacing: 1.75px;
    color: #D5DCE8;
}

.app-icon>li>span img {
    display: none;
    padding-right: 5px;
}

.app-icon>li.active>img {
    width: 62px;
    height: 62px;
    color: #00B9F7;
}

.app-icon>li.active>span {
    font-size: 15px;
    color: #00B9F7;
}

.app-icon>li.active>span img {
    display: inline-block;
}
.app-preview {
  width: 900px;
  height: 550px;
  margin: 0 auto;
}
.app-preview .swiper-container {
  height: 100%;
}
.app-preview img {
  width: 280px;
  height: 100%;
}
.app-preview video {
    display: none;
    width: 280px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -140px;
    margin-top: -230px;
}
.app-preview .app-video-btn {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
    cursor: pointer;
}
.app-cover {
    position: relative;
    top: -115px;
    width: 100%;
    height: 115px;
    background: #fff;
    z-index: 2;
}
.footer {
    margin: 0px auto 100px;
}
</style>

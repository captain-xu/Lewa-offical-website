<template>
  <div class="lewaos">
    <div class="top-container">
        <h1 class="top-introduction">LeWa OS</h1>
        <h1 class="top-introduction">Elegant, Convenient, Secure</h1>
    </div>
    <ol class="os-container">
        <li class="launcher-wrip">
            <ul>
                <li class="img-cont"><img src="../assets/os_launcher.png"></li>
                <li class="text-cont">
                    <h2>Enjoyable Visual Experiences</h2>
                    <p>Perfect launcher design and light animation lockscreen</p>
                </li>
            </ul>
        </li>
        <li class="contacts-wrip">
            <ul>
                <li class="text-cont">
                    <h2>Convenient and Efficient</h2>
                    <p>Slide to switch call list, contacts, SMS</p>
                    <p>Base on communication and for communication</p>
                </li>
                <li class="img-cont"><img src="../assets/os_contacts.png"></li>
            </ul>
        </li>
        <li class="photos-wrip">
            <ul>
                <li class="img-cont"><img src="../assets/os_photos.png"></li>
                <li class="text-cont">
                    <h2>Socializing and Entertainment</h2>
                    <p>Get beautiful photos to share; Immersed music and video</p>
                </li>
            </ul>
        </li>
        <li class="protection-wrip">
            <ul>
                <li class="text-cont">
                    <h2>Security and Easy Maintenance</h2>
                    <p>Comprehensive protection, makes your phone more security</p>
                </li>
                <li class="img-cont"><img src="../assets/os_protection.png"></li>
            </ul>
        </li>
        <li class="version-wrip"></li>
        <li class="rom-wrip">
            <ul>
                <li class="img-cont"><img src="../assets/os_rom.png"></li>
                <li class="text-cont">
                    <h2>LeWa ROM</h2>
                </li>
            </ul>
        </li>
        <li class="data-wrip">
            <ul>
                <li>
                    <p>{{versions}}</p>
                    <label id="data_top">Versions</label>
                </li>
                <li>
                    <p>{{brands}}</p>
                    <label>Cooperative brands</label>
                </li>
                <li>
                    <p>{{models}}</p>
                    <label>Models</label>
                </li>
            </ul>
        </li>
    </ol>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'lewaos',
  data () {
    return {
      scrollWatch: true,
      versions: 0,
      brands: 0,
      models: 0
    }
  },
  mounted() {
    $(window).scrollTop(0);
    $(window).on('scroll', () => {
      if (this.scrollWatch) {
        let widowHeight = $(window).height();
        let scroll_top = $(document).scrollTop();
        let data_top = $('#data_top').offset().top - widowHeight;
        if (scroll_top >= data_top) {
          var auto = setInterval(() => {
            if (this.brands < 30) {
              ++this.versions;
              ++this.brands;
              ++this.models;
            } else {
              this.versions = '180';
              this.brands = '36';
              this.models = '176';
              clearInterval(auto);
            }
          }, 50)
        }
      }
    });
  },
  destroyed () {
    this.scrollWatch = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
    height: 620px;
    background-image: url(../assets/bg_os.png);
}
.top-container .top-introduction {
    position: relative;
    padding-top: 0;
}

.os-container > li {
    padding: 100px 0;
}
.os-container ul > li {
    display: inline-block;
    width: 49%;
    vertical-align: middle;
}
.img-cont {
    text-align: center;
}
.text-cont {
    padding-left: 14%;
}
.text-cont h2 {
    padding-bottom: 30px;
}
.photos-wrip {
    color: #fff;
    background-image: url(../assets/os_bgphotos.png);
    background-repeat: no-repeat;
}
.version-wrip {
    padding: 0;
    width: 100%;
    height: 666px;
    background-image: url(../assets/os_v7.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.data-wrip {
    background: linear-gradient(#FF9F2B, #FFAD2C);
    filter: progid: DXImageTransform.Microsoft.Gradient(startColorStr=#FF9F2B, endColorStr=#FFAD2C);
}
.data-wrip ul {
    font-size: 0;
}
.data-wrip ul li {
    width: 33%;
    text-align: center;
    color: #fff;
    font-weight: bold;
}
.data-wrip p {
    font-size: 40px;
}
.data-wrip label {
    font-size: 18px;
}
</style>

<template>
  <footer class="footer">
    <ul class="footer-pub">
      <li>
        <h2>Contact Us</h2>
        <a href="">Partner opportunities</a>
        <br>
        <a href="">partnership@lewatek.com</a>
        <br>
      </li>
      <li>
        <h4>Company</h4>
        <a href="">Home</a>
        <br>
        <a href="">About Us</a>
        <br>
        <a href="">Pricing</a>
        <br>
        <a href="">Contact Us</a>
        <br>
      </li>
      <li>
        <h4>Others</h4>
        <a href="">Help & Support</a>
        <br>
        <a href="">Privacy Policy</a>
        <br>
        <a href="">Terms</a>
        <br>
        <a href="">Sitemap</a>
        <br>
      </li>
      <li>
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter and get all the cool news</p>
        <div class="email-wrip">
          <input type="text" placeholder="Enter Email">
          <i class="fa fa-paper-plane-o"></i>
        </div>
      </li>
    </ul>
    <div class="copyright">
      <router-link to="/">Home | </router-link>
      <router-link to="/lewaos/revanow">RevaNow | </router-link>
      <router-link to="/revanow/lewaos">LeWa OS | </router-link>
      <router-link to="/aboutus/aboutus">About LeWa &copy; 2011-2016 LeWa Co., Ltd</router-link>
      <div class="society">
        <a href="https://twitter.com/Lewa_OS" target="_blank"><i class="fa fa-twitter-square"></i></a>
        <a href="https://www.facebook.com/LeWaOSofficial/" target="_blank"><i class="fa fa-facebook-square"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    width: 960px;
    margin: 100px auto;
}

.footer .footer-pub {
    font-size: 0;
    padding-bottom: 50px;
    border-bottom: 1px solid #EEF1EC;
}

.footer-pub > li {
    display: inline-block;
    width: 240px;
    height: 160px;
    color: #817C89;
    font-size: 13px;
    vertical-align: top;
}

.footer-pub > li h2,
.footer-pub > li h4 {
    padding-bottom: 24px;
}

.footer-pub > li > a {
    color: #817C89;
    line-height: 28px;
}

.footer-pub .email-wrip {
    margin-top: 30px;
    height: 40px;
    line-height: 40px;
    background: #F4F4F4;
    border-radius: 2px;
}

.footer-pub .email-wrip > input {
    width: 210px;
    border: none;
    background: #f4f4f4;
    padding: 0 10px;
}

.footer-pub .email-wrip > .fa {
    cursor: pointer;
}

.footer .copyright {
    padding-top: 15px;
    height: 34px;
    line-height: 34px;
}

.footer .copyright > a {
    font-family: Microsoft Yahei;
    font-size: 12px;
    color: #8D8D8D;
}

.copyright .society {
    float: right;
    font-size: 34px;
}

.copyright .society .fa-twitter-square {
    color: #55ACEE;
}

.copyright .society .fa-facebook-square {
    color: #3B5998;
}
</style>

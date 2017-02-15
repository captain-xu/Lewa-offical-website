<template>
  <header class="header" :class="{active: activeHeader}">
    <img src="../assets/logo_lewa.png" class="header-logo" width="135" height="60">
    <ul class="header-nav">
      <li :class="{active: !activeUrl}"><router-link to="/">HOME</router-link></li>
      <li :class="{active: activeUrl == 'revanow'}"><router-link to="/revanow/revanow">RevaNow</router-link></li>
      <li :class="{active: activeUrl == 'lewaos'}"><router-link to="/lewaos/lewaos">LEWA OS</router-link></li>
      <li :class="{active: activeUrl == 'aboutus'}"><router-link to="/aboutus/aboutus">ABOUT US</router-link></li>
    </ul>
  </header>
</template>

<script>
    import $ from 'jquery';
    export default {
      name: 'head',
      data () {
        return {
          activeHeader: false,
          activeUrl: this.$route.params.id
        }
      },
      mounted() {
          $(window).on('scroll', () => {
              if ($(window).scrollTop() > 300) {
                  this.activeHeader = true;
              } else {
                  this.activeHeader = false;
              }
          });
      },
      beforeDestory() {
          $(window).off('scroll');
      },
      watch: {
        '$route' (to, from) {
          this.activeUrl = this.$route.params.id
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 5%;
    width: 90%;
    height: 80px;
    padding: 10px 5%;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 10;
    transition: height 0.5s, padding 0.5s, background 0.5s;
}
.header.active {
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0px 5%;
    background: rgba(0,0,0,0.3);
}

.header .header-logo {
    vertical-align: top;
}

.header .header-nav {
    color: #fff;
    height: 60px;
    line-height: 60px;
    float: right;
}

.header .header-nav>li {
    display: inline-block;
    min-width: 90px;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    transition: background .5s linear;
}

.header .header-nav>li:hover,
.header .header-nav>li.active {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 2px;
}

.header .header-nav>li>a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.7);
}
</style>

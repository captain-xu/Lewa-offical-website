<template>
  <div id="app">
    <nv-head></nv-head>
    <router-view></router-view>
    <nv-foot></nv-foot>
    <nv-top></nv-top>
  </div>
</template>

<script>
import nvTop from '../src/components/backtotop.vue';
import nvHead from '../src/components/header.vue';
import nvFoot from '../src/components/footer.vue';
export default {
  name: 'app',
  components: {
    nvTop,
    nvHead,
    nvFoot
  }
}
</script>

<style>
* {margin: 0;padding: 0;list-style: none;outline: none;}
*,*:before,*:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
html {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%; height: 100%;}
body {line-height: 1.428571429;color: #666;background-color: #fff;font-size: 14px;font-family: 'OpenSans', 'Microsoft Yahei', Arial;; height: 100%;overflow-x: hidden; overflow-y: auto;}

a ,
a:hover,
a:focus {text-decoration: none;}
a:focus {outline: thin dotted;outline: 5px auto -webkit-focus-ring-color;outline-offset: -2px;}
ul, menu, dir {-webkit-margin-before: 0;-webkit-margin-after: 0;-webkit-margin-start: 0;-webkit-margin-end: 0;-webkit-padding-start: 0;}

.top-container {
    position: relative;
    width: 100%;
    height: 980px;
    padding-top: 320px;
    color: #fff;
    text-align: center;
    background-color: #0E356D;
    background-size: 1800px 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.top-container .top-logo {
    position: relative;
    width: 160px;
    height: 40px;
    animation: logoslide 1.5s ease 0s 1;
    -webkit-animation: logoslide 1.5s ease 0s 1; /* Safari and Chrome */
}

.top-container .top-introduction {
    position: relative;
    font-size: 39px;
    font-weight: normal;
    margin: 0;
    padding-top: 90px;
    padding-bottom: 60px;
    animation: logoslide 1.5s ease 0s 1;
    -webkit-animation: logoslide 1.5s ease 0s 1; /* Safari and Chrome */
}

.top-container .top-content {
    position: relative;
    width: 80%;
    line-height: 26px;
    margin: 0 auto;
    font-size: 16px;
    text-align: left;
    color: rgba(255, 255, 255, 0.82);
    animation: logoslide 1.5s ease 0s 1;
    -webkit-animation: logoslide 1.5s ease 0s 1; /* Safari and Chrome */
}
@keyframes logoslide
{
    from {top: 100px;opacity: 0}
    to {top: 0px;opacity: 1}
}

@-webkit-keyframes logoslide /* Safari and Chrome */
{
    from {top: 100px;opacity: 0}
    to {top: 0px;opacity: 1}
}
</style>

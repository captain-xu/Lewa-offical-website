<template>
  <transition name="fade">
    <div class="icon-top" v-show="show" @click="toTop"><i class="fa fa-arrow-up"></i></div>
  </transition>
</template>
<script>
    import $ from 'jquery';
    export default {
        replace: true,
        data() {
            return {
                show: false
            };
        },
        mounted() {
            $(window).on('scroll', () => {
                if ($(window).scrollTop() > 500) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
        },
        beforeDestory() {
            $(window).off('scroll');
        },
        methods: {
            toTop() {
              $('html,body').animate({ scrollTop: 0 }, 200);
              this.show = false;
            }
        }
    };
</script>
<style>
    .icon-top {
      position: fixed;
      right: 30px;
      bottom: 50px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      z-index: 3;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .8s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>


<template>  
    <div id="sidebar">
        <DrawerToggleButton className="drawerbutton"/>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="weather--icon">
                  <img src="@/assets/logo.svg" alt="logo" />
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import DrawerToggleButton from './../Atoms/DrawerToggleBtn.vue'
    import {TweenMax, Power4} from 'gsap'
    export default {
    name: 'sidebar',
    mounted () {
      TweenMax.set(this.$el, {
        x: this.$el.offsetWidth
      })
    },
    components:{
      DrawerToggleButton
    },
    computed: {
      open () {
        return this.$store.state.ui.sidebarOpen
      }
    },
    watch: {
      open: function (open) {
        const dX = open ? 0 : this.$el.offsetWidth
        TweenMax.to(this.$el, 0.6, {
          x: dX,
          ease: Power4.easeOut
        })
      }
    }
  }
</script>
<style lang="scss">
    #sidebar{
        position:absolute;
        width:300px;
        left:-300px;
        top:0;
        background: #21b5ef; /* Old browsers */
        background: -moz-linear-gradient(top, #2e65f0 0%, #0d7487 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #2e65f0 0%,#0d7487 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #2e65f0 0%,#0d7487 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e65f0', endColorstr='#1d51d4',GradientType=0 ); /* IE6-9 */
        height:100vh;
        z-index:300;
    }
</style>
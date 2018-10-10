
<template>  
    <div id="sidebar">
        <DrawerToggleButton className="drawerbutton"/>
        <div><p>Sidebar is here</p></div>
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
<style>
    #sidebar{
        position:absolute;
        width:300px;
        left:-300px;
        top:0;
        background-color:green;
        height:100vh;
        z-index:300;
    }
</style>
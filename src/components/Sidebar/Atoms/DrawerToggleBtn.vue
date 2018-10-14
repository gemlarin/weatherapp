<template>
  <div class="btn--toggle" @click="handleClick">    
    <span v-if="open" class="icon icon-arrow-right"></span>
    <span v-if="!open"  class="icon icon-arrow-left"></span>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-toggle',
    computed: {
      open () {
        return this.$store.state.ui.sidebarOpen
      },
    },
    methods: {
      handleClick () {
        this.$store.dispatch('toggleSidebar')
      }
    }
  }
</script>
<style lang="scss">
    .btn--toggle{
        position:absolute;
        left:300px;
        top:70px;
        background-color:#2e65f0;
        width:35px;
        height:35px;
        padding-top:6px;
        padding-left:10px;
        border-radius: 0 4px 4px 0;
        cursor:pointer;
        span{
          color:#fff;
        }
    }
</style>
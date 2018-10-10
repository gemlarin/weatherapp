<!-- this component holds router view and is the base component for the app -->
<template>
  <div>
    <div id="app">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar/Molecules/Sidebar'
import LocationHeader from '@/components/Weather/Atoms/LocationHeader'
import Day from '@/components/Weather/Molecules/Day'

export default {
  name: 'app',
   data: function () {
    return {
      test:'hi there!'
    }
  },
  components:{
    LocationHeader,
    Day,
    Sidebar
  }
}
</script>

<style lang="scss">
  //global styles
  $primary-color:#333;
  $secondary-color:#222;
</style>
 
<!-- this component holds the main view -->
<template>
  <div id="home" :class="{ marginleft: isWide }">
    <div id="main--results" class="d-flex flex-column">
      <LocationHeader :cityName="cityName"/>
      <div class="list--days" v-for="(index) in 5" :key="index">
          <Day :index="index" :weeklyWeatherData="weeklyWeatherData"/>
      </div>
    </div>
  </div>
</template>

<script>
import LocationHeader from '@/components/Weather/Atoms/LocationHeader'
import Day from '@/components/Weather/Molecules/Day'

export default {
  name: 'home',
  data: function () {
    return {
      cityName:'',
      isWide:true,
    }
  },
  props:[
    'weeklyWeatherData'
  ],
    watch: {
      weeklyWeatherData: function() {
          this.initCity()
      },
  },
  components:{
    LocationHeader,
    Day
  },
  mounted () {
      this.checkWindow();
      window.addEventListener("resize", () => {
          this.checkWindow();
      });
  },
  methods:{
    initCity(){
      let city = this.weeklyWeatherData.body.city.name
      this.cityName = city
    },
    checkWindowWidth(){
      let ww = window.innerWidth;
      return ww;
    },
    checkWindow(){
        var w = this.checkWindowWidth()
        if(w > 991){
          this.isWide = true;
        }
        if(w <= 991){
          this.isWide = false;
        }
        return
    }
  }
}
</script>

<style lang="scss">
  #home{
    background-color:#0d39a8;
  }
  .list--days{
    margin-bottom:0;
  }
  .marginleft{
    margin-left:290px;
    
  }
</style>
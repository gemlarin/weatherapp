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
      test:'hi there!',
      concatedCity:String,
      cityName:String,
      stateName:'NY',
      mapsKey:'AIzaSyAjOSLkyD5mrpF870GVJwVVDpsbgAhH8lk',
      geoData:{}
    }
  },
  mounted(){
    //testing purposes only - remove before prod
    this.cityName ='Niagara Falls'
  },
  watch: {
    concatedCity:function(){
      this.queryGeoData();
    },
    cityName: function () {
      this.joinCity();
    },
    geoData: function () {
      this.initSearch();
    }
  },
  methods:{
    joinCity(){
      //some cities will have more than one word in name. To query the API, we need to replace the spaces with a +
      let str = this.cityName;
      let replaced = str.split(' ').join('+');
      this.concatedCity = replaced;
    },
    queryGeoData(){
      let queryString = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.concatedCity + ',' + this.stateName + "&key=" + this.mapsKey;
      this.$http.get(queryString)
      .then(response => {
        const data = response;
        this.geoData = data.body.results[0].geometry.location
        console.log(this.geoData.lat);
      })
    },
    initSearch(){
      let searchString = ""
      this.$http.get(searchString)
      .then(response => {
      
      })
      console.log('val: ' + this.geoData.lat)
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

  //pages
  #home{
    height:100vh;
    width:100vw;
  }

  //organisms
  #main--results{
    padding:20px 20px 0 20px;
    height:100vh;
    width:100vw;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
  }

  //moles
  .card.card--day{
    margin-top:10px;
    padding:20px;
  }

  //atoms
  .weather--icon{
    img{
      height:70px;
      width:auto;
    }
  }
  
</style>
 
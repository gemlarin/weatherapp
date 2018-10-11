<template>
    <div class="card card--day flex-grow-1">
        <p>Location: {{location}}</p>
        <p>Day: {{day}}</p>
        <p>Overview: {{overview}}</p>
        <p>High: {{hightemp}}</p>
        <p>Low: {{lowtemp}}</p>
        <p>Day: {{stringDay}}</p>
        <p>Month: {{stringMonth}}</p>
        <p>DayInt: {{intDay}}</p>
        <p>Year: {{intYear}}</p>
    </div>
</template>

<script>
export default {
  name: 'locationheader',
  data: function () {
    return {
        this_location: this.location,
        this_hightemp: this.hightemp,
        this_lowtemp: this.lowtemp,
        this_day: this.day
    }
  },
   props: [
       'location',
       'day',
       'overview',
       'hightemp',
       'lowtemp',
       'weathericon',
       'index'
    ],
    computed:{
        stringDay(){
            let stringday = this.getDateByIndex(this.index)[0]
            return stringday;
        },
        stringMonth(){
            let stringdate = this.getDateByIndex(this.index)[1]
            return stringdate;
        },
        intDay(){
            let intday = this.getDateByIndex(this.index)[2]
            return intday;
        },
        intYear(){
            let intyear = this.getDateByIndex(this.index)[3]
            return intyear;
        },
    },
    methods:{
        convertKtoF(val){
            const celsius = val - 273;
            let fahrenheit = Math.floor(celsius * (9/5) + 32);
            return fahrenheit;
        },
        getDateByIndex(index){
            const day = new Date();
            let indexDay = new Date(day);
            indexDay.setDate(day.getDate()+index);
            let stringDate = indexDay.toString()
            let stringData = this.splitDate(stringDate)
            return stringData   
        },
        splitDate(st){
            const splitString = st.split(" ");
            return splitString;
        }
    }
}
</script>

<style lang="scss">

</style>
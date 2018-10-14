<template>
    <div class="card--day d-flex" :class="{ 'padding--left': isWide }">
        <div class="date-wrap align-self-stretch">
            <h3>{{stringDay}}</h3>
            <p>{{stringMonth}} {{intDay}}, {{intYear}}</p>
        </div>
        <div class="icon--wrap">
            <img class="weather--icon" :src="iconPath" />
        </div>
        <div>
            <h4>{{highTemp}}/{{lowTemp}}</h4>
            <h5>{{condidtion}}</h5>
        </div>
    </div>
</template>

<script>
    import image01d from  '@/assets/weather-icons/01d.svg'
    import image01n from  '@/assets/weather-icons/01n.svg'
    import image02d from  '@/assets/weather-icons/02d.svg'
    import image02n from  '@/assets/weather-icons/02n.svg'
    import image03d from  '@/assets/weather-icons/03d.svg'
    import image03n from  '@/assets/weather-icons/03n.svg'
    import image04d from  '@/assets/weather-icons/04d.svg'
    import image04n from  '@/assets/weather-icons/04n.svg'
    import image09d from  '@/assets/weather-icons/09d.svg'
    import image09n from  '@/assets/weather-icons/09n.svg'
    import image10d from  '@/assets/weather-icons/10d.svg'
    import image10n from  '@/assets/weather-icons/10n.svg'
    import image11d from  '@/assets/weather-icons/11d.svg'
    import image11n from  '@/assets/weather-icons/11n.svg'
    import image13d from  '@/assets/weather-icons/13d.svg'
    import image13n from  '@/assets/weather-icons/13n.svg'
    import image50d from  '@/assets/weather-icons/50d.svg'
    import image50n from  '@/assets/weather-icons/50n.svg'
export default {
  name: 'day',
  data: function () {
    return {
        icon: String,
        iconPath:'',
        highTemp:0,
        lowTemp:0,
        isWide:true,
        condidtion:''
    }
  },
   props: [
       'index',
       'weeklyWeatherData'
    ],
    computed:{
        stringDay(){
            let stringday = this.getDateByIndex(this.index-1)[0]
            return stringday;
        },
        stringMonth(){
            let stringdate = this.getDateByIndex(this.index-1)[1]
            return stringdate;
        },
        intDay(){
            let intday = this.getDateByIndex(this.index-1)[2]
            return intday;
        },
        intYear(){
            let intyear = this.getDateByIndex(this.index-1)[3]
            return intyear;
        },
    },
    watch: {
        weeklyWeatherData: function() {
            this.selectWeatherIcon()
            this.intHighTemp()
            this.intLowTemp()
            this.initCondition()
        },
    },
    mounted () {
        this.checkWindow();
        window.addEventListener("resize", () => {
            this.checkWindow();
        });
    },
    methods:{
    checkWindowWidth(){
        let ww = window.innerWidth;
        return ww;
        },
        checkWindow(){
            var w = this.checkWindowWidth()
            if(w > 768){
            this.isWide = true;
            }
            if(w <= 768){
            this.isWide = false;
            }
            return
        },
        convertKtoF(val){
            const celsius = val - 273
            let fahrenheit = Math.floor(celsius * (9/5) + 32)
            return fahrenheit;
        },
        intHighTemp(){
            let intHigh = this.weeklyWeatherData.body.list[this.index-1].temp.max
            let conversion = this.convertKtoF(intHigh)
            this.highTemp = conversion
        },
        intLowTemp(){
            let intLow  = this.weeklyWeatherData.body.list[this.index-1].temp.min
            let conversion = this.convertKtoF(intLow)
            this.lowTemp = conversion
        },
        initCondition(){
            let stringCondidtion = this.weeklyWeatherData.body.list[this.index-1].weather[0].description
            this.condidtion = stringCondidtion
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
        },
        selectWeatherIcon(){
            let val = this.weeklyWeatherData.body.list[this.index-1].weather[0].icon, 
            path
            switch(val) {
                case '01d':
                    path = image01d
                    break;
                case '01n':
                    path = image01n
                    break;
                case '02d':
                    path = image02d
                    break;
                case '02n':
                    path = image02n
                    break;
                case '03d':
                    path = image03d
                    break;
                case '03n':
                    path = image03n
                    break;
                case '04d':
                    path = image04d
                    break;
                case '04n':
                    path = image04n
                    break;
                case '09n':
                    path = image09n
                    break;
                case '09d':
                    path = image09d
                    break;
                case '10n':
                    path = image10n
                    break;
                case '10d':
                    path = image10d
                    break;
                case '11n':
                    path = image11n
                    break;
                case '11d':
                    path = image11d
                    break;
                case '13n':
                    path = image13n
                    break;
                case '13d':
                    path = image13d
                    break;
                case '50n':
                    path = image50n
                    break;
                case '50d':
                    path = image50d
                    break;
                default: 
            }
            this.iconPath = path
        }
    }
}
</script>

<style lang="scss">
    .padding--left{
        padding-left:290px;
        max-width:700px !important;
    }
    .card--day{
        background-color:transparent !important;   
        max-width:400px;
        padding-bottom:15px;
        padding-top:15px;
        h4{
            font-size:40px !important;
            color:#fff !important;
            font-weight:300 !important;
            margin-bottom:0 !important;
        }
        h5{
            font-size:20px !important;
            color:#fff !important;
        }
        .weather--icon{
            width:70px;
            height:auto;
        }
        .icon--wrap{
            position:relative;
            margin-right:15px;
            width:100px;
            margin-bottom:0;
            border-right:1px solid #fff;
        }
    }
    .date-wrap{
        width:120px;
        position:relative;
        top:5px;
            h3{
                color:#fff !important;
                font-weight:700;
                margin-bottom:0;
                font-size:26px !important;
            }
            p{
                color:#fff !important;
                font-size:14px !important;
            }
    }
    

</style>
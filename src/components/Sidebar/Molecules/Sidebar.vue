
<template>  
    <div id="sidebar">
        <DrawerToggleButton className="drawerbutton"/>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="weather--icon">
                        <img src="@/assets/logo.svg" class="animated zoomIn" alt="weather icon" />
                    </div>
                </div>
                <div class="col-8">
                    <ul>
                        <li>
                            Date: {{ stringDay }}
                        </li>
                        <li>
                            Temp: {{ currentTemp }}
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SelectMenu class="select--menu" v-on:setState="onSetState" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DrawerToggleButton from '@/components/Sidebar/Atoms/DrawerToggleBtn.vue'
    import SelectMenu from '@/components/Sidebar/Atoms/SelectMenu.vue'
    import {TweenMax, Power4} from 'gsap'
    export default {
    name: 'sidebar',
    data(){
        return{
            selectedState:String,
            weatherData: this.currentWeather
        }
    },
    mounted () {
        TweenMax.set(this.$el, {
            x: this.$el.offsetWidth
        })
    },
    components:{
        DrawerToggleButton,
        SelectMenu
    },
    mounted(){
        console.log(this.currentWeather.body.name)
    },
    computed: {
        open () {
            return this.$store.state.ui.sidebarOpen
        },
        stringDay(){
            let stringday = this.getDateByIndex(0)[0]
            return stringday;
        },
        stringMonth(){
            let stringdate = this.getDateByIndex(0)[1]
            return stringdate;
        },
        intDay(){
            let intday = this.getDateByIndex(0)[2]
            return intday;
        },
        intYear(){
            let intyear = this.getDateByIndex(0)[3]
            return intyear;
        },
        currentTemp(){
            let currenttemp = this.currentWeather.body.main.temp
            let convertedTemp = this.convertKtoF(currenttemp)
            return convertedTemp
        }
    },
    methods:{
        onSetState(val){
            this.selectedState = val;
            this.$emit('setState', this.selectedState)
        },
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
            return stringData;   
        },
        splitDate(st){
            const splitString = st.split(" ");
            return splitString;
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
    },
    props: [
       'currentWeather'
    ]
}
</script>
<style lang="scss">
    #sidebar{
        position:absolute;
        width:300px;
        left:-300px;
        top:0;
        background: #21b5ef; /* Old browsers */
        background: -moz-linear-gradient(top, #2e65f0 0%, #1d51d4 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #2e65f0 0%,#1d51d4 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #2e65f0 0%,#1d51d4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e65f0', endColorstr='#1d51d4',GradientType=0 ); /* IE6-9 */
        height:100vh;
        z-index:300;
    }
    .select--menu{
        margin-top:40px;
    }
</style>
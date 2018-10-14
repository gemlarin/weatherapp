<template>
    <input class="form-control query animated zoomIn align-self-stretch" v-model="city" placeholder="Search by keyword" type="text" /> 
</template>
<script>
    //import {clearSearchBus} from './../../main.js'
    export default {
        name: 'inputfield',
        data () {
            return {
              city:''
            }
        },
        mounted(){
            // clearSearchBus.$on('clearsearch', () => {
            //     this.clear();
            // });
        },
        watch: {
            city: function (val) {
                this.city = val
                this.$emit('setCity', this.city)
            }
        }
    }
</script>
<style lang="scss">
   input.query{
       margin-top:5px;
       height:42px;
       margin-right:5px;
       border-radius:3px;
       border-color:#fff;
       font-size:13px;
       padding-left:24px;
       display:inline-block;
   }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size:12px !important;
        opacity: 1; /* Firefox */
        color:#999 !important;
  
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
         font-size:12px !important;
         color:#999 !important;
      
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
         font-size:12px !important;
         color:#999 !important;
       
    }
</style>
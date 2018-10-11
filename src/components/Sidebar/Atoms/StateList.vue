<template>
     <label class="option">
      <input type="radio" @click="setstate" name="option" v-bind:value="state" v-model="selectedState">
      <span class="title animated fadeIn">{{ state }}</span>
    </label>
</template>
<script>
    export default {
        data () {
            return {
                selectedState:''
            }
        },
        methods:{
            setstate(){
                this.$emit('setState', this.state)
            }
        },
        name: 'statelist',
        props:['state']
    }
</script>
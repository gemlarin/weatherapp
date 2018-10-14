<template>
    <div class="search--btn animated align-self-stretch zoomIn" @click="startSearch"><img src="@/assets/magnifier-tool.svg" alt="search" /></div>  
</template>
<script>
    export default {
        name: 'searchbutton',
        methods:{
            startSearch(){
                this.$emit('startSearch')
            }
        }
    }
</script>
<style lang="scss">
    .search--btn{
        margin-top:5px;
        border-radius:4px;
        border:1px solid #6287e6;
        padding:5px 10px;
        background-color:transparent;
        cursor:pointer;
        &:hover{
            background-color:#3162df;
        }
        img{
            height:18px;
            padding-left:10px;
            padding-right:10px;
        }
    }
</style>
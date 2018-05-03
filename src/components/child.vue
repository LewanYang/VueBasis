<template>
    <div>
        <slot v-for="item in list" :item="item"></slot>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:['beckham','jay','kfc']
            }
        }
    }
</script>
<style>

</style>
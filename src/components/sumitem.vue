<template>
    <div @click="handleClick">{{number}}</div>
</template>
<script>
    export default {
        data() {
            return {
                number: 0
            }
        },
        methods: {
            handleClick:function(){
                this.number++
                this.$emit('changenum')
            }
        }
    }
</script>
<style>

</style>
<template>
    <div @click="handleClick">{{currentNumber}}</div>
</template>
<script>
    export default {
        props: {
            count: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                currentNumber: this.count
            }
        },
        methods: {
            handleClick:function(){
                this.currentNumber++
                this.$emit('inc',1)
            }
        }
    }
</script>
<style>

</style>
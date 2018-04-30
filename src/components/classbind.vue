<template>
    <div>
        <h2 @click="changeColor" :class="[isActived]">Beckham</h2>
        <div v-if="show">拜仁慕尼黑</div>
        <div v-else>德国队</div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                isActived: '',
                show: false
            }
        },
        methods: {
            changeColor: function () {
                this.isActived = this.isActived === '' ? 'colorRed' : ''
            }
        }
    }
</script>
<style type="text/css">
    .colorRed {
        color: red;
    }
</style>
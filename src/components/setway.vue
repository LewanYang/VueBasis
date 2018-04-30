<template>
    <div>
        <span>关于set方法在数组和对象中的使用</span>
        <ul>
            <li v-for="item in arr">{{item}}</li>
        </ul>
        <button @click="changeArr">改变数据</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr:[
                    'beckham',
                    'airJordan',
                    'test',
                    'muller',
                    'gordan'
                ]
            }
        },
        methods: {
            changeArr: function(){
                this.$set(this.arr,1,'honda')
            }
        }
    }
</script>
<style>

</style>
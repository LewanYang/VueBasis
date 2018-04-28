<template>
    <div id="app">
        <input type="text" v-model="inputValue">
        <button @click="addItem">提交</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                inputValue: '',
                list: []
            }
        },
        methods: {
            addItem:function(){
                this.list.push(this.inputValue)
                this.inputValue=''
            }
        }
    }
</script>
<style>

</style>
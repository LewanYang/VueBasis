<template>
    <div id="app">
        <input type="text" v-model="inputValue">
        <button @click="addItem">提交</button>
        <todo-item :list="list" @delete="deleteItem"></todo-item>
        <methods></methods>
        <class-bind></class-bind>
        <set-way></set-way>
        <table-file></table-file>
        <sum-item ref="one"  @changenum="sumNumber"></sum-item>
        <sum-item ref="two" @changenum="sumNumber"></sum-item>
        <div>{{sum}}</div>
        <br>
        <span>------------------------------------------------------------</span>
        <send-data :count="3"></send-data>
        <send-data :count="2"></send-data>
    </div>
</template>
<script>
    import TodoItem from './components/todoitem.vue'
    import Methods from './components/methods.vue'
    import ClassBind from './components/classbind.vue'
    import SetWay from './components/setway.vue'
    import TableFile from './components/table.vue'
    import SumItem from './components/sumitem.vue'
    import SendData from './components/senddata.vue'
    export default {
        data(){
            return {
                inputValue: '',
                list: [],
                sum: 0
            }
        },
        methods: {
            addItem:function(){
                this.list.push(this.inputValue)
                this.inputValue=''
            },
            deleteItem:function(index){
                //alert(index)
                this.list.splice(index,1)
            },
            sumNumber:function(){
                console.log(this.$refs.one.number)
                console.log(this.$refs.two.number)
                this.sum=this.$refs.one.number+this.$refs.two.number
            }
        },
        components: {
            TodoItem,
            Methods,
            ClassBind,
            SetWay,
            TableFile,
            SumItem,
            SendData
        }
    }
</script>
<style>

</style>
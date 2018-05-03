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
        <send-data :count="3" @inc="increaseNum"></send-data>
        <send-data :count="2" @inc="increaseNum"></send-data>
        <div>{{total}}</div>

        <span>-----------------------------------------------------------</span>
        <h1>使用作用域slot插槽</h1>
        <child>
            <template slot-scope="props">
                <h1>{{props.item}}</h1>
            </template>
        </child>

        <span>---------------------------------------------------------------</span>
        <h1>CSS动画原理</h1>
        <carton></carton>
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
    import Child from './components/child.vue'
    import Carton from './components/carton.vue'
    export default {
        data(){
            return {
                inputValue: '',
                list: [],
                sum: 0,
                total: 5
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
            },
            increaseNum:function(num){
                this.total += num
            }
        },
        components: {
            TodoItem,
            Methods,
            ClassBind,
            SetWay,
            TableFile,
            SumItem,
            SendData,
            Child,
            Carton
        }
    }
</script>
<style>

</style>
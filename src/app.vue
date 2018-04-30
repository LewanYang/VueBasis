<template>
    <div id="app">
        <input type="text" v-model="inputValue">
        <button @click="addItem">提交</button>
        <todo-item :list="list" @delete="deleteItem"></todo-item>
        <methods></methods>
        <class-bind></class-bind>
        <set-way></set-way>
    </div>
</template>
<script>
    import TodoItem from './components/todoitem.vue'
    import Methods from './components/methods.vue'
    import ClassBind from './components/classbind.vue'
    import SetWay from './components/setway.vue'
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
            },
            deleteItem:function(index){
                //alert(index)
                this.list.splice(index,1)
            }
        },
        components: {
            TodoItem,
            Methods,
            ClassBind,
            SetWay
        }
    }
</script>
<style>

</style>
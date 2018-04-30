<template>
    <div>
        <ul>
            <li v-for="(item,index) in list"  @click="deleteItem(index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            list: {
                type: Array,
                required: true
            }
        },
        methods: {
            deleteItem:function(index){
                this.$emit('delete',index)
            }
        }
    }
</script>
<style>

</style>
<template>
    <div>
        <h2>{{fullName}}</h2>
        <!--<h1>{{fullName()}}</h1>-->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                firstName: 'jay',
                lastName: 'chou'
            }
        },
        //计算属性
        computed: {
            fullName(){
                return this.firstName + " " + this.lastName
            }
        },
//        methods: {
//            fullName:function(){
//                return this.firstName + " " + this.lastName
//            }
//        }

    }
</script>
<style>

</style>
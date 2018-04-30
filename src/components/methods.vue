<template>
    <div>
        <h2>{{fullName}}</h2>
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
        computed: {
            fullName(){
                return this.firstName + " " + this.lastName
            }
        }
    }
</script>
<style>

</style>
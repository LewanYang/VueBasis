<template>
    <div>
        <ul>
            <li v-for="(item,index) in list">{{item}}</li>
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
        }
    }
</script>
<style>

</style>
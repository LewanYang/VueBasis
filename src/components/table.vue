<template>
    <div>
        <div ref="open" @click="handleClick">bayern</div>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick: function(){
                console.log(this.$refs.open.innerHTML)
            }
        }
    }
</script>
<style>

</style>
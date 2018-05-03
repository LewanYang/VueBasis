<template>
    <div>
        <transition name="beauty">
            <div v-if="show">hello world</div>
        </transition>
        <button @click="handleClick">改变</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                show: true
            }
        },
        methods: {
            handleClick: function () {
                this.show = !this.show
            }
        }
    }
</script>
<style type="text/css">
    .beauty-enter {
        opacity: 0;
    }

    .beauty-enter-active {
        transition: opacity 2s
    }

    .beauty-leaves-to {
        opacity: 0;
    }

    .beauty-leave-active {
        transition: opacity 2s
    }
</style>
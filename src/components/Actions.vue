<template>
    <div class="container">
        <button class="btn btn-success" @click="updateCounter(1)">Add</button>
        <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
    </div>
</template>

<script>

    export default {
        name: "Actions",
        methods:{
            updateCounter(val)
            {
                this.$store.dispatch('asyncChangeCounter',{
                    val,timeOutDelay:500
                });
            }
        }
    }

</script>

<style scoped>

</style>
<template>
    <div class="container">
        <h2>Second Counter: {{counter}}</h2>
    </div>
</template>

<script>
    export default {
        name: "SecondCounter",
        computed:{
            counter()
            {
                return this.$store.getters.computedCounter;
            }
        },
    }
</script>

<style scoped>

</style>
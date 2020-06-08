<template>
    <div>
        <h1> Car id {{id}}</h1>
        <button class="btn btn-sm btn-default mb-2" @click="goBack">Back</button>
        <br>
        <router-link class="btn btn-info mt-2"
        tag="button" :to="{name:'carInfo',params:{id}, query:{name:'Mazda',year:2000},hash:'#scroll'}"
        >
            Full Info
        </router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data()
        {
            return {
                id:this.$route.params['id']
            }
        },
        methods:{
            goBack()
            {
               this.$router.push('/cars');
            }
        },
        watch:{
            $route(toRoute)
            {
                this.id = toRoute.params['id'];
            }
        },
        beforeRouteLeave(to,fromRouter,next)
        {
           next(window.confirm('Уходим?'));
        }
    }
</script>

<style scoped>

</style>
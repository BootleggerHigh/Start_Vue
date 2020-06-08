<template>
    <div>
        <h4>
            Car name : {{$route.query.name}}
        </h4>
        <h5>
            Car year : {{$route.query.year}}
        </h5>
        <div class="scroll">
            <h6 id="scroll">Hello,Bottom</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarInfo",
        computed:
            {
            beforeRouterEnter(to,fromRoute,next)
            {
               return  next();
            }
        }
    }
</script>

<style scoped>
.scroll{
    width: 100px;
    height: 1000px;
    background: #ccc;
}
</style>
<template>
    <div class="container pt-2">
        <div class="form-group">
            <label for="name">Car Name</label>
            <input id="name" type="text" class="form-control" v-model.trim="carName">

        </div>

        <div class="form-group">
            <label for="year">Car year</label>
            <input id="year" type="number" class="form-control" v-model.number="carYear">
        </div>
        <button class="btn btn-primary" @click="createCar">Create Car</button>
        <button class="btn btn-success" @click="loadCars">Load Cars</button>
        <hr>
        <ul class="list-group">
            <h3> Full list Cars</h3>
            <li class="list-group-item"
                v-for="car of cars" :key="car.id"> <b>{{car.name}}</b> - {{car.year}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data()
        {
            return{
                carName:'',
                carYear:0,
                cars:[],
                resource:null,
            }
        },
        methods:{
           async createCar()
            {
                const car = {
                    name:this.carName,
                    year:this.carYear,
                };
                try {
                    await this.resource.save({},car);
                }
                catch (e) {
                    console.dir(e.message);
                }
            },
            async loadCars()
            {
                try {
                    const get_cars_request = await this.resource.get();
                    this.cars = await get_cars_request.json();
                }
                catch (e) {
                    console.dir(e.message);
                }
            },
        },
        created()
        {
            this.resource = this.$resource('cars');
        }
    }
</script>

<style scoped>

</style>
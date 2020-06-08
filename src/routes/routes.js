import VueRouter from "vue-router";

import Home from "../components/pages/Home";
import CarInfo from "../components/pages/CarInfo";
import ErrorCmp from "../components/pages/Error";

const Cars = resolve=>{
    require.ensure(['../components/pages/Cars'],()=>{
       resolve(
           require('../components/pages/Cars')
       );
    });
}
const Car = resolve =>{
    require.ensure(['../components/pages/Car'],()=>{
       resolve(
           require('../components/pages/Car')
       )
    });
}
export  default  new VueRouter(
    {
        routes:[
            {
                path:'',
                component:Home,
            },
            {
                path: '/cars',
                component: Cars,
                name:'Cars',
            },
            {
                path:'/car/:id',
                component: Car,
                children:[
                    {
                        path:'info',
                        component:CarInfo,
                        name:'carInfo',
                        beforeEnter(to,from,next)
                        {
                            next();
                        }
                    }
                ],
            },
            {
                path: '/none',
                redirect:{
                    name:'Cars'
                },
            },
            {
                path: '*',
                component: ErrorCmp,
            }
        ],
        mode:'history',
        scrollBehavior(to,_,savedPosition)
        {
            if(savedPosition) return savedPosition;
            if(to.hash)
            {
                return  {selector: to.hash}
            }
            return{
                x:0,
                y:0,
            }
        }
    },
);
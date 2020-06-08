export default {
    state:{
        counter:0,
    },
    mutations:{
        changeCounter(state,payload)
        {
            state.counter +=payload;
        }
    },
    actions:{
        asyncChangeCounter({commit},payload)
        {
            setTimeout(()=>{
                commit('changeCounter',payload.val);
            },payload.timeOutDelay)
        }
    },
    getters:{
        computedCounter(state)
        {
            return  state.counter * (101-1/5*100e-1)
        },
    }
}
//vuex同步存储
const mutations = {
    setUserName: (state, data) =>{
        state.username = data;
    },
    setNavType: (state, data) =>{
        state.navType = data;
    },
    setNavList: (state, data) =>{
        state.navList = data;
    },
    setJerseyList: (state, data) =>{
        state.jerseyList = data;
    },  //球衣
    setTrainingList: (state, data) =>{
        state.trainingList = data;
    },  //训练系列
    setEquipList: (state, data) =>{
        state.equipList = data;
    },  //装备
    setDiscountList:(state, data) =>{
        state.discountList = data
    },  //折扣区

    setProd: (state, data) =>{
       state.prod.name = data.name;
       state.prod.id = data.id;
    }
}

export default mutations;
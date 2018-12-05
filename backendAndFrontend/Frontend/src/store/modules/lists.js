import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const state = {
  data: [],
  list: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },

['REQUEST_LIST_SUCCESS'] (state, data){
   state.list = data;
}

};

const actions = {
  async fetchLists({ commit }) {
    const res = await axios.get('http://localhost:3000/list/all');
    commit(REQUEST_SUCCESS, res.data);
  
  },

  async fetchList({ commit }, name) {
    const res = await axios.get(`http://localhost:3000/list/${name}/json`);
    console.log(res);
    commit('REQUEST_LIST_SUCCESS', res.data)
  },
};

export default {
  state,
  mutations,
  actions,
};

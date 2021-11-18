import axios from "axios";

const url = "http://tecnored.xyz:4000/product";

const state = {
  randomProducts: []
}

const getters = {
  randomProducts: (state) => state.randomProducts
}

const actions = {
  async getRandomProducts({commit}){
    const response = await axios.get(url);
    const length = response.data.length;
    
    let randomArray = [];
    while (randomArray.length != 6) {
      let newNum = Math.floor(Math.random() * length)
      if (!randomArray.includes(newNum)) {
        randomArray.push(newNum);
      } 
    }

    let save = [];
    randomArray.forEach(element => {
      save.push(response.data[element])
    });

    commit("setRandomProducts",save)
  }
}

const mutations = {
  setRandomProducts: (state, randomProducts) => (state.randomProducts = randomProducts),
}

export default { state, getters, actions, mutations };
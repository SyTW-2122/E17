import axios from "axios";

const urlBackend = process.env.VUE_APP_APIURL || "http://localhost:4000"
const url = urlBackend + "/product";

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
    let showProductAmount = 6;

    if(length < 6) {
      showProductAmount = length;
    }

    let randomArray = [];
    while (randomArray.length != showProductAmount) {
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
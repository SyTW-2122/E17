const state = {
  ProductsInCart: []
}

const getters = {
  ProductsInCart: (state) => {state.ProductsInCart}
}

const actions = {
  addProductInCart({commit}, product) {
    const data = {
      "id": product.id,
      "imgURL": product.imgURL,
      "name": product.name,
      "price": product.price,
      "amount": 1
    }
    commit("addProduct", data);
  },
  removeProductInCart({commit}, product) {
    const data = {
      "id": product.id,
      "imgURL": product.imgURL,
      "name": product.name,
      "price": product.price,
      "amount": 1
    }
    commit("removeProduct", data);
  },
}

const mutations = {
  addProduct: (state, data) => {
    // console.log("Añadiendo Producto")
    let productFindIndex = -1;

    if(state.ProductsInCart.length === 0) {
      // console.log("Iniciando el vector");
      state.ProductsInCart.push(data);
    }
    else {
      state.ProductsInCart.forEach((element,index) => {
        if(element.id === data.id) {
          // console.log("Misma ID");
          productFindIndex = index;
        }
      });
      if(productFindIndex > -1) {
        state.ProductsInCart[productFindIndex].amount++;
      }
      else {
        state.ProductsInCart.push(data);
      }
    }
    // console.log(state.ProductsInCart);
  },
  removeProduct: (state, data) => {
    // console.log("Eliminando Producto")
    state.ProductsInCart.forEach((element,index) => {
      if(element.id === data.id){
        if(element.amount > 1) { 
          element.amount--;
          // console.log("Tiene mas de 1");
        }
        else {
          delete state.ProductsInCart[index];
        }
      }
    })
    // console.log(state.ProductsInCart);
  }
}

export default { state, getters, actions, mutations };
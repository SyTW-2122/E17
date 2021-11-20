const state = {
  ProductsInCart: [],
  AllPriceInCart: 0 
}

const getters = {
  ProductsInCart: (state) => (state.ProductsInCart),
  AllPriceInCart: (state) => (state.AllPriceInCart)
}

const actions = {
  addProductInCart(_ ,product) {
    const data = {
      "id": product.id,
      "imgURL": product.imgURL,
      "name": product.name,
      "price": product.price,
      "amount": 1,
      "totalPrice": product.price
    }

    state.AllPriceInCart = Math.round((state.AllPriceInCart += data.price)*100)/100;

    console.log("Añadiendo Producto")
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
        state.ProductsInCart[productFindIndex].totalPrice += data.price;
      }
      else {
        state.ProductsInCart.push(data);
      }
    }
    console.log(state.ProductsInCart);

  },
  removeProductInCart(_, product) {
    const data = {
      "id": product.id,
      "price": product.price,
    }

    state.AllPriceInCart = Math.round((state.AllPriceInCart -= data.price)*100)/100;

    console.log("Eliminando Producto")
    state.ProductsInCart.forEach((element,index) => {
      if(element.id === data.id){
        if(element.amount > 1) { 
          element.amount--;
          element.totalPrice -= data.price;
          // console.log("Tiene mas de 1");
        }
        else {
          delete state.ProductsInCart[index];
        }
      }
    })
    console.log(state.ProductsInCart);
  },
}


export default { state, getters, actions };
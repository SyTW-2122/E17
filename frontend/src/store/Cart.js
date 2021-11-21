import swal from "sweetalert2";

const state = {
  ProductsInCart: [],
  AllPriceInCart: 0 
}

const getters = {
  ProductsInCart: (state) => (state.ProductsInCart),
  AllPriceInCart: (state) => (state.AllPriceInCart)
}

const actions = {
  RealizarCompra(){
    swal.fire({
      title: "Enhorabuena",
      html: 'Su pedido se ha realizado con éxito. <br>Muchas gracias por su compra!',
      imageUrl: 'https://tecnored.xyz/SyTW/cartimg/cartfull.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Carrito Lleno',
      confirmButtonText: 'Vale'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href="/"
      }
    });
  },
  VaciarCarrito(){
    swal.fire({
      title: "Vaya!",
      text: 'Ha eliminado todos los productos del carrito',
      imageUrl: 'https://tecnored.xyz/SyTW/cartimg/cartempty.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Carrito Vacio',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href="/"
      }
    });
  }
}

const mutations = {
  addProductInCart(state ,product) {
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
        state.ProductsInCart[productFindIndex].totalPrice = Math.round((state.ProductsInCart[productFindIndex].totalPrice += data.price)*100)/100;
      }
      else {
        state.ProductsInCart.push(data);
      }
    }
    console.log(state.ProductsInCart);
  },
  removeProductInCart(state, product) {
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
          element.totalPrice = Math.round((element.totalPrice -= data.price)*100)/100;
          // console.log("Tiene mas de 1");
        }
        else {
          delete state.ProductsInCart[index];
        }
      }
    })
    console.log(state.ProductsInCart);
  }
}


export default { state, getters, actions, mutations };
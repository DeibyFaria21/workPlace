//Importaciones
import { promises as fs } from 'fs'
/////////////////////////////////////////////////////////////
/* const fs = require('fs').promises */


//Contruyendo la clase y los métodos utilizables para los carritos
class CartManager {
  constructor(filePath) {
    this.carts = []
    this.cartId = 1
    this.path = 'proyectoFinal/carts.json'
  }


//Metdo para agregar carrito con propiedades específicas
  async createCart() {
    const carts = await this.getCarts()
    const cart = {
      cid: carts?.length+1,
      products: []
    };

    this.carts.push(cart);
    this.jsonWriteCarts()
    return cart
  }


  //Metodo para leer y agregar carritos al archivo carts.json
  async jsonWriteCarts() {
    try {
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2));
        console.log('(MG) Carrito creado con éxito');
    } catch (error) {
        console.log('writeCartsToFile error:', error);
    }
  }
  /* jsonWriteCarts() {
    fs.writeFile(this.path, JSON.stringify(this.carts, null, 2))
    .then(() => {
      console.log('(MG) Carrito creado con éxito');
    })
    .catch((err) => {
      console.log('writeCartsToFile error:', err);
    });
  } */


//Creo metodo getCarts
  async getCarts() {
    try {
      const data = await fs.readFile(this.path, 'utf-8')
      const cartsJson = JSON.parse(data)
      console.log('Archivo en getCarts leído correctamente')
      return cartsJson
    } catch (error) {
      console.log('ERROR: Archivo en getCarts no leído')
      throw error
    }
  }
  
  //Creo metodo getProductsById
  async getCartsById(cid) {
    try {
      const data = await fs.readFile(this.path, 'utf-8')
      const cartsJson = JSON.parse(data)
      const cart = cartsJson.find((cart) => cart.cid === cid)
  
      if (!cart.cid) {
        const error = '(MG) Carrito especificado no encontrado'
        console.log(error)
        return error
      }
  
      console.log('(MG) Carrito especificado encontrado:', cart)
      return cart
    } catch (error) {
      console.log('ERROR: (MG) Archivo de carrito especificado no leído')
      throw error
    }
  }
}

/* const manager = new CartManager() */
export default CartManager;
/* module.exports = CartManager */
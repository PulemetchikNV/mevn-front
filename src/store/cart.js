import { sum } from 'ramda'

const mutations = {
  addToCart(state, product) {
    const productInCart = state.cartItems.find(({ _id }) => product._id === _id)
    if (productInCart) {
      const curProdsInCart = state.cartItems
      state.cartItems = curProdsInCart.filter(({ _id }) => product._id !== _id)
    } else {
      state.cartItems.push(product)
    }
  },
}
const actions = {}
const getters = {
  cartTotalPrice: ({ cartItems }) => sum(cartItems.map((item) => item.price)),
  cartCount: ({ cartItems }) => cartItems.length,
  cart: ({ cart }) => cart,
  cartItems: ({ cartItems }) => cartItems,
}
const state = () => ({
  cart: {
    total: 0,
  },
  cartItems: [],
})
export default {
  mutations,
  actions,
  getters,
  state,
}

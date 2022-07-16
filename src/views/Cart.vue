<template>
  <div class="container">
    <template v-if="cartItems">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, key) in cartItems" :key="key">
          {{ item.title }} - {{ item.price }}
        </li>
      </ul>
      <div class="panel">Quantity: {{ cartCount }} Total: {{ cartTotalPrice }}$</div>
    </template>
    <template v-else>
      <img
        src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png"
        class="empty-image"
      />
      <hr />
      Your cart is empty, please add items
    </template>
  </div>
</template>
j
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartCount: 'cartCount',
    }),
  },
}
</script>
<style scoped>
.empty-image {
  width: 500px;
}
.cart-container {
  text-align: center;
}
</style>

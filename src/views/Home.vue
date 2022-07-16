<template>
  <div class="home">
    <div class="product-list">
      <ProductCard
        v-for="(product, key) in products"
        :key="key"
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        :id="product.id"
        @add-to-cart="addToCart(product)"
        :inCart="cartItemsIds.includes(product._id)"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    ProductCard: () => import('@/components/ProductCard'),
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems'
    }),
    cartItemsIds: ({cartItems}) => cartItems.map(({_id})=>_id)
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations({
      addToCart: 'addToCart',
    }),
  },
}
</script>
<style lang="scss" scoped>
.product-list {
  display: flex;
}
</style>

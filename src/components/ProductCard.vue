<template>
  <div class="card">
    <div class="card_header">{{ title }} - {{ price }}$</div>
    <div class="banner" :style="`background-image: url(${imageUrl})`"></div>
    <div class="card_footer">
      <button class="btn btn-info" v-if="!inCart" @click="$emit('add-to-cart')">
        В корзину
      </button>
      <button class="btn btn-danger" v-else @click="$emit('add-to-cart')">
        Убрать из корзины
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    inCart: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style lang="scss">
.card {
  width: 340px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 12px;
  text-align: center;
  .banner {
    width: 100%;
    height: 85%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &_footer {
    padding: 10px;
  }
}
</style>

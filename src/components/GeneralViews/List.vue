<template>
  <div>
    <h2 class='title is-2'>Stored Products</h2>
    <div class="columns is-multiline">
      <div class="column is-two-thirds" v-for='(product,index) in products' :key="index">
        <product :data='product' :isStored='true'/>
      </div>
    </div>

  </div>
</template>
<script>
  import Product from '../Product';
  import {
    getAllStoredProducts,
  } from '../../services/Products';

  export default {
    components: {
      Product,
    },
    name: 'List',
    data() {
      return {
        products: [],
      };
    },
    async beforeRouteEnter(to, from, next) {
      const response = await getAllStoredProducts();
      next(vm => vm.setProducts(response.data));
    },
    methods: {
      setProducts(products) {
        this.products = products;
      },
    },

  };

</script>
<style scoped>


</style>

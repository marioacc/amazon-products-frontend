<template>
  <div class="card product">
    <header class="card-header">
      <p class="card-header-title" v-text='data.ItemAttributes[0].Title[0]'>

      </p>
    </header>
    <div class="card-content">
      <div class="content">
        Product ASIN:
        <span v-text='data.ASIN[0]'></span>
        <br>
        <a :href="data.DetailPageURL[0]" target="_blank">Go to Amazon</a>

      </div>
    </div>
    <footer class="card-footer">
      <div class=" card-footer-item">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" :checked='isStored' @click='saveProduct'> Save this product
          </label>
        </div>
      </div>
      <router-link class="card-footer-item" :to="'/detail/'+data.ASIN[0]">Go To Details</router-link>

    </footer>
  </div>
</template>
<script>
  import {
    saveProduct,
    deleteProduct,
  } from '../services/Products';

  export default {
    props: ['data', 'isStored'],
    name: 'Product',
    methods: {
      async saveProduct(event) {
        // eslint-disable-next-line
        const saveThisProduct = event.target.checked;
        if (saveThisProduct) {
          try {
            await saveProduct(this.data);
            // eslint-disable-next-line
            console.log('stored');
          } catch (error) {
            // eslint-disable-next-line
            console.error('Error while saving product')
          }
        } else {
          try {
            await deleteProduct(this.data.ASIN);
            // eslint-disable-next-line
            console.log('deleted');
          } catch (error) {
            // eslint-disable-next-line
            console.log('Error while removing product');
          }
        }
      },
    },
  };

</script>
<style scoped>
  .product {
    margin-bottom: 10px;
  }

</style>

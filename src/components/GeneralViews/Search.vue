<template>


  <div>
    <h2 class='title is-2'>Search for a product</h2>
    <div class="columns">
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Keyword</label>
          <div class="control">
            <input class="input" type="text" placeholder="Keyword" @keyup.enter='search(keyword)' v-model='keyword'>
          </div>
        </div>
        <div class="control">
          <button class="button is-link" @click="search(keyword)">Search
            <span class="icon">
              <i v-show='isSearching' class="fa fa-spinner fa-spin"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="column is-two-thirds">
        <product :data='product' v-for='(product,index) in products' :key="index" />
        <h3 v-show='noResultsFound' class='title is-3 has-text-centered'>No products found</h3>
      </div>
    </div>


  </div>
</template>
<script>
  import {
    searchProduct,
  } from '../../services/Products';
  import Product from '../Product';

  export default {
    components: {
      Product,
    },
    name: 'Search',
    data() {
      return {
        keyword: '',
        products: [],
        isSearching: false,
        noResultsFound: false,
      };
    },
    methods: {
      async search(keyword) {
        this.isSearching = true;
        this.products = [];
        try {
          const response = await searchProduct(keyword);
          this.products = response.data;
          this.noResultsFound = this.products.length === 0;
        } catch (error) {
          // eslint-disable-next-line
          console.error('Error while searching :' + error);
        }
        this.isSearching = false;
      },
    },
  };

</script>
<style scoped>


</style>

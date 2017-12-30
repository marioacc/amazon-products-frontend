<template>
  <div>
    <h2 class='title is-2'>Product Details</h2>
    <table class="table is-striped" v-if='product.ASIN'>
      <thead>
        <tr>
          <th>Product Data</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ASIN</td>
          <td v-text='product.ASIN[0]'></td>
        </tr>
        <tr v-for="(url,index) in product.DetailPageURL" :key='index'>
          <td>Amazon Page</td>
          <td>
            <a :href="url" targe='_blank'>Go</a>
          </td>
        </tr>
        <tr v-for="(data,index) in product.ItemLinks[0].ItemLink" :key='index'>
          <td>{{data.Description[0] }} Link</td>
          <td>
            <a :href="data.URL[0] " targe='_blank'>Go</a>
          </td>
        </tr>

        <tr v-for="(attr,key) in attributes" :key='key'>
          <td>{{key}}</td>
          <td>{{attr}}</td>
        </tr>



      </tbody>
    </table>
  </div>
</template>
<script>
  import {
    getProductByANSI,
  } from '../../services/Products';
  import Product from '../Product';

  export default {
    components: {
      Product,
    },
    name: 'Detail',
    props: ['ASIN'],
    data() {
      return {
        product: {},
      };
    },
    created() {
      this.fetchData();
    },
    watch: {
      // call again the method if the route changes
      $route: 'fetchData',
    },
    methods: {
      async fetchData() {
        const response = await getProductByANSI(this.ASIN);
        this.product = response.data;
      },
    },
    computed: {
      attributes() {
        const result = {};
        let counter;
        const self = this;
        debugger;
        /* eslint-disable */
        Object.keys(this.product.ItemAttributes[0]).forEach(key => {
          counter = 1;
          for (const attr of self.product.ItemAttributes[0][key]) {
            result[`${key} ${counter}`] = attr._ ? attr._ : attr;
            counter += 1;
          }
        })

        console.log(result);
        return result;
      },
    },
  };

</script>
<style>


</style>

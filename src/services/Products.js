import axios from 'axios';

const BASE_URL = 'http://localhost:7777';
const SEARCH_PRODUCT_PATH = '/search';
const DETAIL_PRODUCT_PATH = '/stored';
const ALL_PRODUCTS_PATH = '/stored/all';
const axiosInst = axios.create({
  baseURL: BASE_URL,
});

async function searchProduct(keyword) {
  const products = await axiosInst.get(`${SEARCH_PRODUCT_PATH}/${encodeURI(keyword)}`);
  return products;
}


async function getProductByANSI(ID) {
  const products = await axiosInst.get(`${DETAIL_PRODUCT_PATH}/${ID}`);
  return products;
}

async function getAllStoredProducts() {
  const products = await axiosInst.get(ALL_PRODUCTS_PATH);
  return products;
}

async function saveProduct(product) {
  const savedProduct = await axiosInst.post(DETAIL_PRODUCT_PATH, {
    data: product,
  });
  return savedProduct;
}

async function deleteProduct(id) {
  const product = await axiosInst.delete(DETAIL_PRODUCT_PATH, {
    ASIN: id,
  });
  return product;
}

export {
  searchProduct,
  getAllStoredProducts,
  getProductByANSI,
  saveProduct,
  deleteProduct,
};

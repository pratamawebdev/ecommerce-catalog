<script>
import ProductCards from "../Fragments/ProductCards.vue";
import UnavailableProduct from "../Fragments/UnavailableProduct.vue";
import SkeletonLoad from "../Fragments/SkeletonLoad.vue";
import { fetchData } from "../../utils/api";

export default {
  name: "ProductLayouts",
  components: { ProductCards, UnavailableProduct, SkeletonLoad },
  data() {
    return {
      isLoading: false,
      products: {
        data: {
          category: "",
        },
      },
      index: 0,
      setRating: 0,
      sisaRating: 0,
      isProductUnavailable: false,
    };
  },
  methods: {
    async getProductbyId() {
      this.isLoading = true;

      if (this.index !== 20) {
        this.index++;
      } else {
        this.index = 1;
      }

      let data = await fetchData(this.index);

      if (
        data.category === "men's clothing" ||
        data.category === "women's clothing"
      ) {
        this.products = { data };
        this.isProductUnavailable = true;

        this.setRating = Math.round(data.rating.rate);
        this.sisaRating = 5 - this.setRating;
      } else {
        this.products = {};
        this.isProductUnavailable = false;
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.getProductbyId();
  },
};
</script>

<template>
  <div class="container bg-load">
    <SkeletonLoad v-if="isLoading" />

    <div
      v-else
      :class="{
        container: true,
        'bg-unavailable': !isProductUnavailable,
        'bg-men-color':
          products.data && products.data.category === 'men\'s clothing',
        'bg-women-color':
          products.data && products.data.category === 'women\'s clothing',
      }"
    >
      <div class="overlay">
        <img src="../../assets/images/bg-pattern.svg" alt="bg-image" />
      </div>
      <div class="card">
        <UnavailableProduct
          v-if="!isProductUnavailable"
          @next-product="getProductbyId"
        />
        <ProductCards
          v-else
          :product="products?.data"
          @next-product="getProductbyId"
        />
      </div>
    </div>
  </div>
</template>

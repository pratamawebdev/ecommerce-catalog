<template>
  <div class="product-unavailable-container">
    <div class="overlay">
      <img src="../../assets/images/sad-face.svg" alt="bg-unvailable-product" />
    </div>
    <div class="product-text">
      <p>This product is Unvailable to show</p>
      <div class="cta">
        <button class="cta-next" type="button" @click="$emit('next-product')">
          Next Product
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UnavailableProduct",
};
</script>

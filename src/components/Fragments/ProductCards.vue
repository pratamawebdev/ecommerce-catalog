<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="product?.image" alt="image-product" />
    </div>
    <div class="product-text">
      <div class="details">
        <h4
          :class="{
            title: true,
            'font-men': product?.category === 'men\'s clothing',
            'font-women': product?.category === 'women\'s clothing',
          }"
        >
          {{ product?.title }}
        </h4>
        <div class="sub-title">
          <span>{{ product?.category }}</span>
          <div class="rating">
            <span>{{ product?.rating.rate }}/5 </span>
            <div class="rating">
              <div
                v-for="setRate in setRating"
                :key="setRate.id"
                :class="{
                  circle: true,
                  'bg-navy': product?.category === 'men\'s clothing',
                  'bg-magenta': product?.category === 'women\'s clothing',
                }"
              ></div>
              <div
                v-for="sisaRate in sisaRating"
                :key="sisaRate.id"
                :class="{
                  circleborder: true,
                  'border-men': product?.category === 'men\'s clothing',
                  'border-women': product?.category === 'women\'s clothing',
                }"
              ></div>
            </div>
          </div>
        </div>
        <div class="description">
          <p>{{ product?.description.substring(0, 100) }}</p>
        </div>
      </div>
      <div class="action">
        <span
          :class="{
            price: true,
            'font-men': product?.category === 'men\'s clothing',
            'font-women': product?.category === 'women\'s clothing',
          }"
        >
          $ {{ product?.price }}
        </span>
        <div class="cta">
          <button
            :class="{
              'cta-buy': true,
              'bg-navy btn-buy-men': product?.category === 'men\'s clothing',
              'bg-magenta': product?.category === 'women\'s clothing',
            }"
            type="button"
          >
            Buy Now
          </button>
          <button
            :class="{
              'cta-next': true,
              'font-men border-men btn-men':
                product?.category === 'men\'s clothing',
              'font-women border-women btn-women':
                product?.category === 'women\'s clothing',
            }"
            type="button"
            @click="$emit('next-product')"
          >
            Next Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCards",
  props: {
    product: Object,
    setRating: Array,
    sisaRating: Array,
  },
};
</script>

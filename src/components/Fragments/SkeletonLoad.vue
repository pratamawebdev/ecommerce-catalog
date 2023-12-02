<template>
  <div class="card">
    <div class="product-container load">
      <div class="load-thumbnail bg-load"></div>
      <div class="load-details">
        <div class="load-text-details">
          <div class="load-text-title bg-load"></div>
          <div class="load-text-sub-title">
            <div class="load-category bg-load"></div>
            <div class="load-rating bg-load"></div>
          </div>
          <div class="load-text-description bg-load"></div>
        </div>
        <div class="load-details-action">
          <div class="load-price bg-load"></div>
          <div class="load-cta">
            <div class="load-cta-buy bg-load"></div>
            <div class="load-cta-next bg-load"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoad",
};
</script>

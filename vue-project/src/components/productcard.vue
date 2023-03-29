<template>
  <div class="product">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.product {
  width: 43%;
  text-align: center;
  box-shadow: none !important;
  padding-left: 0px !important;
}

.product img {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  width: 370px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
}
</style>

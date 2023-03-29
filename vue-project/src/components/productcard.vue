<template>
    <div class="product">
      <img :src="image" :alt="name">
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
  }
  
  .product img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  </style>
  
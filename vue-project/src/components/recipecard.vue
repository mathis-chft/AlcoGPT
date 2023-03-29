<template>
    <div class="recipe">
      <img :src="image" :alt="name">
      <h3>{{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecipeCard",
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
  .recipe {
    width: 43%;
    text-align: center;
    box-shadow: none !important;
  }
  
  .recipe img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  </style>
  
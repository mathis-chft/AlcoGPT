<template>
  <div class="home">
    <Navbar></Navbar>
    <Home />
  </div>
</template>

<script>
import chat from "../components/chat.vue";
import Navbar from "../components/navbar.vue";
import Home from "../components/home.vue";
import ProductCard from "../components/productcard.vue";
import RecipeCard from "../components/recipecard.vue";

export default {
  name: "HomeView",
  components: {
    chat,
    Navbar,
    Home,
    ProductCard,
    RecipeCard,
  },
};
</script>

<style>
.home {
  overflow: hidden;
}
</style>

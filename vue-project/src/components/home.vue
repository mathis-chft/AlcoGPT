<template>
    <div>
      <div class="category">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :name="product.name"
        />
      </div>
  
      <div class="banner"></div>
  
      <div class="category">
        <RecipeCard
          v-for="(recipe, index) in recipes"
          :key="index"
          :image="recipe.image"
          :name="recipe.name"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/ProductCard.vue";
  import RecipeCard from "@/components/RecipeCard.vue";
  
  export default {
    name: "Home",
    components: {
      ProductCard,
      RecipeCard,
    },
    data() {
      return {
        products: [
          {
            image: "lien_vers_votre_image_produit1",
            name: "Nom du produit 1",
          },
          {
            image: "lien_vers_votre_image_produit2",
            name: "Nom du produit 2",
          },
        ],
        recipes: [
          {
            image: "lien_vers_votre_image_recette1",
            name: "Nom de la recette 1",
        },
        {
          image: "lien_vers_votre_image_recette2",
          name: "Nom de la recette 2",
        },
      ],
    };
  },
};
</script>

<style>
.category {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

.banner {
  width: 100%;
  height: 200px;
  background-image: url('lien_vers_votre_image_de_produit');
  background-size: cover;
  background-position: center;
}
</style>
           
  
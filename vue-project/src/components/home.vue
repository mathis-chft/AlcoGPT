<template>
    <div class="overflow-hidden grid grid-cols-[65%_auto]">
        <div class="">
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
        <chat class="chat"></chat>
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/ProductCard.vue";
  import RecipeCard from "@/components/RecipeCard.vue";
  import Chat from "../components/chat.vue";
  
  export default {
    name: "Home",
    components: {
      ProductCard,
      RecipeCard,
      Chat,
    },
    data() {
      return {
        products: [
          {
            image: "https://assets.afcdn.com/recipe/20210312/118530_w3072h2304c1cx1060cy707.jpg",
            name: "whisky",
          },
          {
            image: "https://nepascene.com/wp-content/uploads/2016/03/beer-glass-bar.jpg",
            name: "Bières",
          },
        ],
        recipes: [
          {
            image: "https://images.unsplash.com/photo-1588269965522-9bd83f3f3f13?fit=fillmax&fm=jpg&ixid=eyJhcHBfaWQiOjM1NjcwfQ&ixlib=rb-1.2.1&q=75",
            name: "Cocktails sans alcool",
        },
        {
          image: "https://media.istockphoto.com/photos/cocktail-alcohol-drink-black-background-picture-id649976444?k=6&m=649976444&s=170667a&w=0&h=NozIbw9SW1yY_XDpmQwAr5525egAJTFhFKQiZRtmRaI=",
          name: "Cocktails avec alcool",
        },
      ],
    };
  },
};
</script>

<style>
.category {
  font-weight: 700;
  justify-content: space-around;
  display: flex;
}

.banner {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  width: 90%;
  height: 150px;
  background-image: url('https://alcohome.com/wp-content/uploads/2020/10/specialty-drinks-1.png');
  background-size: cover;
  background-position: center;
  margin-left: 32.5px !important;
  margin-right: auto;
  margin-bottom: 1.75rem;
}

.chat {
  padding-top: 1rem;
  margin-left: 0.5rem;
  margin-right: auto;
}
</style>
           
  
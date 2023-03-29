<template>
    <div class="grid grid-cols-[65%_auto]">
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
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.siredwards.com%2Fwp-content%2Fuploads%2F2019%2F05%2F1ok.jpg&f=1&nofb=1&ipt=3b7e39074e18a6afa3b990f8226d4952684a67814cd2a64ef6c2c76506aff1fa&ipo=images",
            name: "Le bon vieux whisky",
          },
          {
            image: "https://www.les-covoyageurs.com/ressources/images-lieux/photo-lieu-1167-2.jpg",
            name: "Nom du produit 2",
          },
        ],
        recipes: [
          {
            image: "https://images.unsplash.com/photo-1588269965522-9bd83f3f3f13?fit=fillmax&fm=jpg&ixid=eyJhcHBfaWQiOjM1NjcwfQ&ixlib=rb-1.2.1&q=75",
            name: "Jsp quoi mettre",
        },
        {
          image: "https://media.istockphoto.com/photos/cocktail-alcohol-drink-black-background-picture-id649976444?k=6&m=649976444&s=170667a&w=0&h=NozIbw9SW1yY_XDpmQwAr5525egAJTFhFKQiZRtmRaI=",
          name: "narvalo je ne sais pas quoi mettre",
        },
      ],
    };
  },
};
</script>

<style>
.category {
  justify-content: space-around;
  display: flex;
  padding: 0rem;
}

.banner {
  display: flex;
  width: 90%;
  height: 150px;
  background-image: url('https://alcohome.com/wp-content/uploads/2020/10/specialty-drinks-1.png');
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
}

.chat {
  padding-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
           
  
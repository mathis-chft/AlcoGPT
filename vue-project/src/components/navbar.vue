<template>
  <div class="navbar">
    <img src="../assets/Alcotaste.png" alt="logo" class="logo w-auto h-14" />
    <router-link to="/" class="navbar-item">Accueil</router-link>
    <router-link to="/nos-produits" class="navbar-item"
      >Nos produits</router-link
    >
    <router-link to="/recettes-cocktails" class="navbar-item"
      >Recettes de cocktails</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  background-color: #000000;
  overflow: hidden;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.navbar-item {
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 20px;
}

.navbar-item:hover {
  background-color: #ffffff;
  color: black;
  border-radius: 20px;
  transition: all 0.5s ease;
}

.logo {
  float: left;
  margin-left: 30px;
  margin-right: 40px;
  align-content: center;
}
</style>

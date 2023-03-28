<template>
    <div class="navbar">
      <router-link to="/" class="navbar-item">Accueil</router-link>
      <router-link to="/nos-produits" class="navbar-item">Nos produits</router-link>
      <router-link to="/recettes-cocktails" class="navbar-item">Recettes de cocktails</router-link>
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
    padding: 1rem;
  }
  
  .navbar-item {
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .navbar-item:hover {
    background-color: #ddd;
    color: black;
  }
  </style>
  
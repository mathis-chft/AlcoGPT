<template>
  <div class="fixed-page" id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.fixed-page {
  overflow: hidden;
  height: 100vh;
}
</style>


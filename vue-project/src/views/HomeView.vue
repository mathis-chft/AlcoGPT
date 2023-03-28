<template>
  <div class="home">
    <chat></chat>
  </div>
</template>

<script>
import chat from '../components/chat.vue'

export default {
  name: 'HomeView',
  components: {
    chat
  }
}
</script>
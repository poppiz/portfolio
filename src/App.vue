<script setup>
import footerDiv from '@/components/footerDiv.vue'
import navBar from '@/components/navBar.vue'
</script>

<template>
  <header>
    <navBar />
  </header>

  <Router-View />

  <footer>
    <footerDiv />
  </footer>
</template>

<style scoped></style>

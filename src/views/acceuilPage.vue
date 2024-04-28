<script setup>
import ContactForm from '@/components/contactForm.vue'
import CreationsDiv from '@/components/creationsDiv.vue'

import PresentationDiv from '@/components/presentationDiv.vue'
</script>
<template>
  <main>
    <div id="presentation">
      <PresentationDiv />
    </div>
    <div id="creations">
      <CreationsDiv />
    </div>
    <div id="contact">
      <ContactForm />
    </div>
  </main>
</template>
<style scoped></style>

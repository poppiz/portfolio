<script setup>
import { ref } from 'vue'

let isPresentationActive = ref(true)
let isCreationActive = ref(false)
let isContactActive = ref(false)

window.onscroll = () => {
  if (window.scrollY >= document.getElementById('creations').offsetTop) {
    isPresentationActive.value = false
  } else {
    isPresentationActive.value = true
  }
  if (isPresentationActive.value == false && isContactActive.value == false) {
    isCreationActive.value = true
  } else {
    isCreationActive.value = false
  }
  if (window.scrollY >= document.getElementById('contact').offsetTop - 200) {
    isContactActive.value = true
  } else {
    isContactActive.value = false
  }
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/"
          ><img class="icon" src="../assets/images/home.png" alt="home icon"
        /></router-link>
      </li>
      <li>
        <a
          href="#presentation"
          ref="test"
          v-bind:class="isPresentationActive ? 'active' : 'notActive'"
          >Présentation</a
        >
      </li>
      <li>
        <a href="#creations" v-bind:class="isCreationActive ? 'active' : 'notActive'"
          >Projets séléctionnés</a
        >
      </li>
      <li>
        <a href="#contact" v-bind:class="isContactActive ? 'active' : 'notActive'">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  font-size: 1.1rem;
}

nav {
  width: 100%;
  box-shadow: 0px 1px 4px 0px rgba(255, 166, 0, 0.849);
  position: fixed;
  background-image: linear-gradient(to bottom right, rgb(0, 4, 29), rgb(21, 1, 32));
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  padding: 5px 15px;
}

a {
  text-decoration: none;
  padding: 5px;
}

a:hover {
  background-image: linear-gradient(to bottom left, rgb(251, 255, 0), rgb(255, 17, 0) 75%);
  border-radius: 10px;
}

.active {
  text-decoration: underline;
}

.notActive {
  text-decoration: none;
}
</style>

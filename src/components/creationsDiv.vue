<script setup>
import { ref } from 'vue'
import cahierModal from './cahierModal.vue'
import commentaireModal from './commentaireModal.vue'
import cvModal from './cvModal.vue'

const modalActive1 = ref(false)
const modalActive2 = ref(false)
const modalActive3 = ref(false)

const title1 = 'curriculum vitae'
const title2 = 'cahier des charges'
const title3 = 'dynamiser un espace commentaire'

const toggleModal1 = () => {
  modalActive1.value = !modalActive1.value
}
const toggleModal2 = () => {
  modalActive2.value = !modalActive2.value
}
const toggleModal3 = () => {
  modalActive3.value = !modalActive3.value
}
</script>

<template>
  <hr />
  <h3 id="creationTop">Projets sélectionnés :</h3>
  <ul>
    <li @click="toggleModal1" class="creation-conteneur">
      <h4>{{ title1 }}</h4>
      <img src="../assets/images/cv.png" alt="image cv" class="creation-img" />
    </li>
    <cvModal
      @click="toggleModal1"
      @close="toggleModal1"
      :modalActive1="modalActive1"
      :title="title1"
    />

    <li @click="toggleModal2" class="creation-conteneur">
      <h4>{{ title2 }}</h4>
      <img
        src="../assets/images/cahierDesCharges.png"
        alt="image cahier des charges"
        class="creation-img"
      />
    </li>
    <cahierModal
      @click="toggleModal2"
      @close="toggleModal2"
      :modalActive2="modalActive2"
      :title="title2"
    />
    <li @click="toggleModal3" class="creation-conteneur">
      <h4>{{ title3 }}</h4>
      <img
        src="../assets/images/espaceCommentaire.png"
        alt="image espace commentaires"
        class="creation-img"
      />
    </li>
    <commentaireModal
      @click="toggleModal3"
      @close="toggleModal3"
      :modalActive3="modalActive3"
      :title="title3"
    />
  </ul>
</template>

<style scoped>
hr {
  margin: 200px 30% 0 30%;
}

ul {
  display: flex;
  justify-content: space-around;
}
li {
  background-image: linear-gradient(to bottom left, rgb(251, 255, 0), rgb(255, 17, 0) 75%);
  border-radius: 50px;
  min-width: 25%;
  min-height: 350px;
  border-radius: 30px;
}

li:hover {
  box-shadow: 8px 8px 8px 0px rgb(71, 1, 82);
  cursor: pointer;
}

h4 {
  color: black;
  text-align: center;
  padding-top: 40px;
}

.creation-conteneur {
  text-align: center;
}

.creation-img {
  height: 400px;
  padding: 30px;
}
</style>

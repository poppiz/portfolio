<template>
  <div v-show="modalActive1" class="modal">
    <div v-show="modalActive1" class="modal-inner icon">
      <img @click="emit.close" src="../assets/images/fermer.png" alt="fermer" class="close" />
      <h3>{{ props.title }}</h3>
      <div class="content">
        <img src="../assets/images/cv.png" alt="cv image" class="cv" />
        <ul>
          <li><h4>technologies utilisées :</h4></li>
          <li><img src="../assets/images/html-5.png" alt="html-5 icon" class="techs-icons" /></li>
          <li><img src="../assets/images/css3.png" alt="css3 icon" class="techs-icons" /></li>
          <li><a href="https://github.com/poppiz/cef.git" target="_blank">-- lien github --</a></li>
          <li class="date">
            <p><time datetime="2024-01-26">fait le : 26/01/24</time></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['modalActive1', 'title'])
const emit = defineEmits('close')
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

.modal-inner {
  background-image: linear-gradient(to bottom right, rgb(0, 4, 29), rgb(21, 1, 32));
  border-radius: 30px;
  position: relative;
  height: 90vh;
  width: 60vw;
  box-shadow: 0px 0px 8px 8px rgb(255, 103, 2);
}

.close {
  height: 32px;
  width: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

h3 {
  padding-bottom: 40px;
  padding-top: 40px;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cv {
  height: 700px;
}

li {
  margin-top: 50px;
  text-align: center;
}

h4 {
  text-decoration: underline;
}

.techs-icons {
  height: 200px;
}

a:hover {
  color: blueviolet;
}

.date {
  margin-top: 10px;
}
</style>

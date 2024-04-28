<template>
  <div v-show="modalActive2" class="modal">
    <div v-show="modalActive2" class="modal-inner icon">
      <img @click="emit.close" src="../assets/images/fermer.png" alt="fermer" class="close" />
      <h3>{{ props.title }}</h3>
      <div class="content">
        <img
          src="../assets/images/cahierDesCharges.png"
          alt="image cahier des charges"
          class="image"
        />
        <ul>
          <li>
            <a href="/../assets/images/cahierCharges.pdf" target="_blank">-- lien pdf --</a>
          </li>
          <li class="date">
            <p><time datetime="2024-02-25">fait le : 25/02/24</time></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['modalActive2', 'title'])
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
  align-items: center;
  justify-content: space-around;
}
.image {
  max-height: 700px;
}
.date {
  margin-top: 40px;
}
</style>

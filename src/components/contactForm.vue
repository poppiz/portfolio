<script setup>
let nameValue = ''
let surnameValue = ''
let subjectValue = ''
let messageValue = ''

function sendEmail() {
  if (nameValue !== '' && surnameValue !== '' && subjectValue !== '' && messageValue !== '') {
    alert('message envoyé')
    document.getElementById('form').reset()
    document.getElementById('errorMessage').style.nameValue = ''
    surnameValue = ''
    subjectValue = ''
    messageValue = ''
    document.getElementById('errorMessage').style.visibility = 'hidden'
  } else {
    document.getElementById('errorMessage').style.visibility = 'visible'
  }
}
</script>

<template>
  <hr />
  <h3>contact :</h3>
  <h4 id="errorMessage">Tout les champs doivent êtres remplis</h4>
  <div id="form-div">
    <form id="form" @submit.prevent="sendEmail">
      <label id="name-label" for="name">nom : </label>
      <input type="text" id="name" name="nom" v-model="nameValue" />
      <label id="surname-label" for="surname">prénom :</label>
      <input type="text" id="surname" name="prenom" v-model="surnameValue" />
      <label id="subject-label" for="subject">sujet :</label>
      <input type="text" id="subject" name="sujet" v-model="subjectValue" />
      <label id="message-label" for="message">votre message :</label>
      <textarea name="message" id="message" cols="70" rows="10" v-model="messageValue"></textarea>
      <button type="submit" id="button1" @click="sendEmail">envoyer</button>
    </form>
  </div>
</template>

<style scoped>
hr {
  margin: 200px 30% 0 30%;
}
h4 {
  text-align: center;
  color: red;
  visibility: hidden;
}

#form-div {
  display: flex;
  justify-content: center;
}

form {
  display: grid;
  grid-template-areas:
    'nlabel plabel'
    'nom prenom'
    'slabel .'
    'sujet sujet'
    'mlabel .'
    'message message'
    'envoyer envoyer';
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin-bottom: 80px;
}
input {
  height: 30px;
}

input,
textarea {
  font-family: sans-serif;
  color: black;
  border-radius: 6px;
}

#name-label {
  grid-area: nlabel;
}
#name {
  grid-area: nom;
}
#surname-label {
  grid-area: plabel;
}

#surname {
  grid-area: prenom;
}

#subject-label {
  grid-area: slabel;
}
#subject {
  grid-area: sujet;
}

#message-label {
  grid-area: mlabel;
}
#message {
  grid-area: message;
  resize: none;
}

#button1 {
  grid-area: envoyer;
  height: 25px;
  color: black;
}

#button:hover {
  cursor: pointer;
  background-color: rgb(209, 209, 209);
}
</style>

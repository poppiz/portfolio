<script setup></script>

<template>
  <h1><strong>bouteille christophe</strong></h1>
  <hr />
  <h2><strong> developpeur web / web mobile</strong></h2>
  <ul>
    <li><img src="../assets/images/profil.jpg" alt="profile photo" /></li>
    <li>
      <p>
        Après un carrière de 15 ans dans la restauration en temps que cuisiner, j'ai choisi de
        changer de voie et de me tourner vers le développement web, une passion qui a vite pris le
        dessus.
        <br />
        Curieux et ouvert d'esprit j'aime decouvrir de nouvelles choses. Habitué au travail en
        autonomie, comme en équipe pour atteindre un but commun.
        <br />
        Mes passe-temps sont les voyages, la randonnée et les sorties en famille.
      </p>
    </li>
  </ul>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
  font-size: 3rem;
}
h1 {
  text-transform: uppercase;
  padding-top: 150px;
  padding-bottom: 50px;
}

h2 {
  padding-top: 50px;
  padding-bottom: 150px;
}

hr {
  margin: 0 30% 0 30%;
}

ul {
  display: flex;
  align-items: center;
  padding: 100px 0px;
  margin: 0px 150px;
}

li {
  padding: 0 50px;
}

p {
  line-height: 2rem;
}

img {
  height: 450px;

  border-radius: 20px;
  border: rgb(255, 82, 3) dashed 4px;
}
</style>

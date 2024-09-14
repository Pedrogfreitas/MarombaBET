<template>
  <div>
    <header>
      <div class="container">
        <h1 class="logo-container">
          <a href="index.html">
            <img src="img/icone.png" alt="MarombaBetLogo">
          </a>
          <span class="logo-text">MarombaBET</span>
        </h1>
        <nav>
          <ul class="principal">
            <v-btn @click="toggleSidebar" color="purple darken-3" class="mb-1">
              <v-icon color="white">mdi-menu</v-icon>
            </v-btn>
          </ul>
        </nav>
      </div>
    </header>

    <v-navigation-drawer
      v-model="sidebar"
      app
      temporary
      right
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user ? user.email : "Guest" }}
          </v-list-item-title>
          <v-list-item-subtitle @click="signOut" style="cursor: pointer; color: blue;">
            Sign Out
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item @click="goTo('/Cursos')">
          <v-list-item-title>Cursos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('/Users')">
          <v-list-item-title>Alunos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('/Calendario')">
          <v-list-item-title>Cronograma</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('/Forum')">
          <v-list-item-title>Fórum</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('/Biblioteca')">
          <v-list-item-title>Biblioteca</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { auth } from '@/config/firebase'

export default {
  data() {
    return {
      sidebar: false,
      user: null,
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path).catch(() => {});
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    signOut() {
      auth.signOut().then(() => {
        this.user = null;
        this.$router.push('/login');
      }).catch((error) => {
        console.error("Sign out error:", error);
      });
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};
</script>

<style>
.containerMain {
    background-color: #401580;
    border-radius: 1em;
    padding: 2em;
    margin: 5%;
    margin-top: 3%;
}

.header {
    background-color: #401580;
    padding: 1em 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'arial';
  font-size: 62.5%;
}

body.infoBody {
  font-size: larger;
}

.container {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center; /* Alinha verticalmente o conteúdo do contêiner */
  justify-content: space-between; /* Distribui o espaço entre os itens */
}

img {
  max-width: 50px; /* Ajuste conforme necessário */
  height: auto; /* Mantém a proporção original da imagem */
}

header {
  background: #401580;
  padding: 1em 0;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-text {
  color: white;
  font-size: 2em;
  margin-left: 10px; /* Ajuste o valor conforme necessário */
}

h1 {
  margin: 0;
  padding: 0;
  display: flex; /* Garante que o conteúdo do h1 é exibido em linha */
  align-items: center; /* Alinha o texto e o ícone verticalmente */
}

ul.principal {
  margin: 3% 0 0 0;
  padding: 0;
  list-style: none;
  font-size: 1.6em;
}
</style>

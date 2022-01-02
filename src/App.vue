<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>

  <section class="main-container">
    <div class="top-bar">
      <div class="top-bar-detail">
        <img src="./assets/logo-white.svg" />
      </div>
      <div class="logo-container">
        <img src="./assets/logo.png" />
        <img src="./assets/agrotis.png" />
      </div>
    </div>

    <div class="main-site">

      <aside class="side-menu">
        <nav class="nav-menu">
          <router-link to="/">
            <i-ic-outline-maps-home-work />
          </router-link>

          <router-link to="/list-companies">
            <i-healthicons-market-stall-outline />
          </router-link>
        </nav>
      </aside>

      <section class="site-view">
        <router-view />
      </section>
    </div>
  </section>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;600;700&display=swap');

:root {
  --primary: #1B1D29;
  --secondary: #2E2E3A;

  --text-color-primary: #343E47;
  --text-color-secondary: #E5E5E5;
  --icon-color: #828D8C;
  --placeholder-color: #5E6A6B;
}
#app {
  font-family: Roboto, sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

.main-container {
  .top-bar {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;

    .top-bar-detail {
      background-color: var(--secondary);
      height: 56px;
      width: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 4px solid #45B491;
      box-sizing: border-box;

      img {
        display: block;
        width: 20px;
        height: 12px;
      }
    }

    .logo-container {
      margin: auto;
    }
  }

  .main-site {
    display: flex;

    .side-menu {
      height: 100vh;
      width: 64px;
      background-color: var(--primary);

      .nav-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 25px 0;

        a {
          color: var(--icon-color);
          width: 19px;
          height: 17px;
          margin-bottom: 45px;
        }
      }
    }

    .site-view {
      background-color: #F3F2F1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

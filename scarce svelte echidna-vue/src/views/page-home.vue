<template>
  <div class="page-home-container">
    <div class="page-home-banner">
      <h1 class="page-home-text">Pesan Terakhir</h1>
      <h1 class="page-home-text1">Kirim Pesan ke:</h1>
      <router-link to="/" class="page-home-navlink">
        <img
          alt="image"
          src="/playground_assets/pngfind.com-logout-button-png-3396821-200h.png"
          class="page-home-image"
        />
      </router-link>
    </div>
    <router-link to="/page-home2" class="page-home-navlink1 button">
      username teman...
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  metaInfo: {
    title: 'PageHome - Scarce Svelte Echidna',
    meta: [
      {
        property: 'og:title',
        content: 'PageHome - Scarce Svelte Echidna',
      },
    ],
  },
}
</script>

<style scoped>
.page-home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.page-home-banner {
  top: -1px;
  left: -1px;
  width: 484px;
  height: 1003px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: absolute;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #0b5fb5;
}
.page-home-text {
  top: 74px;
  left: 39px;
  color: #ffffff;
  position: absolute;
  font-size: 30px;
  text-align: center;
}
.page-home-text1 {
  top: 776px;
  left: 19px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 30px;
  text-align: center;
}
.page-home-navlink {
  display: contents;
}
.page-home-image {
  top: 56px;
  right: 31px;
  width: 69px;
  height: 70px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.page-home-navlink1 {
  left: 15px;
  color: #6d6d6d;
  width: 423px;
  bottom: 60px;
  height: 65px;
  position: absolute;
  font-size: 35px;
  text-align: left;
  text-decoration: none;
}
@media(max-width: 767px) {
  .page-home-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .page-home-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>

<template>
  <div class="page-home2-container">
    <div class="page-home2-banner">
      <h1 class="page-home2-text">Pesan Terakhir</h1>
      <h1 class="page-home2-text1">Kirim Pesan ke:</h1>
      <input
        type="text"
        value="danieladi"
        placeholder="username teman..."
        class="page-home2-textinput input"
      />
      <input
        type="text"
        placeholder="ketik pesan..."
        class="page-home2-textinput1 input"
      />
      <router-link to="/" class="page-home2-navlink">
        <img
          alt="image"
          src="/playground_assets/pngfind.com-logout-button-png-3396821-200h.png"
          class="page-home2-image"
        />
      </router-link>
    </div>
    <router-link to="/page-home3" class="page-home2-navlink1 button">
      Kirim
    </router-link>
    <div class="page-home2-banner1"><div class="page-home2-btn-group"></div></div>
    <span class="page-home2-text2">@danieladi</span>
  </div>
</template>

<script>
export default {
  name: 'PageHome2',
  metaInfo: {
    title: 'PageHome2 - Scarce Svelte Echidna',
    meta: [
      {
        property: 'og:title',
        content: 'PageHome2 - Scarce Svelte Echidna',
      },
    ],
  },
}
</script>

<style scoped>
.page-home2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.page-home2-banner {
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
.page-home2-text {
  top: 74px;
  left: 39px;
  color: #ffffff;
  position: absolute;
  font-size: 30px;
  text-align: center;
}
.page-home2-text1 {
  left: 17px;
  color: rgb(255, 255, 255);
  bottom: 138px;
  position: absolute;
  font-size: 30px;
  text-align: center;
}
.page-home2-textinput {
  right: 46px;
  width: 422px;
  bottom: 62px;
  height: 65px;
  position: absolute;
  font-size: 30px;
  padding-right: var(--dl-space-space-unit);
}
.page-home2-textinput1 {
  right: -1089px;
  width: 1057px;
  bottom: 62px;
  height: 65px;
  position: absolute;
  font-size: 30px;
}
.page-home2-navlink {
  display: contents;
}
.page-home2-image {
  top: 56px;
  right: 31px;
  width: 69px;
  height: 70px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.page-home2-navlink1 {
  color: rgb(255, 255, 255);
  right: 113px;
  width: 204px;
  bottom: 22px;
  height: 63px;
  position: absolute;
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  background-color: rgb(11, 95, 181);
}
.page-home2-banner1 {
  width: 100%;
  height: 148px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-self: flex-end;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #529aff;
}
.page-home2-btn-group {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.page-home2-text2 {
  top: 57px;
  left: 532px;
  color: #ffffff;
  position: absolute;
  font-size: 30px;
  font-weight: 700;
}
@media(max-width: 767px) {
  .page-home2-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-home2-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .page-home2-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-home2-banner1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-home2-btn-group {
    flex-direction: column;
  }
}
</style>

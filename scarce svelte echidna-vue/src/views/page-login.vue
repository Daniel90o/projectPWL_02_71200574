<template>
  <div class="page-login-container">
    <div class="page-login-banner"><div class="page-login-btn-group"></div></div>
    <input
      type="text"
      value="danieladi"
      placeholder="username anda..."
      class="page-login-textinput input"
    />
    <router-link to="/page-home" class="page-login-navlink button">
      Masuk
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  metaInfo: {
    title: 'PageLogin - Scarce Svelte Echidna',
    meta: [
      {
        property: 'og:title',
        content: 'PageLogin - Scarce Svelte Echidna',
      },
    ],
  },
}
</script>

<style scoped>
.page-login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  transition: 0.3s;
  flex-direction: column;
  background-color: #D9D9D9;
}

.page-login-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.page-login-btn-group {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.page-login-textinput {
  top: 369px;
  left: 601px;
  width: 527px;
  height: 116px;
  position: absolute;
  font-size: 50px;
  border-top-left-radius: var(--dl-radius-radius-radius8);
  border-top-right-radius: var(--dl-radius-radius-radius8);
  border-bottom-left-radius: var(--dl-radius-radius-radius8);
  border-bottom-right-radius: var(--dl-radius-radius-radius8);
}
.page-login-navlink {
  top: 502px;
  left: 600px;
  color: #ffffff;
  width: 531px;
  height: 104px;
  position: absolute;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  padding-top: var(--dl-space-space-oneandhalfunits);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
  background-color: #1c69e5;
}
@media(max-width: 767px) {
  .page-login-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .page-login-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-login-btn-group {
    flex-direction: column;
  }
}
</style>

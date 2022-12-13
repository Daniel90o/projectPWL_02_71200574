<template>
  <div class="page-user-container">
    <router-link to="/page-login" class="page-user-navlink button">
      username anda...
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageUser',
  metaInfo: {
    title: 'Scarce Svelte Echidna',
    meta: [
      {
        property: 'og:title',
        content: 'Scarce Svelte Echidna',
      },
    ],
  },
}
</script>

<style scoped>
.page-user-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  transition: 0.3s;
  flex-direction: column;
  background-color: #D9D9D9;
}

.page-user-navlink {
  top: 372px;
  left: 598px;
  color: rgb(140, 140, 140);
  width: 531px;
  height: 104px;
  position: absolute;
  font-size: 50px;
  text-align: left;
  padding-top: var(--dl-space-space-oneandhalfunits);
  border-color: #9d9d9d;
  border-width: 1px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
}
</style>

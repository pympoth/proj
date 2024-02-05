<template>
  <div class="page">
    <!-- <AppHeader class="header" /> -->
    <AppHeader />
    <slot />
  </div>
</template>

<style scoped>

.page{
    width: 1336px;
    margin: 0 auto;
}

.header{
    margin: 0 auto;
}
</style>

<template>
  <div class="page">
    <AppHeader />
    <slot />
  </div>
</template>

<style scoped>

.page{
    width: 1336px;
    margin: 0 auto;
     display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center
}

.header{
    margin: 0 auto;
}
</style>

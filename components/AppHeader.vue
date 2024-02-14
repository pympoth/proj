<script setup>
const opened = ref(false);
function test() {
  console.log(opened.value);
  opened.value = !opened.value;
}
</script>

<template>
  <div class="top">
    <div class="nav">
      <button>Меню</button>
      <ul class="menu">
        <li>Бытовая техника</li>
        <li>Красота и здоровье</li>
        <li>Смартфоны и фототехника</li>
        <li>ТВ,консоли и аудио</li>
        <li>ПК,ноутбуки и периферия</li>
        <li>Комплектующие для ПК</li>
        <li>Офис и мебель</li>
        <li>Сетевое оборудование</li>
        <li>Отдых и развлечение</li>
        <li>Инструмент и стройка</li>
        <li>Садовая техника</li>
        <li>Дом,декор и посуда</li>
        <li>Автотовары</li>
        <li>Аксесуары и услуги</li>
        <li>Распродажа</li>
      </ul>
    </div>
    <input type="text" />
    <button class="odin">
      <img src="@/assets/imgs/magnifier.png" alt="" />
    </button>
    <button v-on:click="test">Личный кабинет</button>
    <NuxtLink to="/cart"><button>Корзина</button></NuxtLink>
  </div>
  <modal
    v-bind:open="opened"
    v-bind:key="opened"
    name="registration"
    v-on:click="opened = !opened"
  >
    Регистрация
    <input type="text" class="login" />
    <input type="text" class="password" />
    <button class="reg">зарегистрироваться</button>
  </modal>
</template>

<style scoped>
.top {
  display: flex;
  gap: 5px;
  align-items: stretch;
}
.nav {
  position: relative;
  z-index: 1000;
}

.nav:hover .menu {
  display: block;
  animation: hidden 1000ms;
}
.menu {
  cursor: pointer;
  display: none;
  position: absolute;
  background: #d59fff;
  left: 0;
  transition: 0.3s;
  width: 500px;
  border-radius: 20px;
  margin: 0;
}
button {
  outline: none;
  cursor: pointer;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 100px;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  background: #9b54ff;
  color: white;
  padding: 10px;
  min-width: 100px;
  height: 48px;
}
input {
  padding: 5px;
  width: 900px;
  border: solid;
  border-radius: 10px;
  margin-bottom: 12px;
}
input:hover {
  box-shadow: 3px 3px 8px 0px rgba(34, 60, 80, 0.55);
}
button span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
}
@keyframes hidden {
  0% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
button:hover span {
  color: black;
}
li {
  list-style: none;
  padding: 5px;
  transition: 0.6s;
  border: 2px solid rgba(255, 255, 255, 0);
}
li:hover {
  border: 1px solid;
  border-radius: 10px;
}
ul {
  padding: 0;
  list-style: none;
}
.odin img {
  width: 25px;
}

.registration {
  display: flex;
}

.reg {
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 100px;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  background: #9b54ff;
  color: white;
  padding: 10px;
  min-width: 100px;
  height: 34px;
}

.login:hover {
  box-shadow: -2px 2px 25px 10px #9b54ff;
  transition: 0.5s;
}

.password:hover {
  box-shadow: -2px 2px 25px 10px #9b54ff;
  transition: 0.5s;
}
.modal {
  font-size: larger;
  font-weight: bolder;
}

input:hover {
  box-shadow: 3px 3px 8px 0px #9b54ff;
}
</style>
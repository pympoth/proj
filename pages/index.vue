<script setup>
const opened = ref(false);
function test() {
  console.log(opened.value);
  opened.value = !opened.value;
}
const { data } = await useFetch("/api/items");
console.log(data.value);

function AddCart(item) {
  console.log(item);
  if (process.client) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    item['count'] = 1
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem("items")));
  }
}
</script>


<template>
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

  <div class="main">
    <div class="cards">
      <div class="card">
        <h3>Личный кабинет</h3>
        <p>Получайте бонусы,отслеживайте заказы и делитесь мнением</p>
        <button v-on:click="test">Войти</button
        ><NuxtLink to="/cart"><button>Мои заказы</button></NuxtLink>
      </div>
      <div class="card">
        <h3>Акции</h3>
        <p>Скидки,рассрочки,выгодные комплекты</p>
      </div>
      <div class="card">
        <h3>Собрать ПК</h3>
        <p>Без проблемы с совместимостью</p>
      </div>
      <div class="card">
        <h3>Подарочные карты</h3>
        <p>Дарите любимым</p>
      </div>
    </div>
    <div class="user_cards">
      <div class="user_card">
        <h3>бытовая техника</h3>
        <p>Встраиваемые посудомоечные машины</p>
        <p>Водоногреватели и котлы отопления</p>
        <p>Мультиварки и техника для варки</p>
      </div>
      <div class="user_card">
        <h3>Смартфоны и фототехника</h3>
        <p>Смартфоны</p>
        <p>Зарядка и подключение для смартфонов</p>
        <p>Электронные книги</p>
      </div>
      <div class="user_card">
        <h3>ПК,ноутбуки,перифирия</h3>
        <p>Ноутбуки</p>
        <p>Подставки под ноутбуки</p>
        <p>Персональные компьютеры</p>
      </div>
    </div>
  </div>

  <div class="actions_cards">
    <div class="card">
      <h3>Выгодно в комплекте</h3>
      <p>Принтер лазерный Pantum CP1100</p>
      <p class="price">41 299₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <NuxtLink to="/printer"><button>Подробнее</button></NuxtLink>
      </div>
      <img src="@/assets/imgs/foto2.png" alt="" />
    </div>
    <div class="card">
      <h3>Еще 4 дня скидка</h3>
      <p>23.8" Монитор Philips 245E1S черный</p>
      <p class="price">12 499₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto3.png" alt="" />
    </div>
    <div class="card">
      <h3>Еще 4 дня скидка</h3>
      <p>Робот-пылесос Polaris PVCR 3600 WIFI IQ Home белый</p>
      <p class="price">12 999₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto4.png" alt="" />
    </div>
    <div class="card">
      <h3>Выгодно в комплекте</h3>
      <p>Набор аккумуляторов и зарядных устройств Makita 191A25-2 LXT 18V</p>
      <p class="price">10 889₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto5.png" alt="" />
    </div>
  </div>
  <!-- {{data.body.printers}}
<div class="card" v-for="item in data.body.printers" :key="item.id">{{item.name}}</div> -->
  <div class="h3">
    <h3>Лучшие новинки</h3>
  </div>
  <div class="actions_cards">
    <div class="card">
      <p>Hоутбук Huawei MateBook D 15 BoDe-WDH9 53013WRP</p>
      <p class="price">49 990₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto61.png" alt="" />
    </div>
    <div class="card">
      <p>Мини-печь StarWind SMO2023, бежевый</p>
      <p class="price">3990₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto7.png" alt="" />
    </div>
    <div class="card">
      <p>Ламинатор Buro BU-L280, A4</p>
      <p class="price">₽1990</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto8.png" alt="" />
    </div>
    <div class="card">
      <p>
        Планшет Digma CITI 1313C 4G 10.1", 3ГБ, 32GB, 3G, LTE, Android 13
        темно-серый [cs1273pl]
      </p>
      <p class="price">7990₽</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <button>Подробнее</button>
      </div>
      <img src="@/assets/imgs/foto91.png" alt="" />
    </div>
  </div>
  <h3>Для вас</h3>
  <div class="action_cards">
    <div class="card" v-for="item in data.body.printers" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.printers }}
    </div>

    <div class="card" v-for="item in data.body.monitors" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.monitors }}
    </div>

    <div class="card" v-for="item in data.body.robotsCleaners" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.robotCleaners }}
    </div>

    <div class="card" v-for="item in data.body.chargingStation" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.chargingStation }}
    </div>

    <div class="card" v-for="item in data.body.notepads" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.notepads }}
    </div>

    <div class="card" v-for="item in data.body.miniOvens" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.miniOvens }}
    </div>

    <div class="card" v-for="item in data.body.laminators" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.laminators }}
    </div>

    <div class="card" v-for="item in data.body.tablets" :key="item.id">
      <p>{{ item.name }} {{ item.model }}</p>
      <p class="orange">{{ item.price }}</p>
      <div class="buttons">
        <NuxtLink to="/cart"><button>В корзину</button></NuxtLink>
        <p v-on:click="AddCart(item)">
          <NuxtLink to="cart"><button>подробнее</button></NuxtLink>
        </p>
        <!-- <NuxtLink to="/printer" v-on:click="AddCart(item)"><button>Подробнее</button></NuxtLink> -->
      </div>
      <img v-bind:src="item.pic" alt="" />
      {{ item.tablets }}
    </div>
  </div>
</template>

<style scoped>
.orange {
  color: rgb(255, 140, 0);
}
.action_cards p {
  font-size: 18px;
  font-weight: bolder;
}
.action_cards {
  margin-top: 50px;
  gap: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.action_cards img {
  position: absolute;
  width: 200px;
  height: 125px;
  top: 135px;
  right: 8px;
}
.action_cards {
  display: flex;
  align-content: stretch;
  justify-content: center;
}
.user_card {
  padding: 14px;
  width: 255px;
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  width: 405px;
  border-radius: 10px;
}

.main {
  font-size: large;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu img {
  width: 18px;
}
.left li:hover {
  color: rgb(246, 131, 0);
  cursor: pointer;
}
.container {
  display: flex;
  margin: 0 auto;
  width: max-content;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
  padding: 5px;
  transition: 0.6s;
  border: 2px solid rgba(255, 255, 255, 0);
}
.main .card:nth-child(1) {
  background: rgb(246, 242, 184);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}

.main .card:nth-child(2) {
  background: rgb(237, 184, 246);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.main .card:nth-child(3) {
  background: rgb(246, 184, 184);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.main .card:nth-child(4) {
  background-image: url(assets/imgs/foto1.png);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
  background-size: cover;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 25px 0;
}
p1 {
  font-weight: 900;
}
input {
  padding: 5px;
  width: 900px;
  border: solid;
  border-radius: 10px;
  margin-bottom: 12px;
}

li:hover {
  border: 1px solid;
  border-radius: 10px;
}
input:hover {
  box-shadow: 3px 3px 8px 0px rgba(34, 60, 80, 0.55);
}

.card1 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 351px;
  border-radius: 10px;
  margin-top: 25px;
}

.card2 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 351px;
  border-radius: 10px;
  margin-top: 25px;
}

.user_cards {
  font-size: large;
  font-weight: bold;
  display: flex;
  gap: 15px;
  margin: 8px;
  width: -webkit-fill-available;
}

.card3 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 351px;
  border-radius: 10px;
  margin-top: 25px;
}

.h3 {
  margin-top: 50px;
}

/* .card4 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  height: 237px;
  position: relative;
} */
.actions_cards {
  font-size: large;
  font-weight: bold;
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

/* .card5 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
} */

/* .card6 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
} */
.odin img {
  width: 25px;
}
.actions_cards img {
  position: absolute;
  right: 17px;
  bottom: 19px;
}

/* .card7 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
} */

.price {
  color: rgb(255, 140, 0);
}

body {
  font-family: "Play", sans-serif;
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

button span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
}

button:hover span {
  color: black;
}
.right {
  width: 1200px;
}

.card {
  padding: 14px;
  width: 294px;
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
  overflow: hidden;
}

/* .card8 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  height: 210px;
  position: relative;
}

.card9 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
}

.card10 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
}

.card11 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 294px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
} */

.big_card {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  height: 580px;
  width: 1280px;
  margin: 15px;
  position: relative;
  display: flex;
  gap: 2px;
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
}

.nav {
  position: relative;
  z-index: 1000;
}

.nav:hover .menu {
  display: block;
  animation: hidden 1000ms;
}

ul {
  padding: 0;
  list-style: none;
}

.top {
  display: flex;
  gap: 5px;
  align-items: stretch;
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

.buttons {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
}
</style>

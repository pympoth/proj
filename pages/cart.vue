<script setup>
import { ref } from "vue";

const readersNumber = ref(0);

function decrement() {
  readersNumber.value--;
  if (readersNumber.value < 0) readersNumber.value = 0;
}
const readersNumber2 = ref(0);
function decrement2() {
  readersNumber2.value--;
  if (readersNumber2.value < 0) readersNumber2.value = 0;
}
const readersNumber3 = ref(0);
function decrement3() {
  readersNumber3.value--;
  if (readersNumber3.value < 0) readersNumber3.value = 0;
}
const readersNumber4 = ref(0);
function decrement4() {
  readersNumber4.value--;
  if (readersNumber4.value < 0) readersNumber4.value = 0;
}
const readersNumber5 = ref(0);
function decrement5() {
  readersNumber5.value--;
  if (readersNumber5.value < 0) readersNumber5.value = 0;
}
let printers = []
if (process.client) {
  printers = JSON.parse(localStorage.getItem("items"));
  console.log(printers)
}
</script>


<template>
  <NuxtLink to="/"><button>Назад</button></NuxtLink>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <div class="big_card" v-for="item in printers" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in monitors" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in robotsCleaners" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div> 
           <div class="big_card" v-for="item in chargingStation" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in notepads" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in miniOvens" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in laminators" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
            <div class="big_card" v-for="item in tablets" v-bind:key="item">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 7 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber++">➕</button>
                <p>{{ readersNumber }}</p>
                <button @click="decrement">➖</button>
              </div>
            </div>

            <img :src="item.pic" alt="" />
          </div>

          <p>{{item.name}} {{item.model}}</p>
          <div class="buttons"></div>
        </div>
      </div>
      <!-- <div class="big_card">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 3 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber2++">➕</button>
                <p>{{ readersNumber2 }}</p>
                <button @click="decrement2">➖</button>
              </div>
            </div>

            <img
              src="https://p.propartner.ru/get-mpic/1574389/img_id5217548176929971146.jpeg/200x200"
              alt=""
            />
          </div>

          <p>Принтер лазерный Pantum CP1100</p>
          <div class="buttons"></div>
        </div>
      </div>
      <div class="big_card">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 21 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber3++">➕</button>
                <p>{{ readersNumber3 }}</p>
                <button @click="decrement3">➖</button>
              </div>
            </div>

            <img src="https://img.mvideo.ru/Pdb/30041770b.jpg" alt="" />
          </div>

          <p>Принтер лазерный Pantum CP1100</p>
          <div class="buttons"></div>
        </div>
      </div>
      <div class="big_card">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 6 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber4++">➕</button>
                <p>{{ readersNumber4 }}</p>
                <button @click="decrement4">➖</button>
              </div>
            </div>

            <img src="https://img.mvideo.ru/Pdb/30032666b.jpg" alt="" />
          </div>

          <p>Принтер лазерный Pantum CP1100</p>
          <div class="buttons"></div>
        </div>
      </div>
      <div class="big_card">
        <div class="printer">
          <div class="buttonundimg">
            <div class="instore">
              <div class="instore1">
                <a href="">в 3 магазинах</a>
                <p>В наличие:</p>
              </div>
              <div class="numeric">
                <button @click="readersNumber5++">➕</button>
                <p>{{ readersNumber5 }}</p>
                <button @click="decrement5">➖</button>
              </div>
            </div>

            <img
              src="https://ir.ozone.ru/s3/multimedia-1/c1000/6782417461.jpg"
              alt=""
            />
          </div>

          <p>Принтер лазерный Pantum CP1100</p>
          <div class="buttons"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
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
.card:nth-child(1) {
  background: rgb(246, 242, 184);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}

.card {
  padding: 14px;
  width: 255px;
}
.card:nth-child(2) {
  background: rgb(237, 184, 246);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.card:nth-child(3) {
  background: rgb(246, 184, 184);
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.card:nth-child(4) {
  background: url("imgs/foto1.png");
  border-radius: 10px;
  box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
  background-size: cover;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  display: flex;
  gap: 10px;
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

.card4 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  height: 200px;
  position: relative;
}
.actions_cards {
  display: flex;
  gap: 10px;
}

.card5 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
}

.card6 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
}
.odin img {
  width: 25px;
}
.actions_cards img {
  position: absolute;
  right: 17px;
  bottom: 19px;
  right: 8px;
}

.card7 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
}

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
  /* position: relative; */
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 100px;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  background: #9b54ff;
  color: white;
  padding: 10px;
  height: 48px;
  min-width: 100px;
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
.card8 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  height: 200px;
  position: relative;
}

.card9 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
}

.card10 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
}

.card11 {
  box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
  background: rgb(255, 249, 249);
  padding: 14px;
  width: 255px;
  border-radius: 10px;
  margin-top: 5px;
  margin-top: 5px;
  position: relative;
}

.big_card {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  height: 305px;
  width: 1330px;
  margin: 15px;
  position: relative;
  display: flex;
  gap: 2px;
  border-radius: 10px;
  right: 80px;
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

.img1 {
  right: 415px;
  bottom: 30px;
}

.small_card {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  width: 510px;
  margin: 15px;
  right: -580px;
  top: -400px;
  border-radius: 15px;
  padding: 10px;
}

button.buy {
  right: -200px;
  top: -65px;
  width: 310px;
}

button.buy:hover {
  background: #c457ff;
}

h3 {
  margin: 0;
}
.small_card1 {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  width: 512px;
  margin: 15px;
  right: -580px;
  top: -400px;
  border-radius: 15px;
  padding: 10px;
}
.mini_card {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  width: 200px;
  margin: 5px;
  right: -580px;
  top: -400px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
}

.o:hover {
  color: orange;
  cursor: pointer;
}

.email {
  width: 100px;
}

.password {
  width: 100px;
}

.login {
  display: flex;
}
.big_card img {
  width: 260px;
  height: 190px;
}
.printer {
  display: flex;
}
.printer p {
  font-size: 25px;
  font-weight: bold;
  height: 30px;
  margin: 0;
}
.mini_card {
  box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
  height: 30px;
  width: 120px;
}
input {
  height: 30px;
  width: 30px;
  font-size: 25px;
}

.printer button {
  width: 50px;
  min-width: 0px;
  font-size: 20px;
}

.buttons {
  display: flex;
}
.numeric {
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  background: #9b54ff;
  height: 48px;
  border-radius: 10px;
}

.buttonundimg {
  display: flex;
  align-items: baseline;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
}
.numeric p {
  color: white;
}
.instore1 p {
  font-size: 17px;
}
</style>
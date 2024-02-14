<template>
    <NuxtLink to="/"><button>Назад</button></NuxtLink>
    <div class="container">
        <div class="left">
        </div>
        <div class="right">
            <h1>Принтер лазерный Pantum CP1100</h1>
            <div class="big_card">
                <img class="img1" src="@/assets/imgs/foto2.png" alt="">
                <div class="info">
                    <p class="p">цветная печать, A4, 1200x600 dpi, ч/б - 18 стр/мин (A4), USB 2.0 подробнее
                        Pantum</p>
                    <div class="small_card">

                        <section>
                            <h3>41 299 ₽</h3>
                            <p>от 4 026 ₽/ мес.</p>
                        </section>
                        <NuxtLink to="/cart"><button class="buy">Купить</button></NuxtLink>
                        <div class="mini_card">
                            <p>В наличие:</p>
                            <P class="o">в 24 магазинах</P>

                        </div>
                    </div>
                    <div class="small_card1">
                        <h3>Описание</h3>
                        <p>Принтер лазерный Pantum CP1100 используется для монохромной или цветной печати документов с
                            использованием тонер-картриджей для лазерной печати. Оригинальными расходниками для
                            устройства лазерной печати выступают картриджи моделей Pantum CTL-1100C, Pantum CTL-1100K,
                            Pantum CTL-1100M и Pantum CTL-1100Y. Модель поддерживает печать документов формата A4 в
                            разрешении 1200x600dpi. Скорость печати составляет 18 стр/мин (A4).
                            Принтер лазерной печати Pantum CP1100 рассчитан на печать 1500-30000 страниц в течение
                            месяца, что делает его подходящим для применения в офисе со значительным документооборотом.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu img{
    width: 18px;
}
.left li:hover{
color: rgb(246, 131, 0);
cursor:pointer;
}
.container{
    display: flex;
    margin: 0 auto;
    width: max-content;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
li{
    list-style: none;
    padding: 5px;
    transition: 0.6s;
    border: 2px solid rgba(255, 255, 255, 0);
}
.card:nth-child(1){
    background: rgb(246, 242, 184);
    border-radius: 10px;
    box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}

.card{
    padding:14px;
    width: 255px;
    
}
.card:nth-child(2){
    background: rgb(237, 184, 246);
    border-radius: 10px;
    box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.card:nth-child(3){
    background: rgb(246, 184, 184);
    border-radius: 10px;
    box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
}
.card:nth-child(4){
    background: url('imgs/foto1.png');
    border-radius: 10px;
    box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.55);
    background-size: cover;
}
.cards{ 
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
}
p1{
    font-weight: 900;
}
input{
    padding: 5px;
    width: 900px;
    border: solid;
    border-radius: 10px;
    margin-bottom: 12px;
}


li:hover{
    border: 1px solid;
    border-radius: 10px;

}
input:hover{
    box-shadow: 3px 3px 8px 0px rgba(34, 60, 80, 0.55);
}

.card1{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 351px;
    border-radius: 10px;
    margin-top: 25px;
}

.card2{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 351px;
    border-radius: 10px;
    margin-top: 25px;
}

.user_cards{
    display: flex;
    gap: 10px;
}


.card3{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 351px;
    border-radius: 10px;
    margin-top: 25px;
}

.h3{
    margin-top: 50px;
}

.card4{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    height: 200px;
    position: relative;
}
.actions_cards{
    display: flex;
    gap: 10px;
}

.card5{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    position: relative;
}

.card6{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    margin-top: 5px;
    position: relative;
}
.odin img{
    width: 25px;
}
.actions_cards img{
  position: absolute;
    right: 17px;
    bottom: 19px;
}

.card7{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    margin-top: 5px;
    position: relative;
}

.price{
    color: rgb(255, 140, 0);
}

body{
    font-family: 'Play', sans-serif;
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
   .right{
    width: 1200px;
   }
   .card8{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    height: 200px;
    position: relative;
   }
 
   .card9{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    position: relative;
}

.card10{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    margin-top: 5px;
    position: relative;
}

.card11{
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.55);
    background: rgb(255, 249, 249);
    padding:14px;
    width: 255px;
    border-radius: 10px;
    margin-top: 5px;
    margin-top: 5px;
    position: relative;
}

.big_card{
   box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
   height: 580px;
   width: 1410px;
   margin: 15px;
   position: relative;
   display: flex;
   gap: 2px;
}

.menu{
    cursor: pointer;
    display: none;
    position: absolute;
    background: #d59fff;
    left: 0;
    transition: 0.3s;
    width: 500px;
    border-radius: 20px;
}

.nav{
    position: relative;
    z-index: 1000;
}

.nav:hover .menu{
    display: block;
    animation: hidden 1000ms;
}

ul{
    padding: 0;
    list-style: none;
}

.top {
    display: flex;
    gap: 5px;
    align-items: stretch;
}



@keyframes hidden{
    0%{
        display: block;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

 .img1{
    right: 415px;
    bottom: 30px;
}

.small_card{
    box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
    width: 510px;
    margin: 15px;
    right: -580px;
    top: -400px;
    border-radius: 15px;
    padding: 10px;
    
    
   
}

button.buy{
    right: -200px;
    top: -65px;
    width: 310px;
}

button.buy:hover{
    background: #c457ff;
}

h3{
    margin: 0;
}
.small_card1{
    box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
    width: 512px;
    margin: 15px;
    right: -580px;
    top: -400px;
    border-radius: 15px;
    padding: 10px; 
}
.mini_card{
    box-shadow: 0px 0px 8px 7px rgba(34, 60, 80, 0.2);
    width: 200px;
    margin: 5px;
    right: -580px;
    top: -400px;
    border-radius: 15px;
    padding: 10px; 
    display: flex; 
}

.o:hover{
color: orange;
cursor: pointer;
}

.email{
    width: 100px;
}

.password{
    width: 100px;
}

.login{
    display: flex;
}
</style>
<template>
  <div class="summary">
    <div class="content">
        <router-link to="/">McPoffertjes - Ihr Dessert-Experte</router-link>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class= "box">
        <div class="sidebar-left">
            <h3 class="heading">Zusammenfassung</h3>
            
            <div class="line-item flexrow date">
                <p>Datum:</p>
                <div>{{store.date}}</div>
            </div>
            
            <div class="line-item flexrow time">
                <p>Uhrzeit:</p>
                <div>{{store.time}}</div>
            </div>
            
            <div class="line-item flexrow person-count">
                <p>Personenzahl:</p>
                <div>{{store.personCount}}</div>
            </div>
             
            <div class="line-item flexrow table-nr">
                <p>Tisch Nr.:</p>
                <div class="table-nr-value">{{store.tableNr}}</div> 
            </div>

            <div class="line-item flexrow email">
              <label for="email">E-Mail:</label>
              <input type="email" id="email" v-model="store.email" required="required"> 
            </div>

            <div class="line-item">
              Deine E-Mail-Adresse benötigen wir ausschließlich für die Reservierungsbestätigung.
            </div>

            <div class="flexrow buttons">
                <router-link to="/dish-select">Zurück</router-link>
                <!-- <div><router-link to="/dish-select">Zurück</router-link></div> -->
            </div>
        </div>
        <div class="sidebar-left">
            <h3>Gewählte Gerichte</h3>
            <div class="flexrow food">
              <strong class="name">Gericht</strong>
              <strong class="price">Preis</strong>
              <strong class="count">Anzahl</strong>
            </div>
            <div class="flexrow food" v-for="dish in selectedDishes" :key="dish.name">
              <p class="name">{{dish.name}}</p>
              <p class="price">{{dish.price}}€</p>
              <p class="count">{{dish.count}}</p>
            </div>
            <div class="flexrow food">
              <strong class="name">Gesamt</strong>
              <strong class="price">{{sumPrice}}€</strong>
              <strong class="count">{{sumCount}}</strong>
            </div>
            <div class="flexrow buttons">
                <a href="/success" :class="!store.email && 'disabled'">Bestätigen</a>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  name: 'Summary',
  mixins: [mixin],
  computed: {
    selectedDishes: function() {
      return this.store.dishes.filter(element => {return element.count > 0});
    }
  }
}
</script>

<style scoped lang="less">
//@import "../less/default.less";
html, body {
  margin:0px;
  height:100vh;
}

input{
            margin: 1rem;
            padding: 0.25rem;
            height: 1.5rem;
            border: 1px solid rebeccapurple;
            border-radius: 0.5rem;
          }

#email{
  width: 15rem;
}

.box{
    display: flex;
    align-items: center´´;
}
.flexrow{
    display: flex;
    flex-direction: row;
    align-items: center;
    &.food {
      justify-content: space-between;
      .name {
        width: 50%;
      }
      .price {
        width: 20%;
      }
      .count {
        width: 30%;
      }
    }
}


.flexcol{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.content{

  a{
    text-decoration: none;
    font-size: 50px;
    color: rebeccapurple;
  }
  a:hover{
    text-decoration: underline;
  }

  background-color: lavender;
  display: flex;
  flex-direction: column;

  .sidebar-left{
        width: 33%;
        height: 100%;
        background-color: white;

        .heading{
            width: 100%;
            text-align: center;
        }

        .line-item{
            margin-left: 2rem;
            text-align: left;

            div {
                margin-left: 1rem;
                padding: 2px 6px;
                background-color: lightgrey;
                border-radius: 5px;
            }
        }
    }

    .buttons{
        width: 100%;
        justify-content: center;

        a{
            font-size: 20px;
            text-decoration: none;
            color: rebeccapurple;
            background-color: lavender;
            border: 2px solid rebeccapurple;
            border-radius: 0.5rem;
            padding: 2px 6px;
          }
        a.disabled{
            pointer-events: none;
            cursor: default;
            color: grey;
            background-color: lightgray;
            border: grey;
          }
    }
}


</style>

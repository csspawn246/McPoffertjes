<template>
  <div class="summary">
    <div class="content">
        <router-link class="page-heading" to="/">McPoffertjes - Ihr Dessert-Experte</router-link>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class="flexrow progress-bar">
          <div id="Kerndaten">
            <p>Kerndaten</p>
          </div>
          <div id="Tischauswahl">
            <p>Tischauswahl</p>
          </div>
          <div id="Speisenvorauswahl">
            <p>Speisenvorauswahl</p>
          </div>
          <div id="Zusammenfassung">
            <p>Zusammenfassung</p>
          </div>
          <div id="Bestätigung">
            <p>Bestätigung</p>
          </div>
        </div>
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
              <input type="email" id="email" v-model="store.email" required="required" :class="(store.email == undefined) && 'required'"> 
            </div>

            <div class="info line-item">
              Deine E-Mail-Adresse benötigen wir ausschließlich für die Reservierungsbestätigung.
            </div>

            <div class="flexrow buttons">
                <router-link to="/dish-select">Zurück</router-link>
                 <router-link to="/success" :class="!store.email && 'disabled'" @click="saveReservation">Bestätigen</router-link>
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
  },
  methods: {
    saveReservation: function() {
      this.store.idCount += 1;
      this.store.reservations.push(
        {
          date: this.store.date,
          time: this.store.time,
          personCount: this.store.personCount,
          tableNr: Object.assign({}, this.store.tableNr),
          dishes: Object.assign({}, this.store.dishes),
          id: "HZ7/ssdl)2020" + this.store.idCount
        }
      )
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/less/default.less";

.progress-bar{
  #Zusammenfassung{
    background-color: rgb(255, 145, 0);
    border: 2px solid rgb(255, 145, 0);
    p{
      color: white;
      font-weight: 600;
    };
  }
}

#email{
  width: 15rem;
  margin: 1rem;
  padding: 0.25rem;
  height: 1.5rem;
}

.box{
    display: flex;
    align-items: center´´;
}

.info{
  margin: 1rem;
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


</style>

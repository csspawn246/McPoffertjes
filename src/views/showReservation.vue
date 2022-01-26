<template>
  <div class="dish-select">
    <div class="content">
            <router-link class="page-heading" to="/">McPoffertjes - Ihr Dessert-Experte</router-link>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class="wrapper">
        <div class="sidebar-left">
            <h3 class="heading">Speisenauswahl</h3>
            
              <table>
                <tr class="line-item flexrow date">
                  <td ><label for="date">Datum:</label></td>
                  <td><input type="date" id="date" v-model="store.reservations[store.currentReservation].date" required="required" :class="(store.reservations[store.currentReservation].date == undefined) && 'required'"></td>                                
                </tr>

                <tr class="line-item flexrow time">
                  <td><label for="time">Uhrzeit:</label></td>
                  <td><input type="time" id="time" v-model="store.reservations[store.currentReservation].time" required="required" :class="(store.reservations[store.currentReservation].time == undefined) && 'required'"></td>                
                </tr>
              
              <tr class="line-item flexrow person-count">
                  <td><label for="person-count">Personenzahl:</label></td>
                  <td><input type="number" id="person-count" v-model="store.reservations[store.currentReservation].personCount" min="1" required="required" :class="(store.reservations[store.currentReservation].personCount == undefined) && 'required'"></td>                
                </tr>

              </table>
            

            <div class="flexrow buttons">
                <router-link to="/showReservations">Zurück</router-link>
                <router-link to="/showReservations" @click="store.reservations.splice(store.currentReservation,1);">Löschen</router-link>
                <!-- <div><router-link to="/table-select">Zurück</router-link></div>
                <div><router-link to="/summary">Weiter</router-link></div> -->
            </div>

        </div>
        <div class="sidebar-left">
            <h3>Speisekarte</h3>
            <div class="flexrow food">
              <strong class="name">Gericht</strong>
              <strong class="price">Preis</strong>
              <strong class="count">Anzahl</strong>
            </div>
            <div class="flexrow food" v-for="dish in store.reservations[store.currentReservation].dishes">
              <p class="name">{{dish.name}}</p>
              <p class="price">{{dish.price}}€</p>
              <input class="count" type="number" id="person-count" v-model="dish.count" max="15" min="0" required="required">
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
  name: 'DishSelect',
  mixins: [mixin],
  computed: {
  },
  mounted: function() {
      console.log(this.store.reservations[this.store.currentReservation]);
  }
}
</script>

<style scoped lang="less">
@import "~@/less/default.less";

.progress-bar{
  #Speisenvorauswahl{
    background-color: rgb(255, 145, 0);
    border: 2px solid rgb(255, 145, 0);
    p{
      color: white;
      font-weight: 600;
    };
  }
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

.info{
  margin: 2rem;
}

.wrapper {
  display: flex;  
}

 

    


</style>
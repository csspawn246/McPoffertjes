<template>
  <div class="dish-select">
    <div class="content">
            <router-link class="page-heading" to="/">McPoffertjes - Ihr Dessert-Experte</router-link>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class="wrapper">
        <div class="sidebar-left">
            <h3 class="heading">Speisenauswahl</h3>
            
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

            <p>Die Speisenvorauswahl dient unserem Restaurant dazu, die benötigten Mengen bestimmter Zutaten 
                besser einschätzen zu können. Wir versuchen, dies rechtzeitig unseren Lieferanten mitzuteilen,
                sodass wir weniger Lebensmittel überbestellen und wegwerfen müssen. 
                Das trägt dazu bei, dass unsere Preise sowie unser CO2-Fußabdruck klein bleiben.
                Natürlich kannst du deine Meinung aber auch vor Ort noch ändern und/oder weitere Speisen und Getränke dazubestellen!
            </p>
            

            <div class="flexrow buttons">
                <router-link to="/table-select">Zurück</router-link>
                <router-link to="/summary">Weiter</router-link>
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
            <div class="flexrow food" v-for="dish in store.dishes">
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
  }
}
</script>

<style scoped lang="less">
@import "~@/less/default.less";


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

.wrapper {
  display: flex;  
}

 

    


</style>
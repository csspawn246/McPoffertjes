<template>
  <div class="table-select">
    <div class="content">
        <router-link to="/">McPoffertjes - Ihr Dessert-Experte</router-link>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class="wrapper">
        <div class="flexcol sidebar-left">
            <h3 class="heading">Tischauswahl</h3>

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
            

            <p>Zum Auswählen eines Tisches klicken.</p>
            <p v-if="error">Bitte wählen Sie genug Tische für die Anzahl der reservierenden Personen aus.</p>

            <div class="flexrow buttons">
                <router-link to="/basic" @click="validate" >Zurück</router-link>
                <router-link to="/dish-select">Weiter</router-link>
                <!-- <div><router-link to="/basic">Zurück</router-link></div>
                <div><router-link to="/dish-select">Weiter</router-link></div> -->
            </div> 
        </div>
        <div style="width: 100%; display: flex; flex-direction: column">
          <div v-for="row in store.tables" :key="row[0].id" class="tableRow">
            <desk v-for="table in row" :seatCount="table.seatCount" :selected="store.tableNr.includes(table.id)" :key="table.id" @click="selectTable(table.id)" />
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'
import desk from '@/components/table.vue'

export default {
  name: 'TableSelect',
  mixins: [mixin],
  data () {
    return {
      error: false
    }
  },
  computed: {
    selectedSeatCount: function() {
      return this.store.tableNr.length * 8;
    }
  },
  components: {desk},
  methods: {
    selectTable: function(nr) {
      if (this.store.tableNr.includes(nr)) {
        this.store.tableNr.splice(this.store.tableNr.indexOf(nr), 1);
      } else {
        this.store.tableNr.push(nr);
      }
    }
  },
  beforeRouteLeave: function(to, from, next) {
    if (this.selectedSeatCount < this.store.personCount) {
      this.error = true;
    } else next();
  }

}
</script>

<style scoped lang="less">
//@import (reference) "~@/less/index.less";

html, body {
  margin:0px;
  height:100vh;
}

.flexrow{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.flexcol{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.wrapper {
  display: flex;
}

.tableRow {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 1rem;
}

.content{

  background-color: lavender;
  height: 100%;

  a{
    text-decoration: none;
    font-size: 50px;
    color: rebeccapurple;
  }
  a:hover{
    text-decoration: underline;
  }

  .sidebar-left{
        width: 33%;
        height: 100vh;
        background-color: white;

        .heading{
            width: 100%;
            text-align: center;
        }

        table{
          table-layout: fixed;
          td{
            width: 50%;
            text-align: left;
          }
        }

        .inputs{
          width: 100%;
          height: 20vh;

          input{
            margin: 1rem;
            padding: 0.25rem;
            height: 1.5rem;
            border: 1px solid rebeccapurple;
            border-radius: 0.5rem;
          }
        }

        .line-item{
            margin-left: 2rem;

            div {
                margin-left: 1rem;
                padding: 2px 6px;
                background-color: lightgrey;
                border-radius: 5px;
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
        }
  }

  .mainview{
    height: 100vh;
    background-color: red;

  }

    
}

</style>

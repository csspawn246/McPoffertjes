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
                <p>Plätze:</p>
                <div class="seat-count-value">{{selectedSeatCount}}</div>
            </div>
            

            <p>Zum Auswählen eines Tisches klicken.
              Bereits reservierte Tische sind nicht auswählbar. 
              Die Wahl eines Tisches ist optional.</p>
            <p v-if="error">Bitte wählen Sie die Tische so aus, dass die Anzahl an Sitzplätzen die Anzahl der reservierenden Personen um maximal 2 übersteigt.</p>

            <div class="flexrow buttons">
                <router-link to="/basic">Zurück</router-link>
                <router-link to="/dish-select">Weiter</router-link>
               
            </div> 
        </div>
        <!-- <div style="width: 100%; display: flex; flex-direction: column">
          <div v-for="row in store.tables" :key="row[0].id" class="tableRow">
            <desk v-for="table in row" :seatCount="table.seatCount" :selected="store.tableNr.includes(table.id)" :key="table.id" @click="selectTable(table.id)" />
          </div>
        </div> -->
        <div class="restaurant-layout">
          <img src="../assets/restaurant-layout.png" alt="table-select-map" usemap="#table-map">
          <map name="table-map">
            <area shape="rect" coords="277, 182, 361, 240" @click="test($event)" title="1" alt="">
            <area shape="rect" coords="383, 188, 467, 237" @click="test($event)" title="2" alt="">
            <area shape="rect" coords="487, 187, 572, 238" @click="test($event)" title="3" alt="">
            <area shape="rect" coords="593, 188, 676, 237" @click="test($event)" title="4" alt="">
            <area shape="rect" coords="246, 282, 302, 370" @click="test($event)" title="5" alt="">
            <area shape="rect" coords="246, 407, 302, 498" @click="test($event)" title="6" alt="">
            <area shape="rect" coords="246, 529, 302, 622" @click="test($event)" title="7" alt="">
            <area shape="rect" coords="447, 389, 548, 472" @click="test($event)" title="8" alt="">
            <area shape="rect" coords="600, 385, 697, 473" @click="test($event)" title="9" alt="">
            <area shape="rect" coords="601, 514, 697, 598" @click="test($event)" title="11" alt="">
            <area shape="rect" coords="448, 514, 548, 598" @click="test($event)" title="10" alt="">
            <area shape="rect" coords="590, 634, 671, 684" @click="test($event)" title="13" alt="">
            <area shape="rect" coords="474, 633, 555, 683" @click="test($event)" title="12" alt="">
            <area shape="rect" coords="703, 383, 799, 472" @click="test($event)" title="14" alt="">
            <area shape="rect" coords="703, 513, 799, 598" @click="test($event)" title="16" alt="">
            <area shape="rect" coords="853, 389, 954, 472" @click="test($event)" title="15" alt="">
            <area shape="rect" coords="853, 514, 954, 598" @click="test($event)" title="17" alt="">
            <area shape="rect" coords="740, 635, 821, 682" @click="test($event)" title="18" alt="">
            <area shape="rect" coords="857, 634, 938, 682" @click="test($event)" title="19" alt="">
            <area shape="rect" coords="1068, 390, 1169, 471" @click="test($event)" title="20" alt="">
            <area shape="rect" coords="1222, 390, 1320, 472" @click="test($event)" title="21" alt="">
            <area shape="rect" coords="1221, 515, 1320, 597" @click="test($event)" title="23" alt="">
            <area shape="rect" coords="1068, 515, 1169, 597" @click="test($event)" title="22" alt="">
            <area shape="rect" coords="1082, 634, 1166, 684" @click="test($event)" title="24" alt="">
            <area shape="rect" coords="1201, 634, 1281, 682" @click="test($event)" title="25" alt="">
            <area shape="rect" coords="246, 759, 298, 842" @click="test($event)" title="26" alt="">
            <area shape="rect" coords="423, 759, 475, 842" @click="test($event)" title="28" alt="">
            <area shape="rect" coords="246, 884, 298, 967" @click="test($event)" title="27" alt="">
            <area shape="rect" coords="423, 883, 474, 967" @click="test($event)" title="29" alt="">
            <area shape="rect" coords="564, 737, 645, 836" @click="test($event)" title="30" alt="">
            <area shape="rect" coords="562, 887, 645, 985" @click="test($event)" title="31" alt="">
            <area shape="rect" coords="734, 736, 814, 835" @click="test($event)" title="32" alt="">
            <area shape="rect" coords="732, 887, 814, 985" @click="test($event)" title="33" alt="">
            <area shape="rect" coords="882, 761, 930, 841" @click="test($event)" title="34" alt="">
            <area shape="rect" coords="881, 885, 930, 966" @click="test($event)" title="35" alt="">
            <area shape="rect" coords="1142, 737, 1221, 835" @click="test($event)" title="36" alt="">
            <area shape="rect" coords="1140, 886, 1221, 985" @click="test($event)" title="37" alt="">

          </map>
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
    selected: function (nr) {
        return true;
    },

    selectedSeatCount: function() {
      let res = 0;
      for(const i in this.store.tableNr){
        let nr = this.store.tableNr[i];
        if([1, 2, 3, 4, 5, 6, 7, 12, 13, 18, 19, 24, 25, 26, 27, 28, 29, 34, 34].includes(nr)){
          res += 2;
        }else{
          res += 4;
        }
      }
      return res;
    }
  },
  components: {desk},
  methods: {
    test: function(e) {
      let tableNr = parseInt(e.target.title)
      this.selectTable(tableNr);
    },
    selectTable: function(nr) {
      if (this.store.tableNr.includes(nr)) {
        this.store.tableNr.splice(this.store.tableNr.indexOf(nr), 1);
      } else {
        this.store.tableNr.push(nr);
      }
    }
  },
  beforeRouteLeave: function(to, from, next) {
    if(this.selectedSeatCount == undefined){ //table-select is optional
      next();
    }
    if (this.selectedSeatCount > this.store.personCount+2) {
      this.error = true;
    } else next();
  }

}
</script>

<style scoped lang="less">
@import "~@/less/default.less";

area{
  display: block;
  cursor: pointer;
  border: 1px solid green;
}

.restaurant-layout{
  max-width: 66%;
  max-height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
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


  .mainview{
    height: 100vh;
    background-color: red;

  }

    


</style>

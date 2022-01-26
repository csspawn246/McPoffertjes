<template>
  <div class="basic">
    <div class="content">
        <router-link class="page-heading" to="/" @click="reset=true">McPoffertjes - Ihr Dessert-Experte</router-link>
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
        <div class="flexcol sidebar-left">
            <h3 class="heading">Reservierung</h3>

            <div class="inputs">

              <table>
                <tr class="line-item flexrow date">
                  <td ><label for="date">Datum:</label></td>
                  <td><input type="date" id="date" v-model="store.date" required="required" :class="(store.date == undefined) && 'required'"></td>                                
                </tr>

                <tr>
                  <td><p class="error">{{this.dateError}}</p></td>
                  <td></td>
                </tr>

                <tr class="line-item flexrow time">
                  <td><label for="time">Uhrzeit:</label></td>
                  <td><input type="time" id="time" v-model="store.time" required="required" :class="(store.time == undefined) && 'required'"></td>                
                </tr>

                <tr>
                  <td><p class="error">{{this.timeError}}</p></td>
                  <td></td>
                </tr>
              
              <tr class="line-item flexrow person-count">
                  <td><label for="person-count">Personenzahl:</label></td>
                  <td><input type="number" id="person-count" v-model="store.personCount" min="1" required="required" :class="(store.personCount == undefined) && 'required'"></td>                
                </tr>

                <tr>
                  <td><p class="error">{{this.personCountError}}</p></td>
                  <td></td>
                </tr>

              </table>

              <div class="opening-hours">
                <h5>Öffnungszeiten</h5>
                <p>Di-So: 12-23 Uhr</p>                 
              </div>

            </div>
            <br><br>

            <div class="flexrow buttons">
                <router-link to="/table-select" event="" :class="(dateError != '' || timeError != '' || personCountError != '') && 'disabled'">Weiter</router-link>
            </div>          
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mixin from '@/mixin.js'

export default {
  name: 'Basic',
  computed: {
    dateError: function() {
      let str = ''
      if(this.store.date == undefined){
        return str
      }
      let entered = new Date(this.store.date)
      let today = new Date()
      console.log(entered, today)
      if(entered <= today ){
        str = 'Bitte wähle einen Reservierungszeitpunkt in der Zukunft aus.'
      }else if(entered > today.setFullYear(today.getFullYear() + 1)){
        str = 'Du kannst nur maximal ein Jahr im Voraus reservieren.'
      }
      return str
    },
    timeError: function () {
      let str = ''
      if(this.store.time == undefined){
        return str
      }
      let hour = this.store.time.split(':')[0]
      //let minute = this.store.time.split(':')[1]
      //let entered = new Date(this.store.date).setHours(store.time.split(':')[0], store.time.split(':')[1])
      if(parseInt(hour) < 12 || parseInt(hour) >= 22){
        str = 'Bitte beachte unsere Öffungszeiten.'
      }
      return str
    },
    personCountError: function () {
      let str = ''
      if(this.store.personCount == undefined){
        return str
      }
      if(this.store.personCount > 10){
        str = 'Online-Reservierungen leider nur für max. 10 Personen möglich.\n Bitte kontaktiere uns telefonisch!'
      }
      return str
    },
  },
  data() {
    return {
      date: undefined,
      error: false
    }
  },
  mixins: [mixin],
  methods: {
  },
  beforeRouteLeave: function(to, from, next) {
    if(this.reset) next();
    if (!this.store.date || !this.store.time || !this.store.personCount || this.store.personCount < 1) {
      this.error = true;
    } else next();
  }
}
</script>

<style lang="less">

</style>


<style scoped lang="less">
@import "~@/less/default.less";

.progress-bar{
  #Kerndaten{
    background-color: rgb(255, 145, 0);
    border: 2px solid rgb(255, 145, 0);
    p{
      color: white;
      font-weight: 600;
    };
  }
}



</style>
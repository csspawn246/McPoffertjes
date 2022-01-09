<template>
  <div class="basic">
    <div class="content">
        <a href="/">McPoffertjes - Ihr Dessert-Experte</a>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->

        <div class="flexcol sidebar-left">
            <h3 class="heading">Reservierung</h3>

            <div class="inputs">

              <table>
                <tr class="line-item flexrow date">
                  <td ><label for="date">Datum:</label></td>
                  <td><input type="date" id="date" v-model="store.date" required="required"></td>                
                </tr>

                <tr class="line-item flexrow time">
                  <td><label for="time">Uhrzeit:</label></td>
                  <td><input type="time" id="time" v-model="store.time" required="required"></td>                
                </tr>
              
              <tr class="line-item flexrow person-count">
                  <td><label for="person-count">Personenzahl:</label></td>
                  <td><input type="number" id="person-count" v-model="store.personCount" required="required"></td>                
                </tr>

              </table>

            </div>
            <br><br>
            <p v-if="error">Die Eingabe ist nicht gültig</p>
            <div class="flexrow buttons">
                <router-link to="/table-select" event="">Weiter</router-link>
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
    if (!this.store.date || !this.store.time || this.store.personCount < 1) {
      this.error = true;
    } else next();
  }
}
</script>

<style scoped lang="less">
  
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
    background-color: grey;

  }
}
</style>
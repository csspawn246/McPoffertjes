<template>
  <div class="basic">

    <h1>Online-Reservierung</h1>

    <div class="flexrow content">

        <div class="flexcol sidebar-left">

            <h3 class="heading">Reservierung</h3>

            <div class="inputs">

              <table>
                <tr class="line-item flexrow date">
                  <td ><label for="date">Datum:</label></td>
                  <td><input type="date" id="date" v-model="date" required="required"></td>                
                </tr>

                <tr class="line-item flexrow time">
                  <td><label for="time">Uhrzeit:</label></td>
                  <td><input type="time" id="time" v-model="time" required="required"></td>                
                </tr>
              
              <tr class="line-item flexrow person-count">
                  <td><label for="person-count">Personenzahl:</label></td>
                  <td><input type="number" id="person-count" v-model="personCount" required="required"></td>                
                </tr>

              </table>

            </div>

            
            
            <div class="flexrow buttons">
                <div><router-link to="/table-select">Weiter</router-link></div>
            </div>
            


        </div>
        <div class="mainview">

        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Basic',
  data() {
    return{
      date : undefined,
      time: undefined,
      personCount : undefined,
    }
    

    },
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

.content{

  background-color: grey;
  height: 100%;

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
          height: 60vh;

          input{
            margin: 1rem;
            padding: 0.25rem;
            height: 1.5rem;
            border: 1px solid grey;
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

          div{
            background-color: white;
            border: 2px solid black;
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

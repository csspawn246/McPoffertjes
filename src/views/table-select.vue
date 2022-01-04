<template>
  <div class="table-select">
    <div class="content">
        <a href="http://localhost:8080">McPoffertjes - Ihr Dessert-Experte</a>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class="flexcol sidebar-left">
            <h3 class="heading">Tischauswahl</h3>

            <div class="line-item flexrow date">
                <p>Datum:</p>
                <div>{{this.date}}</div>
            </div>
            
            <div class="line-item flexrow time">
                <p>Uhrzeit:</p>
                <div>{{this.time}}</div>
            </div>
            
            <div class="line-item flexrow person-count">
                <p>Personenzahl:</p>
                <div>{{this.personCount}}</div>
            </div>
             
            <div class="line-item flexrow table-nr">
                <p>Tisch Nr.:</p>
                <div class="table-nr-value">{{this.tableNr}}</div> 
            </div>
            

            <p>Zum Auswählen eines Tisches klicken.</p>
            <p>Um Tische zusammenzuführen, klicken und ziehen.</p>

            <div class="flexrow buttons">
                <a href="http://localhost:8080/basic">Zurück</a>
                <a href="http://localhost:8080/dish-select">Weiter</a>
                <!-- <div><router-link to="/basic">Zurück</router-link></div>
                <div><router-link to="/dish-select">Weiter</router-link></div> -->
            </div>
            


        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TableSelect',
  data() {
    return{
      date : 'dd.mm.yyyy',
      time: '23:59',
      personCount : 99,
      tableNr: undefined,
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

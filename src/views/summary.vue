<template>
  <div class="summary">
    <div class="content">
        <a href="http://localhost:8080">McPoffertjes - Ihr Dessert-Experte</a>
          <!-- <router-link to="/"><h1>McPoffertjes - Ihr Dessert-Experte</h1></router-link> -->
        <div class= "box"> 
        <div class="sidebar-left">
            <h3 class="heading">Zusammenfassung</h3>
            
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

            <div class="flexrow buttons">
                <a href="http://localhost:8080/dish-select">Zurück</a>
                <!-- <div><router-link to="/dish-select">Zurück</router-link></div> -->
            </div>
        </div>
        <div class="sidebar-left">
            <h3>Gewählte Gerichte</h3>
            <p>1  x Süß-Kartoffelgratin 4,20€</p>
            <p>Gesamt: 4,20€</p>
            <div class="flexrow buttons">
                <a href="http://localhost:8080/success">Bestätigen</a>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Summary',
  data() {
    return{
      date : 'dd.mm.yyyy',
      time: '23:59',
      personCount : 99,
      tableNr: 99,
    }
    

    },
}
</script>

<style scoped lang="less">
//@import "../less/default.less";
html, body {
  margin:0px;
  height:100vh;
}

.box{
    display: flex;
    align-items: center´´;
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
    }
}


</style>

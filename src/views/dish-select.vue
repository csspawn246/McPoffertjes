<template>
  <div class="dish-select">
    <div class="content">
          <h1>Online-Reservierung</h1>

        <div class="sidebar-left">
            <h3 class="heading">Speisenauswahl</h3>
            
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

            <p>Die Speisenvorauswahl dient unserem Restaurant dazu, die benötigten Mengen bestimmter Zutaten 
                besser einschätzen zu können. Wir versuchen, dies rechtzeitig unseren Lieferanten mitzuteilen,
                sodass wir weniger Lebensmittel überbestellen und wegwerfen müssen. 
                Das trägt dazu bei, dass unsere Preise sowie unser CO2-Fußabdruck klein bleiben.
                Natürlich kannst du deine Meinung aber auch vor Ort noch ändern und/oder weitere Speisen und Getränke dazubestellen!
            </p>
            

            <div class="flexrow buttons">
                <div><router-link to="/table-select">Zurück</router-link></div>
                <div><router-link to="/summary">Weiter</router-link></div>
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
  name: 'DishSelect',
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
//@import (reference) "~@/less/index.less";
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

        div{
            background-color: white;
            border: 2px solid black;
            border-radius: 0.5rem;
            padding: 2px 6px;
        }
    }

}
    

</style>

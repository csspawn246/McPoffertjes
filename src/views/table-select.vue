<template>
  <div class="table-select">
    <div class="content">
          <h1>Online-Reservierung</h1>

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
                <div><router-link to="/basic">Zurück</router-link></div>
                <div><router-link to="/dish-select">Weiter</router-link></div>
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

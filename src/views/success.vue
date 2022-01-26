<template>
    <div class="header">
        <div class="content">
        <router-link class="page-heading" to="/" @click="reset=true">McPoffertjes - Ihr Dessert-Experte</router-link>
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
            <p></p>
            <h>Herzlichen Dank für Deine Reservierung! <br> Deine Bestellung war erfolgreich!</h>
            <p>Zeige bitte folgenden Code im Restaurant vor:</p>
            <p>{{"HZ7/ssdl)2020" + store.idCount}}</p>
            <p>In Kürze erhältst du von uns eine Zusammenfassung deiner Reservierung an die von dir angegebene E-Mail.</p>
            <p>Eine Änderung oder Stornierung deiner Reservierung ist von jetzt an leider nur noch telefonisch möglich.</p>
            <p>Bitte melde dich bei Fragen unter:</p>
            <p>0511 480-432-55</p>
            <p>Wir freuen uns auf Dich!</p>
            <p>Dein McPoffertjes-Team</p>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  }
</script>

<style scoped lang="less">
@import "~@/less/default.less";

.progress-bar{
  #Bestätigung{
    background-color: rgb(255, 145, 0);
    border: 2px solid rgb(255, 145, 0);
    p{
      color: white;
      font-weight: 600;
    };
  }
}



.content{
    align-items: center;
    background-color: rgb(253, 230, 200);
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
        font-size: 50px;
        color: rgb(255, 145, 0);
    }
    a:hover{
        text-decoration: underline;
    }

    .buttons{
        width: 20%;
        justify-content: center;

        a{
            font-size: 20px;
            text-decoration: none;
            color: rgb(255, 145, 0);
            background-color: rgb(253, 230, 200);
            border: 2px solid rgb(255, 145, 0);
            border-radius: 0.5rem;
            padding: 2px 6px;
          }
    }

}
    

</style>

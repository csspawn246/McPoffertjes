<template>
    <div class="header">
        <div class="content">
            <a href="/">McPoffertjes - Ihr Dessert-Experte</a>
            <p></p>
            <h>Herzlichen Dank für Deine Reservierung! <br> Deine Bestellung war erfolgreich!</h>
            <p>Zeige bitte folgenden Code im Restaurant vor:</p>
            <p>HZ7/ssdl)2020</p>
            <p>In Kürze erhältst du von uns eine Zusammenfassung deiner Reservierung an die von dir angegebene E-Mail.</p>
            <p>Eine Änderung oder Stornierung deiner Reservierung ist von jetzt an leider nur noch telefonisch möglich.</p>
            <p>Bitte melde dich bei Fragen unter:</p>
            <p>0511 480-432-55</p>
            <p>Wir freuen uns auf Dich!</p>
            <p>Dein McPoffertjes-Team</p>
        </div>
    </div>
</template>

<style scoped lang="less">
.router-link{
    background-color: green;
}

.content{
    align-items: center;
    background-color: lavender;
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
        font-size: 50px;
        color: rebeccapurple;
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
            color: rebeccapurple;
            background-color: lavender;
            border: 2px solid rebeccapurple;
            border-radius: 0.5rem;
            padding: 2px 6px;
          }
    }

}
    

</style>

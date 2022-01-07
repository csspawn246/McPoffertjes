<template>
    <div class="header">
        <div class="content">
            <a href="/">McPoffertjes - Ihr Dessert-Experte</a>
            <p></p>
            <h>Herzlichen Dank für Ihre Reservierung! <br> Ihre Bestellung war erfolgreich!</h>
            <p>Zeigen Sie bitte folgenden Code im Restaurant vor:</p>
            <p>HZ7/ssdl)2020</p>
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

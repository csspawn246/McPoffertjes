<template>
    <div class="header">
        <div class="content">
            <h1>McPoffertjes - Ihr Dessert-Experte</h1>
            <img src="../assets/poffertjes.png" alt="mcpoffertjes-logo" style="width:500px;">
            <p></p>
            <div class="flexrow buttons">
                <a href="/basic">Online-Reservierung</a>
                <!-- <div><router-link to="/basic">Online-Reservierung</router-link></div> -->
            </div>
            <p></p>

        </div>
    </div>
</template>

<style scoped lang="less">
//@import "../less/default.less";

/* .flexrow{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.flexcol{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
} */

.router-link{
    background-color: green;
}

.content{
    align-items: center;
    background-color: lavender;
    display: flex;
    flex-direction: column;


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

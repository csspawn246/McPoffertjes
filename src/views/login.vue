<template>
  <div class="basic">
    <div class="content">
        <router-link class="page-heading" to="/" @click="reset=true">McPoffertjes - Ihr Dessert-Experte</router-link>        <div class="flexcol sidebar-left">
            <h3 class="heading">Mitarbeiter Login</h3>

            <div class="inputs">

              <table>
                <tr class="line-item flexrow date">
                  <td ><label for="name">Name</label></td>
                  <td><input type="text" id="name" v-model="username" required="required" :class="'required'"></td>                                
                </tr>

                <tr class="line-item flexrow date">
                    <td ><label for="password">Passwort</label></td>
                    <td><input type="password" id="password" v-model="password" required="required" :class="'required'"></td>
                  </tr>

                <tr>
                  <td><p class="error" v-if="error">Passwort oder Nutzername ist falsch</p></td>
                  <td></td>
                </tr>

              </table>

            </div>
            <br><br>

            <div class="flexrow buttons">
                <router-link to="/showReservations">Weiter</router-link>
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
  computed: {
  },
  data() {
    return {
      username: undefined,
      password: undefined,
      error: false
    }
  },
  mixins: [mixin],
  methods: {
  },
  beforeRouteLeave: function(to, from, next) {
    if(this.reset) next();
    if (this.username != "admin" || this.password != "admin") {
      this.error = true;
    } else next();
  }
}
</script>

<style lang="less">

</style>


<style scoped lang="less">
@import "~@/less/default.less";

.progress-bar{
  #Kerndaten{
    background-color: rgb(255, 145, 0);
    border: 2px solid rgb(255, 145, 0);
    p{
      color: white;
      font-weight: 600;
    };
  }
}



</style>
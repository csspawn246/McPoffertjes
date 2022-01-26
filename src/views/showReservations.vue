<template>
  <div class="basic">
    <div class="content">
        <router-link class="page-heading" to="/" @click="reset=true">McPoffertjes - Ihr Dessert-Experte</router-link>        <div class="flexcol sidebar-left">
            <h3 class="heading">Reservierungsübersicht</h3>

            <br><br>
            <p>Zum bearbeiten einer Reservierung klicken</p>

            <div class="flexrow buttons" v-for="(reservation, index) in store.reservations" :key="reservation.id">
                <router-link to="/showReservation" @click="store.currentReservation=index">{{reservation.id}}</router-link>
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
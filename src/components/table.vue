<template>
  <div class="table" :style="selected ? 'border: 4px green solid;' : ''">
      <div class="seats">
          <div v-for="n in seatCount/2" :key="n" :class="(toSmall ? 'toSmall ' : '') +'seat'"></div>
      </div>
      <div :class=" (toSmall ? 'toSmall ' : '') +'plate'"></div>
      <div class="seats">
          <div v-for="n in seatCount/2" :key="n" :class="(toSmall ? 'toSmall ' : '') +'seat'"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'desk',
    props: {
        seatCount: Number,
        selected: Boolean,
        toSmall: Boolean
    }
}
</script>

<style lang="less">
.table {
    margin: 1rem;
    display: flex;
    width: 100%;
    height: 100%;
    .seats {
        display: flex;
        flex-direction: column;
        width: 25%;
    }
    .plate {
        width: 50%;
    }
    .seat {
        margin: 0.5rem;
    }
    .seat, .plate {
        background-color: brown;
        height: 100%;
    }
    
    .seat.toSmall, .plate.toSmall {
        background-color: gray;
    }
}
</style>
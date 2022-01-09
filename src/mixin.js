import Store from '@/store.js'
import { computed } from 'vue'

const mainmixin = {
  data() {
    return {
      store: Store
    }
  },
  methods: {
  },
  computed: {
    sumPrice: function() {
        let sum = 0;
        this.store.dishes.forEach(element => {sum += element.count * element.price});
        return sum.toFixed(2);
    },
    sumCount: function() {
        let sum = 0;
        this.store.dishes.forEach(element => {sum += element.count});
        return sum
    }
  }
}

export default mainmixin
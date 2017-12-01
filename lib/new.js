var newInstance = new Vue({
  // オプションを記述していく
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    countup: function () {
      this.count++
    }
  }
})
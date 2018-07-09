<template>
  <section class="container">
    <v-card>
      <v-card-title>
        Wait For me
      </v-card-title>
      <v-card-text>
        <h1>{{myTime}}</h1>
      </v-card-text>

    </v-card>
  </section>
</template>

<script>
  import countdown from 'countdown'
export default {
  mounted () {
    setInterval(this.updateTime, 1000)
  },
  data () {
    return {
      myTime: null
    }
  },
  methods: {
    updateTime () {
      this.myTime = countdown(new Date(), new Date(1573430400000), countdown.DEFAULTS, 11, 0).toString()
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

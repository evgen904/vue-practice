<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            height="300"
          ></v-card-media>
          <v-card-text>
            <h2 class="text--primary">Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eius.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

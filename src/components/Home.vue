<template>
  <div>
    <v-container fluid>
      <v-carousel>
        <v-carousel-item
          v-for="ad in ads"
          :src="ad.imagesSrc"
          :key="ad.id"
        >
          <div class="car-link">
            <v-btn :to="'/ad/' + ad.id" class="error">{{ad.title}}</v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card>
            <v-img
              :src="ad.imagesSrc"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  {{ad.title}}
                </h3>
                <div>
                  {{ad.description}}
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            description: 'Hello i am description',
            promo: false,
            imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '123'
          },
          {
            title: 'Second ad',
            description: 'Hello i am description',
            promo: true,
            imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '123123'
          },
          {
            title: 'Third ad',
            description: 'Hello i am description',
            promo: true,
            imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '123123123'
          }
        ]
      }
    }
  }
</script>
<style>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    background: rgba(0,0,0,0.5);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>

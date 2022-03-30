<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      movieTitle: "",
      movieTimeSlot: "",
    };
  },
  created: function () {
    this.movieIndex();
  },
  methods: {
    movieIndex: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    timeSlotSet: function () {
      console.log(this.movieTitle);
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="movieTitle" />
    <button @click="timeSlotSet()">Add to Lineup</button>
  </div>
  <div class="movies" v-for="movie in movies" v-bind:key="movie.id">
    <h1>{{ movie.title }}</h1>
    <img v-bind:src="movie.poster_url" />
    <p>{{ movie.runtime }} minutes</p>
    <p>{{ movie.summary }}</p>
  </div>
</template>

<style>
img {
  max-width: 300px;
}
</style>

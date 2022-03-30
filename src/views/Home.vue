<!-- home page is going to show all movies for viewing for the day.
It will also include the actual sales and such -->

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
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
  },
};
</script>

<template>
  <h1 v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</h1>
</template>

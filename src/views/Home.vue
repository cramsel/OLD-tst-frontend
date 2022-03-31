<!-- home page is going to show all movies for viewing for the day.
It will also include the actual sales and such -->

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      timeslots: {},
      ticketSales: {},
      totalSales: 0,
      totalTickets: 75,
    };
  },
  created: function () {
    this.movieIndex();
    this.timeSlotIndex();
    // this.salesCounter(1);
  },
  methods: {
    movieIndex: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    timeSlotIndex: function () {
      axios.get("http://localhost:3000/timeslots").then((response) => {
        console.log(response.data);
        this.timeslots = response.data;
      });
    },
    // salesCounter: function (key) {
    //   axios.get("http://localhost:3000/sales").then((response) => {
    //     console.log(response.data);
    //     this.ticketSales = response.data;
    //   });
    //   var testSales = this.ticketSales.key;
    //   console.log(this.testSales.key);
    //   console.log(key);
    //   console.log(testSales);
    // },
    createReport: function () {
      axios.post("http://localhost:3000/reports").then((response) => {
        console.log(response.data);
        this.$router.push("/lineup");
      });
    },
  },
};
</script>

<template>
  <button @click="createReport()">Create Report</button>

  <div>
    <h1>Current Schedule:</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Theater</th>
          <th scope="col">Title</th>
          <th scope="col">Time</th>
          <th scope="col">Tickets Remaining</th>
        </tr>
      </thead>
      <tbody v-for="timeslot in timeslots" v-bind:key="timeslot.id">
        <tr>
          <th scope="row">{{ timeslot.theater_number }}</th>
          <td>{{ timeslot.movie.title }}</td>
          <td>{{ timeslot.time_slot }}</td>
          <td>
            {{ totalSales }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h1 v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</h1>
</template>

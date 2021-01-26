
import Vue from 'vue';
const axios = require('axios').default;


var app = new Vue ({
  el: "#app-container",
  data: {
    albums: [],
    genres: [],
    genre: '',
  },
  methods: {
    preventDefault: function (){
      console.log("preventDefault");
      event.preventDefault();
      axios
      .get("partial/server.php",
        {
          params: {
            genre: this.genre,
          }
        }
      )
      .then(
        (element) => {
          this.albums = element.data;
          // console.log(element);
          // console.log(this.albums );
        }
      );


    }
  },
  mounted: function(){
    console.log("hello world");
    axios
    .get("partial/server.php")
    .then(
      (element) => {
        // console.log(element.data);


        this.albums = element.data;
        for (var i = 0; i < this.albums.length; i++) {
          if (!this.genres.includes(this.albums[i].genre)) {
            this.genres.push(this.albums[i].genre)
          }
        };
        // console.log(this.genres);
        console.log(element);

        // console.log(this.albums );
      }
    );


  },

});

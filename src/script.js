
import Vue from 'vue';
const axios = require('axios').default;


var app = new Vue ({
  el: "#app-container",
  data: {
    albums: [],
    genres: [],
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
          this.genres.push(this.albums[i].genre)
        };
        // console.log(this.genres);
        console.log(element);

        // console.log(this.albums );
      }
    );

  },

});

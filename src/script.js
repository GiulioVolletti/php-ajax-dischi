
import Vue from 'vue';
const axios = require('axios').default;


var app = new Vue ({
  el: "#app-container",
  data: {
    albums: [],
  },
  mounted: function(){
    console.log("hello world");
    axios
    .get("http://localhost/php-ajax-dischi/partial/server.php")
    .then(
      (element) => {
        // console.log(element.data);
        this.albums = element.data;
        // console.log(this.albums );
      }
    );

  },

});

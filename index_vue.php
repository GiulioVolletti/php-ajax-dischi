<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Php Ajax Dischi Vue</title>
  </head>
  <body>
    <div id="app-container" v-if="albums.length > 0">
      <?php
        include __DIR__ . '/partial/header.php';
      ?>
      <!-- main -->
      <main>
        <div class="container">
          <form action="genre.php" method="get">
            <select  name="genre">
              <option  value="All">Tutti</option>
              <option v-for="tipe in genres" :value="tipe">{{tipe}}</option>
            </select>
            <button type="submit" name="button">Cerca</button>

          </form>
        </div>
        <div class="container">
          <div v-for="(album, index) in albums" class="container-albums">
            <img :src="album.poster" alt="cover">
            <h3>{{album.title}}</h3>
            <div>
              <p>{{album.author}}</p>
              <p>{{album.genre}}</p>
            </div>
          </div>
        </div>
      </main>
      <!-- /main -->
    </div>
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>

<main>
  <div class="container">
    <?php foreach ($albums as $album) { ?>

      <div class="container-albums">
        <img src="<?= $album["poster"] ?>" alt="cover">
        <h3><?= $album["title"] ?></h3>
        <div>
          <p><?= $album["author"] ?></p>
          <p><?= $album["genre"] ?></p>
        </div>
      </div>
    <?php } ?>
  </div>
</main>

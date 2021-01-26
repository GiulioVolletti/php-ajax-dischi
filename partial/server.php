<?php
include __DIR__ . '/db.php';
header("Content-type: application/json");

$genre = strtolower($_GET["genre"]);

if (empty($genre)) {
  $filteredDatabase = $albums;
} else {
  $filteredDatabas = [];
  foreach ($albums as $cd) {
    if (strtolower($cd["genre"]) == $genre) {
      $filteredDatabase[] = $cd;
    }
  }
}

echo json_encode($filteredDatabase);

//var_dump($filteredDatabase);
?>

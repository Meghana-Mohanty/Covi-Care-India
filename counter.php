<?php

  session_start();
  $counter_name = "counter.txt";

  if (!file_exists($counter_name)) 
  {
    $fin = fopen($counter_name, "w");
    fwrite($f,"20");
    fclose($f);
  }

  $fout = fopen($counter_name, "r");
  $counterVal = fread($fout, filesize($counter_name));
  fclose($fout);

  if(!isset($_SESSION['hasVisited']))
  {
    $_SESSION['hasVisited']="yes";
    $counterVal++;
    $fin = fopen($counter_name, "w");
    fwrite($fin, $counterVal);
    fclose($fin);
  }

  ?> 
    <div class="visitor-count"> 
    <p>Visitor's count: 0<?php echo "$counterVal"?></P>
    </div>
<?php

#necesitamos dividir nuestro dataset
#necesitamos un punto pivoltal
#recursivamente ordenar cada mitad de mi array

class quickSortClass{
  public $arr = array();
  public $n;
  
  public function main(){
    $this->arr = [1992, 1990, 10, 5, 6, 100, 0, 1, -10];
    $this->n = count($this->arr);
    $this->quickSort(0, $this->n-1);
    echo("Arrar Ordenado:");
    foreach($this->arr as $item){
        echo($item.', ');
    } 
  }
  public function particion($low, $high){
      
      $i =$low-1;
      $pivot = $this->arr[$high];
      echo("  particion ".$low." ".$high." ".$i." ".$pivot."\n");
      //for j in range(low, high):
      for($j=$low; $j<$high; $j++){
          echo("     j ".$j." ".$this->arr[$j]." ".$pivot."\n");
          if($this->arr[$j]<= $pivot){
              $i = $i+1;
              //arr[i], arr[j] = arr[j], arr[i]
              $aux = $this->arr[$i];
              $this->arr[$i] = $this->arr[$j];
              $this->arr[$j] = $aux;
          }
      }

      //arr[i+1], arr[high] =arr[high],arr[i+1]
      $aux = $this->arr[$i+1];
      $this->arr[$i+1] =  $this->arr[$high];
      $this->arr[$high] = $aux;
      return ($i+1);
  }

  function quickSort($low, $high){
      echo("quickSort ".$low." ".$high."\n");
      if($low < $high){
          $pi = $this->particion($low, $high);
          $this->quickSort($low, $pi-1);
          $this->quickSort($pi+1, $high);
      };
  }  
}

    
$obj = new quickSortClass();
$obj->main();
    


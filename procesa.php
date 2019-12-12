<?php
$conexion=mysqli_connect("localhost","root");
$db=mysqli_select_db($conexion,"luz");

$query=mysqli_query($conexion,"UPDATE estado SET estado='".$_GET["dato"]."' WHERE id=1");
if($query){
    echo"Se actualizo corectamente";
}else{
    echo"No se ingreso";
}
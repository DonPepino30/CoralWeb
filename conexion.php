<?php
$servidor= "localhost";
$usuario = "root";
$contrasenha = "";
$BD = "formulario";

$conexion = mysqli_connect($servidor, $usuario, $contrasenha, $BD);

if($conexion){
    echo "Fallo la conexion <br>";
    die("Connection failed" . mysqli_connect_error());
}else{
    echo "Conexion exitosa";
}

?>
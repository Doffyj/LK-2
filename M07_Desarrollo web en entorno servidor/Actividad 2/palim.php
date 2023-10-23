<?php
	function Palindromo($texto){
		if (strrev($texto) == $texto){
			return 1;
		}
		else{
			return 0;
		}
	}

	$texto = $_POST["texto"];
	echo "El texto ";
	if(Palindromo($texto)){
		echo "es palindromo<br>";
	}
	else{
		echo "no es palindromo<br>";
	}
?>
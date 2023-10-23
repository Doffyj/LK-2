<?php
	function tipoCalculo($symbol, $op1, $op2){
		switch ($symbol){
			case strcmp($symbol, "+") == 0:
				$suma = $op1 + $op2;
				echo "suma es $suma";
				break;
			case strcmp($symbol, "-") == 0:
				$resta = $op1 - $op2;
				echo "resta es $resta";
				break;
			case strcmp($symbol, "*") == 0:
				$mult = $op1 * $op2;
				echo "multiplicacion es $mult";
				break;
			case strcmp($symbol, "/") == 0:
				$divi = $op1 / $op2;
				echo "division es $divi";
				break;
		}
	}

	$op1 = $_POST["Op1"];
	$op2 = $_POST["Op2"];
	$symbol = $_POST["operador"];
	echo "El resultado de la ";
	tipoCalculo($symbol, $op1, $op2);
	
?>
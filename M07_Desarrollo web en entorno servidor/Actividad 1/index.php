<html>
	<!-- Hecho por Jon Sanchez -->
	<head>
		<title>Actividad</title>
	</head>
	<body>
	<?php
		//punto 1
		$edad_usuario = 66;
		function calcular_retirada($a){
			$anyos_restantes = 66 - $a;
			echo " $anyos_restantes años";
		}
		if ($edad_usuario > 18 && $edad_usuario < 66){
			echo "El usuario tiene edad de trabajar ($edad_usuario), y le quedan de trabajo";
			calcular_retirada($edad_usuario);
		}
		else{
			echo "El usuario no tiene edad de trabajar ($edad_usuario)";
		}
		echo "<br>";
		//Punto 2
		$clase1_alumnos = 60;
		$clase2_alumnos = 12;
		$clase3_alumnos = 33;
		$clase_total = $clase1_alumnos + $clase2_alumnos + $clase3_alumnos;
		echo "<br>Hay un total de $clase_total alumnos, por lo que se precisarán de ";
		echo ceil($clase_total / 2);
		echo " pupitres<br>";
		//Punto 3
		function ecuacion($a, $b, $c, $signo){
			return round(((($b * -1) + ($signo * sqrt(($b * $b) - (4 * $a * $c)))) / (2 * $a)));
		}
		$ec_x = 5;
		$ec_y = -10;
		$ec_c = 0;
		$sol1 = ecuacion($ec_x, $ec_y, $ec_c, 1);
		$sol2 = ecuacion($ec_x, $ec_y, $ec_c, -1);
		echo "<br>Las soluciones a la ec de segundo grado, x = $ec_x y = $ec_y c = $ec_c, son: ($sol1, $sol2)<br>";
		//Punto 4
		//area de la pizza redonda redondeada a 2 digitos.
		$radio_pizza1 = 5;
		$altura_pizza2 = 8;
		$anchura_pizza2 = 10;
		$area_pizza1 = round(($radio_pizza1 * $radio_pizza1 * M_PI), 2);
		$area_pizza2 = $altura_pizza2 * $anchura_pizza2;
		echo "<br>El radio de la pizza redonda es $radio_pizza1 cm, y la pizza cuadrada tiene dimensiones $altura_pizza2 cm x $anchura_pizza2 cm.<br>";
		echo "La pizza redonda tiene un area de $area_pizza1, y la cuadrada $area_pizza2<br>";
		if ($area_pizza1 > $area_pizza2)
			echo "La pizza redonda es más grande<br>";
		else if ($area_pizza1 == $area_pizza2)
			echo "Las dos pizzas son igual de grandes";
		else
			echo "La pizza cuadrada es más grande";
		echo "<br>";
		//Punto 5
		$horas_trabajo = 7;
		$dias_trabajo = 5;
		$sueldo_hora = 5;
		$gastos_aprox = 250;
		$precio_alquiler = 500;
		echo "<br>La persona X trabaja $horas_trabajo horas al dia, $dias_trabajo a la semana, y cobra $sueldo_hora a la hora (";
		echo ($horas_trabajo * $dias_trabajo * $sueldo_hora * 4);
		echo " al mes)<br>";
		echo "Persona X gastaría $precio_alquiler en alquiler y $gastos_aprox en otras cosas (";
		echo ($precio_alquiler + $gastos_aprox);
		echo " al mes)<br>";
		if (($horas_trabajo * $dias_trabajo * $sueldo_hora * 4) - ($precio_alquiler + $gastos_aprox) < 0)
			echo "No se lo puede permitir.";
		else
			echo "Se lo puede permitir.";
	?>
	</body>
</html>
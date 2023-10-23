<html>
	<head>
		<title>Actividad 2</title>
	</head>
	<body>
		<form method="POST" action="palim.php">
			<fieldset>
				<legend>Checkeador de palindromo</legend>
				Texto:<input type="text" name="texto"><br>
			</fieldset>
		</form>
		<form method="POST" action="calc.php">
			<fieldset>
				<legend>Calculadora</legend>
				Numero1:<input type="number" name="Op1"><br>
				Tipo de operacion:<select name="operador">
					<option value="+">sumar</option>
					<option value="-">restar</option>
					<option value="*">multiplicar</option>
					<option value="/">dividir</option>
				</select><br>
				Numero2:<input type="number" name="Op2"><br>
			</fieldset>
			<input type="submit" name="enviar"/>
		</form>
		<?php
		$letra_dni = [
			0 => "T",
			1 => "R",
			2 => "W",
			3 => "A",
			4 => "G",
			5 => "M",
			6 => "Y",
			7 => "F",
			8 => "P",
			9 => "D",
			10 => "X",
			11 => "B",
			12 => "N",
			13 => "J",
			14 => "Z",
			15 => "S",
			16 => "Q",
			17 => "V",
			18 => "H",
			19 => "L",
			20 => "C",
			21 => "K",
			22 => "E"
		];
		$dni = $_POST["dni"];
		echo "El DNI completo es: $dni";
		echo $letra_dni[$dni%21];
		?>
		<form method="POST" action="actividad2.php">
			DNI:<input type="number" name="dni">
			<input type="submit" name="submit" value="Submit">
		</form>
	</body>
</html>

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
	</body>
</html>

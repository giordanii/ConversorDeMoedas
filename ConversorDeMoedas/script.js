function ConversionDolar() {
  var elementValue = document.getElementById("valueDolar");
  var value = elementValue.value;
  var numericDolarValue = parseFloat(value);
  //insert below desired exchange rate
  var realsDolar = numericDolarValue * 5;
  //end of exchange rate
  var convertedElementValue = document.getElementById("convertedValueDolar");
  var convertedValueDolar = "O valor em BRL é de R$ " + realsDolar;
  convertedElementValue.innerHTML = convertedValueDolar;
}

function ConversionEuro() {
  var elementValue = document.getElementById("valueEuro");
  var value = elementValue.value;
  var numericEuroValue = parseFloat(value);
  //insert below desired exchange rate
  var realsEuro = numericEuroValue * 5.5;
  //end of exchange rate
  var convertedElementValue = document.getElementById("convertedValueEuro");
  var convertedValueEuro = "O valor em BRL é de R$ " + realsEuro;
  convertedElementValue.innerHTML = convertedValueEuro;
}
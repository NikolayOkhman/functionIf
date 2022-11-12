function modulu() {
   let a = prompt("Please insert the first number.");
   a = Number(a);
   let b = prompt("Please insert the second number.");
   b = Number(b);
   let c = a / b;
   let sum = a % b;
   if (sum != 0) {
      alert(c + " " + "(" + "יש שארית" + " " + sum + ")");
   } else {
      alert("(" + c + ")" + " " + "אין שארית");
   }
}

function modulu() {
   let a = prompt("Please insert the first number.");
   a = Number(a);
   let b = prompt("Please insert the second number.");
   b = Number(b);
   let sum = a % b;
   if (sum != 0) {
      alert("יש שארית" + " " + "(" + sum + ")");
   } else {
      alert("אין שארית");
   }
}

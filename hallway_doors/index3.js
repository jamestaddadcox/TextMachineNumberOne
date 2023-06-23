let count3;
function countFunctionFinal() { 
  const previousCount = Number(localStorage.getItem("incCount3")) || 0;
  count3 = previousCount + 1;
  localStorage.setItem("incCount3",count3);
}


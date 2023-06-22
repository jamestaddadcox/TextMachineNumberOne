let count2;
function countFunction() { 
  const previousCount = Number(localStorage.getItem("incCount2")) || 0;
  count2 = previousCount + 1;
  localStorage.setItem("incCount2",count2);
}

if (localStorage.getItem("incCount2") > 2) {
    const container = document.getElementById("container");
    const d = document.getElementById("door");
    d.outerHTML = "<a href = exit.html>door</a>";
} 
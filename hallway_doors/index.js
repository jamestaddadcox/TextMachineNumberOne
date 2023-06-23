let count;
function countFunction() { 
  const previousCount = Number(localStorage.getItem("incCount")) || 0;
  count = previousCount + 1;
  localStorage.setItem("incCount",count);
}
/* countFunction(); */
if (localStorage.getItem("incCount") > 2) {
    const container = document.getElementById("container");
    const d = document.getElementById("door");
    d.outerHTML = "<a class=fade-in href = stairs.html>door</a>";
}

/* if (localStorage.getItem("incCount") > 5) {
    const container = document.getElementById("container");
    const d = document.getElementById("door");
    d.outerHTML = "<a href = exit.html>door</a>";
} */
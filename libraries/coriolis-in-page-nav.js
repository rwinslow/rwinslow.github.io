document.querySelectorAll('button[class*="to-coriolis"]').forEach(button => {
  const tableClass = Array.from(button.classList)
    .find(function(className) {
      return className.startsWith("to-coriolis");
    })
    .replace("to-", "");

  button.addEventListener("click", function() {
    document.querySelector(`table.${tableClass}`).scrollIntoView();
  });
});

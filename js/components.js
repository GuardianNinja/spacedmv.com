async function loadComponent(id, file) {
  const res = await fetch(`components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

window.addEventListener("load", () => {
  loadComponent("nav", "nav.html");
  loadComponent("footer", "footer.html");
});

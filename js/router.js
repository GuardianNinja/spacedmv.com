async function loadPage(page) {
  const res = await fetch(`pages/${page}.html`);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;
}

function handleRoute() {
  const hash = location.hash.replace("#", "") || "home";
  loadPage(hash);
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

import { Home } from "./pages/Home.js";

const routes = {
  "": Home,
};

function router() {
  const app = document.querySelector(".app");
  const path = window.location.hash || "";
  const page = routes[path];

  app.replaceChildren();

  if (page) {
    app.appendChild(page());
  } else {
    app.innerHTML = "<h2>Página não encontrada</h2>";
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

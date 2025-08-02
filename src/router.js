import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login.js";
import { Signup } from "./pages/Signup.js";

const routes = {
  "/": Home,
  "/login": Login,
  "/signup": Signup
};

async function router() {
  const app = document.querySelector(".app");
  const path = window.location.pathname || "";
  const page = routes[path];

  app.replaceChildren();

  if (page) {
    const content = await page();
    app.appendChild(content);
  } else {
    app.innerHTML = "<h2>Página não encontrada</h2>";
  }
}

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  router();
}

window.addEventListener("popstate", router);
window.addEventListener("load", router);

import { getCookieValue } from "/src/helpers/cookieHelpers.js";
import {
  Loading,
  showLoading,
  hideLoading,
} from "/src/components/common/Loading.js";
import { Home } from "/src/pages/Home.js";
import { Login } from "/src/pages/Login.js";
import { Signup } from "/src/pages/Signup.js";
import { MyMovies } from "/src/pages/MyMovies.js";

const routes = {
  "/explorar": { component: Home, private: false },
  "/login": { component: Login, private: false },
  "/signup": { component: Signup, private: false },
  "/meus-filmes": { component: MyMovies, private: true },
};

async function router() {
  const app = document.querySelector(".app");

  if (!document.getElementById("loading")) {
    app.appendChild(Loading());
  }

  const loadingElement = document.getElementById("loading");

  if (window.location.pathname === "/") {
    history.replaceState({}, "", "/explorar");
  }

  const path = window.location.pathname;
  const page = routes[path];

  if (!page) {
    app.innerHTML = "<h2>Página não encontrada</h2>";
    return;
  }

  if (page.private && !getCookieValue("token")) {
    return navigateTo("/login");
  }

  app.replaceChildren(loadingElement);
  showLoading();

  try {
    const content = await page.component();
    app.appendChild(content);
  } catch (error) {
    console.error(`Erro ao carregar a página ${path}:`, error);
    app.innerHTML = "<h2>Ocorreu um erro ao carregar a página.</h2>";
  } finally {
    hideLoading();
  }
}

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  router();
}

window.addEventListener("popstate", router);
window.addEventListener("load", router);

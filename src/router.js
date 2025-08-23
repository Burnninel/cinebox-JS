// Helpers / Utils
import { getCookieValue } from "/src/helpers/cookieHelpers.js";
import { validateToken } from "/src/helpers/validateToken.js";

// Components
import {
	Loading,
	showLoading,
	hideLoading,
} from "/src/components/common/Loading.js";
import { ToastContainer } from "/src/components/common/ToastContainer.js";

// Pages
import { Home } from "/src/pages/Home.js";
import { Login } from "/src/pages/Login.js";
import { Signup } from "/src/pages/Signup.js";
import { MyMovies } from "/src/pages/MyMovies.js";
import { NewMovie } from "/src/pages/NewMovie.js";
import { Movie } from "/src/pages/Movie.js";

const routes = [
	{ path: "/explorar", component: Home, private: false },
	{ path: "/login", component: Login, private: false },
	{ path: "/signup", component: Signup, private: false },
	{ path: "/meus-filmes", component: MyMovies, private: true },
	{ path: "/filme/novo", component: NewMovie, private: true },
	{ path: "/filme/:id", component: Movie, private: true },
];

function matchRoute(pathname) {
	for (const route of routes) {
		const pattern = new URLPattern({ pathname: route.path });
		const match = pattern.exec({ pathname });
		if (match) {
			return { route, params: match.pathname.groups };
		}
	}
	return null;
}

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
	const matched = matchRoute(path);
	if (!matched) {
		app.innerHTML = "<h2>Página não encontrada</h2>";
		return;
	}

	const { route, params } = matched;

	const token = getCookieValue("token");

	if (route.private) {
		const isValid = await validateToken(token);
		if (!isValid) {
			ToastContainer().showToast({
				message: "Sessão expirou!",
				type: "error",
			});
			return navigateTo("/login");
		}
	}

	app.replaceChildren(loadingElement);
	showLoading();

	try {
		const content = route.private
			? await route.component(token, params)
			: await route.component();
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

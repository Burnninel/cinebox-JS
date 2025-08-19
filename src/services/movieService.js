import { apiRequest } from "/src/helpers/apiHelpers.js";
import { validateForm } from "/src/utils/validateForm.js";

const API_URL = "http://localhost:8888/filme";

export async function handleMovieRequest(endpoint, payload, token) {
  return apiRequest(`${API_URL}/${endpoint}`, "POST", payload, token);
}

export function fetchAllMovies(pesquisar = null) {
	if (pesquisar) {
		return apiRequest(`${API_URL}?pesquisar=${pesquisar}`, "GET");
	}

	return apiRequest(API_URL, "GET");
}

export async function fetchMovieById(id) {
	return apiRequest(`${API_URL}/${id}`, "GET");
}

export async function fetchMoviesByUser(token) {
	return apiRequest(`${API_URL}/meus-filmes`, "GET", null, token);
}

export async function createNewMovie(formData) {
	const validationRules = {
		titulo: { required: true, minLength: 3 },
		diretor: { required: true, minLength: 6 },
		ano_de_lancamento: { required: true },
		categoria: { required: true },
		sinopse: { required: true },
	};

	return validateForm(formData, validationRules);
}

export async function toggleMovieFavorite(id, action) {
	return apiRequest(`${API_URL}/${id}/${action}`, "POST");
}

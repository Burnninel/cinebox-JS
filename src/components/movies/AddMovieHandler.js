import {
	handleMovieRequest,
	createNewMovie,
} from "/src/services/movieService.js";
import { setErrors } from "/src/helpers/showFieldError.js";
import { showLoading, hideLoading } from "/src/components/common/Loading.js";
import { getCookieValue } from "/src/helpers/cookieHelpers.js";

export async function handleAddMovie(form) {
	const token = getCookieValue('token');
	form.addEventListener("submit", async function (event) {
		event.preventDefault();

		const inputs = form.querySelectorAll("input, textarea");

		const formData = {};
		inputs.forEach((input) => {
			formData[input.id] = input.value.trim();
		});

		formData.imagem = "deadpool.jpg"; // Imagem padrão teste - BackEnd não possui upload de imagem ainda

		const validateForm = await createNewMovie(formData);

		if (Object.keys(validateForm).length !== 0) {
			setErrors(validateForm);
			return;
		}

		showLoading();

		try {
			const response = await handleMovieRequest('filme', formData, token);
			console.log(response);
		} catch (error) {
			console.error("Erro ao adicionar filme:", error);

			setErrors(error.errors || {});
		} finally {
			hideLoading();
		}
	});
}

import {
	handleMovieRequest,
	validateNewMovie,
} from "/src/services/movieService.js";
import {
	setErrors,
	removeInputErrorMessage,
} from "/src/helpers/showFieldError.js";
import { showLoading, hideLoading } from "/src/components/common/Loading.js";
import { getCookieValue } from "/src/helpers/cookieHelpers.js";
import { ToastContainer } from "/src/components/common/ToastContainer.js";
import { navigateTo } from "/src/router.js";

function collectFormData(form) {
	const inputs = form.querySelectorAll("input, textarea");
	const data = {};
	inputs.forEach((input) => {
		data[input.id] = input.value.trim();
	});
	data.imagem = "mmf.jpg"; // Imagem padrão teste - BackEnd não possui upload de imagem ainda
	return { data, inputs };
}

function setupInputListeners(inputs) {
	inputs.forEach((input) => {
		input.addEventListener("input", () => removeInputErrorMessage(input));
	});
}

function setupCancelButton(form, route) {
	const cancelBtn = form.querySelector(".movie-form__btn-cancel");
	cancelBtn?.addEventListener("click", () => navigateTo(route));
}

export async function handleAddMovie(form) {
	const token = getCookieValue("token");
	const toastContainer = ToastContainer();

	const { data: initialData, inputs } = collectFormData(form);
	setupInputListeners(inputs);
	setupCancelButton(form, "/meus-filmes");

	form.addEventListener("submit", async function (event) {
		event.preventDefault();

		const { data: formData } = collectFormData(form);

		const validateForm = await validateNewMovie(formData);
		if (Object.keys(validateForm).length !== 0) {
			setErrors(validateForm);
			return;
		}

		showLoading();
		try {
			const response = await handleMovieRequest("filme", formData, token);
			toastContainer.showToast({
				message: response.message,
				type: "success",
			});
			navigateTo("/meus-filmes");
		} catch (error) {
			toastContainer.showToast({ message: error.message, type: "error" });
			setErrors(error.errors || {});
		} finally {
			hideLoading();
		}
	});
}

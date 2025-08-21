import {
	handleMovieRequest,
	createNewMovie,
} from "/src/services/movieService.js";
import {
	setErrors,
	removeInputErrorMessage,
} from "/src/helpers/showFieldError.js";
import { showLoading, hideLoading } from "/src/components/common/Loading.js";
import { getCookieValue } from "/src/helpers/cookieHelpers.js";
import { ToastContainer } from "/src/components/common/ToastContainer.js";
import { navigateTo } from "/src/router.js";

export async function handleAddMovie(form) {
	const token = getCookieValue("token");
	const toastContainer = ToastContainer();

	const inputs = form.querySelectorAll("input, textarea");
	const formData = {};

	inputs.forEach(({ id }) => {
		const inputElement = form.querySelector(`#${id}`);
		formData[id] = inputElement?.value || "";
		inputElement?.addEventListener("input", () =>
			removeInputErrorMessage(inputElement)
		);
	});

	form.addEventListener("submit", async function (event) {
		event.preventDefault();

		inputs.forEach((input) => {
			formData[input.id] = input.value.trim();
		});

		formData.imagem = "mmf.jpg"; // Imagem padrão teste - BackEnd não possui upload de imagem ainda

		const validateForm = await createNewMovie(formData);

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

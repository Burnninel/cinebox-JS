import {
	handleAuthRequest,
	validateLogin,
	validateSignup,
} from "/src/services/authService.js";
import { showLoading, hideLoading } from "/src/components/common/Loading.js";
import {
	setErrors,
	removeInputErrorMessage,
  clearAllFormErrors,
} from "/src/helpers/showFieldError.js";
import { ToastContainer } from "/src/components/common/ToastContainer.js";
import { navigateTo } from "/src/router.js";

export async function handleAuthForm(authContainer, inputs, formType) {
	const submitButton = authContainer.querySelector(".auth-form__submit");
	const toastContainer = ToastContainer();

	submitButton.addEventListener("click", async () => {
		await submitForm();
	});

	inputs.forEach(({ id }) => {
		const inputElement = authContainer.querySelector(`#${id}`);
		inputElement?.addEventListener("keydown", async (event) => {
			if (event.key === "Enter") {
				await submitForm();
			}
		});
	});

	async function submitForm() {
		const formData = {};

		inputs.forEach(({ id }) => {
			const inputElement = authContainer.querySelector(`#${id}`);
			formData[id] = inputElement?.value || "";
			inputElement?.addEventListener("input", () =>
				removeInputErrorMessage(inputElement)
			);
		});

		const validationErrors =
			formType === "login"
				? validateLogin(formData)
				: validateSignup(formData);

		if (Object.keys(validationErrors).length !== 0) {
			setErrors(validationErrors);
			return;
		}

		showLoading();

		try {
			const formType = submitButton.dataset.form;
			const response = await handleAuthRequest(formType, formData);
			const authenticatedUser = response.data;

			clearAllFormErrors(authContainer, formData);
			toastContainer.showToast({
				message: response.message,
				type: "success",
			});

			document.cookie = "token=; path=/; max-age=0";
			document.cookie = `token=${authenticatedUser.token}; path=/; max-age=86400`;

			navigateTo(formType === "login" ? "/meus-filmes" : "/login");
		} catch (error) {
			if (!error.errors || Object.keys(error.errors).length === 0) {
				clearAllFormErrors(authContainer, formData);
				toastContainer.showToast({
					message: error.message,
					type: "error",
				});
			}

			setErrors(error.errors || {});
		} finally {
			hideLoading();
		}
	}
}

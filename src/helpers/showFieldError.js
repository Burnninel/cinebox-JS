import { createElement } from "/src/helpers/createElement.js";

export function showFieldError(input, message) {
	const fieldWrapper =
		input.closest(".form__field") || input.closest(".form__group");

	if (!fieldWrapper) return;
	const nextSibling = fieldWrapper.nextElementSibling;

	if (nextSibling?.classList.contains("form__field-span--error")) {
		nextSibling.textContent = message;
	} else {
		const errorSpan = createElement({
			tag: "span",
			className: "form__field-span--error",
			textContent: message,
		});

		fieldWrapper.classList.add("form__field-error");
		fieldWrapper.insertAdjacentElement("afterend", errorSpan);
	}
}

export function setErrors(errors) {
	Object.entries(errors).forEach(([fieldId, message]) => {
		const input = document.getElementById(fieldId);
		if (input) showFieldError(input, message);
	});
}

export function removeInputErrorMessage(input) {
	const fieldWrapper =
		input.closest(".form__field") || input.closest(".form__group");

	if (!fieldWrapper) return;
	const nextSibling = fieldWrapper.nextElementSibling;

	if (nextSibling?.classList.contains("form__field-span--error")) {
		nextSibling.remove();
	}

	fieldWrapper.classList.remove("form__field-error");
}

export function clearAllFormErrors(form, formData) {
	Object.keys(formData).forEach((fieldId) => {
		const input = form.querySelector(`#${fieldId}`);
		if (input) removeInputErrorMessage(input);
	});
}
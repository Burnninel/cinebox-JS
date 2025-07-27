import { login } from "/src/services/authService.js";

export async function handleAuthForm(authContainer, inputs) {
  const submitButton = authContainer.querySelector(".auth-form__submit");

  submitButton.addEventListener("click", async () => {
    const formData = {};

    inputs.forEach(({ id }) => {
      const inputElement = authContainer.querySelector(`#${id}`);
      formData[id] = inputElement?.value || "";
    });

    try {
      const formType = submitButton.dataset.form;
      const { data: authenticatedUser } = await login(formType, formData);

      removeErrors(authContainer, formData);

      document.cookie = "token=; path=/; max-age=0";
      document.cookie = `token=${authenticatedUser.token}; path=/; max-age=86400`;
    } catch (error) {
      setErrors(error.errors || {});
    }
  });
}

function clearFieldError(input) {
  const nextSibling = input.nextElementSibling;

  if (nextSibling?.classList.contains("auth-form__span-error")) {
    nextSibling.remove();
  }

  input.classList.remove("auth-form__input-error");
}

function showFieldError(input, message) {
  const nextSibling = input.nextElementSibling;

  if (nextSibling?.classList.contains("auth-form__span-error")) {
    nextSibling.textContent = message;
  } else {
    const errorSpan = document.createElement("span");
    errorSpan.className = "auth-form__span-error";
    errorSpan.textContent = message;

    input.classList.add("auth-form__input-error");
    input.insertAdjacentElement("afterend", errorSpan);
  }
}

function setErrors(errors) {
  Object.entries(errors).forEach(([fieldId, message]) => {
    const input = document.getElementById(fieldId);
    if (input) showFieldError(input, message);
  });
}

function removeErrors(authContainer, formData) {
  Object.keys(formData).forEach((fieldId) => {
    const input = authContainer.querySelector(`#${fieldId}`);
    if (input) clearFieldError(input);
  });
}

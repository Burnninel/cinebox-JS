import { login } from "/src/services/authService.js";
import { ToastContainer } from "./ToastContainer";

export async function handleAuthForm(authContainer, inputs) {
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

    showLoading();

    try {
      const formType = submitButton.dataset.form;
      const data = await login(formType, formData);
      const authenticatedUser = data.response;

      clearAllFormErrors(authContainer, formData);
      toastContainer.showToast({ message: data.message, type: "success" });

      document.cookie = "token=; path=/; max-age=0";
      document.cookie = `token=${authenticatedUser.token}; path=/; max-age=86400`;
    } catch (error) {
      if (error.errors == 0) {
        clearAllFormErrors(authContainer, formData);
        toastContainer.showToast({ message: error.message, type: "error" });
      }

      setErrors(error.errors || {});
    } finally {
      hideLoading();
    }
  }
}

function removeInputErrorMessage(input) {
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

function clearAllFormErrors(authContainer, formData) {
  Object.keys(formData).forEach((fieldId) => {
    const input = authContainer.querySelector(`#${fieldId}`);
    if (input) removeInputErrorMessage(input);
  });
}

function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}

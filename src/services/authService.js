import { apiRequest } from "/src/helpers/apiHelpers.js";
import { validateForm } from "/src/utils/validateForm.js";

const API_URL = "http://localhost:8888";

export async function handleAuthRequest(formType, payload) {
  return apiRequest(`${API_URL}/${formType}`, "POST", payload);
}

export function validateLogin(formData) {
  const validationRules = {
    email: { required: true, email: true },
    senha: { required: true },
  };

  return validateForm(formData, validationRules);
}

export function validateSignup(formData) {
  const validationRules = {
    nome: { required: true, minLength: 5 },
    email: { required: true, email: true },
    senha: {
      required: true,
      minLength: 8,
      maxLength: 24,
      strong: true,
      confirmed: true,
    },
  };

  return validateForm(formData, validationRules);
}

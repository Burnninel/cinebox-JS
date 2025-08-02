import { apiRequest } from "../helpers/apiHelpers.js";
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

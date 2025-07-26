import { apiRequest } from "../helpers/apiHelpers.js";

const API_URL = "http://localhost:8888";

export async function login(formType, payload) {
  return apiRequest(`${API_URL}/${formType}`, "POST", payload);
}

import { apiRequest } from "/src/helpers/apiHelpers.js";

const API_URL = "http://localhost:8888";

export async function validateToken(token) {
    if (!token) return false;

	try {
        return await apiRequest(
            `${API_URL}/usuario`,
			"POST",
			null,
			token
		);
	} catch (error) {
		return false;
	}
}

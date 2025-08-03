export async function apiRequest(url, method, body = null, token = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw responseData;
    }

    return responseData;
  } catch (error) {
    throw error;
  }
}

export async function apiRequest(url, method, body = null) {
  try {
    const response = await fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibm9tZSI6ImJydW5vIiwiZW1haWwiOiJicnVub0BnbWFpbC5jb20iLCJpYXQiOjE3NTQxODkwMDYsImV4cCI6MTc1NDE5MjYwNn0.kpmOe2jIcg6SoocSt7NCujVzGWpBnSnpQLCEHzoWYHU",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw responseData;
    }

    return responseData;
  } catch (error) {
    throw error;
  }
}

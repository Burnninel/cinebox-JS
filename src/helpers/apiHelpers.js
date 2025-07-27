export async function apiRequest(url, method, body = null) {
  try {
    const response = await fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODQsIm5vbWUiOiJicnVubyIsImVtYWlsIjoiYnJuQGVtYWlsLmNvbSIsImlhdCI6MTc1Mjg5NjE4NiwiZXhwIjoxNzUyODk5Nzg2fQ.8I8kTxFfFxvcWfOcxccdRrES9MvSjgs3LwQ7fwzTxtk",
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

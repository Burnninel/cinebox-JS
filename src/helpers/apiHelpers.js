export async function requestApi(url, method, body = null) {
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

    if (!response.ok) {
      throw new Error(`Erro ao buscar filme: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

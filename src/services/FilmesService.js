const API_URL = "http://localhost:8888/filme";

export async function fetchAllFilmes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Erro ao buscar filmes: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchFilmeById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
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

export async function fetchFilmesByUser() {
  try {
    const response = await fetch(`${API_URL}/meus-filmes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODQsIm5vbWUiOiJicnVubyIsImVtYWlsIjoiYnJuQGVtYWlsLmNvbSIsImlhdCI6MTc1Mjg5MjEzMSwiZXhwIjoxNzUyODk1NzMxfQ.iHB2KdhJjNmvA1k4Eqfcy5dl97ukDU6RbGlblH_aVRU",
      },
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

export async function createNewFilme() {
  try {
    const payload = {
      titulo: "aiaaai - A lenda",
      diretor: "Jhon Ksennedy",
      categoria: "Ação - Suspense",
      sinopse: "Um filme que supera as leis da física.",
      ano_de_lancamento: "1977",
      imagem: "deadpool.jpg",
    };

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODQsIm5vbWUiOiJicnVubyIsImVtYWlsIjoiYnJuQGVtYWlsLmNvbSIsImlhdCI6MTc1Mjg5MjEzMSwiZXhwIjoxNzUyODk1NzMxfQ.iHB2KdhJjNmvA1k4Eqfcy5dl97ukDU6RbGlblH_aVRU",
      },
      body: JSON.stringify(payload),
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

export async function toggleFilmeFavorite(id, action) {
  try {
    const response = await fetch(`${API_URL}/${id}/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODQsIm5vbWUiOiJicnVubyIsImVtYWlsIjoiYnJuQGVtYWlsLmNvbSIsImlhdCI6MTc1Mjg5MjEzMSwiZXhwIjoxNzUyODk1NzMxfQ.iHB2KdhJjNmvA1k4Eqfcy5dl97ukDU6RbGlblH_aVRU",
      },
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

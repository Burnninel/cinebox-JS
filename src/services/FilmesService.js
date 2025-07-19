const API_URL = "http://localhost:8888/filme";

export async function getFilmes() {
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
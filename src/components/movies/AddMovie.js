export async function AddMovie() {
  const section = document.createElement("section");
  section.className = "new-movie";

  section.innerHTML = `
     <section>
      <p>Hello World!</p>
     </section>
  `;

  return section;
}

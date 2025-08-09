export function Loading() {
    const overlay = document.createElement("div");
    overlay.id = "loading";
    overlay.className = "hidden";
    overlay.innerHTML = `
        <div class="loading-overlay" role="status">
            <span class="spinner-border"></span>
        </div>
    `;

    return overlay;
}

export function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
}

export function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}
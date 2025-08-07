import { Toast } from "bootstrap";

export function ToastContainer() {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container position-fixed top-0 end-0 p-4";
    document.body.appendChild(container);
  }

  function createToastElement(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast fade toast--${type} border-0`;
  
    toast.innerHTML = `
      <div class="toast__body">
          <span class="toast__message">${message}</span>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    return toast;
  }

  function showToast({ message, type = "info" }) {
    const toastEl = createToastElement(message, type);
    container.appendChild(toastEl);

    const bsToast = new Toast(toastEl, {
      animation: true,
      autohide: true, 
      delay: 4000
    });

    bsToast.show();

    toastEl.addEventListener("transitionend", () => {
      if (!toastEl.classList.contains("show")) {
        toastEl.remove();
      }
    });
  }

  return { showToast };
}

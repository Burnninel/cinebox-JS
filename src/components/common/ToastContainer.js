import { Toast } from "bootstrap";
import { createElement } from "/src/helpers/createElement.js";

export function ToastContainer() {
	let container = document.getElementById("toastContainer");
	if (!container) {
		container = createElement({
			tag: "div",
			className: "toast-container position-fixed top-0 end-0 p-4",
			attributes: { id: "toastContainer" },
		});
		document.body.appendChild(container);
	}

	const createToastElement = ({ message, type = "info" }) => createElement({
  tag: "div",
  className: `toast fade toast--${type} border-0`,
  children: [
    createElement({
      tag: "div",
      className: "toast__body",
      children: [
        createElement({ tag: "span", className: "toast__message", textContent: message }),
        createElement({
          tag: "button",
          type: "button",
          className: "btn-close",
          attributes: { "data-bs-dismiss": "toast", "aria-label": "Close" },
        }),
      ],
    }),
  ],
});

	function showToast({ message, type = "info" }) {
		const toastEl = createToastElement({message, type});
		container.appendChild(toastEl);

		const bsToast = new Toast(toastEl, {
			animation: true,
			autohide: true,
			delay: 4000,
		});
		bsToast.show();

		toastEl.addEventListener("transitionend", () => {
			if (!toastEl.classList.contains("show")) toastEl.remove();
		});
	}

	return { showToast };
}

import { DOM } from "/src/helpers/dom/index.js";
import { Toast } from "bootstrap";

export function ToastContainer() {
	let container = document.getElementById("toastContainer");
	if (!container) {
		container = DOM.createDiv(
			"toast-container position-fixed top-0 end-0 p-4",
			[],
			{ id: "toastContainer" }
		);
		document.body.appendChild(container);
	}

	const createToastElement = ({ message, type = "info" }) =>
		DOM.createDiv(`toast fade toast--${type} border-0`, [
			DOM.createDiv("toast__body", [
				DOM.createSpan("toast__message", message),
				DOM.createButton({
					className: "btn-close",
					type: "button",
					attributes: {
						"data-bs-dismiss": "toast",
						"aria-label": "Close",
					},
				}),
			]),
		]);

	function showToast({ message, type = "info" }) {
		const toastEl = createToastElement({ message, type });
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

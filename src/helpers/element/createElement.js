export function createElement({
	tag,
	className = "",
	textContent = "",
	innerHTML = "",
    attributes = {},
    children = []
}) {
	const element = document.createElement(tag);
	if (className) element.className = className;
	if (textContent) element.textContent = textContent;
	if (innerHTML) element.innerHTML = innerHTML;

    for (const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value);
    }

    children.forEach(child => {
		if (child) element.appendChild(child);
	});

	return element;
}

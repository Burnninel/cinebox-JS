import {
	IconUpload,
	IconMovie,
	IconTicket,
	IconCalendar,
	IconStarComplete,
} from "/src/assets/icons/icons.js";
import { Input } from "/src/components/common/Input.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

export function AddMovie() {
	const section = createElement({ tag: "section", className: "movie-form" });
	const form = createElement({ tag: "form", className: "movie-form__form" });

	const uploadContainer = createElement({
		tag: "div",
		className: "movie-form__upload-container",
		children: [
			createElement({
				tag: "div",
				className: "movie-form__upload-box",
				children: [
					htmlToElement(IconUpload()),
					createElement({
						tag: "span",
						className: "movie-form__upload-title",
						textContent: "Fazer upload",
					}),
				],
			}),
		],
	});

	const formContainer = createElement({
		tag: "div",
		className: "movie-form__container",
		children: [
			createElement({
				tag: "div",
				className: "movie-form__box",
				children: [
					createElement({
						tag: "h2",
						className: "movie-form__title",
						textContent: "Novo filme",
					}),
					Input({
						icon: IconMovie(),
						attributes: { id: "titulo", placeholder: "Título" },
					}),
					Input({
						icon: IconStarComplete(),
						attributes: { id: "diretor", placeholder: "Diretor" },
					}),
					createElement({
						tag: "div",
						className: "movie-form__input",
						children: [
							Input({
								icon: IconCalendar(),
								attributes: {
									id: "ano_de_lancamento",
									placeholder: "Ano",
								},
							}),
							Input({
								icon: IconTicket(),
								attributes: {
									id: "categoria",
									placeholder: "Categoria",
								},
							}),
						],
					}),
					createElement({
						tag: "textarea",
						className: "movie-form__textarea",
						attributes: {
							id: "sinopse",
							placeholder: "Sinopse",
						},
					}),
					createElement({
						tag: "div",
						className: "movie-form__actions",
						children: [
							createElement({
								tag: "button",
								className: "movie-form__btn movie-form__btn-cancel",
								textContent: "Cancelar",
								attributes: { type: "reset" },
							}),
							createElement({
								tag: "button",
								className: "movie-form__btn movie-form__btn-save",
								textContent: "Salvar",
								attributes: { type: "submit" },
							}),
						],
					}),
				],
			}),
		],
	});

	form.appendChild(uploadContainer);
	form.appendChild(formContainer);

	section.appendChild(form);

	return section;
}

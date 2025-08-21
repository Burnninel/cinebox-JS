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
import { handleAddMovie } from "/src/components/movies/AddMovieHandler.js";

function createUpload() {
	return createElement({
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
}

function createInputGroup({ icon, id, placeholder }) {
	return createElement({
		tag: "div",
		className: "form__group",
		children: [Input({ icon, attributes: { id, placeholder } })],
	});
}

function renderFormInputs(fields) {
	const halfFields = fields.filter((f) => f.half).map(createInputGroup);
	const fullFields = fields.filter((f) => !f.half).map(createInputGroup);

	const elements = [...fullFields];

	if (halfFields.length) {
		elements.push(
			createElement({
				tag: "div",
				className: "form__field--half",
				children: halfFields,
			})
		);
	}

	return elements;
}

function createTextArea(attributes) {
	return createElement({
		tag: "div",
		className: "form__group",
		children: [
			createElement({
				tag: "textarea",
				className: "movie-form__textarea",
				attributes,
			}),
		],
	});
}

function createFormActions() {
	return createElement({
		tag: "div",
		className: "movie-form__actions",
		children: [
			createElement({
				tag: "button",
				className: "movie-form__btn movie-form__btn-cancel",
				textContent: "Cancelar",
				attributes: { type: "button" },
			}),
			createElement({
				tag: "button",
				className: "movie-form__btn movie-form__btn-save",
				textContent: "Salvar",
				attributes: { type: "submit" },
			}),
		],
	});
}

function createFormContainer(formFields) {
	return createElement({
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
					...formFields,
					createTextArea({ id: "sinopse", placeholder: "Sinopse" }),
					createFormActions(),
				],
			}),
		],
	});
}

export function AddMovie() {
	const section = createElement({ tag: "section", className: "movie-form" });
	const form = createElement({ tag: "form", className: "movie-form__form" });

	const fields = [
		{ icon: IconMovie(), id: "titulo", placeholder: "Título" },
		{ icon: IconStarComplete(), id: "diretor", placeholder: "Diretor" },
		{
			icon: IconCalendar(),
			id: "ano_de_lancamento",
			placeholder: "Ano",
			half: true,
		},
		{
			icon: IconTicket(),
			id: "categoria",
			placeholder: "Categoria",
			half: true,
		},
	];

	const formFields = renderFormInputs(fields);

	form.appendChild(createUpload());
	form.appendChild(createFormContainer(formFields));
	section.appendChild(form);

	handleAddMovie(form);

	return section;
}

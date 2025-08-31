import {
	IconUpload,
	IconMovie,
	IconTicket,
	IconCalendar,
	IconStarComplete,
} from "/src/assets/icons/icons.js";
import { DOM } from "/src/helpers/dom/index.js";
import { Input } from "/src/components/common/Input.js";
import { handleAddMovie } from "/src/components/movies/AddMovie/AddMovieHandler.js";

function createUpload() {
	return DOM.createDiv("movie-form__upload-container", [
		DOM.createDiv("movie-form__upload-box", [
			DOM.createIcon(IconUpload),
			DOM.createSpan("movie-form__upload-title", "Fazer upload"),
		]),
	]);
}

function createInputGroup({ icon, id, placeholder }) {
	return DOM.createDiv("form__group", [
		Input({ icon, attributes: { id, placeholder } }),
	]);
}

function renderFormInputs(fields) {
	const halfFields = fields.filter((f) => f.half).map(createInputGroup);
	const fullFields = fields.filter((f) => !f.half).map(createInputGroup);

	const elements = [...fullFields];

	if (halfFields.length) {
		elements.push(DOM.createDiv("form__field--half", halfFields));
	}

	return elements;
}

function createTextArea(attributes) {
	return DOM.createDiv("form__group", [
		DOM.createTextarea(
			"movie-form__textarea",
			attributes,
		),
	]);
}

function createFormActions() {
	return DOM.createDiv("movie-form__actions", [
		DOM.createButton({
			className: "movie-form__btn movie-form__btn-cancel",
			textContent: "Cancelar",
		}),
		DOM.createButton({
			className: "movie-form__btn movie-form__btn-save",
			textContent: "Salvar",
			type: "submit",
		}),
	]);
}

function createFormContainer(formFields) {
	return DOM.createDiv("movie-form__container", [
		DOM.createDiv(
			"movie-form__box",
			[
				DOM.createH2(
					"movie-form__title",
					"Novo filme",
				),
				...formFields,
				createTextArea({ id: "sinopse", placeholder: "Sinopse" }),
				createFormActions(),
			],
		),
	]);
}

export function AddMovie(token) {
	const section = DOM.createSection("movie-form");
	const form = DOM.createForm("movie-form__form");

	const fields = [
		{ icon: IconMovie, id: "titulo", placeholder: "Título" },
		{ icon: IconStarComplete, id: "diretor", placeholder: "Diretor" },
		{
			icon: IconCalendar,
			id: "ano_de_lancamento",
			placeholder: "Ano",
			half: true,
		},
		{
			icon: IconTicket,
			id: "categoria",
			placeholder: "Categoria",
			half: true,
		},
	];

	const formFields = renderFormInputs(fields);

	form.appendChild(createUpload());
	form.appendChild(createFormContainer(formFields));
	section.appendChild(form);

	handleAddMovie(form, token);

	return section;
}

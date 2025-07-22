import { Form } from '/src/components/AuthLayout.js'

export function Auth() {
     const fragment = document.createDocumentFragment();

     fragment.appendChild(Form());

     return fragment;
}
import { Form } from "/src/components/AuthLayout.js";

export async function Auth() {
  const fragment = document.createDocumentFragment();

  const sectionForm = await Form({
    forms: {
      login: {
        title: "Acesse sua conta",
        submitText: "Entrar",
        inputs: [
          { type: "text", placeholder: "E-mail", id: "email" },
          { type: "password", placeholder: "Senha", id: "senha" },
        ],
      },
      signup: {
        title: "Crie sua conta",
        submitText: "Criar",
        inputs: [
          { type: "text", placeholder: "Nome", id: "nome" },
          { type: "text", placeholder: "E-mail", id: "email" },
          { type: "password", placeholder: "Senha", id: "senha" },
          {
            type: "password",
            placeholder: "Confirmar Senha",
            id: "confirmar_senha",
          },
        ],
      },
    },
  });

  fragment.appendChild(sectionForm);

  return fragment;
}

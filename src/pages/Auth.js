import { Form } from "/src/components/AuthLayout.js";

export function Auth() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(
    Form({
      forms: {
        login: {
          title: "Acesse sua conta",
          submitText: "Entrar",
          inputs: [
            { type: "text", placeholder: "E-mail", id: "login-email" },
            { type: "password", placeholder: "Senha", id: "login-password" },
          ],
        },
        signup : {
          title: "Crie sua conta",
          submitText: "Criar",
          inputs: [
            { type: "text", placeholder: "E-mail", id: "signup-email" },
            { type: "text", placeholder: "Nome", id: "signup-name" },
            { type: "password", placeholder: "Senha", id: "signup-password" },
            { type: "password", placeholder: "Confirmar Senha", id: "signup-confirm-password" },
          ],
        },
      },
    })
  );

  return fragment;
}

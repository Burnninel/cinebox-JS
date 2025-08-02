import { AuthLayout } from "/src/components/AuthLayout.js";
import { Loading } from "/src/components/Loading.js";

export async function Auth() {
  const authFragment = document.createDocumentFragment();

  const authSection = await AuthLayout({
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

  authFragment.appendChild(authSection);
  authFragment.appendChild(Loading());

  return authFragment;
}

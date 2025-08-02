import { AuthLayout } from "/src/components/AuthLayout.js";
import { Loading } from "/src/components/Loading.js";

export async function Login() {
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
    },
  });

  authFragment.appendChild(authSection);
  authFragment.appendChild(Loading());

  return authFragment;
}

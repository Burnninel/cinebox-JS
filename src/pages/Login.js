import { AuthLayout } from "/src/components/auth/AuthLayout.js";
import { Loading } from "/src/components/common/Loading.js";
import { IconPassword, IconMail } from "/src/assets/icons/icons.js";

export async function Login() {
  const authFragment = document.createDocumentFragment();

  const authSection = await AuthLayout({
    forms: {
      login: {
        title: "Acesse sua conta",
        submitText: "Entrar",
        inputs: [
          { icon: IconMail, type: "text", placeholder: "E-mail", id: "email" },
          { icon: IconPassword, type: "password", placeholder: "Senha", id: "senha" },
        ],
      },
    },
  });

  authFragment.appendChild(authSection);
  authFragment.appendChild(Loading());

  return authFragment;
}

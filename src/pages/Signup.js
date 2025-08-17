import { AuthLayout } from "/src/components/auth/AuthLayout.js";
import { Loading } from "/src/components/common/Loading.js";
import { IconUser, IconMail, IconPassword } from "/src/assets/icons/icons.js";

export async function Signup() {
  const authFragment = document.createDocumentFragment();

  const authSection = await AuthLayout({
    forms: {
      signup: {
        title: "Crie sua conta",
        submitText: "Criar",
        inputs: [
          { icon: IconUser, type: "text", placeholder: "Nome", id: "nome" },
          { icon: IconMail, type: "text", placeholder: "E-mail", id: "email" },
          { icon: IconPassword, type: "password", placeholder: "Senha", id: "senha" },
          {
            icon: IconPassword,
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

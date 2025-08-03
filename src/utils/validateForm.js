import { setErrorOnce } from "/src/helpers/setErrorOnce.js";

export function validateForm(formData, rules) {
  const errors = {};

  for (const field in rules) {
    const value = formData[field];
    const rule = rules[field];

    const hasValue = value !== undefined && value !== null && value !== "";

    if (!hasValue) {
      if (rule.required) {
        setErrorOnce(errors, field, `O campo ${field} é obrigatório`);
      }
      continue;
    }

    if (rule.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrorOnce(errors, field, `Formato de e-mail inválido.`);
      }
    }

    if (rule.confirmed) {
      const confirmField = `confirmar_${field}`;
      if (confirmField in formData && formData[confirmField] !== value) {
        setErrorOnce(errors, confirmField, `Os campos não coincidem.`);
      }
    }

    if (rule.minLength && value.length < rule.minLength) {
      setErrorOnce(
        errors,
        field,
        `Deve conter no mínimo ${rule.minLength} caracteres.`
      );
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      setErrorOnce(
        errors,
        field,
        `Deve conter no máximo ${rule.maxLength} caracteres.`
      );
    }

    if (rule.strong && !/[!@#$%¨&*()_.\-\[\/\];|?]/.test(value)) {
      setErrorOnce(
        errors,
        field,
        `Deve conter ao menos um caractere especial.`
      );
    }
  }

  return errors;
}

export function validateForm(formData, rules) {
  const errors = {};

  for (const field in rules) {
    const value = formData[field];
    const validationRules = rules[field];

    if (validationRules.required && !value) {
      errors[field] = `O campo ${field} é obrigatorio`;
    }

    if (validationRules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field] = `Formato de e-mail inválido.`;
      }
    }
  }

  return errors;
}

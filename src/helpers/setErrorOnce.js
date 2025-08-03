export function setErrorOnce(errors, field, message) {
  if (!errors[field]) {
    errors[field] = message;
  }
}
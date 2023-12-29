export function checkTodoName(todoName) {
  const errors = [];

  if (todoName.length === 0) {
    errors.push(`Can't be empty`);
  }
  return errors;
}

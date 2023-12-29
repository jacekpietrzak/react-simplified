export function TodoListItem({ children, isComplete }) {
  return (
    <label htmlFor="checkbox">
      {children}
      <input id="checkbox" type="checkbox" defaultChecked={isComplete} />
    </label>
  );
}

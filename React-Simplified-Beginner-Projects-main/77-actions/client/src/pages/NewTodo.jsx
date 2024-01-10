import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

export default function NewTodo() {
  const actionData = useActionData();
  const { state } = useNavigation();

  const isLoading = state === 'submitting' || state === 'loading';

  // in react router
  // submitting state is anytime you call an action
  //  loading state is anytime you call loader

  return (
    <div className="container">
      <h1 className="page-title">New Todo</h1>
      <Form className="form" method="post" action="/new">
        {actionData}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to={'..'} className="btn btn-outline">
            Back
          </Link>
          <button className="btn" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Create'}
          </button>
        </div>
      </Form>
    </div>
  );
}

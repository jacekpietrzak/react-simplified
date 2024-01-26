import { Child } from './Child';
import { ErrorBoundry } from './ErrorBoundry';

function App() {
  return (
    <>
      <h1>Parent</h1>
      <ErrorBoundry fallback={<h1>Error - child</h1>}>
        {/* error boundary catch only errors for fail rendering in react */}
        <Child />
      </ErrorBoundry>
    </>
  );
}

export default App;


import './App.css';
import UseCallbackExample from './components/useCallback/useCallbackExample';
import UseMemoExample from './components/useMemo/useMemoExample';
import UseRefExample from './components/useRef/useRefExample';
import ForwardRefExample from './components/forwardRef/forwardRefExample';
import ErrorBoundaryExample from './components/errorBoundaries/errorBoundariesExample';
import ErrorComponent from './components/errorBoundaries/ErrorComponent';
import Portal from './components/Portals/Portal';


function App() {

  return (
    <div className="App">
      <UseCallbackExample />
      <hr/>
      <UseMemoExample />
      <hr/>
      <UseRefExample />
      <hr/>
      <ForwardRefExample />
      <hr />
      <ErrorBoundaryExample fallback={<div>This is the fallback UI from the ErrorBoundaries component</div>}>
        <ErrorComponent />
      </ErrorBoundaryExample>
      <hr />
      <Portal />
    </div>
  );
}

export default App;

import * as React from 'react';
import './App.css';

function App(): JSX.Element {
  return <div className="App"></div>;
}

export default App;

export interface ExampleComponentProps {
  onChange?: (e: any) => void;
  name: {
    test?: string;
  };
}

export function ExampleComponent(
  props: ExampleComponentProps
): React.ReactElement {
  console.log(props.name?.test);
  props.onChange?.(event);

  return <div>afdsa</div>;
}

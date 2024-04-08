import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { useState } from 'react';

function App() {
  // Runner for ListGroup
  // let items = ['New York', 'San Francisco', 'London', 'Paris', 'San Diego'];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading='Cities'
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // Runner for Alert
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );

  // Runner for Button
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Hello World</Button>
    </div>
  );
}

export default App;

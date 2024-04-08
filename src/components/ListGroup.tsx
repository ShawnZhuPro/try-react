import { MouseEvent, useState } from 'react';

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  return (
    // React can't return multiple elements, so use fragment (the empty <> brackets)
    // We can only return HTML elements or other react components, unless we use {}
    <>
      <h1>{heading}</h1>
      {/* If first expression is true, the second will be returned. Else it won't. */}
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

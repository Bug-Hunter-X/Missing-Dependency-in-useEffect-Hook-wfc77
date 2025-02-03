```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  useEffect(() => {
    // This effect runs after every render, but only re-runs if 'count' changes
    console.log('Count:', count);
  }, [count]); 

  useEffect(() => {
    // This effect runs when the name changes. Note that this effect depends on 'name'
    console.log('Name:', name);
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Name: {name}</p>
      <button onClick={() => setName('Bob')}>Change Name</button>
    </div>
  );
}

export default MyComponent;
```
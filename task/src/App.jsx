//increment
// import React, { useState } from 'react';

// function Counter() {
  
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

//counter
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

//Theme Changer
import React, { useState } from 'react';

function ThemeChanger() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <style jsx>{`
        .light {
          background-color: white;
          color: black;
        }
        .dark {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default ThemeChanger;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css'
// import { HelloWorldApp } from './HelloWorldApp';

// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp/>
//     </React.StrictMode>
//     );

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10} />
        {/* < FirstApp title="hola soy vegueta"/> */}
    </React.StrictMode>
    );
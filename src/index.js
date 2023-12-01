import { createRoot } from 'react-dom/client';
import React from 'react';
import TestComponent from "./app";

const rootElement = document.getElementById('app');
console.log('rootElement: ', rootElement)
const root = createRoot(rootElement);
root.render(<TestComponent/>);
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ContactList} from './components/data.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContactList />
  </StrictMode>
);
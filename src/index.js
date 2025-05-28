import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GoogleOAuthProvider } from '@react-oauth/google';

import './reset.css';
import './styles.css';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="1023808984073-48ut0abof282fkqml6bghn7oht9051hb.apps.googleusercontent.com">
  <StrictMode>
    <App />
  </StrictMode>
</GoogleOAuthProvider>
);


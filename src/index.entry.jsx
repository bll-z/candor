import './style/candor.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Application from './modules/Application/application';

// Render the application entrypoint
render(<BrowserRouter><Application /></BrowserRouter>, document.getElementById('app'));

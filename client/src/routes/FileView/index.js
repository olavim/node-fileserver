import React from 'react';
import { Route } from 'react-router';
import FileView from './containers/FileView';

export default <Route path="/home*" component={FileView} />
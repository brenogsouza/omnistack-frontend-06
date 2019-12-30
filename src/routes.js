import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Box, Main } from './pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/box/:id' component={Box} />
    </Switch>
  </BrowserRouter>
)
export default Routes

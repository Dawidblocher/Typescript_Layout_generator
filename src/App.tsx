import React from 'react';
import './assets/App.css';
import Page from './components/Page/Page';


import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import RowSetting from './components/SettingsView/RowSetting/RowSetting';
import PageSettings from './components/SettingsView/PageSetting/PageSetting';
import ColumnSettings from './components/SettingsView/ColumnSetting/ColumnSetting';
import TitleSettings from './components/SettingsView/TitleSetting/TitleSetting';

import {Provider} from 'react-redux';
import store from './store';

const StyledAside = styled.aside`
  position: absolute;
  left: 0;
  top:0;
  height: 100vh;
  background: #eeeeee;
  width: 300px;
`;

const AppWraper = styled.div`
margin-left: 300px;
padding: 30px;
`

interface ITemplate {
  rows: Array<object>,
}

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
      <Router>
          <StyledAside>
          <Switch>
          <Route exact path="/titlesettings/:id" component={TitleSettings}/>
            <Route exact path="/columnsettings/:id" component={ColumnSettings}/>
            <Route exact path="/rowsettings/:id" component={RowSetting}/>
            <Route exact path="/pagesettings/:id" component={PageSettings}/>
          </Switch>
          
          </StyledAside>
          <AppWraper className="App">
              <Page id={1} type="page">
              </Page>
              
          </AppWraper>
      </Router>        
      </Provider>
      )
  }
}


export default App;

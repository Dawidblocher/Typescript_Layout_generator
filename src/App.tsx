import React from 'react';
import './assets/App.css';
import Page from './components/Page/Page';
import Row from './components/Row/Row';

import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import RowSetting from './components/SettingsView/RowSetting/RowSetting';

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
   state = {
    template: {
      rows: [
        {
          id: 0,
          col:[
            {
              id: 0,
            },
            {
              id: 1,
            },
            {
              id: 2,
            }
          ]
        },
        {
          id: 1,
          col:[
            {
              id: 0,
            },
            {
              id: 1,
            },
            {
              id: 2,
            }
          ]
        }
      ]
    },
   }

   componentDidMount(){
   }

  //  renderTemplate(){
  //   const template = this.state.template;
  //   const row = template.rows.map((row, index) => <Row key={row.id}>{template.rows[index].col.map(col => (<Column key={col.id} />))}</Row>)
  //   return row
  //  }

  //  createRow(id){
  //    const template = this.state.template;
  //    const newTemplate = {
      
  //    }
  //  }

  render() {
    return (
      <Router>
          <StyledAside>
          <Switch>
            <Route exact path="/rowsettings/:id" component={RowSetting}/>
      
          </Switch>
          </StyledAside>
          <AppWraper className="App">
              <Page id="page_1">
                {/* {this.renderTemplate()} */}
                <Row id={0} type='row' >
                  
                </Row>
                <Row id={1} type='row' >
                  
                </Row>
              </Page>
          </AppWraper>
      </Router>)
  }
}


export default App;

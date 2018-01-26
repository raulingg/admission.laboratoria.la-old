import React from 'react';
import { withStyles } from 'material-ui/styles';
import TopBar from './TopBar';
import Learn from './Learn';
import What from './What';
import How from './How';
import ForYou from './ForYou';
import Criteria from './Criteria';
import Steps from './Steps';
import Calendar from './Calendar';
import Form from './Form';
import Faq from './Faq';


const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});


const App = (props) => (
  <div className={props.classes.root}>
    <TopBar />
    <Learn />
    <What />
    <How />
    <ForYou />
    <Criteria />
    <Steps />
    <Calendar />
    <Form />
    <Faq />
  </div>
);


export default withStyles(styles)(App);

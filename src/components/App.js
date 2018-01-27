import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import TopBar from './TopBar';
import Learn from './Learn';
import What from './What';
import How from './How';
import ForYou from './ForYou';
import Criteria from './Criteria';
import Steps from './Steps';
import Calendar from './Calendar';
import SignUp from './SignUp';
import Faq from './Faq';
import { fetchCampuses } from '../reducers/campuses';


const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});


const App = (props) => {
  if ((!props.campuses || !props.campuses.isLoaded) && (!props.campuses.loading && !props.campuses.error)) {
    setTimeout(props.fetchCampuses, 100);
    return null;
  }

  return (
    <div className={props.classes.root}>
      <TopBar />
      <Learn />
      <What />
      <How />
      <ForYou />
      <Criteria />
      <Steps />
      <Calendar />
      <SignUp />
      <Faq />
    </div>
  );
};


export default compose(
  connect(
    ({ campuses }) => ({ campuses }),
    { fetchCampuses },
  ),
  withStyles(styles),
)(App);

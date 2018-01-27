import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { withStyles } from 'material-ui/styles';
import Hero from './Hero';


const styles = theme => ({
  h2: {
    color: '#f7b617',
  },
  campuses: {
    // marginTop: theme.spacing.unit * 6,
    margin: `${theme.spacing.unit * 6}px auto`,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 760,
  },
  campus: {
    width: '16%',
    padding: '2% 1%',
    backgroundColor: '#ffffff',
    color: '#333',
  },
  h3: {
    color: '#f7b617',
    fontSize: 14,
  },
  p: {
    fontSize: 14,
  },
  footer: {
    maxWidth: 560,
    margin: '0 auto',
    fontSize: 16,
  },
});


const Calendar = ({ campuses, classes }) => (
  <Hero backgroundImage="url('//c.fastcdn.co/u/cf943cfe/22464251-0-Copy-of---LAB17001-T.jpg'), url('//c.fastcdn.co/t/cf943cfe/6878be6f/1516721948-22464251-ghost-Copy-of---LAB17001-T.jpg')">
    <h2 className={classes.h2}>Calendario de postulación</h2>
    <div className={classes.campuses}>
      {campuses && campuses.map(campus => (
        <div key={campus.id} className={classes.campus}>
          <h3 className={classes.h3}>{campus.name}</h3>
          <p className={classes.p}>Inicia en febrero 2018</p>
        </div>
      ))}
    </div>
    <p className={classes.footer}>
      Si quieres aplicar a una sede que no tiene su postulación abierta, deja
      tus datos igual y te contactaremos cuando  ya puedas avanzar en el
      proceso.
    </p>
  </Hero>
);


export default compose(
  firebaseConnect([]),
  connect(({ campuses }) => ({ campuses: campuses.active })),
  withStyles(styles),
)(Calendar);

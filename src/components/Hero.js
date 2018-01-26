import React from 'react';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 477,
    color: '#ffffff',
    backgroundColor: '#333333',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#2b2b2b',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  content: {
    zIndex: 1,
    width: 960,
    margin: '0 auto',
  },
});


const Hero = (props) => (
  <div className={props.classes.root} style={{ backgroundImage: props.backgroundImage }}>
    <div className={props.classes.overlay} style={{ opacity: props.opacity || 0.39 }}></div>
    <div className={props.classes.content}>
      {props.children}
    </div>
  </div>
);


export default withStyles(styles)(Hero);

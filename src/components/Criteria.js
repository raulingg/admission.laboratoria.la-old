import React from 'react';
import { withStyles } from 'material-ui/styles';
import Section from './Section';


const styles = theme => ({
  root: {
    maxWidth: 561,
    margin: '0 auto',
  },
  ul: {
    textAlign: 'left',
  },
});


const Criteria = ({ classes }) => (
  <Section id="criteria">
    <div className={classes.root}>
      <h2>Criterios de selección</h2>
      <ul className={classes.ul}>
        <li>Identificarte como mujer</li>
        <li>Tener entre 18 y 39 años</li>
        <li>No haber accedido a educación o trabajos de calidad</li>
        <li>Superar todas las etapas del proceso de selección</li>
        <li>No estar estudiando en otra institución técnica o universitaria al momento de iniciar el Bootcamp.</li>
      </ul>
    </div>
  </Section>
);


export default withStyles(styles)(Criteria);

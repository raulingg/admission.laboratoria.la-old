import React from 'react';
import { withStyles } from 'material-ui/styles';
import Section from './Section';


const styles = theme => ({
  root: {
    maxWidth: 706,
    margin: '0 auto',
  },
  small: {
    fontSize: 14,
  },
});


const What = ({ classes }) => (
  <Section id="what">
    <div className={classes.root}>
      <h2>Qué es Laboratoria</h2>
      <p>
        Ofrecemos a mujeres jóvenes como tú una carrera en tecnología que
        transforme su futuro y su vida. Más de 500 mujeres se han graduado de
        nuestro programa bootcamp que inició en 2014. Tenemos un 75% de inserción
        laboral* que ha permitido a cientos de mujeres casi triplicar sus
        ingresos, mejorar sus vidas y generar un impacto positivo en sus familias
        y comunidades.
      </p>
      <p className={classes.small}>
       * Porcentaje correspondiente al 2° cohort del 2016. Actualmente nos
       encontramos en proceso de inserción laboral del cohort que finalizó su
       bootcamp recientemente.
      </p>
    </div>
  </Section>
);


export default withStyles(styles)(What);

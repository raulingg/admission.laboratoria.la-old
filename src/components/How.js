import React from 'react';
import { withStyles } from 'material-ui/styles';
import Section from './Section';


const styles = theme => ({
  root: {
    maxWidth: 706,
    margin: '0 auto',
  },
  p: {
    width: 483,
    margin: '20px auto',
  },
  programs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  program: {
    // width: '40%',
    backgroundColor: '#fffdfd',
    border: '1px solid #cbcbcb',
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  programP: {
    fontSize: 18,
  },
  small: {
    fontSize: 14,
  },
});


const How = ({ classes }) => (
  <Section id="how" dark={true}>
    <div className={classes.root}>
      <h2>Cómo funciona</h2>
      <p className={classes.p}>
        En Laboratoria creemos en el potencial de todas las mujeres
        latinoamericanas (incluida tú).
      </p>
      <p className={classes.p}>
        El programa está dividido en 2 partes: Bootcamp (obligatoria y presencial)
        y Educación Continua (optativa)
      </p>
      <div className={classes.programs}>
        <div className={classes.program} style={{ width: '30%' }}>
          <h3>Bootcamp</h3>
          <p className={classes.programP}>
            Los primeros 6 meses son intensivos (de lunes a viernes, 6 hs
            presenciales).
          </p>
          <p className={classes.small}>
            Al terminar te conseguiremos trabajo en la industria tech local o
            regional.
          </p>
        </div>
        <div className={classes.program} style={{ width: '55%' }}>
          <h3>Educación Continua</h3>
          <p className={classes.programP}>
            Tendrás acceso por 18 meses a diferentes beneficios otorgados por
            Laboratoria como eventos, clases con especialistas, cursos, meetups,
            entre otros; a través de créditos.
          </p>
        </div>
      </div>
      <p className={classes.programP}>
        Para conocer nuestro programa con más detalles, <a href="https://medium.com/laboratoria/laboratoria-descripci%C3%B3n-de-un-programa-que-cambiar%C3%A1-tu-vida-8c734fef5ced">ingresa a este link</a>.
      </p>
    </div>
  </Section>
);


export default withStyles(styles)(How);

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Section from './Section';


const styles = theme => ({
  root: {
    maxWidth: 650,
    margin: '0 auto',
  },
  ol: {
    textAlign: 'left',
  },
});


const Steps = ({ classes }) => (
  <Section id="steps" dark={true}>
    <div className={classes.root}>
      <h2>Pasos para postular</h2>
      <p>
       Más de 500 mujeres latinoamericanas ya han estudiado en Laboratoria. Tú
       también puedes formar parte de esta gran comunidad y transformar tu futuro,
       solo debes seguir los pasos que enumeramos a continuación. La industria
       tech te espera.
      </p>
      <ol className={classes.ol}>
        <li>
          <h3>Registro</h3>
          <p>
            Completa el formulario de registro que está en esta landing y luego
            contesta el cuestionario de datos personales que llegará a tu mail.
          </p>
        </li>
        <li>
          <h3>Examen</h3>
          <p>
            Podrás acceder a él desde tu correo. Tiene una duración de 4 horas,
            pero tranquila, no hace falta estudiar. Si quieres leer más sobre el
            examen, <a href="https://medium.com/laboratoria/segunda-etapa-de-selecci%C3%B3n-el-temido-examen-2fa2c693a469">ingresa aquí</a>.
          </p>
        </li>
        <li>
          <h3>Pre-trabajo</h3>
          <p>
            Curso en línea donde aprenderás conceptos básicos de programación y
            GrowthMindset. Podrás hacerlo a tu ritmo, y debes realizar los quizzes
            que medirán tus conocimientos. Más info aquí.
          </p>
        </li>
        <li>
          <h3>Entrevista</h3>
          <p>
            Quienes obtengan los mejores puntajes en los dos pasos anteriores,
            serán llamadas a una entrevista personal para confirmar sus datos y
            conocer mejor sus intereses personales y profesionales.
          </p>
        </li>
        <li>
          <h3>Pre-admisión</h3>
          <p>
            Al finalizar las entrevistas, las mejores postulantes serán llamadas a
            un período de prueba de 4 días en Laboratoria.
          </p>
        </li>
      </ol>
      <a href="#form">Postula ahora</a>
    </div>
  </Section>
);


export default withStyles(styles)(Steps);

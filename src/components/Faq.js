import React from 'react';
import { withStyles } from 'material-ui/styles';
import Section from './Section';


const styles = theme => ({
  // root: {
  //   backgroundColor: theme.palette.background.default,
  // },
});


const Question = (props) => (
  <div style={{ textAlign: 'left' }}>
    <h3>{props.title}</h3>
    <div>
      {props.children}
    </div>
  </div>
);


const Faq = ({ classes }) => (
  <Section id="faq" dark={true}>
    <div className={classes.root}>
      <h2 style={{ marginBottom: 8 * 4 }}>Tienes preguntas?</h2>
      <Question title="¿En qué consiste el programa de Laboratoria?">
        <p>
          Laboratoria es un programa de inserción laboral solo para mujeres que
          no han podido acceder a trabajos de calidad. El programa consta de dos
          partes: el "Bootcamp" y la "Educación Continua".
        </p>
        <p>
          El “Bootcamp”, dura 6 meses, es intensivo, presencial y con asistencia
          obligatoria. Aprenderás JavaScript y podrás egresar como FrontEnd
          Developer o UX/UI designer. Luego de esta etapa te conseguiremos
          empleo como desarrolladora web. Una vez estés trabajando (y solo si
          estás trabajando) comenzarás pagar el programa.
        </p>
        <p>
          La “Educación Continua”, inicia luego del Bootcamp. Es optativa y
          funciona con créditos. Al finalizar el Bootcamp te otorgamos 200
          créditos y tendrás 24 meses para utilizarlo en diferentes opciones que
          te brindaremos para que sigas formándote: cursos, exposiciones, clases
          con expertos, eventos, etc. Si decides no utilizar los créditos,
          haremos ajustes a tus cuotas de pago.
        </p>
      </Question>
      <Question title="¿Por qué aprender a programar?">
        <p>Tres razones:</p>
        <ul>
          <li>
            <strong>Porque hay puestos de trabajo esperando por ti</strong>.
            Según un estudio del BID, programador de software es la carrera que
            tendrá mayor crecimiento en la próxima década en América Latina. La
            región va a necesitar más de 1.2 millones de programadores en el
            2025 y hoy en día no se están preparando suficientes profesionales
            para ocupar esos puestos de trabajo.
          </li>
          <li>
            <strong>Porque puedes trabajar en múltiples industrias y
            empresas</strong>. Los empleos en programación ya no sólo se
            encuentran en el sector tech y en Sillicon Valley. En la actualidad
            2 de cada 3 empleos se encuentran fuera de este sector, en todas
            partes del mundo; en empresas que han decidido tener un equipo
            interno de desarrollo que maneje sus productos digitales. Grandes
            bancos, aseguradoras, universidades, medios, empresas de belleza y
            de consumo masivo están buscando programadores para sus equipos.
          </li>
          <li>
            <strong>Porque es un trabajo bien pagado y flexible</strong>. Dada
            la escasez de programadores o desarrolladores, las empresas pagan
            muy bien por su trabajo y en muchos casos permiten horarios
            flexibles o desde casa.
          </li>
        </ul>
      </Question>
    </div>
  </Section>
);


export default withStyles(styles)(Faq);

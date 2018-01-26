import './style/main.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles';
import App from './components/App';
import theme from './style/theme';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
		  <App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'),
);


registerServiceWorker();

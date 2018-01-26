import React from 'react';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
	root: {
		width: '100%',
	},
	sectionInner: {
		maxWidth: 960,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 4}px`,
	},
	dark: {
		backgroundColor: theme.palette.background.default,
	},
});


const Section = ({ dark, classes, ...props}) => (
	<section {...props} className={(dark) ? `${classes.dark} ${classes.root}` : classes.root}>
	  <div className={classes.sectionInner}>
	    {props.children}
		</div>
	</section>
);


export default withStyles(styles)(Section);

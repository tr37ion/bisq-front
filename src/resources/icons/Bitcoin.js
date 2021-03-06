import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	icon: {
		height:'100%',
		width:'auto',
		display:'block',
	},
	path:{
		fill:theme.palette.text.primary,
	},
	outer:{
		height:'1em',
		position:'relative',
		padding:'1px 0',
		boxSizing:'border-box',
		verticalAlign:'-2px',
		display:'inline-block',
		lineHeight:'inherit'
	}
});

class Bitcoin extends Component {
	render(){
		const {classes} = this.props;
		return(
			<span className = {classes.outer}>
				<svg xmlns="http://www.w3.org/2000/svg" height="320.23" width="320.23" version="1.1" viewBox="-0.003 0.004 39.260696 39.261517" className={classes.icon}>
					<path className = {classes.path} d="m32.092 12.061c-0.421-4.2843-4.123-5.7132-8.795-6.1125l-0.01272-5.9445-3.6184 0.008 0.01249 5.7879a148.56 148.56 0 0 0 -2.8885 0.04407l-0.01182-5.8262-3.6174 0.0078 0.01224 5.9426c-0.78336 0.01766-1.5527 0.03384-2.3028 0.03592l-0.000512-0.01843-4.9906 0.0089 0.0091 3.8646s2.6719-0.05661 2.6276-0.0073c1.4656-0.0027 1.9445 0.8472 2.0848 1.5811l0.01468 6.7721c0.10114 0.000335 0.23333 0.0052 0.38252 0.02441l-0.38224 0.0013 0.01921 9.487c-0.06334 0.4614-0.33292 1.1974-1.3579 1.2016 0.04736 0.04068-2.6293 0.0046-2.6293 0.0046l-0.70953 4.3238 4.7091-0.0092c0.87604-0.0018 1.7383 0.01124 2.5847 0.01483l0.01428 6.0122 3.6145-0.0071-0.01394-5.9494c0.99273 0.01938 1.9529 0.02426 2.8908 0.02238l0.01099 5.9213 3.6174-0.0078-0.01063-6.0018c6.0825-0.36194 10.337-1.9035 10.854-7.6163 0.41711-4.6008-1.7511-6.6487-5.2062-7.4716 2.0954-1.0737 3.403-2.9587 3.0896-6.0939zm-5.0363 12.866c0.01153 4.493-7.6824 3.9992-10.135 4.0058l-0.01597-7.9658c2.4532-0.0037 10.142-0.72523 10.151 3.9601zm-1.7062-11.233c0.0073 4.0867-6.4097 3.6233-8.4523 3.6278l-0.01511-7.2246c2.0426-0.0045 8.4577-0.66767 8.4672 3.5959z"/>
				</svg>
			</span>
		)
	}
}
Bitcoin.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Bitcoin);

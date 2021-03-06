/*
 * Copyright 2018 Michael Jonker (http://openpoint.ie)
 *
 * This file is part of bisq-front.
 *
 * bisq-front is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version.
 *
 * bisq-front is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with bisq-front. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Detail from './Detail.js';
import BuySell from '../trade/BuySell.js';
import './Portfolio.css';
import tools from '../../resources/modules/tools'

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	content: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		height: '100%',
		padding: theme.spacing.unit * 3,
	},
});

class Portfolio extends Component {

	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const {classes,root,babel,data} = this.props;
		const {value} = this.state;
		const trades = data.trade_list.map(function(trade){
			return tools.formatTrade(trade)
		}).sort(function(a,b){
			return a.date < b.date?0:1
		})
		return (
			<div className={classes.root}>
				<AppBar position="static" color = 'default'>
					<Tabs value={value} onChange={this.handleChange} indicatorColor = 'primary'>
						<Tab label={babel('Open trades',{type:'span',category:'chrome',aria:true})}/>
						<Tab label={babel('Open offers',{type:'span',category:'chrome',aria:true})}/>
						<Tab label={babel('History',{type:'span',category:'chrome',aria:true})}/>
						<Tab label={babel('Failed',{type:'span',category:'chrome',aria:true})}/>
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer  className={classes.content}><Detail trades = {trades} babel = {babel} root = {root}/></TabContainer>}
				{value === 1 && <TabContainer className={classes.content}><div><BuySell dir = 'OWN' root = {root} babel = {babel} data = {data} /></div></TabContainer>}
				{value === 2 && <TabContainer  className={classes.content}><div>ToDo</div></TabContainer>}
				{value === 3 && <TabContainer className={classes.content}><div>ToDo</div></TabContainer>}
			</div>
		);
	}
}

Portfolio.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);

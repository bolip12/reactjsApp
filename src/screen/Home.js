import * as React from 'react';
import { withRouter } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectVal: 10
		}
	}

	handleClick() {
		this.props.history.push("/about");
	}

	onChangeSelect(value) {
		this.setState({selectVal:value});
	}

	render() {
		return (
		    <div>
		    	<Typography variant="h6">
                  Home
                </Typography>
                <Divider />

		    </div>
		  );
	}
}

export default withRouter(Home);




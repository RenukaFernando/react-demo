import React from 'react';
import {Button} from "material-ui";
import {Link} from "react-router-dom";

export default class AccountDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const acc_uuid = this.props.match.params.acc_uuid;
        return (
            <div>
                <h3>Account Details</h3>
                <p>{`Account No: ${acc_uuid}`}</p>
                <Link to="/"><Button color="primary" variant="raised">Home</Button></Link>
            </div>
        );
    }
}
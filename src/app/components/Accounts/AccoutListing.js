import React from 'react';
import {Link} from "react-router-dom";

export class AccoutListing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h3>Accounts</h3>
                <ul>
                    <li><Link to="/accounts/1">Account 1</Link></li>
                </ul>
            </div>
        );
    }
}
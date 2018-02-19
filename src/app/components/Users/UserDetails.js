import React from 'react';

export default class UserDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const user_uuid = this.props.match.params.user_uuid;

        return (
            <div>
                <h2>User Details</h2>
                <p>{`User ID: ${user_uuid}`}</p>
            </div>
        );
    }
}
import React from 'react';

export default class PageNotFound extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>404 Page Not Found</h1>
                <h3>Can not find resource you are looking for</h3>
            </div>
        )
    }
}
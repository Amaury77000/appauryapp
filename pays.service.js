import React from 'react';
import ReactDOM from 'react-dom';
import 

class NameForm extends React.component 
{
    constructor(props) 
    {
        super(props);
        this.state = {pays:'France'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}

ReactDOM.render
(
    <PaysForm/>,
    document.getElementById('root')
);
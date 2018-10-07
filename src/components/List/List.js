import React, { Component } from 'react';
import './List.css';

const listQuestions = (element) => {
    return (<li key={element.id}>{element.question}</li>)
}

class List extends Component {
    render() {
        return (
            <div className="list">
                <ul>
                    {this.props.json.questions.map(listQuestions)}
                </ul>
            </div>
        );
    }
}

export default List;

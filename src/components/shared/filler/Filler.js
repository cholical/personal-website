import React from 'react';

class Filler extends React.Component {

    createElements(n) {
        var elements = [];
        for(var i = 0; i < n; i++){
            elements.push(<li key={i}>Filler {i}</li>);
        }
        return elements;
    }

    render() {
        return (
            <div className="filler">
                {this.createElements(this.props.count)}
            </div>
        )
    }
}

export default Filler;
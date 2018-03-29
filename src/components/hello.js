import React from "react"

class Hello extends React.Component {
    render() {
        return <div>chakkablam! {this.name()}</div>;
    }

    name() {
        return this.props.first + ' ' + this.props.last;
    }
}

export default Hello;
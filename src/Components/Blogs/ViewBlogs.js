import React from "react"

class viewblogs extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/blogs")
            .then(response => response.json())
        .then(data => this.setState({ blogs: data }))
    }

    render() {
        return (
            <div className="blogs content">

            </div>
        );
    }
}
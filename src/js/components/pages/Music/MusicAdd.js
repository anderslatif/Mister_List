import React from "react";

export default class MusicAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Textarea value is: '" + this.state.value + "'");
    }

    render() {
        return (
            <div>
                <textarea
                    className="text_area"
                    name="description"
                    value={this.state.value}
                    onChange={this.handleChange}
                    striped={true}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

}


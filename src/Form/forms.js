import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
        characters : [
            {
              name: "CharlieForm",
              job: "Janitor",
            },
            {
              name: "MacForm",
              job: "Bouncer",
            },
            {
              name: "DeeForm",
              job: "Aspring actress",
            },
            {
              name: "DennisForm",
              job: "Bartender",
            },
          ],
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    submitForm = () => {
        this.handleSubmit(this.state)
        // this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                ></input>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
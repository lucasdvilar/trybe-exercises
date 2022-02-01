import React from "react";
import PersonalData from "./PersonalData";
import ProfessionalData from "./ProfessionalData";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      cv: '',
      position: '',
      description: '',
      formButtonClicked: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'radio' ? target.id : target.value;
    this.setState({[name]: value})
  }

  render() {
    const { name, email, cpf, address, city, state, type, cv, position, description, formButtonClicked } = this.state;

    return (
      <div>
        <PersonalData value={this.state} handleChange={this.handleChange} />
        <ProfessionalData value={this.state} handleChange={this.handleChange} />
        <button
          onClick={() => this.setState({formButtonClicked: true})}
        >Clique aqui
        </button>
        {formButtonClicked &&
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>CPF: {cpf}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Type of residence: {type}</p>
            <p>CV summary: {cv}</p>
            <p>Position: {position}</p>
            <p>Description: {description}</p>
          </div>
        }
      </div>
    )
  }
}

export default Form;

import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import DisplayInfo from "./DisplayInfo";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
    this.cleanEverything = this.cleanEverything.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'Santa Catarina',
      home: '',
      cv: '',
      job: '',
      jobDescription: '',
      submitted: false,
    };
  }

  handleChange({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  displayInfo() {
    this.setState({ submitted: true });
  }

  cleanEverything() {
    this.setState({ submitted: false });
  }

  render() {
    console.log(this.state.submitted);
    return (
      <>
        <h1>Formulário!</h1>
        <form>
          <PersonalInfo handleChange={this.handleChange} getState={this.state} />
          <ProfessionalInfo handleChange={this.handleChange} getState={this.state} />
        </form>
        <div className="buttons">
          <button onClick={this.cleanEverything}>Limpar</button>
          <button onClick={this.displayInfo}>"Enviar"</button>
        </div>
        {this.state.submitted ? <DisplayInfo checkState={this.state}/> : <></>}
      </>
    );
  }
}

export default Form;
import React, { Component } from "react";

class DisplayInfo extends Component {
  render() {
    const { checkState: {name, email, cpf, addres, city, state, home, cv, job, jobDescription} } = this.props;
    return(
      <>
        <h3>Informações Pessoais</h3>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {addres}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Moradia: {home}</p>
        <h3>Informações Profissionais</h3>
        <p>Resumo do Currículo: {cv}</p>
        <p>Cargo: {job}</p>
        <p>Descrição do Cargo: {jobDescription}</p>
      </>
    );
  }
}

export default DisplayInfo;
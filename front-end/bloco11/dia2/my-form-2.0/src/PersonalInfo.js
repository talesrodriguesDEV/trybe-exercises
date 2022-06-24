import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    const { handleChange, getState } = this.props;
    const states = ['Santa Catarina', 'Espírito Santo', 'Minas Gerais', 'Alagoas', 'Acre'];
    return (
      <>
        <fieldset>
          <h2>Informações pessoais</h2>
          <label>
            Nome:
            <input
              name="name"
              type='text'
              maxLength='40'
              value={getState.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type='text'
              maxLength='20'
              value={getState.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CPF:
            <input
              name="cpf"
              type='text'
              maxLength='11'
              value={getState.cpf}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Endereço:
            <input
              name="address"
              type='text'
              maxLength='200'
              value={getState.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cidade:
            <input
              name="city"
              type='text'
              maxLength='28'
              value={getState.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Estado:
            <select
              name="state"
              value={getState.state}
              onChange={handleChange}
              required
            >
              { states.map((state) => <option value={state}>{state}</option>) }
            </select>
          </label>
          <label>
            Moradia:
            <input
              name="home"
              type='radio'
              value='Apartamento'
              onChange={handleChange}
              required
            />Apartamento
            <input
              name="home"
              type='radio'
              value='Casa'
              onChange={handleChange}
              required
            />Casa
          </label>
        </fieldset>
      </>
    );
  }
}

export default PersonalInfo;
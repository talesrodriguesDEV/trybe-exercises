import React, { Component } from "react";

class ProfessionalInfo extends Component {
  render() {
    const { handleChange, getState } = this.props;
    return (
      <>
        <fieldset>
          <h2>Informações profissionais</h2>
          <label>
            Resumo do Currículo:
            <textarea
              name="cv"
              maxLength='1000'
              value={getState.cv}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cargo:
            <textarea
              name="job"
              maxLength='40'
              value={getState.job}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descrição do Cargo:
            <textarea
              name="jobDescription"
              maxLength='500'
              value={getState.jobDescription}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
      </>
    );
  }
}

export default ProfessionalInfo;
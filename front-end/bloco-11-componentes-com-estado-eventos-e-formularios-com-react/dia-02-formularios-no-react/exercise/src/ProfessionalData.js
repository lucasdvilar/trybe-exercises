import React from "react";

class ProfessionalData extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    const { cv, position, description } = value;

    return (
      <fieldset>
        <legend>Professional Data</legend>
        <label>CV summary
          <textarea
            value={cv}
            onChange={handleChange}
            name="cv"
          />
        </label>
        <label>Position
          <textarea
            value={position}
            onChange={handleChange}
            name="position"
          />
        </label>
        <label>Description
          <textarea
            value={description}
            onChange={handleChange}
            name="description"
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalData;

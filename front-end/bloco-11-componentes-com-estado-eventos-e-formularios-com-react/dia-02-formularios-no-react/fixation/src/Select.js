import React from "react";

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <select name='hibye' value={value} onChange={handleChange}>
          <option value="hi">Hi</option>
          <option value="bye">Bye</option>
        </select>
      </div>
    )
  }
}

export default Select;

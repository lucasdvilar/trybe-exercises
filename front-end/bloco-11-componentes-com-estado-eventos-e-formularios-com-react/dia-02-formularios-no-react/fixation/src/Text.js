import React from "react";

class Text extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error;
    if (value.length > 5) error = 'Must be less than 5 char'
    if (!value.includes('a')) {
      if (error) {
        error += '\n Must contain the letter "a"'
      } else {
        error = 'Must contain the letter "a"'
      }
    }

    return (
      <div>
        <input name='text' type="text" value={value} onChange={handleChange}></input>
        {error}
      </div>
    )
  }
}

export default Text;

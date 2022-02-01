import React from 'react';
import Select from './Select';
import Text from './Text';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      hibye: '',
      text: '',
      numbers: 0,
      essay: '',
      check: 'false',
      formWithErrors: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleChange({ target }) {
    if (target.type === 'file') {
      alert(`Selected file - ${this.fileInput.current.files[0].name}`)
    } 
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value}, () => this.handleErrors());
  }

  handleErrors() {
    if (this.state.text.length > 5 || !this.state.text.includes('a')) {
      this.setState({formWithErrors: true});
    } else {
      this.setState({formWithErrors: false});

    }
  }

  render() {
    return (
      <div>
        <h1>Fixation exercise</h1>
        <form>
          <fieldset>
            <legend>Fieldset 1</legend>
            <Select value={this.state.hibye} handleChange={this.handleChange}/>
            <Text value={this.state.text} handleChange={this.handleChange} />
            <input name='numbers' type="number" value={this.state.numbers} onChange={this.handleChange}></input>
            <textarea name='essay' value={this.state.essay} onChange={this.handleChange}></textarea>
          </fieldset>
          <fieldset>
            <legend>Fieldset 2</legend>
            <input name='check' type="checkbox" value={this.state.check} onChange={this.handleChange}></input>
            <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;

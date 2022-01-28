import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;

    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weight: ${value}${measurementUnit}`}</p>
        <img src={image}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  }) 
}

export default Pokemon;

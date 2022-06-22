import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    // const {name} = this.props;
    // const {type} = this.props;
    // const {averageWeight} = this.props;
    // const {image} = this.props;
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className="pokemons">
        <p> {name} </p>
        <p> {type} </p>
        <p> { `averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name}></img>
      </div>
  )
}
}

// Pokemon.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.string,
//   averageWeight: PropTypes.shape({
//     value: PropTypes.number,
//     measurementUnit: PropTypes.string,
//   }),
//   image: PropTypes.string,
// };
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;
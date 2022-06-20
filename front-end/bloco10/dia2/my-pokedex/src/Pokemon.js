import { React, Component } from 'react';
import { PropTypes } from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  })
}

export default Pokemon;
import React from 'react';

import Pet from './Pet';


class PetBrowser extends React.Component {
    constructor(props) {
      super(props)
    }


  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet =>
          <Pet
            pet={pet}
            key={pet.id}
            onAdoptPet={this.props.onAdoptPet}
            isAdopted={this.props.adoptedPets.includes(pet.id)}
          />)}
      </div>
    );
  }
}


export default PetBrowser;

// Criteria for PetsBrowser Component:
// <PetBrowser />
//     should render Pet components based on its props
//     should pass an `onAdoptPet` callback prop to its children Pet components
//     should pass an `isAdopted` prop to its children Pet components
//     should determine the `isAdopted` prop for its children based on its `adoptedPets` prop

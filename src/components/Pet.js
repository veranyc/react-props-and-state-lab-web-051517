import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

// <---when the adopt pet button is clicked, pass in the pet id to the callback that will add them to the adoptedPets array--->
handleAdopt = event => {
  this.props.onAdoptPet(this.props.pet.id)
}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet Name: {this.props.pet.name}{(this.props.pet.gender === "male") ? '♂' : '♀'} </a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;

// Criteria for Pet Component:
// <Pet />
//     Rendering props
//       should render the name
//       should render the correct gender icon for male pets
//       should render the correct gender icon for female pets
//       hould render the pet type
//       should render the pet age
//       should render the pet weight
//     Adopting a pet
//       Pet is not adopted yet
//         should only show the adopt button
//         should call the `onAdoptPet` callback prop when the adopt button is clicked
//         should call the `onAdoptPet` callback prop with the pet ID
//       Pet is already adopted
//         should only show the already adopted button
//         should not call the `

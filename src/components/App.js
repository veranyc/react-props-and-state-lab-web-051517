import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    } //end state
  } //end constructor

// <---update animal type based on selection from the filters--->
  onChangeType = animalType => {
    this.setState({
      filters: {
        type: animalType
      }
    })
  } //end onChangeType

// <-------return from the API either all or a list of pets by type (e.g. dog)----->
  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      return fetch('/api/pets')
    }
    return fetch(`/api/pets?type=${this.state.filters.type}`)
  } //end onFindPetsClick

// <------deep merge the newly adopted pet with the array of adopted pets------->
  onAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets,petId]
    })
  } //end onAdoptPet

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petbrowser={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  } //end render

} //end class App

export default App;

// Criteria for App Class:
// <App />
//     Filters
//       1) should change filter type
//     Fetching pets
//       2) should fetch all pets by default
//       3) should fetch pet types using the type parameter based on the filter
//     Adopting pets
//       4) should add an adopted pet ID to the state

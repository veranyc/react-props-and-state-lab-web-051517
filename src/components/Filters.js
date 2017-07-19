import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

//<----pass in the selected value into the callback used to set the current state of animal type---->
handleFilterChange = event => {
  this.props.onChangeType(event.target.value)
}

//<---call the method that will react to button click---->
handleFindClick = event => {
  this.props.onFindPetsClick()
}
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;

// Criteria for Filters class:
// // <Filters />
//     Animal type
//       5) should set the value of the animal type select to the right filter value
//       6) should call the `onChangeType` prop callback when the animal type select changes
//     Finding pets
//       7) should call the `onFindPetsClick` callback prop when the "Find pets" button is clicked

//Filter is the props passed down including type of all, cat, dog, and micropig

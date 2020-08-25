import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
    state = {loading: true}
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ item }) => {
        this.setState({
          name: item.name,
          animal: item.type,
          location: `${item.contact.address.city}, 
          ${item.contact.address.state}`,
          description: item.description,
          media: item.photos,
          breed: item.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { name, item, location, description, breed } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${item} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;

import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vintageItems: [
        {
          name: "Vintage Typewriter",
          image: "https://m.media-amazon.com/images/I/414ePgryCcL._AC_.jpg",
          description: "An old-fashioned typewriter for classic typing.",
        },
        {
          name: "Antique Telephone",
          image: "https://i.ebayimg.com/images/g/BPEAAOSwMz1hFA4X/s-l1600.webp",
          description: "A vintage telephone with rotary dial.",
        },
        {
          name: "Retro Radio",
          image: "https://m.media-amazon.com/images/I/812Jc9xaThS.jpg",
          description: "A retro radio for enjoying old tunes.",
        },
        {
          name: "Old-fashioned Camera",
          image:
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-old-fashioned-photography-camera-robert-lynx.jpg",
          description: "A classic camera for capturing memories.",
        },
        {
          name: "Classic Vinyl Records",
          image:
            "https://i.iheart.com/v3/re/new_assets/35bd58b0-3636-4b33-88cd-9ba1a7680173?ops=fit(960%2C960)%2Cresize(0%2C390)",
          description: "Timeless music on vinyl records.",
        },
        {
          name: "Vintage Jewelry Box",
          image:
            "https://i5.walmartimages.com/asr/faaf4087-c8f6-4c2d-a05d-490b4dd576c2.35f3220524b0e133bbb142c09e04ab67.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          description: "A beautiful box for storing jewelry.",
        },
        {
          name: "Antique Pocket Watch",
          image:
            "https://regencyjewelry.com/wp-content/uploads/2021/05/Elgin-Mens-Vintage-Pocket-Watch.jpg",
          description: "A timeless pocket watch.",
        },
        {
          name: "Retro Television",
          image:
            "https://m.media-amazon.com/images/I/51ITPOvHQpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
          description: "A retro TV set.",
        },
        {
          name: "Old Books Collection",
          image:
            "https://alembicrarebooks.com/cdn/shop/articles/IMG_20150302_182202_1944x.jpg?v=1596633708",
          description: "A collection of old books.",
        },
        {
          name: "Vintage Sewing Machine",
          image:
            "https://beautifulthings-photography.com/wp-content/uploads/2019/08/vintage-sewing-machine-singer-15k-from-1923-1.jpg?w=1200",
          description: "A vintage sewing machine.",
        },
        {
          name: "Antique Gramophone",
          image: "https://i.ebayimg.com/images/g/5RIAAOSwsC1jOWO4/s-l1600.jpg",
          description: "An antique gramophone for listening to records.",
        },
        {
          name: "Vintage Suitcase",
          image:
            "https://m.media-amazon.com/images/I/71sJUEnz9hL._AC_UF894,1000_QL80_.jpg",
          description: "A vintage suitcase for stylish travel.",
        },
        {
          name: "Old Clock",
          image:
            "https://m.media-amazon.com/images/I/714A5YLxk0L._AC_UF894,1000_QL80_.jpg",
          description: "An old clock with classic design.",
        },
        {
          name: "Vintage Lamp",
          image: "https://i.ebayimg.com/images/g/mYEAAOSwJy1h2~Vo/s-l1600.jpg",
          description: "A vintage lamp for a cozy atmosphere.",
        },
      ],
      showModal: false, // State to control visibility of modal
      selectedItem: {}, // State to store details of the selected item
    };
  }

  // Handler to show modal and set selected item
  handleItemClick = (item) => {
    this.setState({ showModal: true, selectedItem: item });
  };

  // Handler to close modal
  closeModal = () => {
    this.setState({ showModal: false, selectedItem: {} });
  };

  render() {
    return (
      <div className="Items-container">
        <h1 style={{ color: "white" }}>Vintage Items You Can Find</h1>
        <h3 style={{ color: "red" }}>Other people's trash is our treasure.</h3>
        <h5 style={{ color: "white" }}>
          These are exclusive items that can be bought on a first-come,
          first-serve basis.
        </h5>

        {/* Render list of vintage items */}
        <ul className="vintage-items-list">
          {this.state.vintageItems.map((item, index) => (
            <li
              key={index}
              className="vintage-item"
              onClick={() => this.handleItemClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="vintage-item-image"
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

        {/* Modal to display item details */}
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <img
                src={this.state.selectedItem.image}
                alt={this.state.selectedItem.name}
                className="modal-image"
              />
              <h2>{this.state.selectedItem.name}</h2>
              <p>{this.state.selectedItem.description}</p>
            </div>
          </div>
        )}

        <br />
        <h3 style={{ color: "white" }}>
          Discover Hidden Treasures and Collectibles
        </h3>
        <h3 style={{ color: "white" }}>By Visiting Us!!</h3>
      </div>
    );
  }
}

export default Items;

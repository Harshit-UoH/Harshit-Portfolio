import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselData from "../data/CarouselData";
import "../css/styleAbout.css";

class Carou extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 650, itemsToShow: 2, itemsToScroll: 1 },
      { width: 850, itemsToShow: 2 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
  }

  render() {
    return (
      <>
        <div className="carousel">
          <Carousel
            showArrows={false}
            breakPoints={this.breakPoints}
            enableAutoPlay={true}
            autoPlaySpeed={9000}
          >
            {CarouselData.map((carouselData) => {
              return (
                <React.Fragment key={carouselData.Id}>
                  <div className="carouselItem">
                    <div className="carouselcontent">
                      <h1>{carouselData.title}</h1>
                      <p>{carouselData.Discription}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }
}

export default Carou;

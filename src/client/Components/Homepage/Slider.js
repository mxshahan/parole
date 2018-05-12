import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';

const Slider = () => (
    <div id="slider">
        <OwlCarousel 
            className="owl-theme"
            loop margin={0} 
            nav={false}
            items={1}
            controlsClass='owl-controls'
        >
            <div className="item">
                <img src="/images/slider1.png"/>
                <Container>
                    <div id="caption" className=" text-white text-center">
                        <div className="col-md-8 offset-2">
                            <h1>Keep Pace With Change</h1>
                            <p>
                                Lorem Ipsum
                                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem mi, commodo vitae condimentum eget, luctus eget eros. 
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="item">
                <img src="/images/slider2.png"/>
                <Container>
                    <div id="caption" className=" text-white text-center">
                        <div className="col-md-8 offset-2">
                            <h1>Keep Pace With Change</h1>
                            <p>
                                Lorem Ipsum
                                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem mi, commodo vitae condimentum eget, luctus eget eros. 
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="item">
                <img src="/images/slider1.png"/>
                <Container>
                    <div id="caption" className=" text-white text-center">
                        <div className="col-md-8 offset-2">
                            <h1>Keep Pace With Change</h1>
                            <p>
                                Lorem Ipsum
                                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem mi, commodo vitae condimentum eget, luctus eget eros. 
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </OwlCarousel>

    </div>
)


export default Slider;
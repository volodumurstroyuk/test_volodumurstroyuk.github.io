import React from 'react';
import Swiper from 'swiper';
import { connect } from 'react-redux';

class Products extends React.Component {

    constructor(){
        super();
        this.state = {
            yS: 0,
            yM: 0,
            yE: 0,
        }
    }

    componentWillMount(){

        let thisO = this,
            doc = document.documentElement;

        /*document.addEventListener("touchcancel", (a) => {
            console.log('touchcancel');
            console.log('a = ', a);
        }, false);*/
        document.addEventListener("touchstart", (a) => {
            console.log('touchstart');
            console.log('a = ', a);
            thisO.setState({yS: doc.scrollTop});
        }, false);

        document.addEventListener("touchmove", (a) => {
            console.log('touchmove');
            console.log('a = ', a);
            thisO.setState({yM: doc.scrollTop});
        }, false);
        document.addEventListener("touchend", (a) => {
            console.log('touchend');
            console.log('a = ', a);
            thisO.setState({yE: doc.scrollTop});
        }, false);
    }

    componentDidMount(){
        new Swiper(this.boxSwiper, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
        });
    }

    render() {

        return <div>
            <div ref={(e) => { this.boxSwiper = e; }} className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.products.collection.filter(function (v) {
                            return v.image_url !== null
                        }).map(function (v, k) {
                            return <div key={'product-key-' + k} className="swiper-slide" style={{backgroundImage: 'url(' + v.image_url + ')'}}>

                                <div className="name">
                                    <p dangerouslySetInnerHTML={{ __html: v.name }}/>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="swiper-pagination"/>
            </div>
            <p>start = {this.state.yS}</p>
            <p>move = {this.state.yM}</p>
            <p>end = {this.state.yE}</p>
        </div>
    }
}

export default connect(
    state => ({
        products: state.products,
    }),
    dispatch => ({

    })
)(Products);
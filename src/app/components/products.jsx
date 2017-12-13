import React from 'react';
import Swiper from 'swiper';
import { connect } from 'react-redux';
import PreloaderPageRefresh from './peloader-page-refresh.jsx';

class Products extends React.Component {

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
            <PreloaderPageRefresh />
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
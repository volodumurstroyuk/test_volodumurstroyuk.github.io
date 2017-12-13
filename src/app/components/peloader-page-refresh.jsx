import React from 'react';
import { connect } from 'react-redux';

class PreloaderPageRefresh extends React.Component {

    constructor(){
        super();
        this.state = {
            cssClasses: '',
            y: 0,
        }
    }

    showingPreloader(y) {
        let thisO = this,
            maxScroll = -200;

        if(y < maxScroll){
            thisO.setState({cssClasses: 'show-all'});
        } else if(y < maxScroll / 2){
            thisO.setState({cssClasses: 'show-half'});
        } else if(y < maxScroll / 3){
            thisO.setState({cssClasses: 'show-third'});
        } else {
            thisO.setState({cssClasses: ''});
        }

        /*if ((y > maxScroll / 6) && (y < maxScroll / 3)) {
            thisO.setState({cssClasses: 'show-third'});
        } else if ((y > maxScroll / 6) && (y < maxScroll / 2)) {
            thisO.setState({cssClasses: 'show-half'});
        } else if ((y > maxScroll / 6)) {
            thisO.setState({cssClasses: 'show-all'});
        } else {
            thisO.setState({cssClasses: ''});
        }*/
    }

    componentWillMount(){

        let thisO = this;

        document.addEventListener("touchstart", () => {
            thisO.setState({y: window.scrollY});
        }, false);

        document.addEventListener("touchmove", () => {
            thisO.showingPreloader(window.scrollY);
            thisO.setState({y: window.scrollY});
        }, false);
        document.addEventListener("touchend", () => {
            thisO.setState({y: window.scrollY});
        }, false);
    }

    render() {

        return <div>
            <div className={'page-refresh-preloader ' + this.state.cssClasses} />
            <p className="test-scroll">y = {this.state.y}</p>
        </div>
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(PreloaderPageRefresh);
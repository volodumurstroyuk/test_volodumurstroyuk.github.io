import React from 'react';
import { connect } from 'react-redux';

const maxScroll = -200;

class PreloaderPageRefresh extends React.Component {

    constructor(){
        super();
        this.state = {
            cssClasses: '',
        }
    }

    showingPreloader(y) {
        let thisO = this;

        if(y < maxScroll){
            thisO.setState({cssClasses: 'show-all'});
        } else if(y < maxScroll / 2){
            thisO.setState({cssClasses: 'show-half'});
        } else if(y < maxScroll / 3){
            thisO.setState({cssClasses: 'show-third'});
        } else {
            thisO.setState({cssClasses: ''});
        }
    }

    componentWillMount(){

        let thisO = this;

        document.addEventListener("touchmove", () => {
            thisO.showingPreloader(window.scrollY);
        }, false);

        document.addEventListener("touchend", () => {
            thisO.showingPreloader(0);
            if(window.scrollY < maxScroll){
                window.location.reload(true);
            }
        }, false);
    }

    render() {

        return <div>
            <div className={'page-refresh-preloader ' + this.state.cssClasses} />
        </div>
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(PreloaderPageRefresh);
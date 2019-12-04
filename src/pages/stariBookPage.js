import React, {Component} from 'react';
import BookContainer from '../stariBookPage/bookContainer'
import UnitChoices from '../stariBookPage/unitChoices' 
import { connect } from 'react-redux'
import {storeUnits} from '../actions/actions'
import {fetchUnits} from '../actions/fetches'


class StariBookPage extends Component {
    componentDidMount(){
        fetchUnits()
        .then(units => {
            this.props.storeUnits(units)
        })
    }
    
    render(){
        return (
            <div>
                <UnitChoices />
                <BookContainer />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {units: state.units}
}

export default connect(mapStateToProps, { storeUnits })(StariBookPage);
import React, {Component} from 'react';
import { Container, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectedUnit } from '../actions/actions'

class unitChoices extends Component {
    
    render(){
        const unitCount = 8
        const mapUnits = this.props.units.map((unit) => 
            <Grid.Column width = {unitCount/4}key={unit.id}>
                <button data-id={unit.unit_number} onClick={(e)=>{this.props.selectedUnit(e)}}>
                    Unit { unit.unit_number } 
                </button>
            </Grid.Column>
        )
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        {mapUnits}
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
let mapStateToProps = (state) => {
    return {units: state.units}
}

export default connect(mapStateToProps, {selectedUnit})(unitChoices);

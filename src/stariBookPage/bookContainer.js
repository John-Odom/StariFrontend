import React, { Component } from 'react';
import BookCard from './bookCard'
import {Card} from 'semantic-ui-react'
import { connect } from 'react-redux'

class BookContainer extends Component {
    render() {
        console.log(this.props.selectedUnit)
        const mapBooks = this.props.selectedUnit.map((book) => 
            <BookCard 
                key={book.id}
                title={book.title}
                price={book.price}
                author={book.author}
                link={book.link}
                image={book.image}
            />
        )
        return(
           <Card.Group itemsPerRow={4}>
              {mapBooks}
           </Card.Group>
        )
    }
}

let mapStateToProps = (state) => {
    return {selectedUnit: state.selectedUnit}
}

export default connect(mapStateToProps)(BookContainer);

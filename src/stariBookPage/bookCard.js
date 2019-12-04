import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const BookCard = (props) => {
  console.log(props)
  const extra = (
    <a href={props.link}>
      <Icon name='shopping cart' />
      $ {props.price}
    </a>
  )

  return(
    <Card
      image={props.image}
      header={props.title}
      meta={props.author}
      // description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={extra}
    />
  )
}
 
export default BookCard;


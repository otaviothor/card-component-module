import React, {useState} from 'react'

import {ResetCSS, Container, Card, CardContent, CardImg, CardTitle} from './Style';

const cards = ({cards}) => (
  <>
    {
      cards.map((card, i) => {
        return (
          <CardContent cards={i} key={i}>
            <CardImg>
              {card.img}
            </CardImg>
            <CardTitle>
              {card.title}
            </CardTitle>
          </CardContent>
        )
      })
    }
  </>
  );

  const CardComponent = ({img, icon}) => {
    return (
      <Container className='card-component-module'>
        <ResetCSS/>
        <Card>
          <CardContent cards={cards}>

          </CardContent>
        </Card>
      </Container>)
  }

  export default CardComponent

import React, {useState} from 'react'
import PropTypes from 'prop-types';

import {ResetCSS, Card, CardHeader, CardTitle, CardTitleComplement, CardSubtitle, CardContent, CardDescription, CardAction} from './Style';

  const CardComponent = ({header, title, titleComplement, subtitle, description, actions}) => {
    return (
      <Card className="card-component-module">
        <ResetCSS/>
        {header && <CardHeader header={header}/>}
        <CardTitle title={title}>{title}</CardTitle>
        <CardTitleComplement>{titleComplement}</CardTitleComplement>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {description &&
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        }
        {actions && actions.map((action) => {
          return (
            <CardAction onClick={action.handler}>{action.name}</CardAction>
          )
        })}
      </Card>
      )
  }

  CardComponent.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string.isRequired,
    titleComplement: PropTypes.node,
    subtitle: PropTypes.string,
    description: PropTypes.string
  }

  export default CardComponent

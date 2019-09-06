import React from 'react'
import PropTypes from 'prop-types';

import {ResetCSS, Card, CardHeader, CardTitle, CardTitleComplement, CardSubtitle, CardContent, CardDescription, CardContainerAction, CardAction} from './Style';

  const CardComponent = ({header, title, titleComplement, subtitle, description, actionAlign, actions}) => {
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
        <CardContainerAction actionAlign={actionAlign}>
          {actions && actions.map((action, i) => {
            return (
              <CardAction key={i} appearance={action.appearance} onClick={action.handler}>{action.name}</CardAction>
            )
          })}
        </CardContainerAction>
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

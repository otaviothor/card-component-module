import React from 'react'
import PropTypes from 'prop-types';

import { ResetCSS, Card, CardHeader, CardTitle, CardTitleComplement, CardSubtitle, CardContent } from './Style';

const CardComponent = ({ header, title, titleComplement, subtitle, children }) => {
  return (
    <Card className="card-component-module">
      <ResetCSS />
      {header && <CardHeader header={header} />}
      <CardTitle title={title}>{title}</CardTitle>
      <CardTitleComplement>{titleComplement}</CardTitleComplement>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardContent>
        {children}
      </CardContent>
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

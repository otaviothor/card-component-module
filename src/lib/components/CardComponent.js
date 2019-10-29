import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Media from 'react-responsive'
import { MdKeyboardArrowDown } from 'react-icons/md'

import {
  ResetCSS,
  Card,
  CardHeader,
  CardTitle,
  CardTitleComplement,
  CardContainerMobile,
  CardMobileTitles,
  CardMobileAction,
  CardMobileActionIcon,
  CardContentMobile,
  CardSubtitle,
  CardContent
} from './Style';

const CardComponent = ({ header, title, titleComplement, subtitle, children }) => {

  const [openCard, setOpenCard] = useState(false)

  function toggleCard() {
    setOpenCard(!openCard)
  }

  return (
    <Card className="card-component-module" openCard={openCard}>
      <ResetCSS />
      {header && <CardHeader header={header} />}
      <Media maxDeviceWidth={576}>
        <CardContainerMobile>
          <CardMobileTitles>
            <CardTitle title={title}>{title}</CardTitle>
            <CardTitleComplement>{titleComplement}</CardTitleComplement>
            <CardSubtitle>{subtitle}</CardSubtitle>
          </CardMobileTitles>
          <CardMobileAction onClick={toggleCard}>
            <CardMobileActionIcon openCard={openCard}><MdKeyboardArrowDown /></CardMobileActionIcon>
          </CardMobileAction>
        </CardContainerMobile>
        <CardContentMobile openCard={openCard}>{children}</CardContentMobile>
      </Media>
      <Media minDeviceWidth={577}>
        <CardTitle title={title}>{title}</CardTitle>
        <CardTitleComplement>{titleComplement}</CardTitleComplement>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardContent>
          {children}
        </CardContent>
      </Media>
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

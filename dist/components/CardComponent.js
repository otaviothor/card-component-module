import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import Media from 'react-responsive';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ResetCSS, Card, CardHeader, CardTitle, CardTitleComplement, CardContainerMobile, CardMobileTitles, CardMobileAction, CardMobileActionIcon, CardContentMobile, CardSubtitle, CardContent } from './Style';

var CardComponent = function CardComponent(_ref) {
  var header = _ref.header,
      title = _ref.title,
      titleComplement = _ref.titleComplement,
      subtitle = _ref.subtitle,
      children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openCard = _useState2[0],
      setOpenCard = _useState2[1];

  function toggleCard() {
    setOpenCard(!openCard);
  }

  return React.createElement(Card, {
    className: "card-component-module",
    openCard: openCard
  }, React.createElement(ResetCSS, null), header && React.createElement(CardHeader, {
    header: header
  }), React.createElement(Media, {
    maxDeviceWidth: 576
  }, React.createElement(CardContainerMobile, null, React.createElement(CardMobileTitles, null, React.createElement(CardTitle, {
    title: title
  }, title), React.createElement(CardTitleComplement, null, titleComplement), React.createElement(CardSubtitle, null, subtitle)), React.createElement(CardMobileAction, {
    onClick: toggleCard
  }, React.createElement(CardMobileActionIcon, {
    openCard: openCard
  }, React.createElement(MdKeyboardArrowDown, null)))), React.createElement(CardContentMobile, {
    openCard: openCard
  }, children)), React.createElement(Media, {
    minDeviceWidth: 577
  }, React.createElement(CardTitle, {
    title: title
  }, title), React.createElement(CardTitleComplement, null, titleComplement), React.createElement(CardSubtitle, null, subtitle), React.createElement(CardContent, null, children)));
};

export default CardComponent;
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-height: 200px;\n  height: auto;\n  overflow-y: auto;\n  padding: 0 16px;\n  text-align: justify;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-height: ", ";\n  height: auto;\n  overflow-y: auto;\n  padding: ", ";\n  text-align: justify;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 0 16px;\n  line-height: 32px;\n  color: #000000de;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 24px;\n  background: transparent;\n  height: 35px;\n  width: 35px;\n  border: none;\n  border-radius: 50%;\n  ", "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 85%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 0 16px;\n  line-height: 24px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 44px;\n  margin: 0 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-height: 194px;\n  max-height: 194px;\n  height: 194px;\n  margin: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  background-image: url(", ");\n  background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  max-width: 344px;\n  transition: .2s;\n  margin: 5px;\n  box-shadow: 0 0 1px 0 rgba(0,0,0,0.2), 0 3px 15px 0 rgba(0,0,0,0.2);\n  border-radius: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .card-component-module {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    color: rgb(100,100,100);\n    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;\n    * {\n      box-sizing: border-box;\n      font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;\n      transition: 0.2s;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
export var ResetCSS = createGlobalStyle(_templateObject());
export var Card = styled.div(_templateObject2());
export var CardHeader = styled.header(_templateObject3(), function (props) {
  return props.header;
});
export var CardTitle = styled.h1(_templateObject4());
export var CardTitleComplement = styled.div(_templateObject5());
export var CardContainerMobile = styled.div(_templateObject6());
export var CardMobileTitles = styled.div(_templateObject7());
export var CardMobileAction = styled.div(_templateObject8());
export var CardMobileActionIcon = styled.button(_templateObject9(), function (props) {
  return props.openCard && 'transform: rotate(180deg);';
});
export var CardSubtitle = styled.h4(_templateObject10());
export var CardContentMobile = styled.div(_templateObject11(), function (props) {
  return props.openCard ? 'auto' : '0';
}, function (props) {
  return props.openCard ? '16px 16px' : '0';
});
export var CardContent = styled.div(_templateObject12());
import styled, {createGlobalStyle} from 'styled-components'
export const ResetCSS = createGlobalStyle `
  .card-component-module {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: rgb(100,100,100);
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
    * {
      box-sizing: border-box;
      font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
      transition: 0.2s;
    }
  }
`

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 344px;
  transition: .2s;
  margin: 5px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.2), 0 3px 15px 0 rgba(0,0,0,0.2);
  border-radius: 4px;
`

export const CardHeader = styled.header`
  min-height: 194px;
  max-height: 194px;
  height: 194px;
  margin: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-image: url(${props=> props.header});
  background-size: cover;
`

export const CardTitle = styled.h1`
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 44px;
  margin: 0 16px;
`

export const CardTitleComplement = styled.div`
  font-size: 12px;
  margin: 0 16px;
  line-height: 24px;
`

export const CardContainerMobile = styled.div`
  width: 100%;
  display: flex;
`

export const CardMobileTitles = styled.div`
  width: 85%;
`

export const CardMobileAction = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardMobileActionIcon = styled.button`
  font-size: 24px;
  background: transparent;
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 50%;
  ${props => props.openCard && 'transform: rotate(180deg);'}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
`

export const CardSubtitle = styled.h4`
  font-size: 14px;
  margin: 0 16px;
  line-height: 32px;
  color: #000000de;
`

export const CardContentMobile = styled.div`
  width: 100%;
  max-height: ${props => props.openCard ? 'auto' : '0'};
  height: auto;
  overflow-y: auto;
  padding: ${props => props.openCard ? '16px 16px' : '0'};
  text-align: justify;
`

export const CardContent = styled.div`
  width: 100%;
  max-height: 200px;
  height: auto;
  overflow-y: auto;
  padding: 0 16px;
  text-align: justify;
`
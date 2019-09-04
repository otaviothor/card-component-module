import styled, {createGlobalStyle} from 'styled-components'
export const ResetCSS = createGlobalStyle `
  .card-component-module,  .card-component-module * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: rgb(100,100,100);
    font-family: Arial, Heveltica, Tahoma, Geneva, sans-serif;
  }
`

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 344px;
  transition: .2s;
  margin: 5px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.05), 0 3px 15px 0 rgba(0,0,0,0.1);
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.05), 0 4px 30px 0 rgba(0,0,0,0.12);
    transform: translateY(-1px);
  }
`

export const CardHeader = styled.header`
  min-height: : 194px;
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

export const CardSubtitle = styled.h4`
  font-size: 14px;
  margin: 0 16px;
  line-height: 32px;
  color: #000000de;
`

export const CardContent = styled.div`
  width: 100%;
  max-height: 100px;
  height: auto;
  overflow-y: auto;
  padding: 0 16px;
  text-align: justify;
`

export const CardDescription = styled.span`
  font-size: 14px;
  color: #00000099;
`

export const CardContainerAction = styled.div`
  display: flex;
  justify-content: ${props => props.actionAlign ? props.actionAlign === "center" && "center"
  : props.actionAlign === "right" ? "flex-end" : "flex-start"};
`

export const CardAction = styled.button`
  font-size: 14px;
  margin: 8px;
  padding: 0 16px;
  line-height: 36px;
  min-width: 64px;
  border-radius: 4px;
  border: ${props => props.appearance === "outlined"
  ? "1px solid rgba(0, 0, 0, 0.12)" : "none"};
  border-bottom: ${props => props.appearance === "outlined"
  ? "1px solid rgba(0, 0, 0, 0.12)" : "none"};
  background: ${props => props.appearance === "contained"
  ? "rgb(98, 0, 238, 1)" : "none"};
  color: ${props => props.appearance === "contained"
  ? "#fff" : "inherit"};
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  ${'' /* &:hover{
    transform: translateY(-1px);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.05), 0 4px 30px 0 rgba(0,0,0,0.12);
    transform: translateY(-2px);
  } */}
`

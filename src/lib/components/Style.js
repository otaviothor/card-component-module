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

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
`

export const CardContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`

export const Card = styled.div`
  height: 320px;
  width: 220px;
  border-radius: 4px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  position: absolute;
  &:hover{
    box-shadow: 0 0 23px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
    cursor: pointer;
  }
`

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
`

export const CardImg = styled.img`
  width: 100%;
  height: 150px;
`

export const CardTitle = styled.h5`
  margin: 5px 0 0 5px;
`

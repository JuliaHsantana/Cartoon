import style from "styled-components"

export const Section = style.section`
background-color: #464646;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`

export const Box = style.div`
border: solid black; 
width: 40vw ;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
margin: 0.5rem;
`
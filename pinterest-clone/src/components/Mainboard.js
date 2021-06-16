import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

function Mainboard(props) {

    let { pins } = props

    return (
        <Wrapper>
            <Container>
                {pins.map((pin) =>{
                    let {urls} = pin;
                    return <Pin /*key={index} */ urls={urls}/>
                })}
                
            </Container>
        </Wrapper>
    )
}

export default Mainboard


const Wrapper = styled.div`
    background-color: white;
    display:flex;
    width:100vw;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
`
const Container = styled.div`
    /* display: flex; */
    column-count: 4;
    column-gap: 5px;
    background-color: white;
    margin: 0 auto;
    height: 100%;
    width: 80vw;
    @media (min-width: 1700px) {
        column-count: 7;
     }
    @media (min-width: 1500px) {
        column-count: 6;
     }
    @media (max-width: 1340px) {
        column-count: 4;
        width: 88vw;
     }
    @media (max-width: 1070px) {
        column-count: 3;
        width: 88vw;
     }
    @media (max-width: 800px) {
        column-count: 2;
        width: 88vw;
     }
    @media (max-width: 527px) {
        column-count: 1;
        width: 88vw;
     }

`

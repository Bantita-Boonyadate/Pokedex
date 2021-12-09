import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
`
const BottomBar = styled.div`
    background-color: #ec5656;
    height: 30px;
`
function Search() {
    return (
        <>
            <Container>
                <BottomBar></BottomBar>
            </Container>
        </>
    )
}

export default Search

import React from 'react'
import styled from 'styled-components'
import ShowList from './ShowList'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const ContaiHead = styled.div`
    position: sticky;
    height: 10vh;
    display: flex;
    justify-content: center;
    background-color: #fff;    
`
const Head = styled.h1`
    display: flex;
    align-items: center;
`
const MainContai = styled.div`
    overflow: scroll;
    height: 67.4vh;
    padding: 0 15px;
`

const Card = styled.div` 
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Btn = styled.button`
   :before {
       position: fixed;
    }
   font-size: 70px;
   padding: 10px;
   border-radius: 50%;
   width: 120px;
   height: 120px;
   border: none;
   background-color: #ec5656;
   color: #fff;
`
const ContaiBtn = styled.div`
    position: absolute;
    bottom: 3%;
    right: 45%;
    z-index: 10;
`

const ContaiFooter = styled.div`
    position: absolute;
    width: 100%;
    background-color: #ec5656;
    height: 70px;
    bottom: 0;
    left: 0;
`

function AddFav({ add, deleteItem, openPopup }) {
    var isAdd = true;

    return (
        <>
            <Container>
                <ContaiHead>
                    <Head>My Pokedex</Head>
                </ContaiHead>
                <MainContai>
                    <Card>
                        {add.map((item) => {
                            return (
                                <ShowList item={item} isAdd={isAdd} deleteItem={() => deleteItem(item)} />
                            )
                        })}
                    </Card>
                </MainContai>
                <ContaiFooter>
                    <ContaiBtn><Btn onClick={openPopup}>+</Btn></ContaiBtn>
                </ContaiFooter>
            </Container>
        </>
    )
}

export default AddFav

import React from 'react'
import ShowList from './ShowList';
import styled from 'styled-components';
import searchIcon from "../assets/search.png";

const Bg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const PopupOpen = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    padding: 30px;
    background-color: rgba(0,0,0,0.7);
`

const MainContai = styled.div`
    position: absolute;
    overflow: scroll;
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    margin: auto;
    background-color: white;
    border-radius: 5px;
`
const ContainerSearch = styled.div`
    margin: 7px; 
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-family: 'Gaegu';
    font-size: 25px;
    padding-left: 10px;
`
const IconSearch = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    width: 30px;
`

function List({ handleClick, onChange, card, name, closePopup }) {

    return (
        <>
            <PopupOpen >
                <Bg onClick={closePopup}></Bg>
                <MainContai>
                    <ContainerSearch>
                        <Input onChange={onChange} placeholder="Find pokemon"></Input><IconSearch src={searchIcon} />
                    </ContainerSearch>
                    {
                        card.filter(data =>
                            data.name.toLowerCase().includes(name.toLowerCase()) || data.type.toLowerCase().includes(name.toLowerCase())

                        ).map(data => {
                            return (
                                <ShowList key={data.id} item={data} handleClick={() => handleClick(data)} />
                            )
                        })
                    }
                </MainContai>
            </PopupOpen>
        </>
    )
}

export default List

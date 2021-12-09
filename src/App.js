import React, { useState, useEffect } from 'react'
import './App.css'
import AddFav from './Components/AddFav';
import List from "./Components/List";
import axios from "axios";
import styled from 'styled-components'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

function App() {
  const [card, setCard] = useState([]);
  const [name, setName] = useState("");
  const [filterCard, setFilterCard] = useState([])
  const [add, setAdd] = useState([]);
  const [popup, setPopup] = useState(false)


  var newCard = card
  var newAdd = add

  const handleClick = (item) => {

    setAdd([...add, item])

    newCard = newCard.filter((newItem) => newItem.id !== item.id)
    console.log('newCard', newCard)
    setCard(newCard)

    return (
      <AddFav item={add} />
    )

  }
  console.log(add)

  const deleteItem = (item) => {
    newAdd = newAdd.filter((newItem) => newItem.id !== item.id)
    setAdd(newAdd);
    setCard([...card, item])
    console.log('newAdd', newAdd);
  }

  const onChange = (event) => {
    setName(event.target.value);

  }
  console.log(name)

  const openPopup = () => {
    setPopup(true)
    console.log(popup)
  }

  const closePopup = () => {
    setPopup(false)
  }

  useEffect(() => {

    axios.get('http://localhost:3030/api/cards')
      .then((res) => {
        setCard(res.data.cards)

      })

  }, [])

  return (
    <>
      <Container>
        {popup ? <List handleClick={handleClick} onChange={onChange} card={card} filterCard={filterCard} name={name} closePopup={closePopup} /> : null}

        <AddFav add={add} deleteItem={deleteItem} openPopup={openPopup} />

      </Container>
    </>
  )
}

export default App


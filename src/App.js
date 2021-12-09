import React, { useState, useEffect } from 'react'
import './App.css'
import AddFav from './Components/AddFav';
import List from "./Components/List";
import axios from "axios";
import styled from 'styled-components'
import { allItem, addItem, deleteItem, searchItem } from './slice';
import { useSelector, useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const myItem = useSelector(state => state.item.addItem);
  const showItem = useSelector(state => state.item.showItem);

  const [popup, setPopup] = useState(false)

  const onChange = (event) => {
    dispatch(searchItem(event.target.value))

  }

  const openPopup = () => {
    setPopup(true)
    console.log(popup)
  }

  const closePopup = () => {
    setPopup(false)
  }

  const handleAdd = (item) => {
    dispatch(addItem(item))

  }

  const fetchAllItem = (item) => {
    item.map((item) => {
      dispatch(allItem(item))
    })
  }
  const handleDelete = (item) => {
    dispatch(deleteItem(item))
  }

  useEffect(() => {

    axios.get('http://localhost:3030/api/cards')
      .then((res) => {
        fetchAllItem(res.data.cards)

      })

  }, [])

  return (
    <>
      <Container>
        {popup ? <List handleAdd={handleAdd} onChange={onChange} card={showItem} closePopup={closePopup} /> : null}

        <AddFav add={myItem} deleteItem={handleDelete} openPopup={openPopup} />

      </Container>
    </>
  )
}

export default App


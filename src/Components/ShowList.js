import React from 'react'
import styled from 'styled-components'
import cute from '../assets/cute.png';

const ContainerCard = styled.div`
    display: flex;
    padding: 15px;
    background-color: #f3f4f7;
    margin: ${props => props.isAdd ? 0 : "15px"};
    margin-bottom: ${props => props.isAdd && "15px"};
    transition: 0.3s;
    :hover {
        box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    }
    width: ${props => props.isAdd && "400px"};
`

const Left = styled.div``

const Right = styled.div`
    width: 100%;
    margin-left: 20px;
`
const ImageContai = styled.div`
    height: 200px;
`
const Image = styled.img`
    height: 100%;
`
const ContaiTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -15px;
`
const Title = styled.p`
    font-size: 32px;
    font-weight: lighter;
    font-family: 'Gaegu';
    text-transform: uppercase;
`
const Detail = styled.h1`
 text-transform: uppercase;
 font-size: 20px;
`
const Add = styled.button`
    background-color: #f3f4f7;
    border: none;
    color: #dc7777;
    font-size: 25px;
    display: none;
    ${ContainerCard}:hover & {
        display: block;
    }
`

const Delete = styled.button`
    background-color: #f3f4f7;
    border: none;
    color: #dc7777;
    font-size: 30px;
    display: none;
    ${ContainerCard}:hover & {
        display: block;
    }
`
const ContaiSkill = styled.div`
    width: 90%;
    background-color: #e4e4e4;
    border-radius: 30px; 
    height: 25px;
    margin-left: 15px;
`

const ContentText = styled.div`
    width: 50%;
`


//ตามนั้น >100 => 100 || < 0 => 0
const RangeHp = styled.div`
    width: ${props => props.skill > 100 ? '100%' : props.skill >= 0 && props.skill <= 100 ? `${props.skill}%` : "0%"};
    background-color: #f3701a;
    height: 100%;
    border-radius: 30px; 
`

//array
const RangeStr = styled.div`
    width: ${props => props.skill === 1 ? "50%" : props.skill === 2 ? "100%" : "0%"};
    background-color: #f3701a;
    height: 100%;
    border-radius: 30px;
`

//array
const RangeWeak = styled.div`
    width: ${props => props.skill === 1 ? "100%" : "0%"};
    background-color: #f3701a;
    height: 100%;
    border-radius: 30px; 
`

const ContentRight = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
`

const Happiness = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-right: 5px;
`

function ShowList({ item, handleClick, isAdd, deleteItem }) {
    var hps = parseInt(item.hp);
    var damages = item.attacks;
    var weaks = item.weaknesses;
    var happiness = 0

    var sumDamage = 0
    var sumWeak = 0
    if (isNaN(hps)) {
        hps = 0
    }

    if (item.attacks) {
        var attack = Object.keys(item.attacks).length
        damages.map((item) => {
            var number = item.damage.match(/\d+/g);
            var numberParse = parseInt(number)
            if (isNaN(numberParse)) {
                numberParse = 0;
            }
            sumDamage = sumDamage + numberParse
        })
    }

    if (item.weaknesses) {
        var weakness = Object.keys(item.weaknesses).length
        weaks.map((item) => {
            var number = item.value.match(/\d+/g);
            sumWeak = parseInt(number)
        })
    }

    happiness = ((hps / 10) + (sumDamage / 10) + 10 - (sumWeak)) / 5
    var happyParse = Math.round(happiness) // 5.5 ปัดขึ้น 

    return (
        <div>
            <ContainerCard isAdd={isAdd}>
                <Left>
                    <ImageContai isAdd={isAdd}>
                        <Image src={item.imageUrl} />
                    </ImageContai>
                </Left>
                <Right>
                    <ContaiTitle>
                        <Title>{item.name}</Title>
                        {
                            isAdd ? <Delete onClick={deleteItem}>x</Delete> : <Add onClick={handleClick}>Add</Add>
                        }
                    </ContaiTitle>

                    <ContentRight>
                        <ContentText>
                            <Detail>hp</Detail>
                        </ContentText>
                        <ContaiSkill>
                            <RangeHp skill={item.hp}></RangeHp>
                        </ContaiSkill>
                    </ContentRight>

                    <ContentRight>
                        <ContentText>
                            <Detail>str</Detail>
                        </ContentText>
                        <ContaiSkill>
                            <RangeStr skill={attack}></RangeStr>
                        </ContaiSkill>
                    </ContentRight>

                    <ContentRight>
                        <ContentText>
                            <Detail>weak</Detail>
                        </ContentText>
                        <ContaiSkill>
                            <RangeWeak skill={weakness}></RangeWeak>
                        </ContaiSkill>
                    </ContentRight>

                    {[...Array(happyParse)].map((happy, i) => {
                        return (
                            <Happiness src={cute} />
                        )
                    })}

                </Right>
            </ContainerCard>
        </div>
    )
}

export default ShowList




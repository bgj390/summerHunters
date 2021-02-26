// It is your job to implement this. More info in README
// sources other than documentation:
// https://stackoverflow.com/questions/42216053/typescript-how-do-i-define-interfaces-for-nested-objects

import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Section, } from '../../components/Section';

const StyledHeroImage = styled.img`
    width: 100%;
    height: auto;
`;

const StyledAttributes = styled.div`
    background: #001147;
    height: auto;
    text-align: center;
    color: #fff;
    font-family: "Montserrat";
    letter-spacing: 2.15px;
    font-size: min(max(15px, 2.5vw), 30px);
`;

interface IAttributesProps {
    strength: number,
    intelligence: number,
    stamina: number,
    healthpoints: number,
    mana: number,
    agility: number,
    speed: number,
    resistance: string,
    weakness: string
}

interface IHeroCardProps {
    name: string,
    imgUrl: string,
    description: string,
    backStory: string,
    attributes: {
      [key:string]: IAttributesProps
    },
    // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name, description, backStory, imgUrl, attributes }) => {
  return (
    <div>
      <Section  
        heading={name}
        paragraph={description}
      />
      <StyledHeroImage src={imgUrl} />
      <StyledAttributes>
        Strength      &nbsp;<strong>{attributes.strength}</strong>,&nbsp;
        Intelligence  &nbsp;<strong>{attributes.intelligence}</strong>,<br />
        Stamina       &nbsp;<strong>{attributes.stamina}</strong>,&nbsp;
        Agility       &nbsp;<strong>{attributes.agility}</strong>,&nbsp;
        Speed         &nbsp;<strong>{attributes.speed}</strong>,<br />
        Healthpoints  &nbsp;<strong>{attributes.healthpoints}</strong>,&nbsp;
        Mana          &nbsp;<strong>{attributes.mana}</strong>,<br />
        Resistance    &nbsp;<strong>{attributes.resistance}</strong>,&nbsp;
        Weakness      &nbsp;<strong>{attributes.weakness}</strong>
      </StyledAttributes>
      <Section
        heading={name + "'s Backstory"}
        paragraph={backStory}
      />
    </div>
  )
}

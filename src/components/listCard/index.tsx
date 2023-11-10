import React from 'react'
import { Card, TCard } from '../card'
import css from './listCard.module.scss'

type Props = {
  list: TCard[];
}

function ListCard(props: Props) {

  return (
    <div className={css['list-card']}>
      {props.list.map((item) =>{
        return <Card key={item.id} data={item}/>
      })}
    </div>
  )
}

export default ListCard

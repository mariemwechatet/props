
import React from 'react'
import Items from './Items'

const ListProd = ({produits , CLick}) => {
  
    return (
        <div>
          {
            produits.map(
              (el,i)=> (
                <Items produits ={el} key={i} handelClick={CLick}/> 
                
              )
            )
          }
        </div>
    )
}

export default ListProd

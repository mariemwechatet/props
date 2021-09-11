
import React from 'react'
import { Table } from 'react-bootstrap/esm'
import PropTypes from 'prop-types'; // ES6

const Items = ({produits ,handelClick, title}) => {
    const {image,name,songName,price}=produits
    return (
        <div>
            <h1>{title}</h1>
            <Table striped bordered hover>
  <thead>
      <tr>
          <th>Image</th>
          <th> Name</th>
          <th>Song Name</th>
          <th> Price</th>
    
      </tr>
    <tr>
      
      <td><img style={{width:100}} src={image} alt=""/></td>
      <td>{name}</td>
      <td>{songName}</td>
      <td>{price}</td>
      <th><button onClick={()=>  handelClick(songName,price)} > bay </button></th>
    </tr>
  </thead>
 
  </Table>
        </div>
    )
}
Items.defaultProps = {
    title: 'this is default prpos '
  };
export default Items

Items.propTypes = {
    
    handelClick: PropTypes.array}
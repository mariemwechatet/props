import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Footer = (props) => {
    return (
        <div>
            <Modal.Dialog>
                
  <Modal.Header closeButton>
    <Modal.Title>Copie Rihgth by  Jahseh Dwayne Ricardo Onfroy</Modal.Title>
    {props.children}
    {props.mimi}
  </Modal.Header>
  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    )
}

export default Footer

import React, { useEffect, useState } from 'react'
import ClientService from '../../api/ClientService';
import { ClientType } from '../../utils/applicationTypes';
import Client from './Client';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ClientForm from './ClientForm';

function Clients() {

    const [customers, setCustomers] = useState<Array<ClientType>>();
    const [showForm, setShowForm] = useState(false);
  
  
 useEffect(() => {
    ClientService.getAll().then((response) => {
      setCustomers(response.data);
    });
  }, []);

  if (!customers) return (
    <div>Loading ... </div>
  );
    return (
      
      <div>
        <Container>

              <br />
            <Row>
                <Col sm={8}><h1>Liste des clients </h1></Col>
                {/* <Col sm={4}><Button variant="primary" onClick={() => { setShowForm(true) }}>Ajouter un client</Button></Col> */}
            </Row>
              
              <br />
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Prénom</th>
                      <th>E-mail</th>
                      <th>Téléphone</th>
                      <th>Pays</th>
                      <th>Ville</th>
                      <th>Quartier</th>

                  </tr>
              </thead>
              <tbody>
                  {
                      customers.map((item, index) => <Client {...item} key={index}  />)
                  }
              </tbody>
          </Table>
        </Container>
            
            {showForm &&
                <div>
                    <Modal show={showForm} onHide={() => { setShowForm(false) }}>
                        <Modal.Header closeButton>
                        <Modal.Title>Nouveau client</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ClientForm/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => { setShowForm(false) }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { setShowForm(false) }}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            } 
      
      </div>
  )
}

export default Clients
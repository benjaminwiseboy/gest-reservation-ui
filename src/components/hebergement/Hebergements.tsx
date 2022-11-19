import React, { useEffect, useState } from 'react'
import HebergementService from '../../api/HebergementService'
import { HebergementType } from '../../utils/applicationTypes'
import Hebergement from './Hebergement'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

function Hebergements() {

  const [hebergements, setHebergements] = useState<Array<HebergementType>>()

  useEffect(() => {
    HebergementService.getAll().then((response) => {
      setHebergements(response.data);
    });
    
  }, [])
  

  if (!hebergements) return (
    <div>Loading ... </div>
  );
  return (
    <>
      <Container>

          <br /> <h1>Liste des hébergements </h1> <br />
          <Table striped bordered hover >
              <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Type</th>
                      <th>Prestations</th>
                      <th>Chambres</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      hebergements.map((item, index) => <Hebergement {...item} key={index} />)
                  }
              </tbody>
          </Table>
      
      </Container>
      </>
  )
}

export default Hebergements
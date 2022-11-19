import React, { useEffect, useState } from 'react'
import ReservationService from '../../api/ReservationService';
import { ReservationType } from '../../utils/applicationTypes';
import Reservation from './Reservation';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

function Reservations() {
 const [reservations, setReservations] = useState<Array<ReservationType>>()

  useEffect(() => {
    ReservationService.getAll().then((response) => {
      setReservations(response.data);
    });
    
  }, [])
  

  if (!reservations) return (
    <div>Loading ... </div>
  );
  return (
    <>
      <Container>
          <br /><h1>Liste des réservations </h1> <br />
          <Table striped bordered hover >
              <thead>
                  <tr>
                      <th>Client</th>
                      <th>Chambre</th>
                      <th>Hébergement</th>
                      <th>Date de début</th>
                      <th>Date de fin</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      reservations.map((item, index) => <Reservation {...item} key={index} />)
                  }
              </tbody>
          </Table>
      </Container>
      
      </>
  )

}

export default Reservations
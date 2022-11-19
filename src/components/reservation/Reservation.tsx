import React from 'react'
import { ReservationType } from '../../utils/applicationTypes'

function Reservation(props : ReservationType) {
 return (
     <tr>
        <td>{props.client.nom + " "}  {props.client.prenom}</td>
         <td>{props.chambre.type + " "}  {props.chambre.prix + " €"} </td>
         <td>{ props.chambre.hebergement.name}</td>
        <td>{props.date_debut.toString()}</td>
        <td>{props.date_debut.toString()}</td>      
    </tr>
  )
}

export default Reservation
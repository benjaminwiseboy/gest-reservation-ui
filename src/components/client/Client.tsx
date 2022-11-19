import React from 'react'
import { ClientType } from '../../utils/applicationTypes'

function Client(client: ClientType)  {
    return (
    (
        <tr>
            <td>{client.nom}</td>
            <td>{client.prenom}</td>
            <td>{client.email}</td>
            <td>{client.tel}</td>
            <td>{client.adresse.pays} </td>  
            <td>{client.adresse.ville}</td>  
            <td>{client.adresse.quartier}</td>      
        </tr>
                          
     )
    
  )
}

export default Client
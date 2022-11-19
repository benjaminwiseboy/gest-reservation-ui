import React from 'react'
import { HebergementType } from '../../utils/applicationTypes'

function Hebergement(props : HebergementType) {
  return (
     <tr>
            <td>{props.name}</td>
            <td>{props.type.toLowerCase()}</td>
          <td>{props.prestations.map(p => <>{p.intitule.toLowerCase()} <br /></> )}</td>
          <td>{props.chambres.map(c => <>{ c.type + " - " + c.prix + "€" } <br /> </>)}</td>      
    </tr>
  )
}

export default Hebergement
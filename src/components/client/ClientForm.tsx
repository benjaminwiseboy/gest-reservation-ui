import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
 import { useFormik } from 'formik';
import { ClientType, AdresseType } from '../../utils/applicationTypes';

function ClientForm() {
 const formik = useFormik({
     initialValues: {
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        pays: '',
        ville: '',
        quartier: ''
     },
     onSubmit: values => {
         let client: ClientType = {
             nom: values.nom,
             prenom: values.prenom,
             email: values.email,
             tel: values.tel,
             adresse: {
                 pays: values.pays,
                 ville: values.ville,
                 quartier: values.quartier
             }
         }
         
       alert(JSON.stringify(client, null, 2));
     },
   });
    
  return (
    <Form  onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 mx-2" >
        <Form.Label>Nom</Form.Label>
              <Form.Control
                  type="text"
                  name="nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  placeholder="Eg: Chaduck" />
    </Form.Group>
    <Form.Group className="mb-3 mx-2" >
        <Form.Label>Prénom</Form.Label>
              <Form.Control
                  type="text"
                  name="prenom"
                  value={formik.values.prenom}
                  onChange={formik.handleChange}
                  placeholder="Eg: Océane" />
    </Form.Group>
    <Form.Group className="mb-3 mx-2" >
        <Form.Label>Email</Form.Label>
              <Form.Control
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Eg: oceane@mail.com" />
    </Form.Group>
    <Form.Group className="mb-3 mx-2" >
        <Form.Label>Tel</Form.Label>
              <Form.Control
                  type="text"
                  name="tel"
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  placeholder="Eg: oceane@mail.com" />
    </Form.Group>
    <Form.Group className="mb-3 mx-2" >
        <Form.Label>Pays</Form.Label>
              <Form.Control
                  type="text"
                  name="pays"
                  value={formik.values.pays}
                  onChange={formik.handleChange}
                  placeholder="Eg: France" />
    </Form.Group>
    <Form.Group className="mb-3 mx-2" >
          <Form.Label>Ville</Form.Label>
              <Form.Control
                  type="text"
                  name="ville"
                  value={formik.values.ville}
                  onChange={formik.handleChange}
                  placeholder="Eg: Limoges" />
          </Form.Group>
          <Form.Group className="mb-3 mx-2" >
          <Form.Label>Quartier</Form.Label>
              <Form.Control
                  type="text"
                  name="quartier"
                  value={formik.values.quartier}
                  onChange={formik.handleChange}
                  placeholder="Eg: Rue Sainte Anne" />
          </Form.Group>
          
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ClientForm
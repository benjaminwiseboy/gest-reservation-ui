import { NumericLiteral } from "typescript"

// Client

export interface ClientType { 
    nom: string, 
    prenom: string,
    email: string,
    tel: string,
    adresse: AdresseType
   
} 

export interface AdresseType {
    pays: string,
    ville: string,
    quartier: string
}

// Hebergement

export interface HebergementType {
    name: string,
    type: string,
    prestations: Array<PrestationType>
    chambres : Array<ChambreType>
}

export interface ChambreType {
    type: string,
    prix: Number,
    hebergement: HebergementType
}

export interface PrestationType {
    intitule: string
}

// Reservation

export interface ReservationType {
    date_debut: Date,
    date_fin: Date,
    chambre: ChambreType,
    client: ClientType
}
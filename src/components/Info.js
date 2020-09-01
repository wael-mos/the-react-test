import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const Info = () =>
{
	const { formulaire } = useContext(FormContext);
	return formulaire.length ? (
		<div className="formulaire-list">
			<ul>
				{ formulaire.map(form =>
				{
					return ( <InfoDetails form={form} key={form.key} /> );
				}) }
			</ul>
		</div>
	) : (
		<div className="empty">Pas d'information pour l'instant</div>
	);
}

const InfoDetails = ({ form }) =>
{
	return (
		<li>
			<div>{form.nom}</div>
			<div>{form.prenom}</div>
			<div>{form.adresse}</div>
		</li>
	)
}

export default Info
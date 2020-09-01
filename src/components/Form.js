import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const Form = () =>
{

	const { dispatch } = useContext(FormContext);

	const [ nom, setNom ] = useState('');
	const [ prenom, setPrenom ] = useState('');
	const [ adresse, setAdresse ] = useState('');

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		dispatch({
			type: 'ADD_FORM',
			form: {
				nom, prenom, adresse
			}
		});
		setNom('');
		setPrenom('');
		setAdresse('');
		// setData(e.target.value);
	}

	return (
		<form onSubmit={ handleSubmit }>
			<label>Nom : </label>
			<input type="text" placeholder="form nom" value={ nom } onChange={ (e) => setNom(e.target.value) }/>

			<label>Prenom : </label>
			<input type="text" placeholder="form prenom" value={ prenom } onChange={ (e) => setPrenom(e.target.value) }/>

			<label>Adresse : </label>
			<input type="text" placeholder="form adresse" value={ adresse } onChange={ (e) => setAdresse(e.target.value) }/>

			<input type="submit" value="Valider"/>
		</form>
	);
}

export default Form
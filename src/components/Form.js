import React from 'react'
import { useState } from 'react'

const Form = () =>
{
	const [data, setData] = useState({
		nom: "",
		prenom: "",
		adresse: ""
	});

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		setData('');
	}

	return (
		<form onSubmit={ handleSubmit }>
			<label>Nom : </label>
			<input type="text" onChange={ (e) => setData(e.target.value) }/>
			<label>Prenom : </label>
			<input type="text" onChange={ (e) => setData(e.target.value) }/>
			<label>Adresse : </label>
			<input type="text" onChange={ (e) => setData(e.target.value) }/>
			<input type="submit"/>
		</form>
	);
}

export default Form
import React, { createContext, useReducer, useEffect } from 'react';
import { formReducer } from '../reducers/formReducer';
// import { useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) =>
{
	const [formulaire, dispatch] = useReducer(formReducer, [], () =>
	{
		const localData = localStorage.getItem('formulaire');
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() =>
	{
		localStorage.setItem('formulaire', JSON.stringify(formulaire))
	}, [formulaire]);

	return (
		<FormContext.Provider value={{ formulaire, dispatch }}>
			{ props.children }
		</FormContext.Provider>
	);
}

export default FormContextProvider;
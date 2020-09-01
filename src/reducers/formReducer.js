import uuid from 'uuid/v1'

export const formReducer = (state, action) =>
{
	switch(action.type)
	{
		case 'ADD_FORM':
			return [...state, {
				nom:		action.form.nom,
				prenom:		action.form.prenom,
				adresse:	action.form.adresse,
				id:			uuid()
			}]
		default:
			return state
	}
}
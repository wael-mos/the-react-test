import React from 'react';

const Insructions = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h3>Points à réaliser :</h3>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <li>Créer trois composants <span style={{ fontWeight: 'bold' }}>fonctions</span> nommés <span style={{ fontStyle: 'italic' }}>Accueil</span>, <span style={{ fontStyle: 'italic' }}>Infos</span> et <span style={{ fontStyle: 'italic' }}>Formulaire.</span></li>
                <li>Le composant <span style={{ fontStyle: 'italic' }}>Infos</span> doit être enfant de <span style={{ fontStyle: 'italic' }}>Accueil</span>.</li>
                <li>Créer un <span style={{ fontWeight: 'bold' }}>routing</span> pour passer de l'un à l'autre (avec des urls différentes) <a href="https://reacttraining.com/react-router/web/guides/quick-start" >(doc si nécessaire)</a></li>
                <li>Dans <span style={{ fontStyle: 'italic' }}>Formulaire</span>, il faut un formulaire avec les champs <span style={{ fontWeight: 'bold' }}>nom</span>, <span style={{ fontWeight: 'bold' }}>prénom</span> et <span style={{ fontWeight: 'bold' }}>adresse</span>, puis un <span style={{ fontWeight: 'bold' }}>bouton</span> pour valider.</li>
                <li>Afficher les informations validées par le formulaire dans le composant <span style={{ fontStyle: 'italic' }}>Infos</span>.</li>
            </ul>

        </div>
    );
};

export default Insructions;

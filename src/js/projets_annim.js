// import React, { useEffect } from 'react';

// export default function Projets() {
  // useEffect(() => {
    // Nombre de gouttes d'eau que tu veux générer
    // const nombreDeGouttes = 10;

    // Conteneur pour les gouttes d'eau
    // const conteneur = document.querySelector('.container');

    // Fonction pour générer une goutte d'eau
    // const genererGoutte = () => {
    //   const goutte = document.createElement('div');
    //   goutte.classList.add('drop');

      // Position aléatoire
      // const positionX = Math.random() * conteneur.clientWidth;
      // const positionY = Math.random() * conteneur.clientHeight;

      // goutte.style.left = `${positionX}px`;
      // goutte.style.top = `${positionY}px`;

      // Ajouter la goutte au conteneur
    //   conteneur.appendChild(goutte);
    // };

    // Générer plusieurs gouttes d'eau
    // for (let i = 0; i < nombreDeGouttes; i++) {
    //   genererGoutte();
    // }
  // }, []); 
  // verifier que cette fonction useEffect ne s'exécute qu'une fois

// }

import React, { useState, useEffect } from 'react';

const RainDrops = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    // Ajouter une nouvelle goutte à intervalles réguliers
    const interval = setInterval(() => {
      const newDrops = [...drops];
      newDrops.push({ id: Date.now(), top: 0 }); // Choisir une position de départ

      setDrops(newDrops);
    }, 1000); // Intervalle en millisecondes

    return () => clearInterval(interval);
  }, [drops]);

  return (
    <div className="rain-container">
      {drops.map((drop) => (
        <div key={drop.id} className="rain-drop" style={{ top: `${drop.top}px` }} />
      ))}
    </div>
  );
};

export default RainDrops;


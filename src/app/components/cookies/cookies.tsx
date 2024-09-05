"use client";

import { useState } from "react";

export default function Cookies() {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
  };

  const handleCustomize = () => {
    setShowPopup(false);
  };
  return (
    <section>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>
              En cliquant sur « Tout accepter », vous acceptez l'utilisation de
              cookies techniques nécessaires au bon fonctionnement du site,
              ainsi que des cookies à des fins statistiques.
              <a href="/en-savoir-plus">En savoir plus</a> ou{" "}
              <a href="/personnaliser-mes-choix">Personnaliser mes choix</a>.
            </p>
            <button onClick={handleAccept}>Tout accepter</button>
            <button onClick={handleCustomize}>Personnaliser mes choix</button>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState, useEffect } from 'react';

const Heading = ({ content }) => {
  const [text, setText] = useState({ title: "", paragraph: "" });

  useEffect(() => {
    const repairText = {
      title: "Oferta naprawy",
      paragraph: "Na wszystkie naprawy udzielamy 6 miesięcy gwarancji. W ramach naprawy wymieniamy pasty termoprzewodzące. Koszt diagnozy wynosi 30zł, jest pomijany w przypadku decyzji naprawy."
    };
  
    const offertText = {
      title: "Nasze oferty sprzedaży",
      paragraph: "Swoją sprzedaż prowadzimy na portalu olx oraz allegro. Wszytskie oferowane przez nas urządzenie zostają sprawdzone przed wysyłką. Przechodzą pełną konserwację. (czyszczenie ze śladów kosmetyków, oraz wymiana past termoprzewodzących). W cenie zakupu oferujemy rok gwarancji, z automatycznym przedłużeniem w w przypadku awarii."
    };

    setText(content === "repair" ? repairText : offertText);
  }, [content]);

  return (
    <div>
      <h1>{text.title}</h1>
      <p>{text.paragraph}</p>
    </div>
  );
}

export default Heading;

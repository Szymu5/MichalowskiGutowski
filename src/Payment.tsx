import { useLocation } from "react-router-dom";
import './App.css';
import './Payment.css';

function Payment() {
    const { state } = useLocation();

    if (!state) {
        return (
            <div className="Div">
                <h1>Brak danych rezerwacji</h1>
                <p>Wróć do strony głównej i wypełnij formularz.</p>
            </div>
        );
    }

    return (
        <div className="Div">
            <header className="Header">
                <h1>💳 Strona płatności</h1>
                <p>Ta strona jest w budowie...</p>
            </header>

            <h2>Podsumowanie rezerwacji:</h2>

            <p>Imię: {state.imie}</p>
            <p>Sprzęt: {state.sprzet}</p>
            <p>Godziny: {state.godziny}</p>
            <p>Kapok: {state.czyKapok ? "Tak" : "Nie"}</p>
            <p>Instruktor: {state.czyInstruktor ? "Tak" : "Nie"}</p>

            <h2>Do zapłaty: {state.suma} zł</h2>
        </div>
    );
}

export default Payment;

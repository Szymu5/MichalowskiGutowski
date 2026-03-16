import { useLocation, useNavigate } from "react-router-dom";
import './App.css';
import './Payment.css';

function Payment() {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Jeśli ktoś wejdzie bezpośrednio na /payment bez danych, wróć go do startu
    if (!state) {
        return (
            <div className="Div">
                <h1>Brak danych rezerwacji</h1>
                <button onClick={() => navigate("/")}>Wróć do formularza</button>
            </div>
        );
    }

    return (
        <div className="Div">
            <header className="Header">
                <h1>💳 Strona płatności</h1>
                <p>Ta strona jest w budowie...</p>
            </header>

            <div style={{ textAlign: 'left', margin: '20px 0', padding: '15px', border: '1px solid #ccc' }}>
                <h2>Podsumowanie rezerwacji:</h2>
                <p><strong>Imię:</strong> {state.imie}</p>
                <p><strong>Sprzęt:</strong> {state.sprzet}</p>
                <p><strong>Godziny:</strong> {state.godziny}</p>
                <p><strong>Kapok:</strong> {state.czyKapok ? "Tak" : "Nie"}</p>
                <p><strong>Instruktor:</strong> {state.czyInstruktor ? "Tak" : "Nie"}</p>
                <hr />
                <h2 style={{ color: 'green' }}>Do zapłaty: {state.suma} zł</h2>
            </div>

            <button onClick={() => navigate("/")}>⬅ Anuluj i wróć</button>
        </div>
    );
}

export default Payment;

import './App.css'
import './Payment.css'

function Payment() {
    return (
        <div className="Div">
            <header className="Header">
                <h1>💳 Strona płatności</h1>
                <p>Ta strona jest w budowie...</p>
            </header>

            <h2>Podsumowanie rezerwacji:</h2>

            <p>Imię: ....................</p>
            <p>Sprzęt: ....................</p>
            <p>Godziny: ....................</p>
            <p>Kapok: Tak / Nie</p>
            <p>Instruktor: Tak / Nie</p>

            <h2>Do zapłaty: .......... zł</h2>
        </div>
    );
}

export default Payment;

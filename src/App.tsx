import './App.css'

function App() {
    return (
        <div className="Div">
            <h1>⚓Mazurska Przystań - Rezerwacja⛵</h1>

            <form className="formularz">
                <p>Imię klienta:</p>
                <input
                    name="imie"
                    type="text"
                    value=""
                    onChange={() => {}}
                    required
                />

                <p>Wybierz sprzęt:</p>

                <select
                    name="sprzet"
                    value="kajak"
                    onChange={() => {}}
                >
                    <option value="kajak">Kajak (20 zł/h)</option>
                    <option value="rower">Rower wodny (35 zł/h)</option>
                    <option value="omega">Omega (150 zł/h)</option>
                </select>
                <p>Ile godzin (1-8):</p>
                <input
                    name="godziny"
                    type="range"
                    min="1"
                    max="8"
                    value="1"
                    onChange={() => {}}
                />
                <p>Wybrano: 1 h</p>
                <div className="dodatki">
                    <label>
                        <input
                            name="kapok"
                            type="checkbox"
                            checked={false}
                            onChange={() => {}}
                        />
                        Kapok (+5 zł)
                    </label>
                    <label>
                        <input
                            name="instruktor"
                            type="checkbox"
                            checked={false}
                            onChange={() => {}}
                        />
                        Instruktor (+50 zł/h)
                    </label>
                </div>
                <label className="regulamin">
                    <input name="regulamin" type="checkbox" required />
                    Akceptuję regulamin
                </label>

                <button type="submit">Przejdź do płatności</button>
            </form>
        </div>
    );
}

export default App;

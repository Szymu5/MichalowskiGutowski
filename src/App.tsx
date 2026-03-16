import './App.css'
import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    const [imie, setImie] = useState("");
    const [sprzet, setSprzet] = useState("kajak");
    const [godziny, setGodziny] = useState(1);
    const [czyKapok, setCzyKapok] = useState(false);
    const [czyInstruktor, setCzyInstruktor] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let stawka = 0;
        switch (sprzet) {
            case "kajak": stawka = 20; break;
            case "rower": stawka = 35; break;
            case "omega": stawka = 150; break;
        }

        let suma = stawka * godziny;
        if (czyKapok) suma += 5;
        if (czyInstruktor) suma += 50 * godziny;

        // Przechodzimy do płatności i przekazujemy obiekt z danymi
        navigate("/payment", {
            state: { imie, sprzet, godziny, czyKapok, czyInstruktor, suma }
        });
    }

    return (
        <div className="Div">
            <h1>⚓ Mazurska Przystań - Rezerwacja ⛵</h1>

            <form className="formularz" onSubmit={handleSubmit}>
                <p>Imię klienta:</p>
                <input
                    name="imie"
                    type="text"
                    value={imie}
                    onChange={(e) => setImie(e.target.value)}
                    placeholder="Wpisz imię..."
                    required
                />

                <p>Wybierz sprzęt:</p>
                <select
                    name="sprzet"
                    value={sprzet}
                    onChange={(e) => setSprzet(e.target.value)}
                >
                    <option value="kajak">Kajak (20 zł/h)</option>
                    <option value="rower">Rower wodny (35 zł/h)</option>
                    <option value="omega">Omega (150 zł/h) Wymagany Patent!!!</option>
                </select>

                <p>Ile godzin (1–8): {godziny} h</p>
                <input
                    type="range"
                    min="1"
                    max="8"
                    value={godziny}
                    onChange={(e) => setGodziny(Number(e.target.value))}
                />

                <div className="dodatki">
                    <label>
                        <input type="checkbox" checked={czyKapok} onChange={(e) => setCzyKapok(e.target.checked)} />
                        Kapok (+5 zł)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" checked={czyInstruktor} onChange={(e) => setCzyInstruktor(e.target.checked)} />
                        Instruktor (+50 zł/h)
                    </label>
                </div>

                <label className="regulamin">
                    <input type="checkbox" required /> Akceptuję regulamin
                </label>

                <button type="submit">Przejdź do płatności</button>
            </form>
        </div>
    );
}

export default App;
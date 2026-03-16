import './App.css'
import {type ChangeEvent, type FormEvent, useState } from "react";

function App() {

    const [imie, setImie] = useState("");
    const [sprzet, setSprzet] = useState("kajak");
    const [godziny, setGodziny] = useState(1);
    const [czyKapok, setCzyKapok] = useState(false);
    const [czyInstruktor, setCzyInstruktor] = useState(false);

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        console.log("Zmiana w polu:", e.target.name);
        console.log("Wartość:", e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let stawka = 0;
        switch (sprzet) {
            case "kajak":
                stawka = 20;
                break;
            case "rower":
                stawka = 35;
                break;
            case "omega":
                stawka = 150;
                break;
        }

        let suma = stawka * godziny;

        if (czyKapok) suma += 5;
        if (czyInstruktor) suma += 50 * godziny;

        alert(`Cześć ${imie}! Koszt Twojej rezerwacji to: ${suma} zł.`);
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
                    onChange={(e) => {
                        handleInputChange(e);
                        setImie(e.target.value);
                    }}
                    placeholder="Wpisz imię..."
                    required
                />

                <p>Wybierz sprzęt:</p>
                <select
                    name="sprzet"
                    value={sprzet}
                    onChange={(e) => {
                        handleInputChange(e);
                        setSprzet(e.target.value);
                    }}
                >
                    <option value="kajak">Kajak (20 zł/h)</option>
                    <option value="rower">Rower wodny (35 zł/h)</option>
                    <option value="omega">Omega (150 zł/h) Uwaga Wymagany paten!!</option>
                </select>

                <p>Ile godzin (1–8):</p>
                <input
                    name="godziny"
                    type="range"
                    min="1"
                    max="8"
                    value={godziny}
                    onChange={(e) => {
                        handleInputChange(e);
                        setGodziny(Number(e.target.value));
                    }}
                />
                <p>Wybrano: {godziny} h</p>

                <div className="dodatki">
                    <label>
                        <input
                            name="kapok"
                            type="checkbox"
                            checked={czyKapok}
                            onChange={(e) => {
                                handleInputChange(e);
                                setCzyKapok(e.target.checked);
                            }}
                        />
                        Kapok (+5 zł)
                    </label>

                    <label>
                        <input
                            name="instruktor"
                            type="checkbox"
                            checked={czyInstruktor}
                            onChange={(e) => {
                                handleInputChange(e);
                                setCzyInstruktor(e.target.checked);
                            }}
                        />
                        Instruktor (+50 zł/h)
                    </label>
                </div>

                <label className="regulamin">
                    <input
                        name="regulamin"
                        type="checkbox"
                        required
                    />
                    Akceptuję regulamin
                </label>

                <button type="submit">Przejdź do płatności</button>
            </form>
        </div>
    );
}

export default App;

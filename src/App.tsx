import './App.css'
import {type ChangeEvent, type FormEvent, useState} from "react";

function App() {

    // Gutku drogi Tutaj nie rozumiem w 100% ale tak jest na stronie Pana Sazeda
    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        console.log("Zmiana w polu:", e.target.name);
        console.log("Wartość:", e.target.value);
    }

    // --- STANY ---
    const [imie, setImie] = useState("");
    const [sprzet, setSprzet] = useState("kajak");
    const [godziny, setGodziny] = useState(1);
    const [czyKapok, setCzyKapok] = useState(false);
    const [czyInstruktor, setCzyInstruktor] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //Chyba coś zespułemXDDD
        //Jednak Działa

        let stawka = 0;
        if (sprzet === 'kajak') stawka = 20;
        if (sprzet === 'rower') stawka = 35;
        if (sprzet === 'omega') stawka = 150;

        let suma = stawka * godziny;
        if (czyKapok) suma += 5;
        if (czyInstruktor) suma += (50 * godziny);

        alert("Cześć " + imie + "! Koszt Twojej rezerwacji to: " + suma + " zł.");
    }

    return (
        <div className="Div">
            <h1>⚓Mazurska Przystań - Rezerwacja⛵ </h1>

            <form onSubmit={handleSubmit} className="formularz">
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
                    <option value="omega">Omega (150 zł/h)</option>
                </select>

                <p>Ile godzin (1-8):</p>
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
                    <br />
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

                <br />

                <label className="regulamin">
                    <input name="regulamin" type="checkbox" required id={"regulamin"} />
                    Akceptuję regulamin
                </label>

                <br /><br />
                <button type="submit">Przejdź dalej</button>
            </form>
        </div>
    )
}

//Chyba coś zespułemXDDD
//Jednak Działa
export default App
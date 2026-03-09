import './App.css'
import type { ChangeEvent, FormEvent } from "react";

function App() {

    // Gutku drogi Tutaj nie rozumiem w 100% ale tak jest na stronie Pana Sazeda
    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        console.log("Zmiana w polu:", e.target.name);
        console.log("Wartość:", e.target.value);
    }


    function handleSubmit(e: FormEvent<HTMLFormElement>) {



        const form = e.currentTarget;
        const imie = (form.elements.namedItem('imie') as HTMLInputElement).value;
        const sprzet = (form.elements.namedItem('sprzet') as HTMLSelectElement).value;
        const godziny = Number((form.elements.namedItem('godziny') as HTMLInputElement).value);
        const czyKapok = (form.elements.namedItem('kapok') as HTMLInputElement).checked;
        const czyInstruktor = (form.elements.namedItem('instruktor') as HTMLInputElement).checked;


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
                    onChange={handleInputChange}
                    placeholder="Wpisz imię..."
                    required
                />

                <p>Wybierz sprzęt:</p>
                <select name="sprzet" onChange={handleInputChange}>
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
                    defaultValue="1"
                    onChange={handleInputChange}
                />

                <div className="dodatki">
                    <label>
                        <input name="kapok" type="checkbox" onChange={handleInputChange} />
                        Kapok (+5 zł)
                    </label>
                    <br />
                    <label>
                        <input name="instruktor" type="checkbox" onChange={handleInputChange} />
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
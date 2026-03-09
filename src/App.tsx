import './App.css'
import type { ChangeEvent, FormEvent } from "react";

function App() {
//Tutaj trochę nie rozumiem
    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
        console.log(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const form: HTMLFormElement = e.currentTarget;

        let imie: string = (form.elements.namedItem('imie') as HTMLInputElement).value;
        let sprzet: string = (form.elements.namedItem('sprzet') as HTMLSelectElement).value;
        let godziny: number = Number((form.elements.namedItem('godziny') as HTMLInputElement).value);
        let czyKapok: boolean = (form.elements.namedItem('kapok') as HTMLInputElement).checked;
        let czyInstruktor: boolean = (form.elements.namedItem('instruktor') as HTMLInputElement).checked;

        let stawka: number = 0;

        if (sprzet === 'kajak') stawka = 20;
        if (sprzet === 'rower') stawka = 35;
        if (sprzet === 'omega') stawka = 150;

        let suma: number = stawka * godziny;

        if (czyKapok === true) suma = suma + 5;
        if (czyInstruktor === true) suma = suma + (50 * godziny);

        alert("Ahoj " + imie + "! Koszt rezerwacji: " + suma + " zł.");
    }

    return (
        <div className="apka-kontener">
            <h1>Mazurska Przystań </h1>

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
                <select name="sprzet" onChange={handleInputChange as any}>
                    <option value="kajak">Kajak (20 zł/h)</option>
                    <option value="rower">Rower wodny (35 zł/h)</option>
                    <option value="omega">Omega (150 zł/h)</option>
                </select>

                <p>Czas wynajmu (1-8h):</p>
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
                <label>
                    <input name="regulamin" type="checkbox" required />
                    Akceptuję regulamin
                </label>

                <br /><br />
                <button type="submit">Zarezerwuj i licz cenę</button>
            </form>
        </div>
    )
}

export default App
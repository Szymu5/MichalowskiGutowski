import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [imie, setImie] = useState('')
  const [sprzet, setSprzet] = useState('kajak')
  const [godziny, setGodziny] = useState(1)
  const [kapok, setKapok] = useState(false)
  const [instruktor, setInstruktor] = useState(false)
  const [regulamin, setRegulamin] = useState(false)

  const cena = useMemo(() => {
    let stawka = sprzet === 'kajak' ? 20 : sprzet === 'rower' ? 35 : 150
    let suma = stawka * godziny
    if (kapok) suma += 5
    if (instruktor) suma += (50 * godziny)
    return suma
  }, [sprzet, godziny, kapok, instruktor])

  return (
    <div className="apka-kontener">
      <h1>Kalkulator Mazurska Przystań ⛵</h1>
      <div className="formularz">
        <input type="text" placeholder="Twoje imię" onChange={(e) => setImie(e.target.value)} />
        
        <select onChange={(e) => setSprzet(e.target.value)}>
          <option value="kajak">Kajak (20zł/h)</option>
          <option value="rower">Rower wodny (35zł/h)</option>
          <option value="omega">Omega (150zł/h)</option>
        </select>

        {sprzet === 'omega' && <p style={{color: 'red'}}>❗ Wymagany patent!</p>}

        <label>Czas: {godziny}h</label>
        <input type="range" min="1" max="8" value={godziny} onChange={(e) => setGodziny(Number(e.target.value))} />

        <label><input type="checkbox" onChange={(e) => setKapok(e.target.checked)} /> Kapok (+5zł)</label>
        <label><input type="checkbox" onChange={(e) => setInstruktor(e.target.checked)} /> Instruktor (+50zł/h)</label>
        
        <label><input type="checkbox" onChange={(e) => setRegulamin(e.target.checked)} /> Akceptuję regulamin</label>

        <h2 className="wynik">Suma: {cena} zł</h2>
        
        <button disabled={!regulamin} onClick={() => alert('Zarezerwowano!')}>Rezerwuję</button>
      </div>
    </div>
  )
}
export default App

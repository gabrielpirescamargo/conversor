import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  const conversaoTaxa = number + (number * 0.02)
  const impostoAplicado = number + (number * 0.13)
  const brlPraCad = (number - (number * 0.02)) / 4
  const cadPraBRL = (number) * 4
  const brlPraUsd = (number - (number * 0.02)) / 5.4
  const usdPraBRL = (number) * 5.4
  const cadPraUsd = (number) / 0.7

  const usdPraCad = (number) * 0.7
  return (
    <>
    
    
      <h1>Calculadora</h1>
      <div className="card">

        <label htmlFor="number">Numero</label>
        <input id='number' value={number} onChange={(e) => setNumber(Number(e.target.value))}/>

        <p>
         
        <label htmlFor="number">Numero + 2%</label>
        <input id='number' value={conversaoTaxa.toFixed(2)} disabled/>

        </p>

        <p>

         
        <label htmlFor="number">Numero + 13%</label>
        <input id='number' value={impostoAplicado.toFixed(2)} disabled/>
        </p>
        <p>

         
        <label htmlFor="number">BRL - CAD</label>
        <input id='number' value={brlPraCad.toFixed(2)} disabled/>
        </p>
        <p>

         
        <label htmlFor="number">CAD - BRL</label>
        <input id='number' value={cadPraBRL.toFixed(2)} disabled/>
        </p>

        <p>

         
<label htmlFor="number">USD - CAD</label>
<input id='number' value={usdPraCad.toFixed(2)} disabled/>
</p>

<p>

         
<label htmlFor="number">CAD - USD</label>
<input id='number' value={cadPraUsd.toFixed(2)} disabled/>
</p>

<p>

         
<label htmlFor="number">BRL - USD</label>
<input id='number' value={brlPraCad.toFixed(2)} disabled/>
</p>

<p>

         
<label htmlFor="number">USD - BRL</label>
<input id='number' value={usdPraBRL.toFixed(2)} disabled/>
</p>
      </div>
    
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
    <div>
    <h1>{props.kurssi}</h1>
    </div>
    )
}

const Osa = (props) => {
    return (
    <div>
    <p>{props.osa} {props.tehtavia}</p>
    </div>
    )
}

const Sisalto = (props) => {
    return (
    <div>
    <Osa osa='Reactin perusteet' tehtavia={10}/>
    <Osa osa='Tiedonvälitys propseilla' tehtavia={7}/>
    <Osa osa='Komponenttien tila' tehtavia={14}/>
    </div>
    )
}

const Yhteensa = (props) => {
    return (
    <div>
    <p>Yhteensä {props.yhteensa} tehtävää.</p>
    </div>
    )
}

const App = () => {
  const halfstack = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={halfstack}/>
      <Sisalto />
      <Yhteensa yhteensa={tehtavia1+tehtavia2+tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
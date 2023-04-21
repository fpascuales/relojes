import './App.css'
import Chronometer from './components/Chronometer/Chronometer'
import Countdown from './components/Countdown/Countdown'
import Clock from './components/clock/clock'

function App() {

    return(
        <div className='clocks-main'>
        <Clock/>
        <Countdown/>
        <Chronometer/>
        </div>
    )
}

export default App

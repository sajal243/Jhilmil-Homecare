import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { SIDEBAR_ITEMS } from './constant/constants';
import PatientSummary from './components/PatientSummary/PatientSummary';
import ServicesSummary from './components/ServiceSummary/ServicesSummary';

function App() {
  const [activeSummary, setActiveSummary] = useState("patients");
  return (
    <>
      <div className="header">
        <div className='title'><b>Jhilmil Homecare</b></div>
        <div><i>Empowering Better Homecare</i></div>
      </div>
      <div className='body'>
        <Sidebar setActiveSummary={setActiveSummary} />
        {activeSummary === SIDEBAR_ITEMS.PATIENTS && <PatientSummary />}
        {activeSummary === SIDEBAR_ITEMS.SERVICES && <ServicesSummary />}
      </div>
    </>
  )
}

export default App;

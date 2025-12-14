import './Sidebar.css'

const Sidebar = ({setActiveSummary}) => {
  return (
    <div className='sidebar'>
        <div className='row' onClick={() => setActiveSummary("patients")}>Patients Summary</div>
        <div className='row' onClick={() => setActiveSummary("services")}>Services Summary</div>
    </div>
  )
}

export default Sidebar
import { useState } from 'react'
import { PATIENTS_LIST } from '../../constant/constants';
import PatientCard from '../PatientCard/PatientCard';
import './PatientSummary.css';
import { useDebounce } from '../../hooks/useDebounce';

const PatientSummary = () => {
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [careFilter, setCareFilter] = useState('All');

    const debouncedSearch = useDebounce(searchText, 400);

    const careTypes = [
        ...new Set(PATIENTS_LIST.map((p) => p.typeOfCare)),
    ];
    
    const filteredPatients = PATIENTS_LIST.filter((p) => {
        const searchMatch = debouncedSearch.trim() === '' || p.fullName.toLowerCase().includes(debouncedSearch.toLowerCase());

        const statusMatch = statusFilter === 'All' || p.status === statusFilter;
        const careMatch = careFilter === 'All' || p.typeOfCare === careFilter;

        return searchMatch && statusMatch && careMatch;
    });


  return (
    <div className='summary'>
        <h2>Patient Summary</h2>
        <div className='searchFilter'>
            <div className='searchDiv'>
                <label>Search: </label>
                <input name='search' placeholder='Search Name' type='text' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
            </div>

            <div className='filters'>
            <div>
              <label>Status: </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label>Type of Care: </label>
              <select
                value={careFilter}
                onChange={(e) => setCareFilter(e.target.value)}
              >
                <option value="All">All</option>
                {careTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='patients'>
            {filteredPatients.length > 0 && filteredPatients?.map((patient) => (
                <PatientCard key={patient.id} data={patient} />
            ))}
        </div>
    </div>
  )
}

export default PatientSummary
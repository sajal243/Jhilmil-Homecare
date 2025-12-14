import { useEffect, useState } from 'react'
import { SERVICES_LIST, STORAGE_KEY } from '../../constant/constants'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesSummary.css';
import ViewDetailsPopup from '../../modals/ViewDetailsPopup';

const ServicesSummary = () => {
    const [filteredServices, setFilteredServices] = useState("All");
    const [filteredList, setFilteredList] = useState(SERVICES_LIST);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        patientName:"",
        serviceRequired:"",
        preferredDate:"",
        contactNo:"",
        address:""
    });

    const [errors, setErrors] = useState({});

    const getBookingsFromStorage = () => {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    };

    const saveBookingToStorage = (booking) => {
        const existing = getBookingsFromStorage();
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify([...existing, booking])
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;
        setIsFormOpen(false);
        saveBookingToStorage(formData);
        setFormData({
            patientName:"",
            serviceRequired:"",
            preferredDate:"",
            contactNo:"",
            address:""
        });
        setErrors({});
        alert("Service booked successfully!");
    }

    const validateForm = () => {
        const newErrors = {};
        if (!formData.patientName.trim()) newErrors.patientName = "Patient name is required";
        if (!formData.serviceRequired) newErrors.serviceRequired = "Service required is required";
        if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required";
        if (!formData.contactNo && (!/^\d{10}$/).test(formData.contactNo)) newErrors.contactNo = "Contact number is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    useEffect(() => {
        const filteredValues = SERVICES_LIST.filter((service) => {
            if (filteredServices === "All") return true;
            if (filteredServices === "Popular") return service.isPopular;
            if (filteredServices === "Recommended") return service.isRecommended;
            return true;
        });
        setFilteredList(filteredValues);
    }, [filteredServices]);

  return (
    <div className='servicesContainer'>
        <h2>Services Summary</h2>

        <div className='filters'>
            <div>Filters: </div>
            <select onChange={(e) => setFilteredServices(e.target.value)}>
                <option value="All">All</option>
                <option value="Popular">Popular</option>
                <option value={"Recommended"}>Recommended</option>
            </select>
        </div>

        <div className='services'>
            {filteredList?.map((service) => (
                <ServiceCard key={service.id} service={service} setIsFormOpen={setIsFormOpen} />
            ))}
        </div>

        {isFormOpen && <ViewDetailsPopup onClose={() => setIsFormOpen(false)} title={"Book Service"}>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='formRow'>
                        <label>Name of Patient:</label>
                        <input type="text" name="patientName" value={formData.patientName} min={3} onChange={handleChange} />
                        {errors.patientName && <span className='error'>{errors.patientName}</span>}
                    </div>
                    <div className='formRow'>
                        <label>Service Required:</label>
                        <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange}>
                            <option value="">Select a service</option>
                            {SERVICES_LIST.map((service) => (
                                <option key={service.id} value={service.serviceName}>
                                    {service.serviceName}
                                </option>
                            ))}
                        </select>
                        {errors.serviceRequired && <span className='error'>{errors.serviceRequired}</span>}
                    </div>
                    <div className='formRow'>
                        <label>Preferred Date:</label>
                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                        {errors.preferredDate && <span className='error'>{errors.preferredDate}</span>}
                    </div>
                    <div className='formRow'>
                        <label>Contact No.: </label>
                        <input type="tel" name="contactNo" value={formData.contactNo} minLength={10} maxLength={10} onChange={handleChange} />
                        {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
                    </div>
                    <div className='formRow'>
                        <label>Address:</label>
                        <textarea name="address" rows="3" value={formData.address} onChange={handleChange}></textarea>
                        {errors.address && <span className='error'>{errors.address}</span>}
                    </div>

                    <div className='formRow'>
                        <button type="submit" className='primaryBtn fullWidth'>Submit</button>
                    </div>
                </form>

            </div>
            </ViewDetailsPopup>
        }

        </div>
  )
}

export default ServicesSummary
import { useState } from "react";
import "./PatientCard.css";
import ViewDetailsPopup from "../../modals/ViewDetailsPopup";

const PatientCard = ({ data }) => {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <>
    <div className="card">
      <h3>{data.fullName}</h3>

      <div className="badges">
        <span className={`status ${data.status.toLowerCase()}`}>
          {data.status}
        </span>
        <span className="care-type">{data.typeOfCare}</span>
      </div>

      <div className="divider"></div>

      <p>
        <span>Age</span>
        <span>{data.age}</span>
      </p>

      <button onClick={() => setViewDetails(true)}>
        {"View Details ▼"}
      </button>

    </div>
    {viewDetails && (
        <ViewDetailsPopup onClose={() => setViewDetails(false)} title="Patient Details">
          <h3>{data.fullName}</h3>

          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Care Type:</strong> {data.typeOfCare}</p>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Caregiver:</strong> {data.assignedCaregiverName}</p>
          <p><strong>Assignment Round:</strong> {data.assignmentRound}</p>
          <p><strong>Next Visit:</strong> {data.nextVisitDate || "N/A"}</p>

          <div className="remarks">
            {data.remarks}
          </div>
        </ViewDetailsPopup>
      )}

    </>
  );
};

export default PatientCard;

import "./ViewDetailsPopup.css";
import { createPortal } from "react-dom";

const ViewDetailsPopup = ({ onClose, children, title }) => {
  return createPortal(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="modalHeader">
          <h3>{title}</h3>
          <button className="closeBtn" onClick={onClose}>✕</button>
        </div>

        <div className="modalBody">
          {children}
        </div>

      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ViewDetailsPopup;

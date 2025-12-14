import "./ServiceCard.css";

const ServiceCard = ({ service, setIsFormOpen }) => {
  return (
    <div className="serviceCard">
      <div className="serviceHeader">
        <span className="serviceId">{service.serviceId}</span>
        <h3 className="serviceName">{service.serviceName}</h3>
      </div>

      <div className="badges">
        {service.isPopular && (
          <span className="badge popular">Popular</span>
        )}
        {service.isRecommended && (
          <span className="badge recommended">Recommended</span>
        )}
      </div>

      <p className="serviceDescription">
        {service.description}
      </p>

      <div className="serviceMeta">
        <div className="metaItem">
          <span className="metaLabel">Duration</span>
          <span className="metaValue">{service.durationOrFrequency}</span>
        </div>

        <div className="metaItem">
          <span className="metaLabel">Cost</span>
          <span className="metaValue">{service.costRange}</span>
        </div>
      </div>

      <div className="serviceFooter">
        <button className="primaryBtn" onClick={() => setIsFormOpen(true)}>Book now</button>
      </div>
    </div>
  );
};

export default ServiceCard;

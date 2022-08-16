import React from "react";

export default function Card(props) {
  return (
    <section className="card">
      <img className="card--img" src={props.imageUrl} alt="Mount Fuji photo" />
      <div className="card--description">
        <span>
          <i className="fa fa-gittip"></i>
        </span>
        <span className="card--city">{props.location}</span>
        <a className="card--map" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h1 className="card--header">{props.title}</h1>
        <p className="card--date">
          <strong>
            {props.startDate} - {props.endDate}
          </strong>
        </p>
        <p className="card--info">{props.description}</p>
      </div>
    </section>
  );
}

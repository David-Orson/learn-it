import React from "react";

const CardDetails = (props: any) => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container-spaced">
        <div className="card">
          <div className="card-content">
            <h4>Card Title - {id}</h4>
            <p>
              Content will go here to describe the subject the user is trying to
              learn/revise at a later date.
            </p>
          </div>
          <div className="card-actions caption">
            <div>By David Orson</div>
            <div>22nd April, 2pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

import React from "react";
import {Link} from "gatsby";

const PriceCard = ({
  count,
  amount,
  name,
  extraClassName,
  options,
  button
}) => {
  return (
    <div className="pricing-one__single">
      <div className={`circle circle-${extraClassName}`}>
        <div className={`count count-${extraClassName}`}>
          <h4>{count}</h4>
        </div>
      </div>
      <div className="price">
        <h2>{amount}</h2>
        <p>{name}</p>
      </div>
      <ul className="list-unstyled pricing-one__list">
        {options.map(({ label }, index) => (
          <li key={`options-key-${index}`}>
            <i className="fa fa-check icon-color-2"></i> {label}
          </li>
        ))}
      </ul>
      <Link to={button.link} className="thm-btn pricing-one__btn">
          <span>{button.label}</span>
      </Link>
    </div>
  );
};

export default PriceCard;

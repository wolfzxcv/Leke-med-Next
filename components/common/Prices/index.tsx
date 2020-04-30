import React from 'react';

interface ICurrency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

type props = {
  __proto__?: any;
  info: ICurrency;
};

const Prices = ({ info }: props) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item">
        Bitcoin rate for {info.description} :
        <span className="badge badge-primary">
          {info.code} <strong> {info.rate} </strong>
        </span>
      </li>
    </ul>
  </div>
);

export default Prices;

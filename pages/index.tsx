import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Prices from '../components/common/Prices';
import Options from '../components/common/Options';
import axios from 'axios';

interface IRes {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: IBpi;
}

interface IBpi {
  USD: ICurrency;
  GBP: ICurrency;
  EUR: ICurrency;
}
interface ICurrency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

const Index = () => {
  const initState: IRes = {
    time: {
      updated: '',
      updatedISO: '',
      updateduk: ''
    },
    disclaimer: '',
    chartName: '',
    bpi: {
      USD: {
        code: '',
        symbol: '',
        rate: '',
        description: '',
        rate_float: 0
      },
      GBP: {
        code: '',
        symbol: '',
        rate: '',
        description: '',
        rate_float: 0
      },
      EUR: {
        code: '',
        symbol: '',
        rate: '',
        description: '',
        rate_float: 0
      }
    }
  };

  const [data, setData] = useState(initState);
  const [currency, setCurrency] = useState('USD');
  const api = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const getPrice = async () => {
    const res = await axios.get(api);
    setData(res.data);
  };

  useEffect(() => {
    getPrice();
  }, []);

  const displayInfo = data.bpi[currency as 'USD' | 'GBP' | 'EUR'];

  return (
    <Layout>
      <Title>Welcome to Bitz Price Teller</Title>
      <Flex>
        <div> {data.time.updated} </div>
        <div>
          <select
            className="form-control"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Please select a currency" disabled>
              Please select a currency
            </option>
            {Object.keys(data.bpi).map((option: string, idx: number) => (
              <Options key={idx} option={option} />
            ))}
          </select>
        </div>
      </Flex>
      <Prices info={displayInfo} />
    </Layout>
  );
};

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Index;

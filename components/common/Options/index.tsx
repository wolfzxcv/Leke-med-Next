import React from 'react';

type props = {
  idx?: number;
  option: string;
};

const Options = ({ option }: props) => <option value={option}>{option}</option>;

export default Options;

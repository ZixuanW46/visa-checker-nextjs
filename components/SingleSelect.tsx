"use client";

import React from "react";
import { Select } from "antd";

interface SingleSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const SingleSelect: React.FC<SingleSelectProps> = ({ value, onChange }) => (
  <Select
    showSearch
    value={value}
    placeholder="Select a country"
    optionFilterProp="label"
    style={{
      width: "100%",
    }}
    onChange={onChange}
    options={[
      {
        value: "jack",
        label: "Jack",
      },
      {
        value: "lucy",
        label: "Lucy",
      },
      {
        value: "tom",
        label: "Tom",
      },
    ]}
  />
);

export default SingleSelect;

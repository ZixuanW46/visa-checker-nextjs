"use client";

import React, { useEffect, useState } from "react";
import { Select } from "antd";

interface SingleSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const SingleSelectPort: React.FC<SingleSelectProps> = ({ value, onChange }) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );

  useEffect(() => {
    fetch("/entryPortList.json")
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <Select
      showSearch
      value={value}
      placeholder="Select a country"
      optionFilterProp="label"
      style={{
        width: "100%",
      }}
      onChange={onChange}
      options={options}
    />
  );
};

export default SingleSelectPort;

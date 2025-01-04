"use client";

import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { allChinaPorts } from "./RegionEligibility";

interface SingleSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

// Define proper types for the options
type PortOption = {
  value: string;
  label: string;
};

type GroupedOption = {
  label: string;
  title: string;
  options: PortOption[];
};

const SingleSelectPort: React.FC<SingleSelectProps> = ({ value, onChange }) => {
  const [options, setOptions] = useState<GroupedOption[]>([]);

  useEffect(() => {
    // Transform allChinaPorts into grouped options
    const groupedOptions = [
      ...Object.entries(allChinaPorts).map(([province, ports]) => ({
        label: province,
        title: province,
        options: Object.entries(ports).map(([code, name]) => ({
          value: code,
          label: name,
        })),
      })),
      // Add Other option as its own group
      {
        label: "Other",
        title: "Other",
        options: [
          {
            value: "OTHER",
            label: "Other (Port not listed)",
          },
        ],
      },
    ];
    setOptions(groupedOptions);
  }, []);

  return (
    <Select
      showSearch
      value={value}
      placeholder="Select a port"
      optionFilterProp="label"
      style={{
        width: "100%",
      }}
      listHeight={256}
      onChange={onChange}
      options={options}
      filterOption={(input, option?: GroupedOption | PortOption) => {
        if (!option) return false;

        // Always show the Other option
        if ("value" in option && option.value === "OTHER") return true;
        if (
          "options" in option &&
          option.options.some((opt) => opt.value === "OTHER")
        )
          return true;

        // Handle both group and individual option filtering
        if ("options" in option) {
          return option.title.toLowerCase().includes(input.toLowerCase());
        }
        // This is an individual option
        return (
          option.label.toLowerCase().includes(input.toLowerCase()) || false
        );
      }}
    />
  );
};

export default SingleSelectPort;

"use client";

import React from "react";
import { Select, Tag, Tooltip } from "antd";
import type { SelectProps } from "antd";

type TagRender = SelectProps["tagRender"];

const options = [
  { value: "UK", label: "UK" },
  { value: "Germany", label: "Germany" },
  { value: "USA", label: "USA" },
  { value: "Spain", label: "Spain" },
];

interface MultiSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ value, onChange }) => {
  const tagRender: TagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="#FCD36A"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
          borderRadius: "10px",
          padding: "8px 10px",
          marginTop: "9px",
          color: "#000000",
          fontSize: "1rem",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Select
      mode="multiple"
      tagRender={tagRender}
      showSearch
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
      }}
      options={options}
      placeholder="Select countries"
      maxTagCount="responsive"
      maxTagPlaceholder={(omittedValues) => (
        <Tooltip title={omittedValues.map(({ label }) => label).join(", ")}>
          <span>+{omittedValues.length} more</span>
        </Tooltip>
      )}
    />
  );
};

export default MultiSelect;

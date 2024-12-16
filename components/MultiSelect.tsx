"use client";

import React, { useState } from "react";
import { Select, Tag, Tooltip } from "antd";
import type { SelectProps } from "antd";

type TagRender = SelectProps["tagRender"];

const options = [
  { value: "UK", label: "UK" },
  { value: "Germany", label: "Germany" },
  { value: "USA", label: "USA" },
  { value: "Spain", label: "Spain" },
];

const MultiSelect: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

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
      onChange={setValue}
      style={{
        width: "100%",

        borderRadius: "20px",
        borderColor: "black",
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

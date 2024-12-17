"use client";

import { ConfigProvider } from "antd";
import React from "react";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}

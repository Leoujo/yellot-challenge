import { CustomPicker } from "react-native-custom-picker";

import React from "react";

export const FilterPicker = ({ filterOption, setFilterOption }) => {
  const options = ["hourly", "daily", "monthly", "yearly"];
  let picker;
  return <CustomPicker defaultValue={filterOption} onValueChange={(value) => setFilterOption(value)} ref={(el) => (picker = el)} options={options} />;
};

import { CustomPicker } from "react-native-custom-picker";

import React from "react";

export const FilterPicker = ({ filterOption, filterHandler }) => {
  const options = ["hourly", "daily", "monthly", "yearly"];
  let picker;
  return (
    <CustomPicker
	 	value={filterOption}
      placeholder="Selecione um filtro"
      onValueChange={(value) => filterHandler(value)}
      ref={(el) => (picker = el)}
      options={options}
    />
  );
};

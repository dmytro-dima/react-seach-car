import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? "none" : "#fff",
    borderRadius: ".3rem",
  },
}));

export const AutocompleteFilter = ({
  options,
  label,
  inputValue,
  setInputValue,
  filterType,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      className={`${classes.root} mt-2`}
      // style={{}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(filterType, newInputValue);
      }}
      style={{ width: "15rem" }}
      options={options}
      renderInput={(params) => (
        <TextField label={label} {...params} variant="outlined" />
      )}
    />
  );
};

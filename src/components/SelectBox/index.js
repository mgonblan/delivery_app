import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const variants = {
  FillGray8001e: "bg-gray_800_1e",
  OutlineGray600: "border border-gray_600 border-solid",
  OutlineBlack90026: "bg-white_A701 shadow-bs1",
  FillGray80014: "bg-gray_800_14",
  FillGray90028: "bg-gray_900_28",
  OutlineGray8001e: "border border-gray_800_1e border-solid",
  FillOrange100: "bg-orange_100",
  OutlineBlack90026_1: "bg-orange_100 shadow-bs1",
  FillGray90014: "bg-gray_900_14",
  FillGray9001e1: "bg-gray_900_1e1",
  FillGray90029: "bg-gray_900_29",
  OutlineGray500: "border border-gray_500 border-solid",
  OutlineBlack9004c: "bg-gray_900 shadow-bs",
  FillGray40014: "bg-gray_400_14",
  FillGray4001e: "bg-gray_400_1e",
  FillGray80028: "bg-gray_800_28",
  FillGray40028: "bg-gray_400_28",
  OutlineGray3001e: "border border-gray_300_1e border-solid",
  FillGray3001e: "bg-gray_300_1e",
  FillGray802: "bg-gray_802",
  OutlineBlack9004c_1: "bg-gray_802 shadow-bs",
  FillOrange10014: "bg-orange_100_14",
  FillOrange1001e: "bg-orange_100_1e",
  FillOrange10028: "bg-orange_100_28",
  dropdown24: "",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  CircleBorder20: "rounded-radius20",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px]",
  lg: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] lg:pt-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#fffbff",
              "&:hover": { backgroundColor: "#fffbff", color: "#4e4639" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "CircleBorder20"]),
  variant: PropTypes.oneOf([
    "FillGray8001e",
    "OutlineGray600",
    "OutlineBlack90026",
    "FillGray80014",
    "FillGray90028",
    "OutlineGray8001e",
    "FillOrange100",
    "OutlineBlack90026_1",
    "FillGray90014",
    "FillGray9001e1",
    "FillGray90029",
    "OutlineGray500",
    "OutlineBlack9004c",
    "FillGray40014",
    "FillGray4001e",
    "FillGray80028",
    "FillGray40028",
    "OutlineGray3001e",
    "FillGray3001e",
    "FillGray802",
    "OutlineBlack9004c_1",
    "FillOrange10014",
    "FillOrange1001e",
    "FillOrange10028",
    "dropdown24",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "",
  variant: "FillGray8001e",
  size: "sm",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };

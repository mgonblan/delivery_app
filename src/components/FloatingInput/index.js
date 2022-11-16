import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineLime900: "border-2 border-lime_900 border-solid",
  OutlineOrange300: "border-2 border-orange_300 border-solid",
  OutlineGray600: "border border-gray_600 border-solid",
  OutlineRed900: "border-2 border-red_900 border-solid",
  OutlineGray6001e: "outline outline-[0.5px] outline-gray_600_1e",
  OutlineGray9001e: "outline outline-[0.5px] outline-gray_900_1e",
  OutlineGray500: "border border-gray_500 border-solid",
  OutlineDeeporange200: "border-2 border-deep_orange_200 border-solid",
  OutlineGray5001e: "outline outline-[0.5px] outline-gray_500_1e",
  OutlineGray3001e: "outline outline-[0.5px] outline-gray_300_1e",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = {
  sm: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  md: "lg:pb-[11px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[14px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] lg:px-[11px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
};

const FloatingInput = React.forwardRef(
  (
    {
      wrapClassName = "",
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div
        className={`${wrapClassName} ${shapes[shape] || ""} ${
          variants[variant] || ""
        } ${sizes[size] || ""}`}
      >
        {!!prefix && prefix}
        <div className={`input-container group ${wrapperClasses}`}>
          <input
            ref={ref}
            name={name}
            onChange={handleChange}
            className={`${className}`}
            placeholder=" "
            value={value}
            {...rest}
          />
          <label
            className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
              value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
            } `}
          >
            {labelText}
          </label>
        </div>
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

FloatingInput.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  labelClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
  labelText: PropTypes.string,
  defaultText: PropTypes.string,
  focusedClasses: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "OutlineLime900",
    "OutlineOrange300",
    "OutlineGray600",
    "OutlineRed900",
    "OutlineGray6001e",
    "OutlineGray9001e",
    "OutlineGray500",
    "OutlineDeeporange200",
    "OutlineGray5001e",
    "OutlineGray3001e",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
FloatingInput.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  labelClasses: "",
  wrapperClasses: "",
  labelText: "",
  defaultText: "",
  focusedClasses: "",
  prefix: null,
  suffix: null,
  shape: "RoundedBorder4",
  variant: "OutlineLime900",
  size: "md",
};

export { FloatingInput };

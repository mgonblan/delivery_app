import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA701: "bg-white_A701",
  OutlineGray500: "border border-gray_500 border-solid",
  FillGray90016: "bg-gray_900_16",
  FillGray30014: "bg-gray_300_14",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
  FillGray900: "bg-gray_900",
  FillGray302: "bg-gray_302",
  OutlineBlack9004c: "bg-bluegray_900 shadow-bs2",
  OutlineBlack9004c_1: "bg-gray_300 shadow-bs2",
  srcOutlineGray600: "border border-gray_600 border-solid",
  srcOutlineRed900: "border-2 border-red_900 border-solid",
  srcOutlineGray9001e: "outline outline-[0.5px] outline-gray_900_1e",
  srcOutlineGray500: "border border-gray_500 border-solid",
  srcOutlineDeeporange200: "border-2 border-deep_orange_200 border-solid",
  srcOutlineGray3001e: "outline outline-[0.5px] outline-gray_300_1e",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  md: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lg: "xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[11px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[8px]",
  xl: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  "2xl": "lg:pb-[17px] xl:pb-[21px] pb-[24px] 3xl:pb-[28px]",
  smSrc: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4", "srcRoundedBorder4"]),
  variant: PropTypes.oneOf([
    "FillWhiteA701",
    "OutlineGray500",
    "FillGray90016",
    "FillGray30014",
    "UnderLineBluegray100",
    "FillGray900",
    "FillGray302",
    "OutlineBlack9004c",
    "OutlineBlack9004c_1",
    "srcOutlineGray600",
    "srcOutlineRed900",
    "srcOutlineGray9001e",
    "srcOutlineGray500",
    "srcOutlineDeeporange200",
    "srcOutlineGray3001e",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillWhiteA701",
  size: "smSrc",
};

export { Input };

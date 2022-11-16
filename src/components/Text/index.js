import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[56px] xl:text-[71px] text-[80px] 3xl:text-[96px]",
  h2: "font-normal lg:text-[40px] xl:text-[50px] text-[57px] 3xl:text-[68px]",
  h3: "font-normal lg:text-[24px] xl:text-[30px] text-[34px] 3xl:text-[40px]",
  h4: "font-normal lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "font-normal lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h6: "font-normal lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1:
    "font-normal lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body2: "font-bold lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body3:
    "font-normal lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body4: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body5: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body6: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body7: "font-medium text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

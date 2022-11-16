import React from "react";

import { Column, Img, Text, List, Row, Stack, Button } from "components";

const SwitchPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[41px] xl:p-[52px] 2xl:p-[58px] 3xl:p-[70px] w-[100%]">
          <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] w-[35%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Switch
              </Text>
              <a
                href={"https://m3.material.io/components/switch/overview"}
                target="_blank"
                className="font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Switches toggle the state of a single item on or off.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[32px] xl:gap-[40px] 2xl:gap-[45px] 3xl:gap-[54px] grid grid-cols-2 min-h-[auto] lg:p-[56px] xl:p-[70px] 2xl:p-[78px] 3xl:p-[94px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A701 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                <Stack className="bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_save_32X40.svg"
                    className="save"
                    alt="save"
                  />
                </Stack>
                <Stack className="bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_32X40.svg"
                    className="save"
                    alt="location"
                  />
                </Stack>
                <Stack className="bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_32X40.svg"
                    className="save"
                    alt="location One"
                  />
                </Stack>
                <Stack className="bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_32X40.svg"
                    className="save"
                    alt="location Two"
                  />
                </Stack>
                <Stack className="bg-gray_900_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_save_1.svg"
                    className="save"
                    alt="save One"
                  />
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-white_A700 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_checkmark_16X16.svg"
                      className="checkmark5"
                      alt="checkmark"
                    />
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillOrange101"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillOrange101"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillOrange101"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_900_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-white_A701 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_checkmark_2.svg"
                      className="checkmark5"
                      alt="checkmark Four"
                    />
                  </Stack>
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[96%]">
                <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_handlecontaine_32X40.svg"
                    className="Handlecontaine2"
                    alt="Handlecontaine"
                  />
                </Stack>
                <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_1.svg"
                    className="Handlecontaine2"
                    alt="location Three"
                  />
                </Stack>
                <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_1.svg"
                    className="Handlecontaine2"
                    alt="location Four"
                  />
                </Stack>
                <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_location_1.svg"
                    className="Handlecontaine2"
                    alt="location Five"
                  />
                </Stack>
                <Stack className="bg-gray_300_1e1 border-2 border-gray_900_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                  <Img
                    src="images/img_handlecontaine_1.svg"
                    className="Handlecontaine2"
                    alt="Handlecontaine One"
                  />
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[96%]">
                <Column className="bg-gray_302 border-2 border-gray_600 border-solid p-[4px] rounded-radius16 w-[12%]">
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                    size="smIcn"
                    variant="icbFillGray600"
                  >
                    <Img
                      src="images/img_plus_18X18.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="plus"
                    />
                  </Button>
                </Column>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_16 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray801"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray801"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_302 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillGray801"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_300_1e1 border-2 border-gray_900_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_7c lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_16X16.svg"
                      className="checkmark5"
                      alt="close"
                    />
                  </Stack>
                </Stack>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius5 w-[100%]">
              <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                <Row className="items-center justify-between w-[98%]">
                  <Stack className="bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_handlecontaine_2.svg"
                      className="save"
                      alt="Handlecontaine One"
                    />
                  </Stack>
                  <Stack className="bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[14px] 3xl:pl-[17px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_user_32X39.svg"
                      className="user4"
                      alt="user"
                    />
                  </Stack>
                  <Stack className="bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[14px] 3xl:pl-[17px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_user_32X39.svg"
                      className="user4"
                      alt="user One"
                    />
                  </Stack>
                  <Stack className="bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[14px] 3xl:pl-[17px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_user_32X39.svg"
                      className="user4"
                      alt="user Two"
                    />
                  </Stack>
                  <Stack className="bg-gray_300_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_handlecontaine_1.svg"
                      className="save"
                      alt="Handlecontaine One One"
                    />
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-gray_902 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                      <Img
                        src="images/img_checkmark_8.svg"
                        className="checkmark5"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_8.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark One One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_8.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark Two One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                        shape="icbRoundedBorder12"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_8.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark Three One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-gray_300_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-gray_900 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                      <Img
                        src="images/img_checkmark_7.svg"
                        className="checkmark5"
                        alt="checkmark Four One"
                      />
                    </Stack>
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                  <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_handlecontaine_3.svg"
                      className="Handlecontaine2"
                      alt="Handlecontaine Two"
                    />
                  </Stack>
                  <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_eye.svg"
                      className="Handlecontaine2"
                      alt="eye"
                    />
                  </Stack>
                  <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_eye.svg"
                      className="Handlecontaine2"
                      alt="eye One"
                    />
                  </Stack>
                  <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_eye.svg"
                      className="Handlecontaine2"
                      alt="eye Two"
                    />
                  </Stack>
                  <Stack className="bg-gray_800_1e border-2 border-gray_300_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] rounded-radius16 w-[12%]">
                    <Img
                      src="images/img_contrast_32X40.svg"
                      className="Handlecontaine2"
                      alt="contrast"
                    />
                  </Stack>
                </Row>
              </Column>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_500 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_18X18.svg"
                      className="checkmark5"
                      alt="close One"
                    />
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray400"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray400"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_801 border-2 border-gray_500 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillGray400"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800_1e border-2 border-gray_300_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_7c lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_18X18.svg"
                      className="checkmark5"
                      alt="close Four"
                    />
                  </Stack>
                </Stack>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default SwitchPage;

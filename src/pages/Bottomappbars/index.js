import React from "react";

import { Column, Img, Text, List, Stack, Row, Button } from "components";

const BottomappbarsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[45px] xl:p-[57px] 2xl:p-[64px] 3xl:p-[77px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] w-[64%]">
            <Img
              src="images/img_computer.svg"
              className="computer"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Bottom App Bars
              </Text>
              <a
                href={
                  "https://m3.material.io/components/bottom-app-bar/overview"
                }
                target="_blank"
                className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text className="Definition" variant="body3">
                Bottom app bars display navigation and key actions at the bottom
                of mobile screens.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[35px] xl:gap-[44px] 2xl:gap-[49px] 3xl:gap-[59px] grid grid-cols-2 min-h-[auto] 3xl:p-[103px] lg:p-[61px] xl:p-[77px] 2xl:p-[86px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="listiconsone">
            <Column className="bg-white_A701 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Stack className="bg-white_A701 2xl:h-[100px] 3xl:h-[119px] lg:h-[71px] xl:h-[89px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] 3xl:px-[23px] w-[100%]">
                <Img
                  src="images/img_icons01.svg"
                  className="absolute lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] inset-y-[0] left-[0] my-[auto] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                  alt="IconsOne"
                />
              </Stack>
              <Column className="bg-white_A701 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[26%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-white_A701 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[40%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne Two"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_location.svg"
                      className="IconsOne_One"
                      alt="location"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-white_A701 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[53%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Two"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_location.svg"
                      className="IconsOne_One"
                      alt="location One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons04.svg"
                      className="IconsOne_One"
                      alt="IconsFour"
                    />
                  </Stack>
                </Row>
              </Column>
              <Row className="bg-white_A701 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_icons01.svg"
                    className="IconsOne_One"
                    alt="IconsOne Four"
                  />
                </Stack>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A701 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[26%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne Five"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Three"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A701 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[40%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne Six"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Four"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_location.svg"
                      className="IconsOne_One"
                      alt="location Two"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Two"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A701 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[53%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01.svg"
                      className="IconsOne_One"
                      alt="IconsOne Seven"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Five"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_location.svg"
                      className="IconsOne_One"
                      alt="location Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons04.svg"
                      className="IconsOne_One"
                      alt="IconsFour One"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Three"
                  />
                </Button>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Stack className="bg-gray_900 2xl:h-[100px] 3xl:h-[119px] lg:h-[71px] xl:h-[89px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] 3xl:px-[23px] w-[100%]">
                <Img
                  src="images/img_icons01_gray_400.svg"
                  className="absolute lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] inset-y-[0] left-[0] my-[auto] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                  alt="IconsOne One"
                />
              </Stack>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[26%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne One One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo One"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[40%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne Two One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo One One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons03.svg"
                      className="IconsOne_One"
                      alt="IconsThree"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[53%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne Three One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Two One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons03.svg"
                      className="IconsOne_One"
                      alt="IconsThree One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_bag.svg"
                      className="IconsOne_One"
                      alt="bag"
                    />
                  </Stack>
                </Row>
              </Column>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_icons01_gray_400.svg"
                    className="IconsOne_One"
                    alt="IconsOne Four One"
                  />
                </Stack>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c_1"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[26%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne Five One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Three One"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c_1"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[40%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne Six One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Four One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons03.svg"
                      className="IconsOne_One"
                      alt="IconsThree Two"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c_1"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Two One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[53%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons01_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsOne Seven One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons02_gray_400.svg"
                      className="IconsOne_One"
                      alt="IconsTwo Five One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_icons03.svg"
                      className="IconsOne_One"
                      alt="IconsThree Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_bag.svg"
                      className="IconsOne_One"
                      alt="bag One"
                    />
                  </Stack>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c_1"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Three One"
                  />
                </Button>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default BottomappbarsPage;

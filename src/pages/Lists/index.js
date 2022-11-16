import React from "react";

import { Column, Img, Text, List, Row, Stack, Line, Input } from "components";

const ListsPage = () => {
  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]">
          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[18%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Lists
              </Text>
              <a
                href={"https://m3.material.io/components/lists/overview"}
                target="_blank"
                className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Lists are continuous, vertical indexes of text or images.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="bg-white_A700 lg:gap-[15px] xl:gap-[19px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-2 min-h-[auto] lg:p-[27px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start p-[1px] rounded-radius16 w-[100%]">
            <Row className="bg-white_A701 items-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius16 w-[100%]">
              <Column className="bg-white_A701 items-center justify-start w-[32%]">
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Two"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Three"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Four"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Five"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Six"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Seven"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Eight"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Nine"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Ten"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Eleven"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A701 items-center justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[32%]">
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Twelve"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Thirteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Fourteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Fifteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Sixteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Seventeen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Eighteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Nineteen"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark Twenty"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark TwentyOne"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark TwentyTwo"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer47" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark3"
                        alt="checkmark TwentyThree"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A701 items-center justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[32%]">
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyFour"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyFive"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentySix"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentySeven"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyEight"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyNine"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark Thirty"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyOne"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyTwo"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyThree"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyFour"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-lime_900 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyFive"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[3px] w-[100%]">
              <Text className="mb-[1px] Labels" variant="body4">
                List Items
              </Text>
            </Column>
            <Column className="bg-white_A701 items-center justify-start lg:my-[15px] xl:my-[19px] 2xl:my-[22px] 3xl:my-[26px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[7px] xl:pl-[9px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius16 w-[65%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Column className="justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Text
                        className="ml-[4px] Text_ThirtyNine"
                        variant="body4"
                      >
                        List item
                      </Text>
                      <Text
                        className="font-normal 2xl:leading-[11px] 3xl:leading-[13px] lg:leading-[7px] xl:leading-[9px] ml-[4px] mt-[4px] not-italic text-gray_801 tracking-ls1 w-[95%]"
                        variant="body5"
                      >
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[80%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark ThirtySix"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="ml-[2px] Text_ThirtyNine"
                        variant="body4"
                      >
                        List item
                      </Text>
                      <Text
                        className="ml-[2px] Supportingtext_Five"
                        variant="body5"
                      >
                        Supporting text
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark ThirtySeven"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                    wrapClassName="w-[47%]"
                    name="Condition1lin"
                    placeholder="List item"
                    size="xl"
                  ></Input>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[81%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark ThirtyEight"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Text className="statelayer47" variant="body4">
                          A
                        </Text>
                      </Column>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[79%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-start justify-evenly p-[4px] w-[100%]">
                      <Text
                        className="xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] statelayer47"
                        variant="body4"
                      >
                        A
                      </Text>
                      <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[64%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark ThirtyNine"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer49" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[77%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting line text lorem ipsum
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer47" variant="body4">
                        A
                      </Text>
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[65%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting line text lorem ipsum
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark Forty"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer49" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[77%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer47" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortyOne"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] user_One">
                        <Img
                          src="images/img_user_24X24.svg"
                          className="user1"
                          alt="user"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[83%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly p-[4px] w-[100%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="user_One"
                        alt="user One"
                      />
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[68%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortyTwo"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="user_Two"
                        alt="user Two"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="user_One"
                        alt="user Three"
                      />
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortyThree"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[47%]"
                    name="Condition1lin Three"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_user_24X24.svg"
                        className="ml-[3px] lg:w-[9px] lg:h-[10px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[8px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[10px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="xl"
                  ></Input>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="user_One"
                        alt="user Four"
                      />
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortyFour"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[1px]" />
                </Row>
                <Row className="items-start justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-white_A701 items-center justify-start w-[47%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] Thumbnail_Three">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail1"
                          alt="Thumbnail"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[74%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center justify-start w-[47%]">
                    <Row className="items-start justify-evenly p-[4px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] Thumbnail_Three"
                        alt="Thumbnail One"
                      />
                      <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[59%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortyFive"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Two"
                        alt="Thumbnail Two"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[72%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Three"
                        alt="Thumbnail Three"
                      />
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[60%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortySix"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[1px]" />
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Two"
                        alt="Thumbnail Four"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[72%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[47%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Three"
                        alt="Thumbnail Five"
                      />
                      <Column className="2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[60%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FortySeven"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-white_A701 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[1px]" />
                </Row>
                <Row className="items-start justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Row className="items-start justify-between w-[97%]">
                    <Column className="bg-white_A701 items-center justify-start w-[49%]">
                      <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Six"
                        />
                        <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[59%]">
                          <Text className="title" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_One" variant="body5">
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A701 items-center justify-start w-[49%]">
                      <Row className="items-start pr-[4px] py-[4px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[32%]"
                          alt="Thumbnail Seven"
                        />
                        <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[47%]">
                          <Text className="title" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_One" variant="body5">
                            Secondary line text lorem ipsum dolor sit amet
                          </Text>
                        </Column>
                        <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                            <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark3"
                              alt="checkmark FortyEight"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="bg-white_A701 items-center justify-evenly w-[1px]">
                    <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                    <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Eight"
                        alt="Thumbnail Eight"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="items-center justify-between w-[97%]">
                    <Column className="bg-white_A701 items-center w-[49%]">
                      <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Nine"
                        />
                        <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[59%]">
                          <Text className="Text_ThirtyNine" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Five" variant="body5">
                            Supporting text
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A701 items-center w-[49%]">
                      <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Ten"
                        />
                        <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[48%]">
                          <Text className="Text_ThirtyNine" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Five" variant="body5">
                            Supporting text
                          </Text>
                        </Column>
                        <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                            <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark3"
                              alt="checkmark FortyNine"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="bg-white_A701 items-center justify-evenly w-[1px]">
                    <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                    <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Eight"
                        alt="Thumbnail Eleven"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="items-center justify-between w-[97%]">
                    <Column className="bg-white_A701 items-center w-[49%]">
                      <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Twelve"
                        />
                        <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] w-[59%]">
                          <Text className="Content" variant="body4">
                            List item
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A701 items-center w-[49%]">
                      <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Thirteen"
                        />
                        <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] w-[48%]">
                          <Text className="Content" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                            <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark3"
                              alt="checkmark Fifty"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="bg-white_A701 items-center justify-evenly w-[1px]">
                    <Line className="bg-white_A701 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                    <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Eight"
                        alt="Thumbnail Fourteen"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftyOne"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[80%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftyTwo"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[68%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon.svg"
                          className="user1"
                          alt="Iconsarrowrig"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftyThree"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftyFour"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig One"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftyFive"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[81%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-lime_900 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark3"
                            alt="checkmark FiftySix"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Two"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] user_One">
                        <Img
                          src="images/img_icon_lime_900.svg"
                          className="user1"
                          alt="icon"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[83%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Img
                        src="images/img_icon_lime_900.svg"
                        className="ml-[4px] user_One"
                        alt="icon One"
                      />
                      <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[71%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon.svg"
                          className="user1"
                          alt="Iconsarrowrig Three"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_lime_900.svg"
                        className="user_Two"
                        alt="icon Two"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_lime_900.svg"
                        className="user_Two"
                        alt="icon Three"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Four"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Input
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[49%]"
                    name="Condition1lin Six"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_icon_lime_900.svg"
                        className="ml-[3px] lg:w-[9px] lg:h-[10px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[8px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[10px] my-[auto]"
                        alt="icon"
                      />
                    }
                    size="xl"
                  ></Input>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_lime_900.svg"
                        className="user_Two"
                        alt="icon Four"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Five"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Column className="items-center ml-[4px] w-[15%]">
                        <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[100%]">
                          <Img
                            src="images/img_handlecontaine.svg"
                            className="Handlecontaine"
                            alt="Handlecontaine"
                          />
                        </Stack>
                      </Column>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[75%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] ml-[4px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine.svg"
                          className="Handlecontaine"
                          alt="Handlecontaine One"
                        />
                      </Stack>
                      <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[63%]">
                        <Text className="title" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_One" variant="body5">
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon.svg"
                          className="user1"
                          alt="Iconsarrowrig Six"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine.svg"
                          className="Handlecontaine"
                          alt="Handlecontaine Two"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[73%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine.svg"
                          className="Handlecontaine"
                          alt="Handlecontaine Three"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[62%]">
                        <Text className="Text_ThirtyNine" variant="body4">
                          List item
                        </Text>
                        <Text className="Supportingtext_Five" variant="body5">
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Seven"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[97%]">
                  <Input
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[49%]"
                    name="Condition1lin Seven"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_handlecontaine.svg"
                        className="ml-[3px] border-gray_600 border-2 border-solid bg-gray_302 lg:w-[15px] lg:mr-[4px] xl:w-[19px] xl:mr-[5px] 2xl:w-[22px] 2xl:mr-[6px] 3xl:w-[26px] 3xl:mr-[8px] rounded-radius16 my-[auto]"
                        alt="Handle container"
                      />
                    }
                    size="xl"
                  ></Input>
                  <Column className="bg-white_A701 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_302 border-2 border-gray_600 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine.svg"
                          className="Handlecontaine"
                          alt="Handlecontaine Four"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[62%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Eight"
                      />
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start mb-[2px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] rounded-radius16 w-[100%]">
            <Row className="bg-gray_900 items-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius16 w-[100%]">
              <Column className="bg-gray_900 items-center justify-start w-[32%]">
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark One One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Two One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Three One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Four One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Five One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Six One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Seven One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Eight One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Nine One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Ten One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Eleven One"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-gray_900 items-center justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[32%]">
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Twelve One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Thirteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Fourteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Fifteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Sixteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Seventeen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Eighteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Nineteen One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark Twenty One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark TwentyOne One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark TwentyTwo One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly p-[4px] w-[100%]">
                  <Text className="statelayer50" variant="body4">
                    A
                  </Text>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[64%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                      <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark3"
                        alt="checkmark TwentyThree One"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-gray_900 items-center justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[32%]">
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyFour One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyFive One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentySix One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentySeven One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyEight One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark TwentyNine One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark Thirty One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyOne One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyTwo One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyThree One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyFour One"
                      />
                    </Stack>
                  </Column>
                </Row>
                <Row className="items-center w-[98%]">
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[88%]">
                    <Text className="Content1" variant="body4">
                      List item
                    </Text>
                  </Column>
                  <Column className="items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[10%]">
                    <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] rounded-radius16 w-[100%]">
                      <div className="absolute bg-orange_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="checkmark_TwentyFour1"
                        alt="checkmark ThirtyFive One"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[3px] w-[100%]">
              <Text className="mb-[1px] Labels1" variant="body4">
                List Items
              </Text>
            </Column>
            <Column className="bg-gray_900 items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius16 w-[65%]">
              <Column className="items-center justify-start my-[4px] w-[99%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Column className="justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Text className="ml-[4px] Text_Forty_One" variant="body4">
                        List item
                      </Text>
                      <Text
                        className="font-normal 2xl:leading-[11px] 3xl:leading-[13px] lg:leading-[7px] xl:leading-[9px] ml-[4px] mt-[4px] not-italic text-gray_400 tracking-ls1 w-[95%]"
                        variant="body5"
                      >
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur
                      </Text>
                    </Column>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[80%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark ThirtySix One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                        <Column className="items-center justify-start ml-[4px] w-[83%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Two" variant="body5">
                            Supporting line text lorem ipsum dolor sit amet
                          </Text>
                        </Column>
                        <Stack className="Iconsarrowrig_One">
                          <Img
                            src="images/img_iconsarrowrig.png"
                            className="user1"
                            alt="Iconsarrowrig One"
                          />
                        </Stack>
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Text className="ml-[2px] Text_Forty_One" variant="body4">
                        List item
                      </Text>
                      <Text
                        className="ml-[2px] Supportingtext_Six_One"
                        variant="body5"
                      >
                        Supporting text
                      </Text>
                    </Column>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark ThirtySeven One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[4px]" />
                      <Row className="absolute items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                        <Column className="items-center ml-[2px] w-[84%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text
                            className="Supportingtext_Eight_One"
                            variant="body5"
                          >
                            Supporting text
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig One One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_300 text-gray_300 tracking-ls1 w-[100%]"
                    wrapClassName="w-[49%]"
                    name="Condition1lin One"
                    placeholder="List item"
                    size="xl"
                    variant="FillGray900"
                  ></Input>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[81%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark ThirtyEight One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] left-[0] w-[4px]" />
                      <Row className="absolute items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Column className="items-center w-[85%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Two One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Text className="statelayer50" variant="body4">
                          A
                        </Text>
                      </Column>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[79%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-start justify-evenly p-[4px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Text className="statelayer50" variant="body4">
                          A
                        </Text>
                      </Column>
                      <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[64%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark ThirtyNine One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-start justify-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                        <Column className="items-center justify-start lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] w-[67%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Two" variant="body5">
                            Secondary line text lorem ipsum dolor sit amet
                          </Text>
                        </Column>
                        <Stack className="lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[8px] Iconsarrowrig_One">
                          <Img
                            src="images/img_iconsarrowrig.png"
                            className="user1"
                            alt="Iconsarrowrig Three One"
                          />
                        </Stack>
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer51" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[77%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer50" variant="body4">
                        A
                      </Text>
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[65%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark Forty One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[4px]" />
                      <Row className="absolute items-center justify-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                        <Column className="items-center lg:ml-[23px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[67%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text
                            className="Supportingtext_Eight_One"
                            variant="body5"
                          >
                            Supporting line text lorem ipsum
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] Iconsarrowrig_One"
                          alt="Iconsarrowrig Four One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer51" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[77%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer50" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[65%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyOne One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] left-[0] w-[4px]" />
                      <Row className="absolute items-center justify-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Column className="items-center lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[68%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] 3xl:mr-[5px] Iconsarrowrig_One"
                          alt="Iconsarrowrig Five One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] user_One">
                        <Img
                          src="images/img_user.svg"
                          className="user1"
                          alt="user Two"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[83%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center justify-evenly p-[4px] w-[100%]">
                      <Stack className="user_One">
                        <Img
                          src="images/img_user.svg"
                          className="user1"
                          alt="user One One"
                        />
                      </Stack>
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[68%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyTwo One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                        <Column className="items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] w-[71%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Two" variant="body5">
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur
                          </Text>
                        </Column>
                        <Stack className="Iconsarrowrig_One">
                          <Img
                            src="images/img_iconsarrowrig.png"
                            className="user1"
                            alt="Iconsarrowrig Six One"
                          />
                        </Stack>
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user.svg"
                        className="user_Two"
                        alt="user Two One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user.svg"
                        className="user_One"
                        alt="user Three One"
                      />
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyThree One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[4px]" />
                      <Row className="absolute items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                        <Column className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] w-[72%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text
                            className="Supportingtext_Eight_One"
                            variant="body5"
                          >
                            Supporting text
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Seven One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[49%]"
                    name="Condition1lin One One"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_user.svg"
                        className="ml-[3px] lg:w-[9px] lg:h-[10px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[8px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[10px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="xl"
                    variant="FillGray900"
                  ></Input>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_user.svg"
                        className="user_One"
                        alt="user Four One"
                      />
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyFour One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] left-[0] w-[4px]" />
                      <Row className="absolute items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                        <Column className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[73%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Eight One"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-start justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center justify-start w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] Thumbnail_Three">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail1"
                          alt="Thumbnail One"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[74%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-start justify-evenly p-[4px] w-[100%]">
                      <Stack className="xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] Thumbnail_Three">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail1"
                          alt="Thumbnail One One"
                        />
                      </Stack>
                      <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[59%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyFive One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] left-[0] w-[4px]" />
                      <Row className="absolute items-start justify-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                        <Column className="items-center justify-start lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[62%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Two" variant="body5">
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur
                          </Text>
                        </Column>
                        <Stack className="lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[8px] Iconsarrowrig_One">
                          <Img
                            src="images/img_iconsarrowrig.png"
                            className="user1"
                            alt="Iconsarrowrig Nine"
                          />
                        </Stack>
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Two"
                        alt="Thumbnail Two One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[72%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[4px]" />
                      <Row className="absolute items-center justify-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                        <Column className="items-center lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] w-[63%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text
                            className="Supportingtext_Eight_One"
                            variant="body5"
                          >
                            Supporting text
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] Iconsarrowrig_One"
                          alt="Iconsarrowrig Ten"
                        />
                      </Row>
                    </Stack>
                  </Row>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Three"
                        alt="Thumbnail Three One"
                      />
                      <Column className="xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[60%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortySix One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Two"
                        alt="Thumbnail Four One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[72%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[4px]" />
                      <Row className="absolute items-center justify-end xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                        <Column className="items-center w-[67%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Eleven"
                        />
                      </Row>
                    </Stack>
                  </Row>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center justify-evenly xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Three"
                        alt="Thumbnail Five One"
                      />
                      <Column className="2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[60%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortySeven One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-start justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center justify-start w-[49%]">
                    <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Six"
                        alt="Thumbnail Six One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[59%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-start pr-[4px] py-[4px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[32%]"
                        alt="Thumbnail Seven One"
                      />
                      <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[47%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Secondary line text lorem ipsum dolor sit amet
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyEight One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-start lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Eight One"
                        />
                        <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[48%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text className="Supportingtext_Two" variant="body5">
                            Secondary line text lorem ipsum dolor sit amet
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Twelve"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Six"
                        alt="Thumbnail Nine One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[59%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Ten One"
                        />
                        <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[48%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                          <Text
                            className="Supportingtext_Eight_One"
                            variant="body5"
                          >
                            Supporting text
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Thirteen"
                        />
                      </Row>
                    </Stack>
                  </Row>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Six"
                        alt="Thumbnail Eleven One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[48%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FortyNine One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="bg-gray_900 items-center justify-between overflow-auto w-[49%]">
                    <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Six"
                        alt="Thumbnail Twelve One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] w-[59%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[100%]">
                      <Line className="absolute bg-gray_900 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] w-[4px]" />
                      <Row className="absolute items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                        <Img
                          src="images/img_thumbnail.png"
                          className="Thumbnail_Six"
                          alt="Thumbnail Thirteen One"
                        />
                        <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[48%]">
                          <Text className="title_Two" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Img
                          src="images/img_iconsarrowrig.png"
                          className="Iconsarrowrig_One"
                          alt="Iconsarrowrig Fourteen"
                        />
                      </Row>
                    </Stack>
                  </Row>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[100%]">
                      <Img
                        src="images/img_thumbnail.png"
                        className="Thumbnail_Six"
                        alt="Thumbnail Fourteen One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] w-[48%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark Fifty One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftyOne One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[80%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center p-[4px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center ml-[4px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftyTwo One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[68%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon_gray_300.svg"
                          className="user1"
                          alt="Iconsarrowrig Fifteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftyThree One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftyFour One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Sixteen"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftyFive One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[81%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Column className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                        <Stack className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] xl:px-[3px] lg:px-[3px] 2xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]">
                          <div className="bg-orange_300 rounded-radius2 checkmark_TwentyFour"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="checkmark3"
                            alt="checkmark FiftySix One"
                          />
                        </Stack>
                      </Column>
                      <Column className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Seventeen"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Stack className="ml-[4px] user_One">
                        <Img
                          src="images/img_icon_orange_300.svg"
                          className="user1"
                          alt="icon Two"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[83%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Img
                        src="images/img_icon_orange_300.svg"
                        className="ml-[4px] user_One"
                        alt="icon One One"
                      />
                      <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[71%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon_gray_300.svg"
                          className="user1"
                          alt="Iconsarrowrig Eighteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_orange_300.svg"
                        className="user_Two"
                        alt="icon Two One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[81%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_orange_300.svg"
                        className="user_Two"
                        alt="icon Three One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[70%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Nineteen"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[49%]"
                    name="Condition1lin Two One"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_icon_orange_300.svg"
                        className="ml-[3px] lg:w-[9px] lg:h-[10px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[8px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[10px] my-[auto]"
                        alt="icon"
                      />
                    }
                    size="xl"
                    variant="FillGray900"
                  ></Input>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Img
                        src="images/img_icon_orange_300.svg"
                        className="user_Two"
                        alt="icon Four One"
                      />
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[70%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig Twenty"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Column className="items-center ml-[4px] w-[15%]">
                        <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[100%]">
                          <Img
                            src="images/img_handlecontaine_48X48.svg"
                            className="Handlecontaine_One"
                            alt="Handlecontaine One"
                          />
                        </Stack>
                      </Column>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[75%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[100%]">
                      <Column className="items-center justify-start ml-[4px] w-[15%]">
                        <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[100%]">
                          <Img
                            src="images/img_handlecontaine_48X48.svg"
                            className="Handlecontaine_One"
                            alt="Handlecontaine One One"
                          />
                        </Stack>
                      </Column>
                      <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[63%]">
                        <Text className="title_Two" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_One_One"
                          variant="body5"
                        >
                          Supporting line text lorem ipsum dolor sit amet,
                          consectetur
                        </Text>
                      </Column>
                      <Stack className="Iconsarrowrig_One">
                        <Img
                          src="images/img_icon_gray_300.svg"
                          className="user1"
                          alt="Iconsarrowrig TwentyOne"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine_48X48.svg"
                          className="Handlecontaine_One"
                          alt="Handlecontaine Two One"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[73%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine_48X48.svg"
                          className="Handlecontaine_One"
                          alt="Handlecontaine Three One"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:pr-[2px] lg:pr-[2px] 2xl:pr-[3px] 3xl:pr-[4px] xl:py-[2px] lg:py-[2px] 2xl:py-[3px] 3xl:py-[4px] w-[62%]">
                        <Text className="Text_Forty_One" variant="body4">
                          List item
                        </Text>
                        <Text
                          className="Supportingtext_Six_One"
                          variant="body5"
                        >
                          Supporting text
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig TwentyTwo"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[49%]"
                    name="Condition1lin Three One"
                    placeholder="List item"
                    prefix={
                      <Img
                        src="images/img_handlecontaine_48X48.svg"
                        className="border-gray_500 border-2 border-solid bg-gray_801 lg:w-[19px] lg:h-[20px] lg:mx-[4px] xl:w-[23px] xl:h-[24px] xl:mx-[5px] 2xl:w-[26px] 2xl:h-[27px] 2xl:mx-[6px] 3xl:w-[32px] 3xl:h-[33px] 3xl:ml-[7px] 3xl:mr-[8px] rounded-radius16 my-[auto]"
                        alt="Handle container"
                      />
                    }
                    size="xl"
                    variant="FillGray900"
                  ></Input>
                  <Column className="bg-gray_900 items-center w-[49%]">
                    <Row className="items-center xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Stack className="bg-gray_801 border-2 border-gray_500 border-solid lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] rounded-radius16 w-[15%]">
                        <Img
                          src="images/img_handlecontaine_48X48.svg"
                          className="Handlecontaine_One"
                          alt="Handlecontaine Four One"
                        />
                      </Stack>
                      <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[62%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_icon_gray_300.svg"
                        className="Iconsarrowrig_One"
                        alt="Iconsarrowrig TwentyThree"
                      />
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default ListsPage;

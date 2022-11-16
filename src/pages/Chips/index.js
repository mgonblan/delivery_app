import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Stack,
  Row,
  Button,
  CheckBox,
  SelectBox,
} from "components";

const ChipsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
          <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[25%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Chips
              </Text>
              <a
                href={"https://m3.material.io/components/chips/overview"}
                target="_blank"
                className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Chips help people enter information, make selections, filter
                content, or trigger actions.{" "}
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 min-h-[auto] lg:p-[25px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]"
          orientation="horizontal"
        >
          <Stack className="xl:h-[1215px] 2xl:h-[1367px] 3xl:h-[1640px] lg:h-[972px] mb-[1px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[71%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray600"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_close_18X18.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="OutlineGray600"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="OutlineGray600"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car"
                          />
                          <Text className="statelayer12" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_18X18.svg"
                            className="car"
                            alt="close"
                          />
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius16 w-[11%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user One"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_18X18.svg"
                            className="close_One"
                            alt="close One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_2.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car One"
                          />
                          <Text className="statelayer12" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="car"
                            alt="plus"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Two"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Three"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="close_One"
                            alt="plus One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_2.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_1e items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car Two"
                          />
                          <Text className="statelayer12" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="car"
                            alt="plus Two"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Four"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_801 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Five"
                            />
                          </Stack>
                          <Text className="statelayer13" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="close_One"
                            alt="plus Three"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs2 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_2.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_900_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Three"
                            alt="car Three"
                          />
                          <Text className="statelayer12" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="car_Three"
                            alt="plus Four"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius16 shadow-bs2 w-[12%]">
                        <Row className="bg-gray_900_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Six"
                            />
                          </Stack>
                          <Text className="statelayer14" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius16 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_900_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_801 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_15X16.svg"
                              className="user"
                              alt="user Seven"
                            />
                          </Stack>
                          <Text className="statelayer14" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_2.svg"
                            className="plus_Five"
                            alt="plus Five"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        variant="FillOrange100"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="FillOrange100"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="FillOrange100"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car Four"
                          />
                          <Text className="statelayer15" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus Six"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[11%]">
                        <CheckBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                          inputClassName="h-[24px] mr-[5px] w-[24px]"
                          name="labeltext Thirteen"
                          label="Enabled"
                        ></CheckBox>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_One"
                            alt="plus Seven"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_900_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car Five"
                          />
                          <Text className="statelayer15" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus Eight"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_900_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark One"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_900_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Two"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_One"
                            alt="plus Nine"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_900_1e1 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car"
                            alt="car Six"
                          />
                          <Text className="statelayer15" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus Ten"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_900_1e1 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Three"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_900_1e1 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Four"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_One"
                            alt="plus Eleven"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_100 items-center shadow-bs2 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90029"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray90029"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_900_29 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Three"
                            alt="car Seven"
                          />
                          <Text className="statelayer15" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car_Three"
                            alt="plus Twelve"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 shadow-bs2 w-[12%]">
                        <Row className="bg-gray_900_29 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center justify-start rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Five"
                            />
                          </Column>
                          <Text className="statelayer17" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius16 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_900_29 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_908 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center justify-start rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Six"
                            />
                          </Column>
                          <Text className="statelayer17" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="plus_Five"
                            alt="plus Thirteen"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[92%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray600"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        variant="OutlineBlack90026"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car Eight"
                          />
                          <Text className="statelayer18" variant="body5">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car Nine"
                          />
                          <Text className="statelayer18" variant="body5">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol One"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile"
                          />
                          <Text className="statelayer18" variant="body5">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile One"
                          />
                          <Text className="statelayer18" variant="body5">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs1 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Ten"
                          />
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Eleven"
                          />
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Two"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Three"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Two"
                          />
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Three"
                          />
                          <Text className="statelayer18" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs1 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Twelve"
                          />
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Thirteen"
                          />
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Four"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Five"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Four"
                          />
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Five"
                          />
                          <Text className="statelayer18" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs3 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Fourteen"
                          />
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Fifteen"
                          />
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Six"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Seven"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Six"
                          />
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Seven"
                          />
                          <Text className="statelayer18" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs3 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car Sixteen"
                          />
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car Seventeen"
                          />
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] car_Eight">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Eight"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] car_Eight">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Nine"
                            />
                          </Stack>
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Eight"
                          />
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Nine"
                          />
                          <Text className="statelayer18" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car Eighteen"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car Nineteen"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Ten"
                            />
                          </Stack>
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-black_900 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Eleven"
                            />
                          </Stack>
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Ten"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Eleven"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Column className="items-center justify-start w-[99%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineGray600"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026"
                        >
                          Enabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_801"
                          name="Styleunselecte"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray600"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_801"
                          name="Styleunselecte One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026"
                        ></SelectBox>
                        <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car Twenty"
                            />
                            <Text className="statelayer13" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentyOne"
                            />
                            <Text className="statelayer13" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_801"
                          name="Styleunselecte Two"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray600"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_801 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_801"
                          name="Styleunselecte Three"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs3 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs3 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentyTwo"
                            />
                            <Text className="statelayer18" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentyThree"
                            />
                            <Text className="statelayer18" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Two"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs3 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Three"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Four"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Five"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentyFour"
                            />
                            <Text className="statelayer18" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentyFive"
                            />
                            <Text className="statelayer18" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Six"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Seven"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Eight"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Nine"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentySix"
                            />
                            <Text className="statelayer18" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="profile"
                              alt="car TwentySeven"
                            />
                            <Text className="statelayer18" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Ten"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Eleven"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs4 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray90028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs4 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray90028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs4 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Twelve"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs4 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Thirteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="car_Eight"
                              alt="car TwentyEight"
                            />
                            <Text className="statelayer18" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car.svg"
                              className="car_Eight"
                              alt="car TwentyNine"
                            />
                            <Text className="statelayer18" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Fourteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A701 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Fifteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineGray8001e"
                        >
                          Disabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Disabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Four"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray8001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Five"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                        <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile"
                              alt="car Thirty"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile"
                              alt="car ThirtyOne"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Six"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray8001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Seven"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Seven"
                            />
                            <Text className="statelayer16" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Eight"
                            />
                            <Text className="statelayer16" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_908"
                          name="Styleselected"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_908.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange100"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_908"
                          name="Styleselected One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_908.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026_1"
                        ></SelectBox>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Nine"
                            />
                            <Text className="statelayer16" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Ten"
                            />
                            <Text className="statelayer16" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_908"
                          name="Styleselected Two"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_908.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange100"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_908"
                          name="Styleselected Three"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_908.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026_1"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Eleven"
                            />
                            <Text className="statelayer16" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs3 w-[8%]">
                          <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Twelve"
                            />
                            <Text className="statelayer16" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Sixteen"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray90014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs3 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Seventeen"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray90014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Thirteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs3 w-[8%]">
                          <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Fourteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Eighteen"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray90014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs3 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Nineteen"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray90014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Fifteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Sixteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Twenty"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyOne"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Seventeen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Eighteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyTwo"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyThree"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Nineteen"
                            />
                            <Text className="statelayer16" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark Twenty"
                            />
                            <Text className="statelayer16" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyFour"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyFive"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark TwentyOne"
                            />
                            <Text className="statelayer16" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[8%]">
                          <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile"
                              alt="checkmark TwentyTwo"
                            />
                            <Text className="statelayer16" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentySix"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentySeven"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray9001e1"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentyThree"
                            />
                            <Text className="statelayer16" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentyFour"
                            />
                            <Text className="statelayer16" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyEight"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90029"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer TwentyNine"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90029"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentyFive"
                            />
                            <Text className="statelayer16" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentySix"
                            />
                            <Text className="statelayer16" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer Thirty"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90029"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_908 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_908"
                            name="statelayer ThirtyOne"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_908.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90029"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_800_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_2.svg"
                              className="profile"
                              alt="checkmark TwentySeven"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_800_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_2.svg"
                              className="profile"
                              alt="checkmark TwentyEight"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleselected Four"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleselected Five"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                        <Column className="bg-gray_800_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_2.svg"
                              className="profile"
                              alt="checkmark TwentyNine"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_800_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_2.svg"
                              className="profile"
                              alt="checkmark Thirty"
                            />
                            <Text className="statelayer19" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleselected Six"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleselected Seven"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[46%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray600"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="OutlineBlack90026"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyTwo"
                          />
                          <Text className="statelayer13" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyThree"
                          />
                          <Text className="statelayer13" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyFour"
                          />
                          <Text className="statelayer13" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyFive"
                          />
                          <Text className="statelayer13" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_900 border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtySix"
                          />
                          <Text className="statelayer13" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtySeven"
                          />
                          <Text className="statelayer13" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs3 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyEight"
                          />
                          <Text className="statelayer13" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs3 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car ThirtyNine"
                          />
                          <Text className="statelayer13" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_801 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A701 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car Forty"
                          />
                          <Text className="statelayer13" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A701 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car FortyOne"
                          />
                          <Text className="statelayer13" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car FortyTwo"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car FortyThree"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="FillOrange100"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="OutlineBlack90026_1"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortyFour"
                          />
                          <Text className="statelayer16" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortyFive"
                          />
                          <Text className="statelayer16" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-orange_100 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[19%]">
                        <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortySix"
                          />
                          <Text className="statelayer16" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[19%]">
                        <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortySeven"
                          />
                          <Text className="statelayer16" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortyEight"
                          />
                          <Text className="statelayer16" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FortyNine"
                          />
                          <Text className="statelayer16" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-orange_100 items-center shadow-bs3 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs3 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray9001e1"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs3 w-[19%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car Fifty"
                          />
                          <Text className="statelayer16" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs3 w-[19%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="profile"
                            alt="car FiftyOne"
                          />
                          <Text className="statelayer16" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_100 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car FiftyTwo"
                          />
                          <Text className="statelayer16" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_100 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car.svg"
                            className="car_Eight"
                            alt="car FiftyThree"
                          />
                          <Text className="statelayer16" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car FiftyFour"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile"
                            alt="car FiftyFive"
                          />
                          <Text className="statelayer19" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[95%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-end w-[68%]">
                  <Column className="justify-start w-[27%]">
                    <Text className="Labels" variant="body4">
                      Input chips
                    </Text>
                    <Row className="items-center ml-[auto] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                      <Text
                        className="text-black_900 headline1"
                        variant="body6"
                      >
                        Label only
                      </Text>
                      <Text
                        className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] text-black_900 headline1"
                        variant="body6"
                      >
                        Label & trailing icon
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] text-black_900 headline1"
                    variant="body6"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[13%] rowlabel"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & avatar
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-center w-[14%] rowlabel"
                    variant="body6"
                  >
                    Label, avatar & trailing icon
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[194px] xl:mt-[243px] 2xl:mt-[273px] 3xl:mt-[328px] Labels"
                  variant="body4"
                >
                  Assist chips
                </Text>
                <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[89%]">
                  <Text
                    className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label only - elevated
                  </Text>
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & icon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & favicon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] text-center w-[10%] rowlabel"
                    variant="body6"
                  >
                    Label & favicon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & branded icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] text-center w-[10%] rowlabel"
                    variant="body6"
                  >
                    Label & branded icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[161px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[272px] Labels"
                  variant="body4"
                >
                  Filter chips
                </Text>
                <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[97%]">
                  <Text
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label
                  </Text>
                  <Text
                    className="lg:ml-[33px] xl:ml-[42px] 2xl:ml-[47px] 3xl:ml-[56px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label - elevated
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[50px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & Icon
                  </Text>
                  <Text
                    className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Label & Icon - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] text-center w-[9%] rowlabel"
                    variant="body6"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] text-center w-[9%] rowlabel"
                    variant="body6"
                  >
                    Leading icon & label - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] text-center w-[10%] rowlabel"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] text-center w-[12%] rowlabel"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[275px] xl:mt-[344px] 2xl:mt-[388px] 3xl:mt-[465px] Labels"
                  variant="body4"
                >
                  Suggestion chips
                </Text>
                <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] w-[41%]">
                  <Text
                    className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Outlined
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-black_900 headline1"
                    variant="body6"
                  >
                    Elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] text-center w-[22%] rowlabel"
                    variant="body6"
                  >
                    Leading icon & label
                    <br />
                    Outlined
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] text-center w-[23%] rowlabel"
                    variant="body6"
                  >
                    Leading icon & label <br />
                    Elevated
                  </Text>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Stack className="xl:h-[1216px] 2xl:h-[1368px] 3xl:h-[1641px] lg:h-[972px] rounded-radius16 w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-gray_900 items-center justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[71%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray500"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_close_1.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="OutlineGray500"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_1.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="OutlineGray500"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car Ten"
                          />
                          <Text className="statelayer20" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus One"
                          />
                        </Row>
                      </Column>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius16 w-[11%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user One One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_1.svg"
                            className="close_One"
                            alt="close One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray40014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car One One"
                          />
                          <Text className="statelayer20" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus One One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_400_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Two One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Three One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_close_1.svg"
                            className="close_One"
                            alt="close One One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_28 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car Two One"
                          />
                          <Text className="statelayer20" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Two One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Four One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_400 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Five One"
                            />
                          </Stack>
                          <Text className="statelayer21" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_close_1.svg"
                            className="close_One"
                            alt="close Two"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs2 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_800_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Three"
                            alt="car Three One"
                          />
                          <Text className="statelayer20" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car_Three"
                            alt="plus Three One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius16 shadow-bs2 w-[12%]">
                        <Row className="bg-gray_800_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Six One"
                            />
                          </Stack>
                          <Text className="statelayer22" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius16 shadow-bs2 w-[14%]">
                        <Row className="bg-gray_800_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-gray_400 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_user_1.svg"
                              className="user"
                              alt="user Seven One"
                            />
                          </Stack>
                          <Text className="statelayer22" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_close_1.svg"
                            className="plus_Five"
                            alt="close Three"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        variant="FillGray802"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="FillGray802"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_1.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="FillGray802"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car Four One"
                          />
                          <Text className="statelayer23" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Four One"
                          />
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="mr-[2px] bg-orange_100 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                            alt="checkmark"
                          />
                        }
                        shape="CircleBorder16"
                        variant="FillGray802"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-gray_802 items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-orange_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="checkmark_TwentyFour"
                              alt="checkmark TwentyFour"
                            />
                          </Stack>
                          <Text className="statelayer24" variant="body5">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_One"
                            alt="plus Five One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-orange_100_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car Five One"
                          />
                          <Text className="statelayer23" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Six One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius16 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_100 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-orange_100_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-orange_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="checkmark_TwentyFour"
                              alt="checkmark One One"
                            />
                          </Stack>
                          <Text className="statelayer24" variant="body5">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_One"
                            alt="plus Seven One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-orange_100_1e items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car"
                            alt="car Six One"
                          />
                          <Text className="statelayer23" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Eight One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius16 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_100 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-orange_100_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-orange_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="checkmark_TwentyFour"
                              alt="checkmark Two One"
                            />
                          </Stack>
                          <Text className="statelayer24" variant="body5">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_One"
                            alt="plus Nine One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_1.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs2 w-[14%]">
                        <Row className="bg-orange_100_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Three"
                            alt="car Seven One"
                          />
                          <Text className="statelayer23" variant="body5">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car_Three"
                            alt="plus Ten One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_100 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius16 shadow-bs2 w-[14%]">
                        <Row className="bg-orange_100_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Stack className="bg-orange_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] px-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="checkmark_TwentyFour"
                              alt="checkmark Three One"
                            />
                          </Stack>
                          <Text
                            className="mb-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] statelayer24"
                            variant="body5"
                          >
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="plus_Five"
                            alt="plus Eleven One"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[92%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray500"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        variant="OutlineBlack9004c"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car Eight One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 shadow-bs w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car Nine One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_900 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol One One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_900 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile One One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Ten One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Eleven One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Two One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Three One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Two One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Three One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_300 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Twelve One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Thirteen One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Four One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Five One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Four One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Five One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Fourteen One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_500 rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Fifteen One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Six One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Seven One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Six One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_500 rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Seven One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car Sixteen One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_500 rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car Seventeen One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] car_Eight">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Eight One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] car_Eight">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Nine One"
                            />
                          </Stack>
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Eight One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_500 rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Nine One"
                          />
                          <Text className="statelayer26" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300_7c tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[8%]"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile"
                            alt="car Eighteen One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center outline outline-gray_500 rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile"
                            alt="car Nineteen One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Ten One"
                            />
                          </Stack>
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Stack className="bg-white_A700 px-[2px] profile">
                            <Img
                              src="images/img_netflixsymbol.png"
                              className="NetflixSymbol"
                              alt="NetflixSymbol Eleven One"
                            />
                          </Stack>
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Ten One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center outline outline-gray_500 rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile"
                            alt="profile Eleven One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                    <Column className="items-center justify-start w-[99%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineGray500"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c"
                        >
                          Enabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_400"
                          name="Styleunselecte One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_gray_400.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray500"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_400"
                          name="Styleunselecte One One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_gray_400.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c"
                        ></SelectBox>
                        <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car Twenty One"
                            />
                            <Text className="statelayer21" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentyOne One"
                            />
                            <Text className="statelayer21" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_400"
                          name="Styleunselecte Two One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray500"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_400"
                          name="Styleunselecte Three One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray40014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer One One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray40014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentyTwo One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentyThree One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Two One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center outline outline-gray_500 shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Three One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_300 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_300 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Four One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Five One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentyFour One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentyFive One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Six One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Seven One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Eight One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Nine One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentySix One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="profile"
                              alt="car TwentySeven One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Ten One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center outline outline-gray_500 shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Eleven One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="border border-gray_500 border-solid items-center shadow-bs4 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray80028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs4 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            variant="FillGray40028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs4 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Twelve One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs4 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_400 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_400"
                            name="statelayer Thirteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray40028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="car_Eight"
                              alt="car TwentyEight One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_1.svg"
                              className="car_Eight"
                              alt="car TwentyNine One"
                            />
                            <Text className="statelayer26" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Fourteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_300"
                            name="statelayer Fifteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_1.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_gray_300.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          variant="OutlineGray3001e"
                        >
                          Disabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[7%]"
                          variant="FillGray3001e"
                        >
                          Disabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Four One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Five One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_2.svg"
                              className="profile"
                              alt="car Thirty One"
                            />
                            <Text className="statelayer27" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_2.svg"
                              className="profile"
                              alt="car ThirtyOne One"
                            />
                            <Text className="statelayer27" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Six One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Seven One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Four One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Five One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_100"
                          name="Styleselected One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_orange_100.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray802"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_100"
                          name="Styleselected One One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_orange_100.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c_1"
                        ></SelectBox>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Six One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Seven One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_100"
                          name="Styleselected Two One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_orange_100.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray802"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_100"
                          name="Styleselected Three One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_orange_100.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c_1"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Eight One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Nine One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Sixteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Seventeen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Ten One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Eleven One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Eighteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Nineteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Twelve One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Thirteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Twenty One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyOne One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Fourteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Fifteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyTwo One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyThree One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Sixteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Seventeen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyFour One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyFive One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Eighteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="profile"
                              alt="checkmark Nineteen One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentySix One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentySeven One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="car_Eight"
                              alt="checkmark Twenty One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="car_Eight"
                              alt="checkmark TwentyOne One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyEight One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer TwentyNine One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="car_Eight"
                              alt="checkmark TwentyTwo One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs4 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="car_Eight"
                              alt="checkmark TwentyThree One"
                            />
                            <Text className="statelayer24" variant="body5">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer Thirty One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_802 items-center shadow-bs4 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_100 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_100"
                            name="statelayer ThirtyOne One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_4.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_orange_100.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Row className="bg-gray_300_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[8%]">
                          <Img
                            src="images/img_checkmark_5.svg"
                            className="profile"
                            alt="checkmark TwentyFour One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_5.svg"
                              className="profile"
                              alt="checkmark TwentyFive One"
                            />
                            <Text className="statelayer27" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleselected Four One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_5.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="statelayer ThirtyTwo"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_5.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="icon"
                            />
                          }
                          variant="FillGray3001e"
                        ></SelectBox>
                        <Row className="bg-gray_300_1e items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[8%]">
                          <Img
                            src="images/img_checkmark_5.svg"
                            className="profile"
                            alt="checkmark TwentySix One"
                          />
                          <Text className="statelayer28" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_5.svg"
                              className="profile"
                              alt="checkmark TwentySeven One"
                            />
                            <Text className="statelayer27" variant="body5">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300"
                          name="Styleselected Five One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_5.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleselected Six One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_5.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_gray_300.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[46%]">
                  <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                    <Row className="items-center justify-between w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray500"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[16%]">
                        <Column className="items-center justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] rounded-radius8 shadow-bs w-[100%]">
                          <Text className="statelayer29" variant="body5">
                            Enabled
                          </Text>
                        </Column>
                      </Column>
                      <Column className="border border-gray_500 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyTwo One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyThree One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyFour One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyFive One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_300 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_300 border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtySix One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtySeven One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyEight One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car ThirtyNine One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_400 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_500 border-solid items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car Forty One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car FortyOne One"
                          />
                          <Text className="statelayer21" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="OutlineGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile"
                            alt="car FortyTwo One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Row className="bg-gray_300_1e items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[20%]">
                        <Img
                          src="images/img_car_2.svg"
                          className="profile"
                          alt="car FortyThree One"
                        />
                        <Text className="statelayer28" variant="body5">
                          Disabled
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="FillGray802"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        variant="OutlineBlack9004c_1"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortyFour One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortyFive One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[19%]">
                        <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortySix One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortySeven One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[20%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortyEight One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[20%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FortyNine One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange1001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 w-[19%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car Fifty One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="profile"
                            alt="car FiftyOne One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car FiftyTwo One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_802 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_1.svg"
                            className="car_Eight"
                            alt="car FiftyThree One"
                          />
                          <Text className="statelayer24" variant="body5">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile"
                            alt="car FiftyFour One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile"
                            alt="car FiftyFive One"
                          />
                          <Text className="statelayer27" variant="body5">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[95%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-end w-[68%]">
                  <Column className="justify-start w-[27%]">
                    <Text className="Labels1" variant="body4">
                      Input chips
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                      <Text className="rowsublabel1" variant="body6">
                        Label only
                      </Text>
                      <Text
                        className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rowsublabel1"
                        variant="body6"
                      >
                        Label & trailing icon
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] rowsublabel1"
                    variant="body6"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[13%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] rowsublabel1"
                    variant="body6"
                  >
                    Label & avatar
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[14%] rowlabel1"
                    variant="body6"
                  >
                    Label, avatar & trailing icon
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[198px] xl:mt-[247px] 2xl:mt-[278px] 3xl:mt-[334px] Labels1"
                  variant="body4"
                >
                  Assist chips
                </Text>
                <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[90%]">
                  <Text
                    className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[16px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label only - elevated
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label & favicon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] text-center w-[11%] rowlabel1"
                    variant="body6"
                  >
                    Label & favicon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label & branded icon
                  </Text>
                  <Text
                    className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-center w-[11%] rowlabel1"
                    variant="body6"
                  >
                    Label & branded icon - elevated
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[155px] xl:mt-[194px] 2xl:mt-[218px] 3xl:mt-[261px] w-[100%]">
                  <Column className="justify-start mb-[2px] w-[20%]">
                    <Text className="Labels1" variant="body4">
                      Filter chips
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[85%]">
                      <Text className="rowsublabel1" variant="body6">
                        Label
                      </Text>
                      <Text
                        className="lg:ml-[33px] xl:ml-[42px] 2xl:ml-[47px] 3xl:ml-[56px] rowsublabel1"
                        variant="body6"
                      >
                        Label - elevated
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="mb-[2px] lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rowsublabel1"
                    variant="body6"
                  >
                    Label & Iconted
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rowsublabel1"
                    variant="body6"
                  >
                    Label & Icon - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-center w-[5%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-center w-[9%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon & label - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-center w-[11%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-center w-[11%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon, label <br />& trailing icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[275px] xl:mt-[344px] 2xl:mt-[388px] 3xl:mt-[465px] Labels1"
                  variant="body4"
                >
                  Suggestion chips
                </Text>
                <Row className="items-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[41%]">
                  <Text
                    className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Outlined
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowsublabel1"
                    variant="body6"
                  >
                    Elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] text-center w-[22%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon & label
                    <br />
                    Outlined
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-center w-[23%] rowlabel1"
                    variant="body6"
                  >
                    Leading icon & label <br />
                    Elevated
                  </Text>
                </Row>
              </Column>
            </Column>
          </Stack>
        </List>
      </Column>
    </>
  );
};

export default ChipsPage;

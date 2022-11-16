import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Stack,
  Row,
  SelectBox,
  Grid,
  Button,
  FloatingInput,
  Input,
} from "components";

const DatepickerPage = () => {
  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[21px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]">
          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[19%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Date picker
              </Text>
              <a
                href={"https://m3.material.io/components/date-pickers/overview"}
                target="_blank"
                className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Date pickers let users select a date, or a range of dates.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="bg-white_A700 lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="items-center justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[31px] pt-[3px] w-[99%]">
              <Stack className="lg:h-[476px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] w-[100%]">
                <Column className="absolute bottom-[3%] items-center justify-start top-[2%] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="bg-white_A701 items-start justify-between xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[100%]">
                      <Column className="bg-white_A701 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-bluegray_100 border-solid items-end justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[59%]">
                            <Text className="statelayer12" variant="body6">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Img
                              src="images/img_edit.svg"
                              className="edit"
                              alt="edit"
                            />
                          </Stack>
                        </Row>
                        <Row className="items-center justify-between p-[4px] w-[100%]">
                          <SelectBox
                            className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_801 tracking-ls1 w-[37%]"
                            placeholderClassName="text-gray_801"
                            name="augustCounter"
                            placeholder="August 2023"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02.svg"
                                className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                                alt="icon"
                              />
                            }
                            shape="CircleBorder20"
                            size="lg"
                            variant="dropdown24"
                          ></SelectBox>
                          <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] w-[30%]">
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_arrowleft_gray_801.svg"
                                className="edit"
                                alt="arrowleft"
                              />
                            </Stack>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_arrowleft_gray_801.svg"
                                className="edit"
                                alt="arrowright"
                              />
                            </Stack>
                          </Row>
                        </Row>
                        <Column className="justify-start lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                S
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                M
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                W
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                F
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                S
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-end ml-[auto] w-[71%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Tuesday" variant="body6">
                                1
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                2
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                3
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                4
                              </Text>
                            </Column>
                            <Text
                              className="border border-lime_900 border-solid flex items-center ml-[4px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one"
                              variant="body6"
                            >
                              5
                            </Text>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                6
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                7
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                8
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                9
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                10
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Friday" variant="body6">
                                11
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                12
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                13
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                14
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                15
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                16
                              </Text>
                            </Column>
                            <Text className="Week3" variant="body6">
                              17
                            </Text>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                18
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body6">
                                19
                              </Text>
                            </Column>
                          </Row>
                          <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[100%]">
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                20
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                              <Text className="Friday" variant="body6">
                                21
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                22
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                23
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                24
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                25
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                26
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                27
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                28
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                29
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday" variant="body6">
                                30
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                              <Text className="Friday" variant="body6">
                                31
                              </Text>
                            </Column>
                          </Grid>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-bluegray_100 border-solid items-end justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[59%]">
                            <Text className="statelayer12" variant="body6">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Img
                              src="images/img_edit.svg"
                              className="edit"
                              alt="edit One"
                            />
                          </Stack>
                        </Row>
                        <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] p-[4px] rounded-radius20 w-[38%]">
                            <Text className="statelayer12" variant="body5">
                              August 2023
                            </Text>
                            <Img
                              src="images/img_icons02.svg"
                              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                              alt="icon"
                            />
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Column className="items-center justify-start mb-[4px] w-[90%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2019
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2020
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2021
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2022
                                </Text>
                              </Column>
                              <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[31%]">
                                <Button
                                  className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center tracking-ls1 w-[100%]"
                                  shape="CircleBorder20"
                                  variant="FillLime900"
                                >
                                  2023
                                </Button>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2024
                                </Text>
                              </Column>
                            </Row>
                            <Grid className="lg:gap-[3px] 2xl:gap-[4px] xl:gap-[4px] 3xl:gap-[5px] grid grid-cols-3 w-[100%]">
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2025
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2026
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2027
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2028
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2029
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2030
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2031
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2032
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body4"
                                >
                                  2033
                                </Text>
                              </Column>
                            </Grid>
                          </Column>
                        </Column>
                        <Column className="border border-bluegray_100 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-center justify-start w-[34%]">
                        <Column className="border border-bluegray_100 border-solid items-center justify-start lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Row className="items-center justify-between w-[97%]">
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_close_18X18.svg"
                                className="edit"
                                alt="close"
                              />
                            </Stack>
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[16%]">
                              <Text className="Configurationt" variant="body5">
                                Save
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-end justify-end lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                            <Column className="justify-start pb-[4px] pr-[4px] w-[68%]">
                              <Text className="statelayer12" variant="body6">
                                Depart - Return dates
                              </Text>
                              <Text
                                className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-gray_900 w-[auto]"
                                variant="body1"
                              >
                                Aug 17 – Aug 23
                              </Text>
                            </Column>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_edit.svg"
                                className="edit"
                                alt="edit Two"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Row className="items-center w-[93%]">
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              S
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              M
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              W
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              F
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body6">
                              S
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header" variant="body5">
                                  August 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    2
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="border border-lime_900 border-solid flex items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one"
                                    variant="body6"
                                  >
                                    5
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    9
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    10
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    11
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    12
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    13
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    14
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    15
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    16
                                  </Text>
                                </Column>
                                <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] pl-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-y-[0] my-[auto] right-[0] w-[48%]"></div>
                                  <Text
                                    className="absolute bg-lime_900 flex font-medium h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-white_A700 tracking-ls1 w-[max-content]"
                                    variant="body6"
                                  >
                                    17
                                  </Text>
                                </Stack>
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[29%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[92%]">
                                        <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[55%]"></div>
                                        <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                      </Stack>
                                      <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                    </Stack>
                                    <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[8%] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="statelayer30"
                                        variant="body6"
                                      >
                                        18
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[65%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[71%]">
                                        <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[55%]"></div>
                                        <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                      </Stack>
                                      <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                    </Stack>
                                    <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="statelayer30"
                                        variant="body6"
                                      >
                                        19
                                      </Text>
                                    </Column>
                                  </Stack>
                                </Stack>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[56%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[84%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[70%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[56%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[94%]">
                                            <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                            <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                          </Stack>
                                          <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[39%]"></div>
                                        </Stack>
                                        <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[6%] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                          <Text
                                            className="statelayer30"
                                            variant="body6"
                                          >
                                            20
                                          </Text>
                                        </Column>
                                      </Stack>
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[69%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[76%]">
                                            <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                            <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                          </Stack>
                                          <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                        </Stack>
                                        <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[24%] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                          <Text
                                            className="statelayer31"
                                            variant="body6"
                                          >
                                            21
                                          </Text>
                                        </Column>
                                      </Stack>
                                    </Stack>
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[37%]">
                                      <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                      <Column className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="statelayer30"
                                          variant="body6"
                                        >
                                          22
                                        </Text>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[30%]">
                                    <div className="absolute bg-orange_100 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[67%]"></div>
                                    <Text
                                      className="absolute bg-lime_900 flex font-medium items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] rounded-radius50 text-white_A700 tracking-ls1 w-[40px]"
                                      variant="body6"
                                    >
                                      23
                                    </Text>
                                  </Stack>
                                </Stack>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    24
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    25
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    26
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    27
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    28
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    29
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    30
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    31
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header" variant="body5">
                                  September 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[29%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    2
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    5
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body6">
                                    9
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    10
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    11
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    12
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    13
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    14
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    15
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title" variant="body6">
                                    16
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="border border-bluegray_100 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[35%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="bg-white_A701 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[65%]">
                      <Column className="bg-white_A701 items-center rounded-radius28 w-[49%]">
                        <Column className="border border-bluegray_100 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header1" variant="body6">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[94%]">
                            <Text
                              className="not-italic text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Enter date
                            </Text>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_lock.svg"
                                className="edit"
                                alt="lock"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Column className="items-center justify-end 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <FloatingInput
                            className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-lime_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                            name="textfield"
                            labelClasses="bg-white_A701 left-[16px] top-[0] text-lime_900"
                            focusedClasses="translate-y-[20px] scale-[1]"
                            wrapperClasses="w-[95%] mt-[2px] top-[0]"
                            labelText="Date"
                            defaultText="mm/dd/yyyy"
                          ></FloatingInput>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius28 w-[49%]">
                        <Column className="border border-bluegray_100 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header1" variant="body6">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[94%]">
                            <Text
                              className="not-italic text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Enter dates
                            </Text>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_lock.svg"
                                className="edit"
                                alt="lock One"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Row className="items-center justify-end 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                          <FloatingInput
                            className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-lime_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                            name="textfield One"
                            labelClasses="bg-white_A701 left-[16px] top-[0] text-lime_900"
                            focusedClasses="translate-y-[20px] scale-[1]"
                            wrapperClasses="w-[43%] mt-[2px] top-[0]"
                            labelText="Date"
                            defaultText="mm/dd/yyyy"
                          ></FloatingInput>
                          <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[51%]">
                            <Text
                              className="border border-gray_600 border-solid 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:pr-[14px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[24px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] title"
                              variant="body4"
                            >
                              End date
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute justify-start left-[2%] w-[23%]">
                  <Text className="Labels" variant="body4">
                    Modal Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[310px] xl:mt-[389px] 2xl:mt-[437px] 3xl:mt-[525px] Labels"
                    variant="body4"
                  >
                    Input Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[140px] xl:mt-[175px] 2xl:mt-[197px] 3xl:mt-[236px] Labels"
                    variant="body4"
                  >
                    Docked Input Date Picker [desktop]
                  </Text>
                </Column>
              </Stack>
              <Row className="bg-white_A701 items-center justify-between lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[98%]">
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content4" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body6"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A701 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] rounded-radius16 w-[100%]">
                    <Row className="items-center justify-between p-[1px] w-[100%]">
                      <Row className="items-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[49%]">
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_801.svg"
                            className="edit"
                            alt="arrowleft One"
                          />
                        </Stack>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_801 tracking-ls1 w-[40%]"
                          placeholderClassName="text-gray_801"
                          name="statelayer"
                          placeholder="Aug"
                          isSearchable={false}
                          isMulti={false}
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown24"
                        ></SelectBox>
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_801.svg"
                            className="edit"
                            alt="arrowright One"
                          />
                        </Stack>
                      </Row>
                      <Row className="items-center justify-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[51%]">
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_801.svg"
                            className="edit"
                            alt="arrowleft Two"
                          />
                        </Stack>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_801 tracking-ls1 w-[43%]"
                          placeholderClassName="text-gray_801"
                          name="zipcode Fourteen"
                          placeholder="2023"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02.svg"
                              className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="icon"
                            />
                          }
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown24"
                        ></SelectBox>
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_801.svg"
                            className="edit"
                            alt="arrowright Two"
                          />
                        </Stack>
                      </Row>
                    </Row>
                    <Column className="items-center justify-start pb-[4px] px-[4px] w-[100%]">
                      <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 w-[95%]">
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            M
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            W
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            F
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday" variant="body6">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body6">
                            26
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body6">
                            27
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body6">
                            28
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body6">
                            29
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body6">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="statelayer31" variant="body6">
                            31
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="Tuesday" variant="body6">
                            1
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            2
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            3
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            4
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            5
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            6
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            7
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            8
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            9
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            10
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="Friday" variant="body6">
                            11
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            12
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            13
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            14
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body6">
                            15
                          </Text>
                        </Column>
                      </Grid>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            16
                          </Text>
                        </Column>
                        <Text className="Week3" variant="body6">
                          17
                        </Text>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            18
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            19
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            20
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Friday" variant="body6">
                            21
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            22
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            23
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            24
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            25
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            26
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            27
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            28
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            29
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday" variant="body6">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text
                            className="ml-[4px] statelayer30"
                            variant="body6"
                          >
                            1
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="statelayer30" variant="body6">
                            2
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="statelayer30" variant="body6">
                            3
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="statelayer30" variant="body6">
                            4
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="statelayer30" variant="body6">
                            5
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="statelayer30" variant="body6">
                            6
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Row className="items-center justify-end ml-[auto] mr-[4px] w-[38%]">
                        <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                          <Text className="Configurationt" variant="body5">
                            Cancel
                          </Text>
                        </Column>
                        <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                          <Text className="Configurationt" variant="body5">
                            OK
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content4" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Three"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body6"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A701 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <SelectBox
                        className="font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_801 tracking-ls1 w-[21%]"
                        placeholderClassName="text-gray_801"
                        name="statelayer One"
                        placeholder="Aug"
                        isSearchable={false}
                        isMulti={false}
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown24"
                      ></SelectBox>
                      <Column className="lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[25%]">
                        <Text
                          className="ml-[4px] mt-[1px] statelayer12"
                          variant="body5"
                        >
                          2023
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[96%]">
                        <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text
                            className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 2xl:mt-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] title"
                            variant="body4"
                          >
                            May
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            June
                          </Text>
                        </Column>
                        <Column className="justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Text className="statelayer34" variant="body4">
                            July
                          </Text>
                        </Column>
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="ListitemList"
                          placeholder="August"
                          prefix={
                            <Img
                              src="images/img_checkmark_6.svg"
                              className="ml-[4px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="lg"
                          variant="FillGray90016"
                        ></Input>
                        <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="statelayer34" variant="body4">
                            September
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            October
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            November
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_600 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content4" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Four"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body6"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A701 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[21%]">
                        <Text
                          className="mb-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] statelayer12"
                          variant="body5"
                        >
                          Aug
                        </Text>
                      </Column>
                      <SelectBox
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_801 tracking-ls1 w-[23%]"
                        placeholderClassName="text-gray_801"
                        name="zipcode Sixteen"
                        placeholder="2023"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_icons02.svg"
                            className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                            alt="icon"
                          />
                        }
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown24"
                      ></SelectBox>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[3px] w-[100%]">
                      <Column className="items-center justify-start w-[96%]">
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="zipcode Seventeen"
                          placeholder="2023"
                          prefix={
                            <Img
                              src="images/img_checkmark_6.svg"
                              className="ml-[0] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="md"
                          variant="FillGray90016"
                        ></Input>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2024
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2025
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2026
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2027
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2028
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body4">
                            2029
                          </Text>
                        </Column>
                        <Column className="items-end justify-end 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text
                            className="lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] title"
                            variant="body4"
                          >
                            2033
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_600 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="items-center justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[31px] pt-[3px] w-[99%]">
              <Stack className="lg:h-[476px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] w-[100%]">
                <Column className="absolute bottom-[3%] items-center justify-start top-[2%] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="bg-gray_900 items-start justify-evenly xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[100%]">
                      <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-gray_800 border-solid items-end justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[59%]">
                            <Text className="statelayer20" variant="body6">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_300 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="edit"
                              alt="edit One"
                            />
                          </Stack>
                        </Row>
                        <Row className="items-center justify-between p-[4px] w-[100%]">
                          <SelectBox
                            className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_400 tracking-ls1 w-[37%]"
                            placeholderClassName="text-gray_400"
                            name="augustCounter One"
                            placeholder="August 2023"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_gray_400.svg"
                                className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                                alt="icon"
                              />
                            }
                            shape="CircleBorder20"
                            size="lg"
                            variant="dropdown24"
                          ></SelectBox>
                          <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] w-[30%]">
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_arrowleft_gray_400.svg"
                                className="edit"
                                alt="arrowleft One"
                              />
                            </Stack>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_arrowleft_gray_400.svg"
                                className="edit"
                                alt="arrowright One"
                              />
                            </Stack>
                          </Row>
                        </Row>
                        <Column className="justify-start lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                S
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                M
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                W
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                F
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                S
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-end ml-[auto] w-[71%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Tuesday1" variant="body6">
                                1
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                2
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                3
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                4
                              </Text>
                            </Column>
                            <Text
                              className="border border-orange_300 border-solid flex items-center ml-[4px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one_one"
                              variant="body6"
                            >
                              5
                            </Text>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                6
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                7
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                8
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                9
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                10
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Friday1" variant="body6">
                                11
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                12
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                13
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                14
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                15
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                16
                              </Text>
                            </Column>
                            <Text className="Week31" variant="body6">
                              17
                            </Text>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                18
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body6">
                                19
                              </Text>
                            </Column>
                          </Row>
                          <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[100%]">
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                20
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                              <Text className="Friday1" variant="body6">
                                21
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                22
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                23
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                24
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                25
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                26
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                27
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                28
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                29
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Sunday1" variant="body6">
                                30
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                              <Text className="Friday1" variant="body6">
                                31
                              </Text>
                            </Column>
                          </Grid>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt2" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt2" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-gray_800 border-solid items-end justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[59%]">
                            <Text className="statelayer20" variant="body6">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_300 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="edit"
                              alt="edit One One"
                            />
                          </Stack>
                        </Row>
                        <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] p-[4px] rounded-radius20 w-[38%]">
                            <Text className="statelayer20" variant="body5">
                              August 2023
                            </Text>
                            <Img
                              src="images/img_icons02_gray_400.svg"
                              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                              alt="icon Three"
                            />
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Column className="items-center justify-start mb-[4px] w-[90%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2019
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2020
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2021
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2022
                                </Text>
                              </Column>
                              <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[31%]">
                                <Button
                                  className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center tracking-ls1 w-[100%]"
                                  shape="CircleBorder20"
                                  variant="FillOrange300"
                                >
                                  2023
                                </Button>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2024
                                </Text>
                              </Column>
                            </Row>
                            <Grid className="lg:gap-[3px] 2xl:gap-[4px] xl:gap-[4px] 3xl:gap-[5px] grid grid-cols-3 w-[100%]">
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2025
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2026
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2027
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2028
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2029
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2030
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2031
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2032
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body4"
                                >
                                  2033
                                </Text>
                              </Column>
                            </Grid>
                          </Column>
                        </Column>
                        <Column className="border border-gray_800 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt2" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt2" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center justify-start w-[34%]">
                        <Column className="border border-gray_800 border-solid items-center justify-start lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Row className="items-center justify-between w-[97%]">
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_close_1.svg"
                                className="edit"
                                alt="close One"
                              />
                            </Stack>
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[16%]">
                              <Text className="Configurationt2" variant="body5">
                                Save
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-end justify-end lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                            <Column className="justify-start pb-[4px] pr-[4px] w-[68%]">
                              <Text className="statelayer20" variant="body6">
                                Depart - Return dates
                              </Text>
                              <Text
                                className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-gray_300 w-[auto]"
                                variant="body1"
                              >
                                Aug 17 – Aug 23
                              </Text>
                            </Column>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_edit_24X24.svg"
                                className="edit"
                                alt="edit Two One"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Row className="items-center w-[93%]">
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              S
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              M
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              W
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              F
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body6">
                              S
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header2" variant="body5">
                                  August 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    2
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="border border-orange_300 border-solid flex items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one_one"
                                    variant="body6"
                                  >
                                    5
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    9
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    10
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    11
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    12
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    13
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    14
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    15
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    16
                                  </Text>
                                </Column>
                                <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] pl-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-y-[0] my-[auto] right-[0] w-[48%]"></div>
                                  <Text
                                    className="absolute bg-orange_300 flex font-medium h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-gray_902 tracking-ls1 w-[max-content]"
                                    variant="body6"
                                  >
                                    17
                                  </Text>
                                </Stack>
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[29%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]">
                                    <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                    <Stack className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] 3xl:pl-[11px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] w-[100%]">
                                      <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                      <Text
                                        className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-gray_400 tracking-ls1 w-[max-content]"
                                        variant="body6"
                                      >
                                        18
                                      </Text>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[65%]">
                                    <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                    <Stack className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] 3xl:pl-[11px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] right-[0] w-[77%]">
                                      <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                      <Text
                                        className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-gray_400 tracking-ls1 w-[max-content]"
                                        variant="body6"
                                      >
                                        19
                                      </Text>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[56%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[77%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[76%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[56%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[77%]">
                                            <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                            <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]"></div>
                                          </Stack>
                                          <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[61%]"></div>
                                        </Stack>
                                        <Text
                                          className="absolute h-[max-content] inset-y-[0] left-[26%] my-[auto] Supportingtext_Eight_One"
                                          variant="body6"
                                        >
                                          20
                                        </Text>
                                      </Stack>
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[69%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[82%]">
                                            <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                            <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[77%]"></div>
                                          </Stack>
                                          <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                        </Stack>
                                        <Text
                                          className="absolute flex font-normal h-[max-content] inset-[0] items-center justify-center m-[auto] not-italic text-gray_400 tracking-ls1 w-[max-content]"
                                          variant="body6"
                                        >
                                          21
                                        </Text>
                                      </Stack>
                                    </Stack>
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[43%]">
                                      <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                      <Column className="absolute bg-gray_802 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] right-[0] w-[77%]">
                                        <Text
                                          className="BuildingBlocks1"
                                          variant="body6"
                                        >
                                          22
                                        </Text>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[30%]">
                                    <div className="absolute bg-gray_802 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[67%]"></div>
                                    <Text
                                      className="absolute bg-orange_300 flex font-medium items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] rounded-radius50 text-gray_902 tracking-ls1 w-[40px]"
                                      variant="body6"
                                    >
                                      23
                                    </Text>
                                  </Stack>
                                </Stack>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    24
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    25
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    26
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    27
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    28
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    29
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    30
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    31
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header2" variant="body5">
                                  September 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[29%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    2
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    5
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body6">
                                    9
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    10
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    11
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    12
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    13
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    14
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    15
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[14%]">
                                  <Text className="title_Two" variant="body6">
                                    16
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="border border-gray_800 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[35%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt2" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt2" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="bg-gray_900 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[65%]">
                      <Column className="bg-gray_900 items-center rounded-radius28 w-[49%]">
                        <Column className="border border-gray_800 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header3" variant="body6">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[94%]">
                            <Text
                              className="not-italic text-gray_300 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Enter dates
                            </Text>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_camera.svg"
                                className="edit"
                                alt="camera"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Column className="items-center justify-end 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <FloatingInput
                            className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_300 placeholder:text-orange_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                            name="textfield One"
                            labelClasses="bg-gray_900 left-[16px] top-[0] text-orange_300"
                            focusedClasses="translate-y-[20px] scale-[1]"
                            wrapperClasses="w-[95%] mt-[2px] top-[0]"
                            labelText="Date"
                            defaultText="mm/dd/yyyy"
                            variant="OutlineOrange300"
                          ></FloatingInput>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt2" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt2" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius28 w-[49%]">
                        <Column className="border border-gray_800 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header3" variant="body6">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[94%]">
                            <Text
                              className="not-italic text-gray_300 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Enter dates
                            </Text>
                            <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                              <Img
                                src="images/img_camera.svg"
                                className="edit"
                                alt="camera One"
                              />
                            </Stack>
                          </Row>
                        </Column>
                        <Row className="items-center justify-end 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                          <FloatingInput
                            className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_300 placeholder:text-orange_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                            name="textfield One One"
                            labelClasses="bg-gray_900 left-[16px] top-[0] text-orange_300"
                            focusedClasses="translate-y-[20px] scale-[1]"
                            wrapperClasses="w-[43%] mt-[2px] top-[0]"
                            labelText="Date"
                            defaultText="mm/dd/yyyy"
                            variant="OutlineOrange300"
                          ></FloatingInput>
                          <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[51%]">
                            <Text
                              className="border border-gray_500 border-solid 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:pr-[14px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[24px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] title_Two"
                              variant="body4"
                            >
                              End date
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt2" variant="body5">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt2" variant="body5">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute justify-start left-[2%] w-[23%]">
                  <Text className="Labels1" variant="body4">
                    Modal Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[310px] xl:mt-[389px] 2xl:mt-[437px] 3xl:mt-[525px] Labels1"
                    variant="body4"
                  >
                    Input Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[140px] xl:mt-[175px] 2xl:mt-[197px] 3xl:mt-[236px] Labels1"
                    variant="body4"
                  >
                    Docked Input Date Picker [desktop]
                  </Text>
                </Column>
              </Stack>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[98%]">
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content5" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_Two" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two_one"
                        variant="body6"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] rounded-radius16 w-[100%]">
                    <Row className="items-center justify-between p-[1px] w-[100%]">
                      <Row className="items-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[49%]">
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_400.svg"
                            className="edit"
                            alt="arrowleft One One"
                          />
                        </Stack>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_400 tracking-ls1 w-[40%]"
                          placeholderClassName="text-gray_400"
                          name="statelayer One"
                          placeholder="Aug"
                          isSearchable={false}
                          isMulti={false}
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown24"
                        ></SelectBox>
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_400.svg"
                            className="edit"
                            alt="arrowright One One"
                          />
                        </Stack>
                      </Row>
                      <Row className="items-center justify-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[51%]">
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_400.svg"
                            className="edit"
                            alt="arrowleft Two One"
                          />
                        </Stack>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_400 tracking-ls1 w-[43%]"
                          placeholderClassName="text-gray_400"
                          name="zipcode Fourteen One"
                          placeholder="2023"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_gray_400.svg"
                              className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="icon"
                            />
                          }
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown24"
                        ></SelectBox>
                        <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Img
                            src="images/img_arrowleft_gray_400.svg"
                            className="edit"
                            alt="arrowright Two One"
                          />
                        </Stack>
                      </Row>
                    </Row>
                    <Column className="items-center justify-start pb-[4px] px-[4px] w-[100%]">
                      <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 w-[95%]">
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            M
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            W
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            F
                          </Text>
                        </Column>
                        <Column className="griddate_eightyeight">
                          <Text className="Sunday1" variant="body6">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body6">
                            26
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body6">
                            27
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body6">
                            28
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body6">
                            29
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body6">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="ml-[1px] Sunday2" variant="body6">
                            31
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="Tuesday1" variant="body6">
                            1
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            2
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            3
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            4
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            5
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            6
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            7
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            8
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            9
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            10
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text className="Friday1" variant="body6">
                            11
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            12
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            13
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            14
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body6">
                            15
                          </Text>
                        </Column>
                      </Grid>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            16
                          </Text>
                        </Column>
                        <Text className="Week31" variant="body6">
                          17
                        </Text>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            18
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            19
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            20
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Friday1" variant="body6">
                            21
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            22
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            23
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            24
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            25
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            26
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            27
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            28
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            29
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday1" variant="body6">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="ml-[4px] Sunday2" variant="body6">
                            1
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday2" variant="body6">
                            2
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday2" variant="body6">
                            3
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday2" variant="body6">
                            4
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday2" variant="body6">
                            5
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Sunday2" variant="body6">
                            6
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Row className="items-center justify-end ml-[auto] mr-[4px] w-[38%]">
                        <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                          <Text className="Configurationt2" variant="body5">
                            Cancel
                          </Text>
                        </Column>
                        <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                          <Text className="Configurationt2" variant="body5">
                            OK
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content5" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_Two" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Three"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two_one"
                        variant="body6"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-gray_800 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <SelectBox
                        className="font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_400 tracking-ls1 w-[21%]"
                        placeholderClassName="text-gray_400"
                        name="statelayer One One"
                        placeholder="Aug"
                        isSearchable={false}
                        isMulti={false}
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown24"
                      ></SelectBox>
                      <Column className="lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[25%]">
                        <Text
                          className="ml-[4px] mt-[1px] statelayer20"
                          variant="body5"
                        >
                          2023
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[97%]">
                        <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text
                            className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 2xl:mt-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] title_Two"
                            variant="body4"
                          >
                            May
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            June
                          </Text>
                        </Column>
                        <Column className="justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Text className="statelayer38" variant="body4">
                            July
                          </Text>
                        </Column>
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_300 text-gray_300 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="ListitemList One"
                          placeholder="August"
                          prefix={
                            <Img
                              src="images/img_checkmark_7.svg"
                              className="ml-[4px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="lg"
                          variant="FillGray30014"
                        ></Input>
                        <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="statelayer38" variant="body4">
                            September
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            October
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            November
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_500 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content5" variant="body6">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_Two" variant="body4">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Four"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two_one"
                        variant="body6"
                      >
                        Supporting text
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-gray_800 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[21%]">
                        <Text
                          className="mb-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] statelayer20"
                          variant="body5"
                        >
                          Aug
                        </Text>
                      </Column>
                      <SelectBox
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_400 tracking-ls1 w-[23%]"
                        placeholderClassName="text-gray_400"
                        name="zipcode Sixteen One"
                        placeholder="2023"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_icons02_gray_400.svg"
                            className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                            alt="icon"
                          />
                        }
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown24"
                      ></SelectBox>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[97%]">
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_300 text-gray_300 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="zipcode Seventeen One"
                          placeholder="2023"
                          prefix={
                            <Img
                              src="images/img_checkmark_7.svg"
                              className="ml-[1px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="md"
                          variant="FillGray30014"
                        ></Input>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2024
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2025
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2026
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2027
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2028
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body4">
                            2029
                          </Text>
                        </Column>
                        <Column className="items-end justify-end 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text
                            className="lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] title_Two"
                            variant="body4"
                          >
                            2033
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_500 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default DatepickerPage;

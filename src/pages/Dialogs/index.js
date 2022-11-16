import React from "react";

import { Column, Img, Text, List, Row, Stack, Line } from "components";

const DialogsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[100%]">
          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] w-[58%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Dialogs
              </Text>
              <a
                href={"http://m3.material.io/components/dialogs/overview"}
                target="_blank"
                className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Dialogs provide important prompts in a user flow. They can
                require an action, communicate information for making decisions,
                or help users accomplish a focused task.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] lg:p-[30px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] w-[100%]"
          orientation="horizontal"
        >
          <Row className="bg-white_A701 border border-bluegray_100 border-solid items-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A701 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[33%]">
              <Column className="bg-white_A701 items-end justify-start rounded-radius28 w-[100%]">
                <Column className="justify-end lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] w-[100%]">
                  <Text
                    className="not-italic text-gray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Basic dialog title
                  </Text>
                  <Text className="description_One" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[62%]">
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="items-center 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt" variant="body5">
                        Action 2
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt" variant="body5">
                        Action 1
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A701 items-end justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-end lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="clock"
                    alt="clock"
                  />
                  <Text
                    className="text-gray_900 w-[auto] TitleDescrip1"
                    as="h6"
                    variant="h6"
                  >
                    Dialog with hero icon
                  </Text>
                  <Text className="description_One" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[62%]">
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="items-center 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt" variant="body5">
                        Action 2
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt" variant="body5">
                        Action 1
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A701 items-center justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[33%]">
              <Column className="bg-white_A701 items-center justify-start rounded-radius28 w-[100%]">
                <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Text
                    className="not-italic text-gray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dialog Title
                  </Text>
                  <Text className="description_One" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer40" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                        <Text
                          className="text-gray_801 tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          100+
                        </Text>
                        <Column className="items-center ml-[2px] w-[53%]">
                          <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                            <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark2"
                              alt="checkmark"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer40" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                        <Text
                          className="text-gray_801 tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          100+
                        </Text>
                        <Column className="items-center ml-[2px] w-[53%]">
                          <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                            <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark2"
                              alt="checkmark One"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Text className="statelayer40" variant="body4">
                      A
                    </Text>
                    <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                      <Text className="Content" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                      <Text
                        className="text-gray_801 tracking-ls1 w-[auto]"
                        variant="body7"
                      >
                        100+
                      </Text>
                      <Column className="items-center ml-[2px] w-[53%]">
                        <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                          <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark2"
                            alt="checkmark Two"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Row>
                </Column>
                <Row className="items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[29%]">
                    <Text className="Configurationt" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[29%]">
                    <Text className="Configurationt" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A701 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="clock"
                    alt="clock One"
                  />
                  <Text
                    className="text-gray_900 w-[auto] TitleDescrip1"
                    as="h6"
                    variant="h6"
                  >
                    Dialog with hero icon
                  </Text>
                  <Text className="description_One" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer40" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                        <Text
                          className="text-gray_801 tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          100+
                        </Text>
                        <Column className="items-center ml-[2px] w-[53%]">
                          <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                            <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark2"
                              alt="checkmark Three"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer40" variant="body4">
                        A
                      </Text>
                      <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                        <Text className="Content" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                        <Text
                          className="text-gray_801 tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          100+
                        </Text>
                        <Column className="items-center ml-[2px] w-[53%]">
                          <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                            <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="checkmark2"
                              alt="checkmark Four"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Text className="statelayer40" variant="body4">
                      A
                    </Text>
                    <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[47%]">
                      <Text className="Content" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[20%]">
                      <Text
                        className="text-gray_801 tracking-ls1 w-[auto]"
                        variant="body7"
                      >
                        100+
                      </Text>
                      <Column className="items-center ml-[2px] w-[53%]">
                        <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                          <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark.svg"
                            className="checkmark2"
                            alt="checkmark Five"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Row>
                </Column>
                <Row className="items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[29%]">
                    <Text className="Configurationt" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[29%]">
                    <Text className="Configurationt" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A701 items-center justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[30%]">
              <Column className="bg-white_A701 items-center justify-start rounded-radius28 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                    <Text
                      className="not-italic text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Dialog Title
                    </Text>
                    <Text className="description_One" variant="body5">
                      A dialog is a type of modal window that appears in front
                      of app content to provide critical information, or ask for
                      a decision.
                    </Text>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer40" variant="body4">
                            A
                          </Text>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                            <Text className="Content" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Text
                              className="text-gray_801 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              100+
                            </Text>
                            <Column className="items-center ml-[2px] w-[53%]">
                              <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                                <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="checkmark2"
                                  alt="checkmark Six"
                                />
                              </Stack>
                            </Column>
                          </Row>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer40" variant="body4">
                            A
                          </Text>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                            <Text className="Content" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Text
                              className="text-gray_801 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              100+
                            </Text>
                            <Column className="items-center ml-[2px] w-[53%]">
                              <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                                <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="checkmark2"
                                  alt="checkmark Seven"
                                />
                              </Stack>
                            </Column>
                          </Row>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer40" variant="body4">
                            A
                          </Text>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                            <Text className="Content" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Text
                              className="text-gray_801 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              100+
                            </Text>
                            <Column className="items-center ml-[2px] w-[53%]">
                              <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                                <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="checkmark2"
                                  alt="checkmark Eight"
                                />
                              </Stack>
                            </Column>
                          </Row>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A701 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                    <Img
                      src="images/img_clock.svg"
                      className="clock"
                      alt="clock Two"
                    />
                    <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="not-italic text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Dialog with hero icon
                      </Text>
                      <Text className="description_One" variant="body5">
                        A dialog is a type of modal window that appears in front
                        of app content to provide critical information, or
                        prompt for a decision to be made.{" "}
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer40" variant="body4">
                            A
                          </Text>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                            <Text className="Content" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Text
                              className="text-gray_801 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              100+
                            </Text>
                            <Column className="items-center ml-[2px] w-[53%]">
                              <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                                <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="checkmark2"
                                  alt="checkmark Nine"
                                />
                              </Stack>
                            </Column>
                          </Row>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer40" variant="body4">
                            A
                          </Text>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                            <Text className="Content" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Text
                              className="text-gray_801 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              100+
                            </Text>
                            <Column className="items-center ml-[2px] w-[53%]">
                              <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                                <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="checkmark2"
                                  alt="checkmark Ten"
                                />
                              </Stack>
                            </Column>
                          </Row>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Text className="statelayer40" variant="body4">
                          A
                        </Text>
                        <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[41%]">
                          <Text className="Content" variant="body4">
                            List item
                          </Text>
                        </Column>
                        <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                          <Text
                            className="text-gray_801 tracking-ls1 w-[auto]"
                            variant="body7"
                          >
                            100+
                          </Text>
                          <Column className="items-center ml-[2px] w-[53%]">
                            <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:pl-[3px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] rounded-radius12 w-[100%]">
                              <div className="absolute bg-lime_900 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-y-[0] my-[auto] right-[9%] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="checkmark2"
                                alt="checkmark Eleven"
                              />
                            </Stack>
                          </Column>
                        </Row>
                      </Row>
                      <Column className="items-center justify-start 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[73px] xl:mt-[91px] w-[100%]">
                        <Column className="justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text
                            className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] statelayer42"
                            variant="body4"
                          >
                            A
                          </Text>
                        </Column>
                        <Line className="bg-bluegray_100 h-[1px] xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[165px] lg:mt-[97px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[165px] lg:mt-[97px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer42" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma"
                              />
                              <div className="bg-lime_900 h-[1px] lg:mt-[105px] xl:mt-[132px] 2xl:mt-[149px] 3xl:mt-[178px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[122px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[206px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[122px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[206px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer42" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma One"
                              />
                              <div className="bg-lime_900 h-[1px] lg:mt-[130px] xl:mt-[163px] 2xl:mt-[183px] 3xl:mt-[220px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[146px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[247px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[146px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[247px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer42" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Two"
                              />
                              <div className="bg-lime_900 h-[1px] lg:mt-[154px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[261px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[171px] xl:mt-[214px] 2xl:mt-[240px] 3xl:mt-[288px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[171px] xl:mt-[214px] 2xl:mt-[240px] 3xl:mt-[288px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer42" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Three"
                              />
                              <div className="bg-lime_900 h-[1px] lg:mt-[179px] xl:mt-[224px] 2xl:mt-[252px] 3xl:mt-[302px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[195px] xl:mt-[244px] 2xl:mt-[275px] 3xl:mt-[330px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[195px] xl:mt-[244px] 2xl:mt-[275px] 3xl:mt-[330px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer42" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Four"
                              />
                              <div className="bg-lime_900 h-[1px] lg:mt-[203px] xl:mt-[254px] 2xl:mt-[286px] 3xl:mt-[343px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[219px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[89%]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="bg-gray_900 items-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[33%]">
              <Column className="bg-gray_900 items-end justify-start rounded-radius28 w-[100%]">
                <Column className="justify-end lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] w-[100%]">
                  <Text
                    className="not-italic text-gray_300 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Basic dialog title
                  </Text>
                  <Text className="description_Two" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[62%]">
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="items-center 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt2" variant="body5">
                        Action 2
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt2" variant="body5">
                        Action 1
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-end justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-end p-[4px] w-[100%]">
                  <Stack className="lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] px-[2px] w-[87%]">
                    <Img
                      src="images/img_download.svg"
                      className="download"
                      alt="download"
                    />
                  </Stack>
                  <Text className="Title_One1" as="h6" variant="h6">
                    Dialog with hero icon
                  </Text>
                  <Text
                    className="font-normal xl:leading-[10px] 2xl:leading-[12px] 3xl:leading-[14px] lg:leading-[8px] text-gray_400 tracking-ls1 w-[87%] TitleDescrip1"
                    variant="body5"
                  >
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[62%]">
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="items-center 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt2" variant="body5">
                        Action 2
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[43%]">
                      <Text className="Configurationt2" variant="body5">
                        Action 1
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[33%]">
              <Column className="bg-gray_900 justify-start rounded-radius28 w-[100%]">
                <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Text
                    className="not-italic text-gray_300 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dialog Title
                  </Text>
                  <Text className="description_Two" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer43" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                          <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="download"
                            alt="checkmark One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer43" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                          <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="download"
                            alt="checkmark One One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Text className="statelayer43" variant="body4">
                      A
                    </Text>
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                      <Text className="Content1" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                      <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="download"
                          alt="checkmark Two One"
                        />
                      </Stack>
                    </Column>
                  </Row>
                </Column>
                <Row className="items-center ml-[auto] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[65%]">
                  <Column className="items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[45%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[45%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-gray_900 justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Stack className="lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] px-[2px] w-[100%]">
                    <Img
                      src="images/img_download.svg"
                      className="download"
                      alt="download One"
                    />
                  </Stack>
                  <Text className="Title_One1" as="h6" variant="h6">
                    Dialog with hero icon
                  </Text>
                  <Text className="description_Two" variant="body5">
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.{" "}
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer43" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                          <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="download"
                            alt="checkmark Three One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Text className="statelayer43" variant="body4">
                        A
                      </Text>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                        <Text className="Content1" variant="body4">
                          List item
                        </Text>
                      </Column>
                      <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                          <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          <Img
                            src="images/img_checkmark_1.svg"
                            className="download"
                            alt="checkmark Four One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[90%]" />
                  </Column>
                  <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Text className="statelayer43" variant="body4">
                      A
                    </Text>
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[59%]">
                      <Text className="Content1" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                      <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="download"
                          alt="checkmark Five One"
                        />
                      </Stack>
                    </Column>
                  </Row>
                </Column>
                <Row className="items-center ml-[auto] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[65%]">
                  <Column className="items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[45%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[45%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[30%]">
              <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                    <Text
                      className="not-italic text-gray_300 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Dialog Title
                    </Text>
                    <Text className="description_Two" variant="body5">
                      A dialog is a type of modal window that appears in front
                      of app content to provide critical information, or ask for
                      a decision.
                    </Text>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Six One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Seven One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Eight One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="items-center justify-end xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-gray_900 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius28 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                    <Stack className="lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] px-[2px] w-[100%]">
                      <Img
                        src="images/img_download.svg"
                        className="download"
                        alt="download Two"
                      />
                    </Stack>
                    <Text className="Title_One1" as="h6" variant="h6">
                      Dialog with hero icon
                    </Text>
                    <Text className="description_Two" variant="body5">
                      A dialog is a type of modal window that appears in front
                      of app content to provide critical information, or prompt
                      for a decision to be made.{" "}
                    </Text>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Nine One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Ten One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="statelayer43" variant="body4">
                            A
                          </Text>
                          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[55%]">
                            <Text className="Content1" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                              <div className="absolute bg-orange_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] inset-[0] justify-center m-[auto] rounded-radius2 2xl:w-[10px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="download"
                                alt="checkmark Eleven One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] mt-[1px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start 2xl:mt-[103px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[100%]">
                        <Row className="items-start justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center justify-start w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma One"
                              />
                              <div className="bg-orange_300 h-[1px] xl:mt-[102px] 2xl:mt-[115px] 3xl:mt-[138px] lg:mt-[81px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] xl:mt-[122px] 2xl:mt-[138px] 3xl:mt-[165px] lg:mt-[98px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start xl:mt-[122px] 2xl:mt-[138px] 3xl:mt-[165px] lg:mt-[98px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma One One"
                              />
                              <div className="bg-orange_300 h-[1px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[149px] 3xl:mt-[179px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[207px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[207px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Two One"
                              />
                              <div className="bg-orange_300 h-[1px] lg:mt-[130px] xl:mt-[163px] 2xl:mt-[184px] 3xl:mt-[220px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] lg:mt-[147px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[248px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[147px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[248px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Three One"
                              />
                              <div className="bg-orange_300 h-[1px] lg:mt-[155px] xl:mt-[194px] 2xl:mt-[218px] 3xl:mt-[262px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] lg:mt-[171px] xl:mt-[214px] 2xl:mt-[241px] 3xl:mt-[289px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[171px] xl:mt-[214px] 2xl:mt-[241px] 3xl:mt-[289px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Four One"
                              />
                              <div className="bg-orange_300 h-[1px] lg:mt-[179px] xl:mt-[224px] 2xl:mt-[252px] 3xl:mt-[303px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] lg:mt-[195px] xl:mt-[245px] 2xl:mt-[275px] 3xl:mt-[330px] w-[89%]" />
                      </Column>
                      <Column className="items-center justify-start lg:mt-[195px] xl:mt-[245px] 2xl:mt-[275px] 3xl:mt-[330px] w-[100%]">
                        <Row className="items-center justify-evenly lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                          <Text className="statelayer44" variant="body4">
                            A
                          </Text>
                          <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[55%]">
                            <Text className="title_Two" variant="body4">
                              List item
                            </Text>
                          </Column>
                          <Column className="items-center w-[15%]">
                            <Column className="items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]">
                              <Img
                                src="images/img_iconschecksma_gray_902.svg"
                                className="h-[1px] w-[100%]"
                                alt="Iconschecksma Five"
                              />
                              <div className="bg-orange_300 h-[1px] lg:mt-[204px] xl:mt-[255px] 2xl:mt-[287px] 3xl:mt-[344px] w-[75%]"></div>
                            </Column>
                          </Column>
                        </Row>
                        <Line className="bg-gray_800 h-[1px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[310px] 3xl:mt-[372px] w-[89%]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="bg-gray_900 items-start justify-end mt-[1px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Column className="items-center justify-start mb-[4px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 2
                    </Text>
                  </Column>
                  <Column className="items-center justify-start mb-[4px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[33%]">
                    <Text className="Configurationt2" variant="body5">
                      Action 1
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
        </List>
      </Column>
    </>
  );
};

export default DialogsPage;

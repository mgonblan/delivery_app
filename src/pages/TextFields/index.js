import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Row,
  Stack,
  Line,
  Grid,
  Input,
  FloatingInput,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const TextFieldsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const [inputvalue2, setInputvalue2] = React.useState("");
  const [inputvalue3, setInputvalue3] = React.useState("");
  const [inputvalue4, setInputvalue4] = React.useState("");
  const [inputvalue5, setInputvalue5] = React.useState("");
  const [inputvalue6, setInputvalue6] = React.useState("");
  const [inputvalue7, setInputvalue7] = React.useState("");
  const [inputvalue8, setInputvalue8] = React.useState("");
  const [inputvalue9, setInputvalue9] = React.useState("");
  const [inputvalue10, setInputvalue10] = React.useState("");
  const [inputvalue11, setInputvalue11] = React.useState("");
  const [inputvalue12, setInputvalue12] = React.useState("");
  const [inputvalue13, setInputvalue13] = React.useState("");
  const [inputvalue14, setInputvalue14] = React.useState("");
  const [inputvalue15, setInputvalue15] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
          <Column className="justify-start 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[28%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Text Fields
              </Text>
              <a
                href={"https://m3.material.io/components/text-fields/overview"}
                target="_blank"
                className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Text fields allow users to enter text into a UI. They typically
                appear in forms and dialogs.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[21px] 3xl:gap-[26px] grid grid-cols-2 min-h-[auto] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[45px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A701 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Two"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Three"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Grid className="xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-5 mt-[4px] w-[100%]">
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Four"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Five"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Six"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Seven"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Eight"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Nine"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Ten"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Two"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Eleven"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Twelve"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Thirteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Two"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Fourteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Three"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Three"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Four"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Fifteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Grid>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Five"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Sixteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Six"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Row className="items-start mb-[1px] w-[41%]">
                          <Text className="Content" variant="body4">
                            Label
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Seventeen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-evenly py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Seven"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Eighteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Eight"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Four"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Nine"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Nineteen"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Ten"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Twenty"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Eleven"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyOne"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Twelve"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyTwo"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Thirteen"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Five"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Fourteen"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyThree"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="title" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="columnlabeltext_one" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="rowinputtext" variant="body4">
                          Input
                        </Text>
                        <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[20%]">
                        <Text className="title" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="columnlabeltext_three" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="rowinputtext" variant="body4">
                          Input
                        </Text>
                        <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[20%]">
                        <Text className="title" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer52" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer52" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer52" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="columnlabeltext_one" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] my-[4px] w-[46%]">
                        <Text className="title" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="columnlabeltext_three" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] my-[4px] w-[46%]">
                        <Text className="title" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Fifteen"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Sixteen"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Seventeen"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Eighteen"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Nineteen"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Twenty"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyOne"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyTwo"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyThree"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyFour"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyFive"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentySix"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="columnlabeltext_one" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentySeven"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_302 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyEight"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_900 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search TwentyNine"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyFour"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyFive"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentySix"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content12" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Six"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_600_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                      <Text className="content13" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body4"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close_24X24.svg"
                        className="close3"
                        alt="close TwentySeven"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyEight"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[19%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext.svg"
                          className="inputtext_TwentyFive"
                          alt="inputtext TwentyFive"
                        />
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close TwentyNine"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Thirty"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Seven"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-center justify-end outline outline-[0.5px] outline-gray_900_1e pl-[4px] py-[4px] rounded-radius4 w-[100%]">
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                      <Text
                        className="mb-[1px] columninputtext_twentyfour"
                        variant="body4"
                      >
                        Label
                      </Text>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close_24X24.svg"
                        className="close3"
                        alt="close ThirtyOne"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtyTwo"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtyThree"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtyFour"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content12" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Eight"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_900_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Text className="content13" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body4"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close_24X24.svg"
                        className="close3"
                        alt="close ThirtyFive"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search Thirty"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content15" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title" variant="body4">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtySix"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search ThirtyOne"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content16" variant="body6">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="rowinputtext" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtySeven"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search ThirtyTwo"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content15" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title" variant="body4">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close ThirtyEight"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search ThirtyThree"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content17" variant="body6">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="rowinputtext" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Nine"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_600_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[41%]">
                      <Stack className="absolute bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search ThirtyFour"
                        />
                      </Stack>
                      <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                        <Text className="content18" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="columninputtext_twentyfour"
                            variant="body4"
                          >
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close_24X24.svg"
                        className="close3"
                        alt="close ThirtyNine"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search ThirtySix"
                          />
                        </Stack>
                        <Column className="absolute items-end justify-start right-[0] top-[0] w-[76%]">
                          <Text className="content6" variant="body6">
                            Label
                          </Text>
                          <Img
                            src="images/img_inputtext.svg"
                            className="inputtext_ThirtyOne"
                            alt="inputtext ThirtyOne"
                          />
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close Forty"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue2}
                    onChange={(e) => setInputvalue2(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Two"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue2?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue2("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue2?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue2("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineRed900"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue3}
                    onChange={(e) => setInputvalue3(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_900_7c text-gray_900_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue3?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue3("")}
                          color="#7c1e1b16"
                        />
                      ) : inputvalue3?.length > 0 ? (
                        <CloseSVG
                          color="#7c1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue3("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray9001e"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search ThirtyNine"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content11" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close FortyOne"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search Forty"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content6" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close FortyTwo"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search FortyOne"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content11" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close3"
                          alt="close FortyThree"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close3"
                            alt="search FortyTwo"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content12" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_volume_24X24.svg"
                          className="close3"
                          alt="volume Ten"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_900_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[66%]">
                      <Stack className="absolute bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FortyThree"
                        />
                      </Stack>
                      <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                        <Text className="content13" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text
                            className="columninputtext_twentyfour"
                            variant="body4"
                          >
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close_24X24.svg"
                        className="close3"
                        alt="close FortyFour"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900 text-gray_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Three"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray600"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-lime_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Four"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-lime_900"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900 text-gray_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Five"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray600"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-red_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Six"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-red_900"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineRed900"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900_7c text-gray_900_7c placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="statelayer One"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900_7c"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray6001e"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined" variant="body4">
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] w-[21%]">
                      <Text className="content6" variant="body6">
                        Label
                      </Text>
                      <Img
                        src="images/img_inputtext.svg"
                        className="inputtext_TwentyFive"
                        alt="inputtext ThirtyTwo"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined" variant="body4">
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="border-2 border-red_900 border-solid 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 title"
                    variant="body4"
                  >
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="outline outline-[0.5px] outline-gray_900_1e 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 columninputtext_twentyfour"
                    variant="body4"
                  >
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900 text-gray_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Ten"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray600"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-lime_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Eleven"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-lime_900"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900 text-gray_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Twelve"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray600"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_900 placeholder:text-red_900 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Thirteen"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-red_900"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineRed900"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="bg-transparent placeholder:bg-white_A701 border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_900_7c text-gray_900_7c placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="statelayer Three"
                    labelClasses="bg-white_A701 left-[16px] top-[0] text-gray_900_7c"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray9001e"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FortyFour"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content15" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FortyFive"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content16" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FortySix"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content15" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FortySeven"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content17" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-red_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_600_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="close3"
                        alt="search FortyEight"
                      />
                    </Stack>
                    <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                      <Text className="content18" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body4"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue4}
                    onChange={(e) => setInputvalue4(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Fourteen"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue4?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue4("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search Fifty"
                        />
                      </Stack>
                      <Column className="absolute items-end justify-start left-[6%] top-[0] w-[19%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext.svg"
                          className="inputtext_ThirtyOne"
                          alt="inputtext ThirtyEight"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue5}
                    onChange={(e) => setInputvalue5(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Fifteen"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue5?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue5("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue6}
                    onChange={(e) => setInputvalue6(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Sixteen"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue6?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue6("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineRed900"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue7}
                    onChange={(e) => setInputvalue7(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_900_7c text-gray_900_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer Four"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue7?.length > 0 ? (
                        <CloseSVG
                          color="#7c1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue7("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray9001e"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FiftyThree"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FiftyFour"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FiftyFive"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content11" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_801.svg"
                          className="close3"
                          alt="search FiftySix"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content12" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_900_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_search_gray_801.svg"
                        className="close3"
                        alt="search FiftySeven"
                      />
                    </Stack>
                    <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                      <Text className="content13" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body4"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one2" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close One One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Two One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Three One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Grid className="xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-5 mt-[4px] w-[100%]">
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Four One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Five One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Six One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Seven One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Eight One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Nine One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Ten One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Two"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Eleven One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Eight"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Twelve One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search One One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Thirteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Two One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Fourteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Three One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Three"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Four One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Fifteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Grid>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Five One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Sixteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Six One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Row className="items-start mb-[1px] w-[41%]">
                          <Text className="Content1" variant="body4">
                            Label
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Seventeen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-evenly py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Seven One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Eighteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Eight One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Four"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Nine One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Nineteen One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Ten One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Twenty One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Eleven One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyOne One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Twelve One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyTwo One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Thirteen One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Five"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Fourteen One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyThree One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="title_Two" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text
                          className="columnlabeltext_one_one"
                          variant="body6"
                        >
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="row" variant="body4">
                          Input
                        </Text>
                        <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[20%]">
                        <Text className="title_Two" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text
                          className="columnlabeltext_three_one"
                          variant="body6"
                        >
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="row" variant="body4">
                          Input
                        </Text>
                        <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[20%]">
                        <Text className="title_Two" variant="body4">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer56" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer56" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer56" variant="body4">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title_Two" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text
                          className="columnlabeltext_one_one"
                          variant="body6"
                        >
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title_Two" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] my-[4px] w-[46%]">
                        <Text className="title_Two" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text
                          className="columnlabeltext_three_one"
                          variant="body6"
                        >
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                        <Text className="title_Two" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_Two" variant="body6">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] my-[4px] w-[46%]">
                        <Text className="title_Two" variant="body4">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Fifteen One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Sixteen One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Seventeen One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Eighteen One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Nineteen One"
                        />
                      </Stack>
                      <Column className="w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Twenty One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyOne One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyTwo One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyThree One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyFour One"
                        />
                      </Stack>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyFive One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentySix One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_300 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentySeven One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_801 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyEight One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body6"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search TwentyNine One"
                        />
                      </Stack>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_Two" variant="body6">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[100%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyFour One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyFive One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentySix One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                        <Text className="content20" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Six"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_500_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[21%]">
                      <Text className="content21" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body4"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close.svg"
                        className="close3"
                        alt="close TwentySeven One"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyEight One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[19%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext_orange_300.svg"
                          className="inputtext_TwentyFive"
                          alt="inputtext TwentyFive One"
                        />
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close TwentyNine One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Thirty One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Content1" variant="body4">
                          Label
                        </Text>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Seven"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-center justify-end outline outline-[0.5px] outline-gray_300_1e pl-[4px] py-[4px] rounded-radius4 w-[100%]">
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                      <Text
                        className="mb-[1px] columninputtext_twentyfour_one"
                        variant="body4"
                      >
                        Label
                      </Text>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close.svg"
                        className="close3"
                        alt="close ThirtyOne One"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtyTwo One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtyThree One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtyFour One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content20" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Eight"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_300_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Text className="content21" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body4"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close.svg"
                        className="close3"
                        alt="close ThirtyFive One"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search Thirty One"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content23" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title_Two" variant="body4">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtySix One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search ThirtyOne One"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content24" variant="body6">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="row" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtySeven One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search ThirtyTwo One"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content23" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title_Two" variant="body4">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close ThirtyEight One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search ThirtyThree One"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text className="content25" variant="body6">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="row" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Nine"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_500_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[41%]">
                      <Stack className="absolute bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search ThirtyFour One"
                        />
                      </Stack>
                      <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                        <Text className="content26" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="columninputtext_twentyfour_one"
                            variant="body4"
                          >
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close.svg"
                        className="close3"
                        alt="close ThirtyNine One"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue8}
                    onChange={(e) => setInputvalue8(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue8?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue8("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue8?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue8("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray500"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search ThirtySix One"
                          />
                        </Stack>
                        <Column className="absolute items-end justify-start right-[0] top-[0] w-[76%]">
                          <Text className="content8" variant="body6">
                            Label
                          </Text>
                          <Img
                            src="images/img_inputtext_orange_300.svg"
                            className="inputtext_ThirtyOne"
                            alt="inputtext ThirtyOne One"
                          />
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close Forty One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue9}
                    onChange={(e) => setInputvalue9(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield One One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue9?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue9("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue9?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue9("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray500"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue10}
                    onChange={(e) => setInputvalue10(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Two One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue10?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue10("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue10?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue10("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineDeeporange200"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue11}
                    onChange={(e) => setInputvalue11(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_300_7c text-gray_300_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue11?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue11("")}
                          color="#7ce9e1d9"
                        />
                      ) : inputvalue11?.length > 0 ? (
                        <CloseSVG
                          color="#7ce9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue11("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray3001e"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search ThirtyNine One"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content19" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_Two" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close FortyOne One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search Forty One"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content8" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_Two" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close FortyTwo One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search FortyOne One"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content19" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_Two" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_close.svg"
                          className="close3"
                          alt="close FortyThree One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close3"
                            alt="search FortyTwo One"
                          />
                        </Stack>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content20" variant="body6">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_Two" variant="body4">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_info.svg"
                          className="close3"
                          alt="info Ten"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_300_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[66%]">
                      <Stack className="absolute bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FortyThree One"
                        />
                      </Stack>
                      <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                        <Text className="content21" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text
                            className="columninputtext_twentyfour_one"
                            variant="body4"
                          >
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_close.svg"
                        className="close3"
                        alt="close FortyFour One"
                      />
                    </Stack>
                  </Row>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Three One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray500"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_300 placeholder:text-orange_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Four One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-orange_300"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineOrange300"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Five One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray500"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-deep_orange_200 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Six One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-deep_orange_200"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineDeeporange200"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300_7c text-gray_300_7c placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="statelayer One One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300_7c"
                    focusedClasses="translate-y-[20px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Input"
                    variant="OutlineGray5001e"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined3" variant="body4">
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] w-[21%]">
                      <Text className="content8" variant="body6">
                        Label
                      </Text>
                      <Img
                        src="images/img_inputtext_orange_300.svg"
                        className="inputtext_TwentyFive"
                        alt="inputtext ThirtyTwo One"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined3" variant="body4">
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="border-2 border-deep_orange_200 border-solid 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 title_Two"
                    variant="body4"
                  >
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="outline outline-[0.5px] outline-gray_300_1e 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 columninputtext_twentyfour_one"
                    variant="body4"
                  >
                    Label
                  </Text>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Ten One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray500"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] text-gray_300 placeholder:text-orange_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Eleven One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-orange_300"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineOrange300"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Twelve One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray500"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-deep_orange_200 text-gray_300 placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="textfield Thirteen One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-deep_orange_200"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineDeeporange200"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <FloatingInput
                    className="placeholder:bg-gray_900 bg-transparent border-0 font-normal placeholder:left-[16px] not-italic text-[16px] placeholder:text-gray_300_7c text-gray_300_7c placeholder:top-[0] top-[0] tracking-ls05 w-[100%]"
                    name="statelayer Three One"
                    labelClasses="bg-gray_900 left-[16px] top-[0] text-gray_300_7c"
                    focusedClasses="translate-y-[19px] scale-[1]"
                    wrapperClasses="w-[100%] top-[0]"
                    labelText="Label"
                    defaultText="Placeholder"
                    size="sm"
                    variant="OutlineGray3001e"
                  ></FloatingInput>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FortyFour One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content23" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FortyFive One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content24" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FortySix One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content23" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title_Two" variant="body4">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FortySeven One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                        <Text className="content25" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_500_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="close3"
                        alt="search FortyEight One"
                      />
                    </Stack>
                    <Column className="absolute justify-start left-[6%] top-[0] w-[36%]">
                      <Text className="content26" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body4"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue12}
                    onChange={(e) => setInputvalue12(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Fourteen One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue12?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue12("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray500"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search Fifty One"
                        />
                      </Stack>
                      <Column className="absolute items-end justify-start left-[6%] top-[0] w-[19%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext_orange_300.svg"
                          className="inputtext_ThirtyOne"
                          alt="inputtext ThirtyEight One"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue13}
                    onChange={(e) => setInputvalue13(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Fifteen One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue13?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue13("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray500"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue14}
                    onChange={(e) => setInputvalue14(e?.target?.value)}
                    className="placeholder:text-gray_300 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Sixteen One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue14?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue14("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineDeeporange200"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue15}
                    onChange={(e) => setInputvalue15(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_300_7c text-gray_300_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer Four One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue15?.length > 0 ? (
                        <CloseSVG
                          color="#7ce9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue15("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    variant="srcOutlineGray3001e"
                  ></Input>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FiftyThree One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FiftyFour One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_500 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FiftyFive One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content19" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                        <Img
                          src="images/img_search_gray_400_24X24.svg"
                          className="close3"
                          alt="search FiftySix One"
                        />
                      </Stack>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content20" variant="body6">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_Two" variant="body4">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_300_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[0] my-[auto] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <Img
                        src="images/img_search_gray_400_24X24.svg"
                        className="close3"
                        alt="search FiftySeven One"
                      />
                    </Stack>
                    <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                      <Text className="content21" variant="body6">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body4"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body6">
                      Supporting text
                    </Text>
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

export default TextFieldsPage;

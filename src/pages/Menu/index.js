import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Row,
  Stack,
  Line,
  Button,
  Input,
} from "components";

const MenuPage = () => {
  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 items-center justify-start lg:p-[32px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[55px] w-[100%]">
          <Column className="justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:w-[25px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Menu
              </Text>
              <a
                href={"https://m3.material.io/components/menus/overview"}
                target="_blank"
                className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-black_900 w-[100%]"
                variant="body3"
              >
                Menus display a list of choices on a temporary surface. They
                appear when users interact with a button, action, or other
                control.  <br />
                On Android, use 48dp minimum targets.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="bg-white_A700 lg:gap-[25px] xl:gap-[31px] 2xl:gap-[35px] 3xl:gap-[42px] grid grid-cols-2 min-h-[auto] lg:p-[44px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-white_A701 border border-bluegray_100 border-solid items-center lg:p-[25px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius16 w-[100%]">
              <Stack className="lg:h-[188px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[316px] w-[31%]">
                <Column className="absolute top-[0] gridlabeltext_five">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[22%]">
                        <Text className="content6" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[91%]">
                          <Text className="rowinputtext" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-lime_900 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] mt-[4px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close"
                          alt="close"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A701 bottom-[0] items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[188px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[316px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[31%]">
                <Column className="absolute top-[0] gridlabeltext_five">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] w-[44%]">
                        <Stack className="absolute lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] left-[0] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                          <Img
                            src="images/img_search_gray_801.svg"
                            className="close"
                            alt="search"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text
                            className="lg:mr-[22px] xl:mr-[28px] 2xl:mr-[32px] 3xl:mr-[38px] content6"
                            variant="body6"
                          >
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[52%]">
                            <Text className="rowinputtext" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-lime_900 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                        <Img
                          src="images/img_close_24X24.svg"
                          className="close"
                          alt="close One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text className="columnsupportingtext_one" variant="body6">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A701 bottom-[0] items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer53" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer53" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer53" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer53" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[31%]">
                <Column className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-start px-[4px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                  <Column className="bg-lime_900 lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-start rounded-radius50 lg:w-[25px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]">
                    <Button
                      className="flex lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-center rounded-radius50 w-[100%]"
                      size="mdIcn"
                      variant="icbFillWhiteA7001e"
                    >
                      <Img
                        src="images/img_search_white_A700.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px]"
                        alt="search One"
                      />
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A701 items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius16 w-[100%]">
              <Row className="items-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius16 w-[100%]">
                <Column className="bg-white_A701 items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer52" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A701 items-center justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer54" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A701 items-center justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs3 w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="w-[100%]"
                      name="BuildingBlocks"
                      placeholder="List item"
                      size="sm"
                      variant="FillGray302"
                    ></Input>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer55" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-gray_900 items-center lg:p-[25px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius16 w-[100%]">
              <Stack className="lg:h-[188px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[316px] w-[31%]">
                <Column className="absolute top-[0] gridlabeltext_five">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[22%]">
                        <Text className="content8" variant="body6">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[91%]">
                          <Text className="row" variant="body4">
                            Input
                          </Text>
                          <Line className="bg-orange_300 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[1px]" />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] mt-[4px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                        <Img
                          src="images/img_close.svg"
                          className="close"
                          alt="close One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-gray_900 bottom-[0] items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[188px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[316px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[31%]">
                <Column className="absolute top-[0] gridlabeltext_five">
                  <Column className="border-2 border-orange_300 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] w-[44%]">
                        <Stack className="absolute lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] left-[0] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                          <Img
                            src="images/img_search_gray_400_24X24.svg"
                            className="close"
                            alt="search One"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[0] top-[0] w-[86%]">
                          <Text
                            className="lg:mr-[22px] xl:mr-[28px] 2xl:mr-[32px] 3xl:mr-[38px] content8"
                            variant="body6"
                          >
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[52%]">
                            <Text className="row" variant="body4">
                              Input
                            </Text>
                            <Line className="bg-orange_300 lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                        <Img
                          src="images/img_close.svg"
                          className="close"
                          alt="close One One"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="justify-start pt-[4px] px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one_one"
                      variant="body6"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-gray_900 bottom-[0] items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer57" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer57" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer57" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                      <Text className="statelayer57" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[31%]">
                <Column className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-start px-[4px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]">
                  <Column className="bg-orange_300 lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-start rounded-radius50 lg:w-[25px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]">
                    <Button
                      className="flex lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-center rounded-radius50 w-[100%]"
                      size="mdIcn"
                      variant="icbFillGray9001e2"
                    >
                      <Img
                        src="images/img_search_gray_902.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px]"
                        alt="search One One"
                      />
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Column className="bg-gray_900 items-center justify-start lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius16 w-[100%]">
              <Row className="items-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] w-[100%]">
                <Column className="bg-gray_900 items-center justify-start lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <Text className="statelayer56" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Text className="statelayer58" variant="body4">
                        List item
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4 shadow-bs w-[31%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
                    <Column className="justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                      <Text className="statelayer59" variant="body4">
                        List item
                      </Text>
                    </Column>
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

export default MenuPage;

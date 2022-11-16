import React from "react";

import { Column, Img, Text, Row, Button, Line, Stack, Radio } from "components";

const TabsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 items-center justify-start lg:p-[29px] xl:p-[36px] 2xl:p-[40px] 3xl:p-[49px] w-[100%]">
          <Column className="justify-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Tabs
              </Text>
              <a
                href={"https://m3.material.io/components/tabs/overview"}
                target="_blank"
                className="font-normal lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[22px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic text-black_900 w-[100%]"
                variant="body3"
              >
                Tabs organize and allow navigation between groups of content
                that are related and at the same  level of hierarchy.
              </Text>
            </Column>
          </Column>
        </Column>
        <footer className="w-[100%]">
          <Row className="items-center mx-[auto] lg:my-[39px] xl:my-[49px] 2xl:my-[55px] 3xl:my-[66px] w-[92%]">
            <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-white_A701 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between mt-[1px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[48%]">
                    <Column className="bg-white_A701 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A701 items-center 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[26%]">
                            <Text className="TabContents" variant="body5">
                              Tab
                            </Text>
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit5"
                              alt="edit"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A701 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A701 items-center 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[40%]">
                          <Text className="TabContents" variant="body5">
                            Tab
                          </Text>
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit5"
                            alt="edit One"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_one" variant="body5">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_302 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[48%]">
                    <Column className="bg-white_A701 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A701 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[24%]">
                            <Img
                              src="images/img_icons01_lime_900.svg"
                              className="IconsOne2"
                              alt="IconsOne"
                            />
                            <Text className="TabContents1" variant="body5">
                              Tab
                            </Text>
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit_Two"
                              alt="edit Two"
                            />
                          </Column>
                        </Column>
                        <Column className="bg-white_A701 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[3px] w-[24%]">
                            <Img
                              src="images/img_icons01.svg"
                              className="IconsOne2"
                              alt="IconsOne One"
                            />
                            <Text className="TabContents2" variant="body5">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A701 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[3px] w-[24%]">
                            <Img
                              src="images/img_icons01.svg"
                              className="IconsOne2"
                              alt="IconsOne Two"
                            />
                            <Text className="TabContents2" variant="body5">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A701 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A701 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[35%]">
                          <Img
                            src="images/img_icons01_lime_900.svg"
                            className="IconsOne2"
                            alt="IconsOne Three"
                          />
                          <Text className="TabContents1" variant="body5">
                            Tab
                          </Text>
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit_Two"
                            alt="edit Three"
                          />
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01.svg"
                            className="IconsOne2"
                            alt="IconsOne Four"
                          />
                          <Text className="TabContents2" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01.svg"
                            className="IconsOne2"
                            alt="IconsOne Five"
                          />
                          <Text className="TabContents2" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A701 items-end lg:pl-[5px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] w-[14%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]"
                            alt="IconsOne Six"
                          />
                          <Text className="TabContents2" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Line className="bg-gray_302 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[48%]">
                    <Column className="bg-white_A701 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A701 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[25%]">
                            <Img
                              src="images/img_icons01_lime_900.svg"
                              className="IconsOne2"
                              alt="IconsOne Seven"
                            />
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit_Four"
                              alt="edit Four"
                            />
                          </Column>
                        </Column>
                        <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Img
                            src="images/img_icons01.svg"
                            className="IconsOne_Eight"
                            alt="IconsOne Eight"
                          />
                        </Stack>
                        <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Img
                            src="images/img_icons01.svg"
                            className="IconsOne_Eight"
                            alt="IconsOne Nine"
                          />
                        </Stack>
                      </Row>
                    </Column>
                    <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A701 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A701 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[38%]">
                          <Img
                            src="images/img_icons01_lime_900.svg"
                            className="IconsOne2"
                            alt="IconsOne Ten"
                          />
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit_Four"
                            alt="edit Five"
                          />
                        </Column>
                      </Column>
                      <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Img
                          src="images/img_icons01.svg"
                          className="IconsOne_Eight"
                          alt="IconsOne Eleven"
                        />
                      </Stack>
                      <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Img
                          src="images/img_icons01.svg"
                          className="IconsOne_Eight"
                          alt="IconsOne Twelve"
                        />
                      </Stack>
                      <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] w-[14%]">
                        <Img
                          src="images/img_icons01.svg"
                          className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] right-[0] w-[27%]"
                          alt="IconsOne Thirteen"
                        />
                      </Stack>
                    </Row>
                    <Line className="bg-gray_302 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[48%]">
                    <Column className="bg-white_A701 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A701 items-center w-[33%]">
                          <Column className="items-center justify-end 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                            <Column className="items-center justify-start w-[20%]">
                              <Text className="header3" variant="body5">
                                Tab
                              </Text>
                            </Column>
                            <Line className="bg-lime_900 h-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A701 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A701 items-center w-[29%]">
                        <Column className="items-center justify-end 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                          <Column className="items-center justify-start w-[27%]">
                            <Text className="header3" variant="body5">
                              Tab
                            </Text>
                          </Column>
                          <Line className="bg-lime_900 h-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_one" variant="body5">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_302 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A701 items-center w-[48%]">
                    <Column className="bg-white_A701 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A701 items-center w-[33%]">
                          <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                            <Radio
                              value="Tab"
                              className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              checked={false}
                              name="LabelEleven"
                              label="Tab"
                            ></Radio>
                            <Line className="bg-lime_900 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                            Tab
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="lg"
                          variant="FillWhiteA701"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                            Tab
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A701 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A701 items-center w-[29%]">
                        <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                          <Radio
                            value="Tab"
                            className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            checked={false}
                            name="LabelTwelve"
                            label="Tab"
                          ></Radio>
                          <Line className="bg-lime_900 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="lg"
                        variant="FillWhiteA701"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] px-[4px] w-[14%]">
                        <Img
                          src="images/img_icons01.svg"
                          className="absolute inset-y-[0] my-[auto] right-[0] IconsOne2"
                          alt="IconsOne Fourteen"
                        />
                      </Stack>
                    </Row>
                    <Line className="bg-gray_302 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-gray_900 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between mt-[1px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[26%]">
                            <Text className="TabContents3" variant="body5">
                              Tab
                            </Text>
                            <Img
                              src="images/img_mail.svg"
                              className="edit5"
                              alt="mail"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[40%]">
                          <Text className="TabContents3" variant="body5">
                            Tab
                          </Text>
                          <Img
                            src="images/img_mail.svg"
                            className="edit5"
                            alt="mail One"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_fourteen" variant="body5">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_801 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[24%]">
                            <Img
                              src="images/img_icons01_orange_300.svg"
                              className="IconsOne2"
                              alt="IconsOne Fifteen"
                            />
                            <Text className="TabContents4" variant="body5">
                              Tab
                            </Text>
                            <Img
                              src="images/img_bag_6X24.svg"
                              className="edit_Two"
                              alt="bag"
                            />
                          </Column>
                        </Column>
                        <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[3px] w-[24%]">
                            <Img
                              src="images/img_icons01_gray_400.svg"
                              className="IconsOne2"
                              alt="IconsOne Sixteen"
                            />
                            <Text className="TabContents5" variant="body5">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[3px] w-[24%]">
                            <Img
                              src="images/img_icons01_gray_400.svg"
                              className="IconsOne2"
                              alt="IconsOne Seventeen"
                            />
                            <Text className="TabContents5" variant="body5">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[35%]">
                          <Img
                            src="images/img_icons01_orange_300.svg"
                            className="IconsOne2"
                            alt="IconsOne Eighteen"
                          />
                          <Text className="TabContents4" variant="body5">
                            Tab
                          </Text>
                          <Img
                            src="images/img_bag_6X24.svg"
                            className="edit_Two"
                            alt="bag One"
                          />
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="IconsOne2"
                            alt="IconsOne Nineteen"
                          />
                          <Text className="TabContents5" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="IconsOne2"
                            alt="IconsOne Twenty"
                          />
                          <Text className="TabContents5" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-end lg:pl-[5px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] w-[14%]">
                        <Column className="items-center justify-start mb-[3px] w-[35%]">
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]"
                            alt="IconsOne TwentyOne"
                          />
                          <Text className="TabContents5" variant="body5">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Line className="bg-gray_801 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[25%]">
                            <Img
                              src="images/img_icons01_orange_300.svg"
                              className="IconsOne2"
                              alt="IconsOne TwentyTwo"
                            />
                            <Img
                              src="images/img_bag_6X24.svg"
                              className="edit_Four"
                              alt="bag Two"
                            />
                          </Column>
                        </Column>
                        <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="IconsOne_Eight"
                            alt="IconsOne TwentyThree"
                          />
                        </Stack>
                        <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="IconsOne_Eight"
                            alt="IconsOne TwentyFour"
                          />
                        </Stack>
                      </Row>
                    </Column>
                    <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[38%]">
                          <Img
                            src="images/img_icons01_orange_300.svg"
                            className="IconsOne2"
                            alt="IconsOne TwentyFive"
                          />
                          <Img
                            src="images/img_bag_6X24.svg"
                            className="edit_Four"
                            alt="bag Three"
                          />
                        </Column>
                      </Column>
                      <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Img
                          src="images/img_icons01_gray_400.svg"
                          className="IconsOne_Eight"
                          alt="IconsOne TwentySix"
                        />
                      </Stack>
                      <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Img
                          src="images/img_icons01_gray_400.svg"
                          className="IconsOne_Eight"
                          alt="IconsOne TwentySeven"
                        />
                      </Stack>
                      <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] w-[14%]">
                        <Img
                          src="images/img_icons01_gray_400.svg"
                          className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] right-[0] w-[27%]"
                          alt="IconsOne TwentyEight"
                        />
                      </Stack>
                    </Row>
                    <Line className="bg-gray_801 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center w-[33%]">
                          <Column className="items-center justify-end 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                            <Column className="items-center justify-start w-[20%]">
                              <Text className="header" variant="body5">
                                Tab
                              </Text>
                            </Column>
                            <Line className="bg-orange_300 h-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[33%]"
                          size="lg"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center w-[29%]">
                        <Column className="items-center justify-end 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                          <Column className="items-center justify-start w-[27%]">
                            <Text className="header" variant="body5">
                              Tab
                            </Text>
                          </Column>
                          <Line className="bg-orange_300 h-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[29%]"
                        size="lg"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_fourteen" variant="body5">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_801 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center w-[33%]">
                          <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                            <Radio
                              value="Tab"
                              className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_300 tracking-ls1"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              checked={false}
                              name="LabelTwentyFour"
                              label="Tab"
                            ></Radio>
                            <Line className="bg-orange_300 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_gray_400.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="lg"
                          variant="FillGray900"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                            Tab
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_gray_400.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="lg"
                          variant="FillGray900"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                            Tab
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_801 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center w-[29%]">
                        <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                          <Radio
                            value="Tab"
                            className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_300 tracking-ls1"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            checked={false}
                            name="LabelTwentyFive"
                            label="Tab"
                          ></Radio>
                          <Line className="bg-orange_300 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="lg"
                        variant="FillGray900"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_gray_400.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="lg"
                        variant="FillGray900"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Stack className="bg-gray_900 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] px-[4px] w-[14%]">
                        <Img
                          src="images/img_icons01_gray_400.svg"
                          className="absolute inset-y-[0] my-[auto] right-[0] IconsOne2"
                          alt="IconsOne TwentyNine"
                        />
                      </Stack>
                    </Row>
                    <Line className="bg-gray_801 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default TabsPage;

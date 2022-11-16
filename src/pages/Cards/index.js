import React from "react";

import { Column, Img, Text, List, Row, Stack, Button } from "components";

const CardsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] w-[100%]">
          <Column className="justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[39%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Cards
              </Text>
              <a
                href={"http://m3.material.io/components/cards/overview"}
                target="_blank"
                className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Cards are versatile containers, holding anything from images to
                headlines, supporting text, buttons, lists, and other
                components.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-2 min-h-[auto] lg:p-[26px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[44px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start xl:mb-[109px] 2xl:mb-[123px] 3xl:mb-[147px] lg:mb-[87px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Row className="bg-white_A701 items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center rounded-radius12 w-[31%]">
                <Column className="border border-bluegray_100 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Column className="items-center justify-start rounded-radius12 w-[100%]">
                    <Row className="items-center justify-end p-[4px] w-[100%]">
                      <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                        <Text className="content2" variant="body4">
                          A
                        </Text>
                        <Column className="pr-[3px] py-[3px] w-[81%]">
                          <Text className="header3" variant="body4">
                            Header
                          </Text>
                          <Text className="subhead2" variant="body5">
                            Subhead
                          </Text>
                        </Column>
                      </Row>
                      <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="overflowmenu"
                          alt="overflowmenu"
                        />
                      </Stack>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media1"
                      alt="media"
                    />
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                      <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                        <Text className="title" variant="body4">
                          Title
                        </Text>
                        <Text className="subhead_One1" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                      <Text className="columntitle2" variant="body5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </Text>
                      <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="OutlineGray600_1"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="FillLime900"
                        >
                          Enabled
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A701 items-center rounded-radius12 shadow-bs3 w-[31%]">
                <Column className="items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-end p-[4px] w-[100%]">
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                      <Text className="content2" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[81%]">
                        <Text className="header3" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                      <Img
                        src="images/img_overflowmenu_24X24.svg"
                        className="overflowmenu"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Row>
                  <Img
                    src="images/img_media.png"
                    className="media1"
                    alt="media One"
                  />
                  <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                    <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                      <Text className="title" variant="body4">
                        Title
                      </Text>
                      <Text className="subhead_One1" variant="body5">
                        Subhead
                      </Text>
                    </Column>
                    <Text className="columntitle2" variant="body5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-lime_900 tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineGray600"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillLime900"
                      >
                        Enabled
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-gray_302 items-center rounded-radius12 w-[31%]">
                <Column className="items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-end p-[4px] w-[100%]">
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                      <Text className="content2" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[81%]">
                        <Text className="header3" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                      <Img
                        src="images/img_overflowmenu_24X24.svg"
                        className="overflowmenu"
                        alt="overflowmenu Two"
                      />
                    </Stack>
                  </Row>
                  <Img
                    src="images/img_media.png"
                    className="media1"
                    alt="media Two"
                  />
                  <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                    <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                      <Text className="title" variant="body4">
                        Title
                      </Text>
                      <Text className="subhead_One1" variant="body5">
                        Subhead
                      </Text>
                    </Column>
                    <Text className="columntitle2" variant="body5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-lime_900 tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineGray600"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillLime900"
                      >
                        Enabled
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Row className="bg-white_A701 items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center rounded-radius12 w-[31%]">
                <Column className="border border-bluegray_100 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content2" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header3" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Three"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A701 items-center rounded-radius12 shadow-bs3 w-[31%]">
                <Column className="border border-bluegray_100 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content2" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header3" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Four"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_302 items-center rounded-radius12 w-[31%]">
                <Column className="border border-bluegray_100 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content2" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header3" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Five"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="bg-gray_900 border border-gray_800 border-solid justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Row className="bg-gray_900 items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <Column className="bg-gray_900 border border-gray_800 border-solid items-center rounded-radius12 w-[31%]">
                <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Column className="items-center justify-start rounded-radius12 w-[100%]">
                    <Row className="items-center justify-end p-[4px] w-[100%]">
                      <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                        <Text className="content3" variant="body4">
                          A
                        </Text>
                        <Column className="pr-[3px] py-[3px] w-[81%]">
                          <Text className="header" variant="body4">
                            Header
                          </Text>
                          <Text className="subhead_One2" variant="body5">
                            Subhead
                          </Text>
                        </Column>
                      </Row>
                      <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu One"
                        />
                      </Stack>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media1"
                      alt="media One"
                    />
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                      <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                        <Text className="title_Two" variant="body4">
                          Title
                        </Text>
                        <Text className="subhead_One_One" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                      <Text className="columntitle3" variant="body5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </Text>
                      <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-orange_300 tracking-ls1 w-[48%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="OutlineGray500"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                          shape="CircleBorder20"
                          size="md"
                          variant="FillOrange300"
                        >
                          Enabled
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center rounded-radius12 shadow-bs w-[31%]">
                <Column className="items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-end p-[4px] w-[100%]">
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                      <Text className="content3" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[81%]">
                        <Text className="header" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead_One2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu"
                        alt="overflowmenu One One"
                      />
                    </Stack>
                  </Row>
                  <Img
                    src="images/img_media.png"
                    className="media1"
                    alt="media One One"
                  />
                  <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                    <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                      <Text className="title_Two" variant="body4">
                        Title
                      </Text>
                      <Text className="subhead_One_One" variant="body5">
                        Subhead
                      </Text>
                    </Column>
                    <Text className="columntitle3" variant="body5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-orange_300 tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineGray500"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillOrange300"
                      >
                        Enabled
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-gray_801 items-center rounded-radius12 w-[31%]">
                <Column className="items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-end p-[4px] w-[100%]">
                    <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[83%]">
                      <Text className="content3" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[81%]">
                        <Text className="header" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead_One2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Stack className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu"
                        alt="overflowmenu Two One"
                      />
                    </Stack>
                  </Row>
                  <Img
                    src="images/img_media.png"
                    className="media1"
                    alt="media Two One"
                  />
                  <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                    <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                      <Text className="title_Two" variant="body4">
                        Title
                      </Text>
                      <Text className="subhead_One_One" variant="body5">
                        Subhead
                      </Text>
                    </Column>
                    <Text className="columntitle3" variant="body5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                    <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-orange_300 tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineGray500"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[48%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillOrange300"
                      >
                        Enabled
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Row className="bg-gray_900 items-center justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <Column className="bg-gray_900 border border-gray_800 border-solid items-center rounded-radius12 w-[31%]">
                <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content3" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead_One2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Three One"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center rounded-radius12 shadow-bs w-[31%]">
                <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content3" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead_One2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Four One"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_801 items-center rounded-radius12 w-[31%]">
                <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                  <Row className="items-center justify-evenly rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[78%]">
                      <Text className="content3" variant="body4">
                        A
                      </Text>
                      <Column className="pr-[3px] py-[3px] w-[77%]">
                        <Text className="header" variant="body4">
                          Header
                        </Text>
                        <Text className="subhead_One2" variant="body5">
                          Subhead
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_media.png"
                      className="media_Three"
                      alt="media Five One"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
            <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[10%]">
              <Stack className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]">
                <Img
                  src="images/img_thumbnail.png"
                  className="IconsOne_One"
                  alt="Thumbnail"
                />
              </Stack>
              <Column className="items-center justify-center xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                <Text
                  className="lg:mb-[14px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[25px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic text-gray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Courier
                </Text>
              </Column>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default CardsPage;

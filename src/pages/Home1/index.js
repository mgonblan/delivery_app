import React from "react";

import {
  Column,
  Row,
  Stack,
  Img,
  Text,
  Input,
  List,
  Button,
  Grid,
} from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <header className="w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] mt-[4px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="common-pointer arrowleft"
                      onClick={handleBackNavigation}
                      alt="arrowleft"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[10%]">
                    <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                      <Img
                        src="images/img_user.svg"
                        className="arrowleft"
                        alt="user"
                      />
                    </Stack>
                    <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                      <Img
                        src="images/img_ordersiconnew.png"
                        className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                        alt="ordersiconnew"
                      />
                    </Stack>
                    <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="arrowleft"
                        alt="overflowmenu"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[17%]">
                  <Text
                    className="not-italic text-gray_300 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Welcome to Dogtor{" "}
                  </Text>
                </Column>
              </Column>
            </Column>
          </header>
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-gradient  items-center justify-start lg:pt-[22px] xl:pt-[28px] 2xl:pt-[32px] 3xl:pt-[38px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="items-center justify-start w-[14%]">
                  <Text
                    className="not-italic text-white_A700 tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Deliverying to
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_300 text-gray_300 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[96%] xl:mt-[10px]"
                    name="covachuelasCounter"
                    placeholder="Covachuelas 22"
                    suffix={
                      <Img
                        src="images/img_close.svg"
                        className="lg:w-[17px] lg:h-[18px] lg:ml-[19px] lg:mr-[4px] xl:w-[21px] xl:h-[22px] xl:ml-[24px] xl:mr-[6px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[28px] 2xl:mr-[7px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[33px] 3xl:mr-[8px] my-[auto]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineGray500"
                  ></Input>
                </Column>
                <Img
                  src="images/img_roundedendpie.svg"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                  alt="RoundedEndpie"
                />
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-start lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[100%]">
              <Column className="justify-start overflow-auto w-[100%]">
                <Text
                  className="not-italic text-black_900_dd w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Top Products
                </Text>
                <Text
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-black_900_99 headline1"
                  variant="body4"
                >
                  These are your favorite dishes
                </Text>
                <Row className="items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[261px] xl:pr-[327px] 2xl:pr-[368px] 3xl:pr-[441px] w-[100%]">
                  <List
                    className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 min-h-[auto] w-[66%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-gray_900 border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                      <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                        <Column className="items-center justify-start rounded-radius12 w-[100%]">
                          <Row className="items-center justify-end p-[4px] w-[100%]">
                            <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[83%]">
                              <Text className="content" variant="body4">
                                A
                              </Text>
                              <Column className="pr-[3px] py-[3px] w-[81%]">
                                <Text className="header" variant="body4">
                                  Header
                                </Text>
                                <Text className="subhead" variant="body5">
                                  Subhead
                                </Text>
                              </Column>
                            </Row>
                            <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="arrowleft"
                                alt="overflowmenu One"
                              />
                            </Stack>
                          </Row>
                          <Img
                            src="images/img_media.png"
                            className="media"
                            alt="media"
                          />
                          <Column className="justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                            <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                              <Text className="title_Two" variant="body4">
                                Title
                              </Text>
                              <Text className="subhead_One" variant="body5">
                                Subhead
                              </Text>
                            </Column>
                            <Text className="columntitle1" variant="body5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor
                            </Text>
                            <Row className="items-center justify-end ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[63%]">
                              <Button
                                className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-orange_300 tracking-ls1 w-[48%]"
                                shape="CircleBorder20"
                                size="md"
                                variant="OutlineGray500"
                              >
                                Enabled
                              </Button>
                              <Button
                                className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[48%]"
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
                    <Column className="bg-gray_900 border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                      <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                        <Column className="items-center justify-start rounded-radius12 w-[100%]">
                          <Row className="items-center justify-end p-[4px] w-[100%]">
                            <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[83%]">
                              <Text className="content" variant="body4">
                                A
                              </Text>
                              <Column className="pr-[3px] py-[3px] w-[81%]">
                                <Text className="header" variant="body4">
                                  Header
                                </Text>
                                <Text className="subhead" variant="body5">
                                  Subhead
                                </Text>
                              </Column>
                            </Row>
                            <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="arrowleft"
                                alt="overflowmenu Two"
                              />
                            </Stack>
                          </Row>
                          <Img
                            src="images/img_media.png"
                            className="media"
                            alt="media One"
                          />
                          <Column className="justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                            <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                              <Text className="title_Two" variant="body4">
                                Title
                              </Text>
                              <Text className="subhead_One" variant="body5">
                                Subhead
                              </Text>
                            </Column>
                            <Text className="columntitle1" variant="body5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor
                            </Text>
                            <Row className="items-center justify-end ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[63%]">
                              <Button
                                className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-orange_300 tracking-ls1 w-[48%]"
                                shape="CircleBorder20"
                                size="md"
                                variant="OutlineGray500"
                              >
                                Enabled
                              </Button>
                              <Button
                                className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[48%]"
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
                  </List>
                  <Column className="bg-gray_900 border border-gray_800 border-solid items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius12 w-[33%]">
                    <List
                      className="border border-gray_800 border-solid lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 min-h-[auto] rounded-radius12 w-[100%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center justify-start rounded-radius12 w-[100%]">
                        <Row className="items-center justify-end p-[4px] w-[100%]">
                          <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[83%]">
                            <Text className="content" variant="body4">
                              A
                            </Text>
                            <Column className="pr-[3px] py-[3px] w-[81%]">
                              <Text className="header" variant="body4">
                                Header
                              </Text>
                              <Text className="subhead" variant="body5">
                                Subhead
                              </Text>
                            </Column>
                          </Row>
                          <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="arrowleft"
                              alt="overflowmenu Three"
                            />
                          </Stack>
                        </Row>
                        <Img
                          src="images/img_media.png"
                          className="media"
                          alt="media Two"
                        />
                        <Column className="justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                          <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                            <Text className="title_Two" variant="body4">
                              Title
                            </Text>
                            <Text className="subhead_One" variant="body5">
                              Subhead
                            </Text>
                          </Column>
                          <Text className="columntitle1" variant="body5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </Text>
                          <Row className="items-center justify-end ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[63%]">
                            <Button
                              className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-orange_300 tracking-ls1 w-[48%]"
                              shape="CircleBorder20"
                              size="md"
                              variant="OutlineGray500"
                            >
                              Enabled
                            </Button>
                            <Button
                              className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[48%]"
                              shape="CircleBorder20"
                              size="md"
                              variant="FillOrange300"
                            >
                              Enabled
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                        <Column className="border border-gray_800 border-solid items-center justify-start rounded-radius12 w-[100%]">
                          <Column className="items-center justify-start rounded-radius12 w-[100%]">
                            <Row className="items-center justify-end p-[4px] w-[100%]">
                              <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[83%]">
                                <Text className="content" variant="body4">
                                  A
                                </Text>
                                <Column className="pr-[3px] py-[3px] w-[81%]">
                                  <Text className="header" variant="body4">
                                    Header
                                  </Text>
                                  <Text className="subhead" variant="body5">
                                    Subhead
                                  </Text>
                                </Column>
                              </Row>
                              <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                                <Img
                                  src="images/img_overflowmenu_gray_400.png"
                                  className="arrowleft"
                                  alt="overflowmenu Four"
                                />
                              </Stack>
                            </Row>
                            <Img
                              src="images/img_media_188X360.png"
                              className="media"
                              alt="media Three"
                            />
                            <Column className="justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                              <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                                <Text className="title_Two" variant="body4">
                                  Title
                                </Text>
                                <Text className="subhead_One" variant="body5">
                                  Subhead
                                </Text>
                              </Column>
                              <Text className="columntitle1" variant="body5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                              </Text>
                              <Row className="items-center justify-end ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[63%]">
                                <Button
                                  className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-orange_300 tracking-ls1 w-[48%]"
                                  shape="CircleBorder20"
                                  size="md"
                                  variant="OutlineGray500"
                                >
                                  Enabled
                                </Button>
                                <Button
                                  className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[48%]"
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
                    </List>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-orange_301 items-center justify-start lg:px-[36px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text
                    className="not-italic text-black_900_dd w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Food types
                  </Text>
                  <Column className="justify-start lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]">
                    <Grid className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-4 w-[39%]">
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail One"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Two"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Three"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Four"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Five"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Six"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_801 items-center justify-start rounded-radius61 w-[100%]">
                        <Stack className="lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]">
                          <Img
                            src="images/img_thumbnail.png"
                            className="Thumbnail"
                            alt="Thumbnail Seven"
                          />
                        </Stack>
                        <Column className="items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                          <Text className="h2" as="h6" variant="h6">
                            Courier
                          </Text>
                        </Column>
                      </Column>
                    </Grid>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="bg-gray_903 font-arial justify-start lg:mt-[220px] xl:mt-[275px] 2xl:mt-[310px] 3xl:mt-[372px] w-[100%]">
            <Column className="items-center justify-start w-[79%]">
              <Column className="justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Img
                  src="images/img_glovowhitesvg.png"
                  className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] w-[9%]"
                  alt="glovowhitesvg"
                />
                <Row className="items-start lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pr-[1px] py-[1px] w-[87%]">
                  <Column className="items-center justify-start lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pb-[1px] px-[1px] w-[21%]">
                    <Text className="text-white_A700 w-[auto]" variant="body2">
                      Let’s do it together
                    </Text>
                    <Text className="Careers" variant="body5">
                      Careers
                    </Text>
                    <Text className="Careers" variant="body5">
                      Glovo for Partners
                    </Text>
                    <Text className="Careers" variant="body5">
                      Couriers
                    </Text>
                    <Text
                      className="3xl:mb-[109px] lg:mb-[64px] xl:mb-[80px] 2xl:mb-[91px] Careers"
                      variant="body5"
                    >
                      Glovo Business
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[21%]">
                    <Text className="text-white_A700 w-[auto]" variant="body2">
                      Links of interest
                    </Text>
                    <Text className="Careers" variant="body5">
                      About us
                    </Text>
                    <Text className="Careers" variant="body5">
                      FAQ
                    </Text>
                    <Text className="Careers" variant="body5">
                      Glovo Prime
                    </Text>
                    <Text className="Careers" variant="body5">
                      Blog
                    </Text>
                    <Text className="Careers" variant="body5">
                      Contact us
                    </Text>
                    <Text className="Careers" variant="body5">
                      Security
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[36px] xl:pb-[45px] 2xl:pb-[51px] 3xl:pb-[61px] lg:px-[36px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[21%]">
                    <Text className="text-white_A700 w-[auto]" variant="body2">
                      Follow us
                    </Text>
                    <Text className="Careers" variant="body5">
                      Facebook
                    </Text>
                    <Text className="Careers" variant="body5">
                      Twitter
                    </Text>
                    <Text
                      className="lg:mb-[56px] xl:mb-[70px] 2xl:mb-[79px] 3xl:mb-[94px] Careers"
                      variant="body5"
                    >
                      Instagram
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[21%]">
                    <Column className="items-center justify-start lg:pb-[16px] xl:pb-[20px] 2xl:pb-[23px] 3xl:pb-[27px] lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] w-[100%]">
                      <Img
                        src="images/img_image.png"
                        className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[68%]"
                        alt="image"
                      />
                      <Img
                        src="images/img_image_35X112.png"
                        className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[73%]"
                        alt="image One"
                      />
                    </Column>
                    <Text className="div1" variant="body6">
                      Terms & Conditions
                    </Text>
                    <Text className="div1" variant="body6">
                      Privacy Policy
                    </Text>
                    <Text className="div1" variant="body6">
                      Cookies Policy
                    </Text>
                  </Column>
                </Row>
                <Column className="justify-start 2xl:mb-[100px] 3xl:mb-[120px] lg:mb-[71px] xl:mb-[88px] lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[87%]">
                  <Text className="text-white_A700 w-[auto]" variant="body2">
                    Top categories: Spain
                  </Text>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pr-[1px] py-[1px] w-[100%]">
                    <Column className="items-center justify-start mb-[1px] w-[13%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text
                          className="font-normal text-gray_301 w-[auto]"
                          variant="body5"
                        >
                          Pizza
                        </Text>
                        <Text
                          className="font-normal text-gray_301 w-[auto]"
                          variant="body5"
                        >
                          Flowers
                        </Text>
                      </Row>
                      <Text
                        className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_301 w-[auto]"
                        variant="body5"
                      >
                        See all categories
                      </Text>
                    </Column>
                    <Text className="div2" variant="body5">
                      Chicken
                    </Text>
                    <Text className="div2" variant="body5">
                      Breakfast
                    </Text>
                    <Text className="div2" variant="body5">
                      Pharmacy
                    </Text>
                    <Text className="div2" variant="body5">
                      Gifts
                    </Text>
                    <Text className="div2" variant="body5">
                      Supermarket
                    </Text>
                    <Text className="div2" variant="body5">
                      Fruit & Veg
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;

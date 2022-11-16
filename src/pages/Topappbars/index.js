import React from "react";

import { Column, Img, Text, List, Row, Stack } from "components";

const TopappbarsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[45px] xl:p-[57px] 2xl:p-[64px] 3xl:p-[77px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] w-[86%]">
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
                Top App Bars
              </Text>
              <a
                href={"http://m3.material.io/components/top-app-bar/overview"}
                target="_blank"
                className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text className="Definition" variant="body3">
                Top app bars display information and actions at the top of a
                screen, such as the page title and shortcuts to actions.
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
              <Row className="bg-white_A701 items-start justify-between p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_menu.svg"
                    className="IconsOne_One"
                    alt="menu"
                  />
                </Stack>
                <Text className="Configurations" variant="body1">
                  Product
                </Text>
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_user_2.svg"
                    className="IconsOne_One"
                    alt="user"
                  />
                </Stack>
              </Row>
              <Row className="bg-white_A701 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_arrowleft_gray_801_24X24.svg"
                    className="IconsOne_One"
                    alt="arrowleft"
                  />
                </Stack>
                <Text className="Configurations1" variant="body1">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[144px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] my-[4px] w-[36%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_trash.svg"
                      className="IconsOne_One"
                      alt="trash"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_lock.svg"
                      className="IconsOne_One"
                      alt="lock"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_overflowmenu_1.svg"
                      className="IconsOne_One"
                      alt="overflowmenu"
                    />
                  </Stack>
                </Row>
              </Row>
              <Column className="bg-white_A701 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft_gray_801_24X24.svg"
                      className="IconsOne_One"
                      alt="arrowleft One"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash.svg"
                        className="IconsOne_One"
                        alt="trash One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_lock.svg"
                        className="IconsOne_One"
                        alt="lock One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="IconsOne_One"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline3" as="h6" variant="h6">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A701 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft_gray_801_24X24.svg"
                      className="IconsOne_One"
                      alt="arrowleft Two"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash.svg"
                        className="IconsOne_One"
                        alt="trash Two"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_lock.svg"
                        className="IconsOne_One"
                        alt="lock Two"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Two"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline3" as="h5" variant="h5">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Row className="bg-white_A701 items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_menu.svg"
                    className="IconsOne_One"
                    alt="menu One"
                  />
                </Stack>
                <Text className="Configurations" variant="body1">
                  Product
                </Text>
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_user_2.svg"
                    className="IconsOne_One"
                    alt="user One"
                  />
                </Stack>
              </Row>
              <Row className="bg-white_A701 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_arrowleft_gray_801_24X24.svg"
                    className="IconsOne_One"
                    alt="arrowleft Three"
                  />
                </Stack>
                <Text className="Configurations1" variant="body1">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[144px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] my-[4px] w-[36%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_trash.svg"
                      className="IconsOne_One"
                      alt="trash Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_lock.svg"
                      className="IconsOne_One"
                      alt="lock Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_overflowmenu_1.svg"
                      className="IconsOne_One"
                      alt="overflowmenu Three"
                    />
                  </Stack>
                </Row>
              </Row>
              <Column className="bg-white_A701 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft_gray_801_24X24.svg"
                      className="IconsOne_One"
                      alt="arrowleft Four"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash.svg"
                        className="IconsOne_One"
                        alt="trash Four"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_lock.svg"
                        className="IconsOne_One"
                        alt="lock Four"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Four"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline3" as="h6" variant="h6">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A701 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft_gray_801_24X24.svg"
                      className="IconsOne_One"
                      alt="arrowleft Five"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash.svg"
                        className="IconsOne_One"
                        alt="trash Five"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_lock.svg"
                        className="IconsOne_One"
                        alt="lock Five"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Five"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline3" as="h5" variant="h5">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Row className="bg-gray_900 items-start justify-between p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_menu_24X24.svg"
                    className="IconsOne_One"
                    alt="menu One"
                  />
                </Stack>
                <Text className="Configurations2" variant="body1">
                  Product
                </Text>
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_user_3.svg"
                    className="IconsOne_One"
                    alt="user One"
                  />
                </Stack>
              </Row>
              <Row className="bg-gray_900 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="IconsOne_One"
                    alt="arrowleft One"
                  />
                </Stack>
                <Text className="Configurations3" variant="body1">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[144px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] my-[4px] w-[36%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_trash_24X24.svg"
                      className="IconsOne_One"
                      alt="trash One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_camera.svg"
                      className="IconsOne_One"
                      alt="camera"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="IconsOne_One"
                      alt="overflowmenu One"
                    />
                  </Stack>
                </Row>
              </Row>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="IconsOne_One"
                      alt="arrowleft One One"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash_24X24.svg"
                        className="IconsOne_One"
                        alt="trash One One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_camera.svg"
                        className="IconsOne_One"
                        alt="camera One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="IconsOne_One"
                        alt="overflowmenu One One"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline4" as="h6" variant="h6">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="IconsOne_One"
                      alt="arrowleft Two One"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash_24X24.svg"
                        className="IconsOne_One"
                        alt="trash Two One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_camera.svg"
                        className="IconsOne_One"
                        alt="camera Two"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Two One"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline4" as="h5" variant="h5">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Row className="bg-gray_900 items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_menu_24X24.svg"
                    className="IconsOne_One"
                    alt="menu One One"
                  />
                </Stack>
                <Text className="Configurations2" variant="body1">
                  Product
                </Text>
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_user_3.svg"
                    className="IconsOne_One"
                    alt="user One One"
                  />
                </Stack>
              </Row>
              <Row className="bg-gray_900 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="IconsOne_One"
                    alt="arrowleft Three One"
                  />
                </Stack>
                <Text className="Configurations3" variant="body1">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[144px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] my-[4px] w-[36%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_trash_24X24.svg"
                      className="IconsOne_One"
                      alt="trash Three One"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_camera.svg"
                      className="IconsOne_One"
                      alt="camera Three"
                    />
                  </Stack>
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="IconsOne_One"
                      alt="overflowmenu Three One"
                    />
                  </Stack>
                </Row>
              </Row>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="IconsOne_One"
                      alt="arrowleft Four One"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash_24X24.svg"
                        className="IconsOne_One"
                        alt="trash Four One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_camera.svg"
                        className="IconsOne_One"
                        alt="camera Four"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Four One"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline4" as="h6" variant="h6">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="IconsOne_One"
                      alt="arrowleft Five One"
                    />
                  </Stack>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_trash_24X24.svg"
                        className="IconsOne_One"
                        alt="trash Five One"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_camera.svg"
                        className="IconsOne_One"
                        alt="camera Five"
                      />
                    </Stack>
                    <Stack className="lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:px-[10px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="IconsOne_One"
                        alt="overflowmenu Five One"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                  <Text className="headline4" as="h5" variant="h5">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default TopappbarsPage;

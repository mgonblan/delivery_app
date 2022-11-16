import React from "react";

import { Column, Img, Text, List, Row, Radio, Line } from "components";

const NavigationdrawerPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A701 justify-start lg:p-[46px] xl:p-[58px] 2xl:p-[65px] 3xl:p-[78px] w-[100%]">
          <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] w-[63%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[91px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Navigation Drawer
              </Text>
              <a
                href={
                  "https://m3.material.io/components/navigation-drawer/overview"
                }
                target="_blank"
                className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Navigation drawers provide access to destinations in your app.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[35px] xl:gap-[44px] 2xl:gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] 3xl:p-[106px] lg:p-[62px] xl:p-[78px] 2xl:p-[88px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A701 border border-bluegray_100 border-solid items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A701 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[82%]">
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Text className="Headline" variant="body5">
                  Title
                </Text>
              </Column>
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                <Text className="Headline" variant="body5">
                  Section Header
                </Text>
              </Column>
              <Column className="bg-orange_100 items-center justify-start rounded-radius28 w-[100%]">
                <Row className="items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                  <Radio
                    value="Label"
                    className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_908 tracking-ls1"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="LabelOne"
                    label="Label"
                  ></Radio>
                  <Text
                    className="2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] statelayer15"
                    variant="body5"
                  >
                    100+
                  </Text>
                </Row>
              </Column>
              <Row className="items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Row className="items-center justify-center w-[23%]">
                  <Img
                    src="images/img_icons02.svg"
                    className="Icon"
                    alt="Icon"
                  />
                  <Text className="rowicon" variant="body5">
                    Label
                  </Text>
                </Row>
                <Text
                  className="2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] statelayer12"
                  variant="body5"
                >
                  100+
                </Text>
              </Row>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_location.svg"
                  className="Icon"
                  alt="location"
                />
                <Text className="rowicon" variant="body5">
                  Label
                </Text>
                <Text
                  className="lg:ml-[173px] xl:ml-[216px] 2xl:ml-[243px] 3xl:ml-[292px] statelayer12"
                  variant="body5"
                >
                  100+
                </Text>
              </Row>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_icons04.svg"
                  className="Icon"
                  alt="Icon One"
                />
                <Text className="rowicon" variant="body5">
                  Label
                </Text>
                <Text
                  className="lg:ml-[173px] xl:ml-[216px] 2xl:ml-[243px] 3xl:ml-[292px] statelayer12"
                  variant="body5"
                >
                  100+
                </Text>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                <Text className="Headline" variant="body5">
                  Section Header
                </Text>
              </Column>
              <Radio
                value="Label"
                className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_801 tracking-ls1"
                inputClassName="mr-[5px] w-[undefinedpx]"
                checked={false}
                name="LabelSix"
                label="Label"
                size="md"
              ></Radio>
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                  <Img
                    src="images/img_icons02.svg"
                    className="Icon"
                    alt="Icon Two"
                  />
                  <Text className="rowicon" variant="body5">
                    Label
                  </Text>
                </Row>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="Icon"
                        alt="location One"
                      />
                      <Text className="rowicon" variant="body5">
                        Label
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] mt-[1px] w-[90%]" />
                    <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                      <Text className="Headline" variant="body5">
                        Section Header
                      </Text>
                    </Column>
                    <Radio
                      value="Label"
                      className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_801 tracking-ls1 w-[100%]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      checked={false}
                      name="LabelTen"
                      label="Label"
                      size="md"
                    ></Radio>
                  </Column>
                </Column>
              </Column>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_icons02.svg"
                  className="Icon"
                  alt="Icon Three"
                />
                <Text className="rowicon" variant="body5">
                  Label
                </Text>
              </Row>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_location.svg"
                  className="Icon"
                  alt="location Two"
                />
                <Text className="rowicon" variant="body5">
                  Label
                </Text>
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pt-[4px] px-[4px] w-[100%]">
              <Text className="Labels" variant="body4">
                Building blocks
              </Text>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[87%]">
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Text className="Headline1" variant="body5">
                  Title
                </Text>
              </Column>
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                <Text className="Headline1" variant="body5">
                  Section Header
                </Text>
              </Column>
              <Column className="bg-gray_802 items-center justify-start rounded-radius28 w-[100%]">
                <Row className="items-center justify-between lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius28 w-[100%]">
                  <Radio
                    value="Label"
                    className="font-medium my-[4px] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-orange_100 tracking-ls1"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="LabelOneOne"
                    label="Label"
                  ></Radio>
                  <Text
                    className="lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] statelayer23"
                    variant="body5"
                  >
                    100+
                  </Text>
                </Row>
              </Column>
              <Row className="items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Row className="items-center justify-center w-[21%]">
                  <Img
                    src="images/img_icons02_gray_400.svg"
                    className="Icon"
                    alt="Icon One"
                  />
                  <Text className="rowicon1" variant="body5">
                    Label
                  </Text>
                </Row>
                <Text className="statelayer63" variant="body5">
                  100+
                </Text>
              </Row>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_icons03.svg"
                  className="Icon"
                  alt="Icon One One"
                />
                <Text className="rowicon1" variant="body5">
                  Label
                </Text>
                <Text
                  className="lg:ml-[194px] xl:ml-[243px] 2xl:ml-[274px] 3xl:ml-[329px] statelayer20"
                  variant="body5"
                >
                  100+
                </Text>
              </Row>
              <Row className="items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Radio
                  value="Label"
                  className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_400 tracking-ls1"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  checked={false}
                  name="LabelFourOne"
                  label="Label"
                ></Radio>
                <Text className="statelayer63" variant="body5">
                  100+
                </Text>
              </Row>
              <Line className="bg-gray_800 h-[1px] mt-[1px] w-[91%]" />
              <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                <Text className="Headline1" variant="body5">
                  Section Header
                </Text>
              </Column>
              <Radio
                value="Label"
                className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_400 tracking-ls1"
                inputClassName="mr-[5px] w-[undefinedpx]"
                checked={false}
                name="LabelSixOne"
                label="Label"
                size="md"
              ></Radio>
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                  <Img
                    src="images/img_icons02_gray_400.svg"
                    className="Icon"
                    alt="Icon Two One"
                  />
                  <Text className="rowicon1" variant="body5">
                    Label
                  </Text>
                </Row>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                      <Img
                        src="images/img_icons03.svg"
                        className="Icon"
                        alt="Icon Three One"
                      />
                      <Text className="rowicon1" variant="body5">
                        Label
                      </Text>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[91%]" />
                    <Column className="justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius28 w-[100%]">
                      <Text className="Headline1" variant="body5">
                        Section Header
                      </Text>
                    </Column>
                    <Radio
                      value="Label"
                      className="font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-gray_400 tracking-ls1 w-[100%]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      checked={false}
                      name="LabelTenOne"
                      label="Label"
                      size="md"
                    ></Radio>
                  </Column>
                </Column>
              </Column>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_icons02_gray_400.svg"
                  className="Icon"
                  alt="Icon Four"
                />
                <Text className="rowicon1" variant="body5">
                  Label
                </Text>
              </Row>
              <Row className="items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_icons03.svg"
                  className="Icon"
                  alt="Icon Five"
                />
                <Text className="rowicon1" variant="body5">
                  Label
                </Text>
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pt-[4px] px-[4px] w-[100%]">
              <Text className="Labels1" variant="body4">
                Building blocks
              </Text>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default NavigationdrawerPage;

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Heading,
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Sun } from "./Svg";
import { CopyIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ColorCard = () => {
  var rgb = { r: 255, g: 0, b: 0 };
  const [hexCode, setHexCode] = useState("#ff0000");
  const [rgbCode, setRgbCode] = useState("RGB(255, 0, 0)");
  const [isDarkMode, setDarkMode] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const cardBg = useColorModeValue("#FFFFFF", "#000A1E");
  const toast = useToast();
  const toastIdRef = React.useRef();

  const toggleDarkMode = () => {
    setDarkMode((isDarkMode) => !isDarkMode);
    toggleColorMode();
  };

  function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    toast({
      title: `${text} was copied`,
      duration: 1000,
    });
  }

  function calcRgb({ val }: { val: any }) {
    const sec = 100 / 6;
    const mult = 255 / sec;
    if (val >= 0 && val <= sec) {
      rgb.r = 225;
      rgb.g = Math.round(val * mult);
      rgb.b = 0;
    } else if (val > sec && val <= sec * 2) {
      rgb.r = Math.round(255 - mult * (val - sec));
      rgb.g = 255;
      rgb.b = 0;
    } else if (val > sec * 2 && val <= sec * 3) {
      rgb.r = 0;
      rgb.g = 255;
      rgb.b = Math.round(mult * (val - sec * 2));
    } else if (val > sec * 3 && val <= sec * 4) {
      rgb.r = 0;
      rgb.g = Math.round(255 - mult * (val - sec * 3));
      rgb.b = 255;
    } else if (val > sec * 4 && val <= sec * 5) {
      rgb.r = Math.round(mult * (val - sec * 4));
      rgb.g = 0;
      rgb.b = 255;
    } else if (val > sec * 5 && val <= 100) {
      rgb.r = 255;
      rgb.g = 0;
      if (val == 100) {
        rgb.b = 0;
      } else {
        rgb.b = Math.round(255 - mult * (val - sec * 5));
      }
    }
    setHexCode(rgbToHex(rgb.r, rgb.g, rgb.b));
    setRgbCode(`RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`);
  }

  useEffect(() => {
    const hexButton = document.getElementById("hexButton");
    const rgbButton = document.getElementById("rgbButton");
    const colorWindow = document.getElementById("colorWindow");
    hexButton?.setAttribute("textContent", hexCode);
    rgbButton?.setAttribute("textContent", rgbCode);
    colorWindow?.setAttribute("bg", hexCode);
  });

  return (
    <Card id="mainCard" bg={cardBg} boxShadow="2xl">
      <CardHeader>
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
        <Heading size="sm">Color Picker</Heading>
      </CardHeader>
      <Box
        id="colorWindow"
        bg={hexCode}
        mx={5}
        mb={2}
        height="200px"
        borderRadius="8px"
      ></Box>
      <Slider
        aria-label="slider-ex-2"
        colorScheme="pink"
        defaultValue={2}
        mx={5}
        my={3}
        width="90%"
        onChange={(val) => calcRgb({ val })}
      >
        <SliderTrack
          height="15px"
          borderRadius="20px"
          bg="linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)"
        ></SliderTrack>
        <SliderThumb
          bg="clear"
          border="2px"
          borderColor="white"
          boxSize={5}
          boxShadow="2px 2px 5px rgba(0, 0, 0, 0.25)"
        />
      </Slider>
      <Heading size="xs" mx={5}>
        Hex
      </Heading>
      <ButtonGroup my={3} mx={5} spacing="3">
        <Button
          variant="outline"
          colorScheme="gray"
          p={3}
          size="sm"
          rightIcon={<CopyIcon />}
          id="hexButton"
          onClick={() => copyText(hexCode)}
        >
          {hexCode}
        </Button>
        <Button
          variant="outline"
          colorScheme="gray"
          p={3}
          size="sm"
          rightIcon={<CopyIcon />}
          id="rgbButton"
          onClick={() => copyText(rgbCode)}
        >
          {rgbCode}
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ColorCard;

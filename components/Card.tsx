import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Sun } from "./Svg";
import { CopyIcon } from "@chakra-ui/icons";

export const ColorCard = () => {
  return (
    <Card background="white">
      <CardHeader>
        <IconButton
          aria-label="Light mode"
          colorScheme="clear"
          size="xxs"
          mb={3}
          icon={<Sun />}
        />
        <Heading size="sm">Color Picker</Heading>
      </CardHeader>
      <Box bg="lightgray" mx={5} mb={2} height="200px" borderRadius="8px"></Box>
      <Box bg="lightgray" mx={5} my={3} height="15px" borderRadius="20px"></Box>
      <Box bg="lightgray" mx={5} mb={3} height="15px" borderRadius="20px"></Box>
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
        >
          #000000
        </Button>
        <Button variant="outline" colorScheme="gray" p={3} size="sm">
          100%
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ColorCard;

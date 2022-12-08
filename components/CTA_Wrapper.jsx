import { styled } from "@stitches/react";

export default function Wrapper() {
  const Box = styled("div");

  return (
    <Box
      css={{
        width: 1209,
        height: 219,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff9e9e",
        overflow: "hidden",
        padding: "0px 0px 0px 0px",
        alignContent: "center",
        flexWrap: "nowrap",
        gap: 10,
        borderRadius: 20,
      }}
    ></Box>
  );
}

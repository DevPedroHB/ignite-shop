import { keyframes, styled } from "../../styles";

const skeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-200px 0",
  },
  "100%": {
    backgroundPosition: "calc(200px + 100%) 0",
  },
});

export const ProductSkeletonContainer = styled("div", {
  width: "43.5rem",
  height: "41rem",
  display: "grid",
  gridTemplateRows: "1fr 2rem",
  gap: "1.5rem",

  div: {
    display: "grid",
    gridTemplateColumns: "20.625rem 6.25rem",
    justifyContent: "space-between",
  },
});

export const SkeletonItem = styled("div", {
  animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
  backgroundColor: "$gray800",
  backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray800)",
  backgroundSize: "12.5rem 100%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: 8,
});

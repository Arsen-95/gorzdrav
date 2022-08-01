import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Regular.ttf");
        font-weight: 400;
        fort-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Medium.ttf");
        font-weight: 500;
        fort-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-SemiBold.ttf");
        font-weight: 600;
        fort-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Bold.ttf");
        font-weight: 700;
        fort-style: normal;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;

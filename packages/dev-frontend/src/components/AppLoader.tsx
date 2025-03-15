import { Flex, Spinner, Heading, Box } from "theme-ui";

export const AppLoader = () => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "black",
      color: "white",
      flexDirection: "column",
      gap: 3,
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      "::before": {
        content: '""',
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 10.01%)",
        backgroundSize: "20px 20px",
        animation: "moveBackground 4s linear infinite",
        zIndex: 1
      },
      "@keyframes moveBackground": {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        }
      }
    }}
  >
    <Spinner
      sx={{
        m: 2,
        color: "white",
        width: "64px",
        height: "64px",
        borderWidth: "4px",
        borderTopColor: "rgba(255, 255, 255, 0.8)",
        borderLeftColor: "rgba(255, 255, 255, 0.8)",
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
        borderRightColor: "rgba(255, 255, 255, 0.2)",
        animation: "spin 1s linear infinite",
        zIndex: 2
      }}
    />

    <Heading
      sx={{
        fontSize: ["24px", "32px"],
        fontWeight: 600,
        background: "linear-gradient(90deg, #ffffff, #ff7e5f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        zIndex: 2
      }}
    >
      Loading...
    </Heading>

    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
        animation: "pulse 2s ease-in-out infinite",
        zIndex: 1,
        "@keyframes pulse": {
          "0%": {
            opacity: 0.6
          },
          "50%": {
            opacity: 1
          },
          "100%": {
            opacity: 0.6
          }
        }
      }}
    />
  </Flex>
);

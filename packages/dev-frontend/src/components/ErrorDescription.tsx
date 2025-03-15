import { Box, Flex, Text } from "theme-ui";
import { Icon } from "./Icon";

export const ErrorDescription: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      mb: [2, 3],
      p: 3,
      border: 1,
      borderRadius: "12px",
      borderColor: "danger",
      boxShadow: "0 4px 12px rgba(220, 44, 16, 0.2)",
      background: "linear-gradient(145deg, rgba(220, 44, 16, 0.1), rgba(220, 44, 16, 0.05))",
      position: "relative",
      overflow: "hidden",
      "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
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
    <Flex sx={{ alignItems: "center", position: "relative", zIndex: 2 }}>
      {/* Wrap the Icon in a Box to apply sx styles */}
      <Box
        sx={{
          color: "danger",
          filter: "drop-shadow(0 2px 4px rgba(220, 44, 16, 0.3))"
        }}
      >
        <Icon name="exclamation-triangle" size="lg" />
      </Box>
      <Text
        sx={{
          ml: 2,
          fontSize: 2,
          fontWeight: "medium",
          color: "danger",
          textShadow: "0 2px 4px rgba(220, 44, 16, 0.2)"
        }}
      >
        {children}
      </Text>
    </Flex>
  </Box>
);

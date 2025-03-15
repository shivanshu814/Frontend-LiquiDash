import Tippy from "@tippyjs/react";
import type { TippyProps } from "@tippyjs/react";
import React from "react";
import { Box, Card, Link } from "theme-ui";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export type TooltipProps = Pick<TippyProps, "placement"> &
  React.PropsWithChildren<{
    message: React.ReactNode;
    link?: string;
  }>;

export type LearnMoreLinkProps = React.PropsWithChildren<Pick<TooltipProps, "link">>;

export const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({ link, children }) => {
  return (
    <Link
      href={link}
      target="_blank"
      sx={{
        color: "primary",
        fontWeight: "bold",
        textDecoration: "none",
        ":hover": { textDecoration: "underline" }
      }}
    >
      {children ?? <>Learn more</>}
    </Link>
  );
};

export const Tooltip: React.FC<TooltipProps> = ({ children, message, placement = "top", link }) => {
  return (
    <Tippy
      interactive={true}
      placement={placement}
      animation="shift-away"
      delay={[100, 200]}
      content={
        <Card
          variant="tooltip"
          sx={{
            padding: 2,
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            backgroundColor: "background",
            border: "1px solid",
            borderColor: "muted",
            maxWidth: "240px"
          }}
        >
          {message}
          {link && (
            <Box mt={1} sx={{ textAlign: "center" }}>
              <LearnMoreLink link={link} />
            </Box>
          )}
        </Card>
      }
    >
      <Box as="span" sx={{ cursor: "pointer", textDecoration: "underline dotted" }}>
        {children}
      </Box>
    </Tippy>
  );
};

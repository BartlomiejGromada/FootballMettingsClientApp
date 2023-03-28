import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface IconButtonWithTooltipProps {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconColor?: string;
  onClick?: () => void;
}

function IconButtonWithTooltip(props: IconButtonWithTooltipProps) {
  const {
    text,
    icon: Icon,
    iconColor = "rgba(255, 255, 255, 0.54)",
    onClick,
  } = props;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <Tooltip title={text}>
      <IconButton sx={{ color: iconColor }} onClick={onClickHandler}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

export { IconButtonWithTooltip };

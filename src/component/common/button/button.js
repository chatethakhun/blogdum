import { ButtonTheme } from "../../../theme/common/button/button-theme";
import React from "react";

export const ButtonComponent = ({
  children,
  loading,
  onClick,
  disabled,
  width,
  bgColor
}) =>
  loading ? (
    <ButtonTheme width={width} bgColor={bgColor}>
      <i className="fas fa-spinner fa-spin" />
    </ButtonTheme>
  ) : (
    <ButtonTheme
      type="submit"
      disabled={disabled}
      width={width}
      onClick={onClick}
      bgColor={bgColor}
    >
      {children}
    </ButtonTheme>
  );

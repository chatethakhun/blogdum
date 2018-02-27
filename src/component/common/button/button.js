import React from "react";

export const ButtonComponent = ({ children, loading, onClick, disabled }) =>
  loading ? (
    <button>
      <i className="fas fa-spinner fa-spin" />
    </button>
  ) : (
    <button type="submit" disabled={disabled}>
      {children}
    </button>
  );

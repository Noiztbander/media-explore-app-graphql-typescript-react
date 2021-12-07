import React from "react";
import { loadingButtonProps } from "../../utils/types";

export const LoadingButton = ({
  handleClick = () => {},
  disabled = false,
  isSubmmiting = false,
  sendingText = "Enviando",
  idleText = "Guardar",
  type = "submit",
  className = "btn btn-primary btn-sm w-100 d-flex align-items-center justify-content-center gap-3 px-3",
}: loadingButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={className}>
      <span>{isSubmmiting ? sendingText : idleText}</span>
      {isSubmmiting && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </button>
  );
};

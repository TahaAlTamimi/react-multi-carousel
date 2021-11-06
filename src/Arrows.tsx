import * as React from "react";

import { StateCallBack } from "./types";

interface LeftArrowProps {
  customLeftArrow?: React.ReactElement<any> | null;
  getState: () => StateCallBack;
  previous: () => void;
  disabled?: boolean;
  isRTL?: boolean;
}
interface RightArrowProps {
  customRightArrow?: React.ReactElement<any> | null;
  getState: () => StateCallBack;
  next: () => void;
  disabled?: boolean;
  isRTL?: boolean;
}

const LeftArrow = ({
  customLeftArrow,
  getState,
  previous,
  disabled,
  isRTL
}: LeftArrowProps): React.ReactElement<any> => {
  if (customLeftArrow) {
    return React.cloneElement(customLeftArrow, {
      onClick: () => previous(),
      carouselState: getState(),
      disabled: disabled,
      isRTL:isRTL
    });
  }

  return (
    <button
      aria-label="Go to previous slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--left ${isRTL&&".rtl"}`}
      onClick={() => previous()}
      type="button"
      disabled={disabled}
    />
  );
};
const RightArrow = ({
  customRightArrow,
  getState,
  next,
  disabled,
  isRTL
}: RightArrowProps): React.ReactElement<any> => {
  if (customRightArrow) {
    return React.cloneElement(customRightArrow, {
      onClick: () => next(),
      carouselState: getState(),
      disabled: disabled,
      isRTL:isRTL
    });
  }
  return (
    <button
      aria-label="Go to next slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--right ${isRTL&&"rtl"}`}
      onClick={() => next()}
      type="button"
      disabled={disabled}
    />
  );
};

export { LeftArrow, RightArrow };

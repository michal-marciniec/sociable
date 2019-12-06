import React, { useCallback } from 'react';

const LinkButton = ({ onClick, ...restProps }) => {
  const onClickCallback = useCallback((event) => {
    event.preventDefault();
    onClick(event);
  }, [onClick]);

  return (
    <a {...restProps} onClick={onClickCallback} />
  );
};

export default LinkButton;

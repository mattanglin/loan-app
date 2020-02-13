import React from 'react';
import style from './SubmitButton.style';

const SubmitButton: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => <button {...props} css={style} type="submit" />;

export default SubmitButton;
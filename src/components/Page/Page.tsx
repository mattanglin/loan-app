import React from 'react';
import cx from 'classnames';
import style from './Page.style';

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children }) => <div css={style} className={cx('page', className)}>{children}</div>;

export default Page;

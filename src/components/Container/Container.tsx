import React, { ReactNode } from 'react';
import cx from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './Container.module.scss';

interface Props {
  readonly className?: string;
  readonly children?: ReactNode;
}

const Container = ({ className, children }: Props) => (
  <div className={styles.Container}>
    <div className={cx(styles.page, className)}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Container;

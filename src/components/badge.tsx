import { ReactNode } from 'react';
import style from '@/styles/components/badge.module.css';
type Props = {
  children: ReactNode;
};

const Badge = ({ children }: Props) => {
  return <span className={style.badge}>{children}</span>;
};

export { Badge };

import styles from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
  classNames?: string;
}

export default function Card({ children, classNames }: CardProps) {
  return (
    <div
      className={`${styles.card} flex rounded-[10px] gap-[10px] justify-between ${classNames}`}
    >
      {children}
    </div>
  );
}

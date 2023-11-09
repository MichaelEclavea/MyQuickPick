import { mergeClasses, tokens } from "@fluentui/react-components";
import styles from "./Card.module.scss";

const Card = ({ content, className, style }) => {
  const mergedStyles = { boxShadow: tokens.shadow16, ...style };
  
  return (
    <div className={mergeClasses(styles.root, className)} style={mergedStyles}>
      {content}
    </div>
  );
};

export default Card;

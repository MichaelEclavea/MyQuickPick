import React from "react";
import { Body1Strong, Caption1, Subtitle2 } from "@fluentui/react-components";
import { BrainCircuit20Filled } from "@fluentui/react-icons";
import styles from "./ResultBar.module.scss";

const ResultBar = ({ gameData, resultArray, reason }) => {
  const randomKey = Math.floor(Math.random() * 1000);
  return (
    <div
      key={`${randomKey}-${gameData.name}`}
      className={styles.root}
      style={{ backgroundColor: gameData.color }}
    >
      <div className={styles.gameNameContainer}>
        <Subtitle2 className={styles.gameName}>{gameData.name}</Subtitle2>
      </div>
      <div className={styles.resultsWrapper}>
        {resultArray.map((result, index) => (
          <div key={index} className={styles.result}>
            <Body1Strong>{result}</Body1Strong>
          </div>
        ))}
        {!!reason && (
          <Caption1>
            <BrainCircuit20Filled className={styles.brainIcon} />{' '}{reason}
          </Caption1>
        )}
      </div>
    </div>
  );
};

export default ResultBar;

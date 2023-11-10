import React, { useState } from "react";
import {
  Body1,
  Button,
  Display,
  FluentProvider,
  LargeTitle,
  Spinner,
  Title1,
  Title3,
  webLightTheme,
} from "@fluentui/react-components";
import { BrainCircuit20Regular, Broom20Regular } from "@fluentui/react-icons";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator";
import Card from "../../components/card/Card";
import ResultBar from "../../components/resultBar/ResultBar";
import styles from "./GameScreen.module.scss";

const GameScreen = ({ selectedGame }) => {
  const [results, setResults] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const requestFromApi = async (nameOfGame) => {
    try {
      const gamePrompt = getGamePrompt(nameOfGame);
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant/data analysis that only gives the exact answer when asked a question. Your job is to give an educated guess on what the days winning numbers will be based on the lottery's previous winning numbers found on their website. For every answer, you give a one sentence response on why you chose that answer. Your response should be an Javascript Object with the key 'reason' for your short reason why you made that guess and another key 'numbers' for the numbers you chose and it should be in an Javascript array.",
          },
          { role: "user", content: gamePrompt },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log("response", response.choices[0].message.content);
      const parsedResponse = JSON.parse(response.choices[0].message.content);
      // console.log("parsedResponse", parsedResponse);
      // return response.choices[0].message.content;
      return parsedResponse;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRandomGenerate = () => {
    let resultArray = randomNumberGenerator(
      selectedGame.min,
      selectedGame.max,
      selectedGame.resultNumCount
    );
    setResults([
      ...results,
      {
        gameData: selectedGame,
        resultArray: resultArray,
      },
    ]);
  };

  const handleAiGenerate = async () => {
    try {
      setIsProcessing(true);
      const data = await requestFromApi(selectedGame);
      setResults([
        ...results,
        {
          gameData: selectedGame,
          resultArray: data.numbers,
          reason: data.reason,
        },
      ]);
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      console.log(error);
    }
  };

  const renderTitleCard = () => (
    <Card
      className={styles.titleCardRoot}
      content={
        <Display style={{ color: selectedGame.color }}>
          {selectedGame.name}
        </Display>
      }
    />
  );

  const renderAiCard = () => (
    <Card
      content={
        <div className={styles.cardContentRoot}>
          <Title3>AI Generated</Title3>
          <Body1>
            Generate your chosen games winning numbers through the power of AI.
            AI will evaluate the previous winning numbers throughout the current
            year and give you the most likely outcome of numbers to win.
          </Body1>
            <FluentProvider
              theme={webLightTheme}
              className={styles.providerWrapper}
            >
              {isProcessing ? (
                <Button>
                  <Spinner size="tiny" label={"Processing..."} />
                </Button>
              ) : (
                <div className={styles.aiButtonWrapper}>
                  <Button
                    appearance="default"
                    onClick={handleAiGenerate}
                    icon={<BrainCircuit20Regular />}
                  >
                    AI-Generate
                  </Button>
                  <Button
                    appearance="primary"
                    onClick={clearApiKey}
                    icon={<Broom20Regular />}
                  >
                    Clear Key
                  </Button>
                </div>
              )}
            </FluentProvider>
        </div>
      }
    />
  );

  const renderRandomCard = () => (
    <Card
      content={
        <div className={styles.cardContentRoot}>
          <Title3>Random Generated</Title3>
          <Body1>Generate a random set of numbers.</Body1>
          <FluentProvider
            theme={webLightTheme}
            className={styles.providerWrapper}
          >
            {isProcessing ? (
              <Button>
                <Spinner size="tiny" label={"Processing..."} />
              </Button>
            ) : (
              <Button onClick={handleRandomGenerate}>Generate</Button>
            )}
          </FluentProvider>
        </div>
      }
    />
  );

  const renderPrizeCard = () => (
    <div className={styles.prizeCardRoot}>
      <Card
        style={{
          backgroundColor: selectedGame.color,
          width: '70%',
          minWidth: 'fit-content'
        }}
        content={
          <div className={styles.cardContentRoot}>
            <Title1>Top Prize</Title1>
            <LargeTitle>{selectedGame.win}</LargeTitle>
          </div>
        }
      />
    </div>
  );

  const renderResultsCard = () => (
    <Card
      className={styles.resultsCardRoot}
      content={
        <div className={styles.cardResultRoot}>
          <div className={styles.titleWrapper}>
            {!!results.length ? (
              <>
                <Title3>Generated Numbers</Title3>
                <div>
                  <Button size="small" onClick={handleClearResults}>
                    Clear list
                  </Button>
                </div>
              </>
            ) : (
              <Title3>Results will show here...</Title3>
            )}
          </div>
          <div className={styles.resultsWrapper}>
            {results.map((result, index) => (
              <ResultBar
                key={index}
                gameData={result.gameData}
                resultArray={result.resultArray}
                reason={result?.reason}
              />
            ))}
          </div>
        </div>
      }
    />
  );

  const renderLeftColumn = () => (
    <>
      {renderTitleCard()}
      {renderAiCard()}
      {renderRandomCard()}
    </>
  );

  const renderRightColumn = () => (
    <>
      {renderPrizeCard()}
      {renderResultsCard()}
    </>
  );

  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        {selectedGame && renderLeftColumn()}
      </div>
      <div className={styles.rightColumn}>
        {selectedGame && renderRightColumn()}
      </div>
    </div>
  );
};

export default GameScreen;

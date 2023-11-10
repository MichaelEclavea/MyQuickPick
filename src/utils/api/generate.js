// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// const getGameLink = (game) => {
//   switch (game) {
//     case "pick3":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=pick3&unittype=year&unitcount=2023";
//     case "match4":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=match4&unittype=year&unitcount=2023";
//     case "hit5":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=hit5&unittype=year&unitcount=2023";
//     case "keno":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=dailykeno&unittype=year&unitcount=2023";
//     case "cashPop":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=cashpop&unittype=year&unitcount=2023";
//     case "lotto":
//       return "https://walottery.com/WinningNumbers/PastDrawings.aspx?gamename=lotto&unittype=year&unitcount=2023";
//     default:
//       return "";
//   }
// };

// const getGamePrompt = (game) => {
//   const link = getGameLink(game.name);
//   return `Select ${game.resultNumCount} numbers between ${game.min} and ${
//     game.max
//   } that will most likely be correct base on the previous winning data found ${link}, the numbers ${
//     game.min === 0 ? "can" : "cannot"
//   } be repeated`;
// };

// export async function requestFromApi(nameOfGame) {
//   try {
//     const gamePrompt = getGamePrompt(nameOfGame);
//     console.log("game", nameOfGame);
//     const response = await openai.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant/data analysis that only gives the exact answer when asked a question. Your job is to give an educated guess on what the days winning numbers will be based on the lottery's previous winning numbers found on their website. For every answer, you give a one sentence response on why you chose that answer. Your response should be an Javascript Object with the key 'reason' for your short reason why you made that guess and another key 'numbers' for the numbers you chose and it should be in an Javascript array.",
//         },
//         { role: "user", content: gamePrompt },
//       ],
//       model: "gpt-3.5-turbo"
//     });
//     console.log("response", response.choices[0].message.content);
//     const parsedResponse = JSON.parse(response.choices[0].message.content);
//     console.log("parsedResponse", parsedResponse);
//     // return response.choices[0].message.content;
//     return parsedResponse;
//   } catch (error) {
//     alert(error.message);
//   }
// }

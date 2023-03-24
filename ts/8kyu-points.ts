/* 
설명
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. 
Each match is represented by a string in the format "x:y", 
where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
FUNDAMENTALSARRAYSSTRINGS


*/

export function points(games: string[]): number {
  let score: number = 0;
  games.map((game: string) => {
    let ourTeamScore = game.split(':')[0]
    let otherTeamScore = game.split(':')[1]
    if (ourTeamScore > otherTeamScore) {
      score += 3
    } else if (ourTeamScore === otherTeamScore) {
      score += 1
    }

  })
  return score // your code here
}
/* 
export function points(games : string[]): number {
  return games.reduce((prev, curr) => {
    const [ourTeamScore, opponentScore] = curr.split(':');
    
    if (ourTeamScore === opponentScore) return prev + 1;
    
    if (ourTeamScore > opponentScore) {
      return prev + 3;
    } else {
      return prev;
    }
  }, 0);
}


export function points(games : string[]): number {
  return games.reduce((prev, curr) => {
    const [ourTeamScore, opponentScore] = curr.split(':');
    
    if (ourTeamScore === opponentScore) return prev + 1;
    
    if (ourTeamScore > opponentScore) {
      return prev + 3;
    } else {
      return prev;
    }
  }, 0);
}
*/

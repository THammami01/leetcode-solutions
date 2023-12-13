// https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75

const predictPartyVictory = (senate: string): string => {
  // WRONG SOLUTION, 78/82 TEST CASES ONLY HAS PASSED
  // let radiantCount = 0,
  //   direCount = 0;

  // for (const currSenator of senate)
  //   if (currSenator === "R") radiantCount++;
  //   else direCount++;

  // let bannedRadiantCount = 0,
  //   bannedDireCount = 0,
  //   radiantHelperCount = radiantCount,
  //   direHelperCount = direCount,
  //   notBannedSenate = "";

  // for (const currSenator of senate) {
  //   if (currSenator === "R")
  //     if (radiantHelperCount === radiantCount) {
  //       direHelperCount--;
  //       bannedDireCount++;
  //       notBannedSenate += currSenator;
  //     } else radiantHelperCount++;
  //   else if (direHelperCount === direCount) {
  //     radiantHelperCount--;
  //     bannedRadiantCount++;
  //     notBannedSenate += currSenator;
  //   } else direHelperCount++;
  // }

  // const radiantCountAllowedToVote = radiantCount - bannedRadiantCount,
  //   direCountAllowedToVote = direCount - bannedDireCount;

  // if (radiantCountAllowedToVote > direCountAllowedToVote) return "Radiant";
  // if (direCountAllowedToVote > radiantCountAllowedToVote) return "Dire";
  // return predictPartyVictory(notBannedSenate)

  const radiantQueue = [];
  const direQueue = [];

  for (let i = 0; i < senate.length; i++)
    if (senate[i] === "R") radiantQueue.push(i);
    else direQueue.push(i);

  while (radiantQueue.length > 0 && direQueue.length > 0)
    if (radiantQueue[0] > direQueue[0]) {
      radiantQueue.shift();
      // @ts-ignore
      direQueue.push(direQueue.shift() + senate.length);
    } else {
      direQueue.shift();
      // @ts-ignore
      radiantQueue.push(radiantQueue.shift() + senate.length);
    }

  return radiantQueue.length === 0 ? "Dire" : "Radiant";
};

console.log(predictPartyVictory("RD")); // Radiant
console.log(predictPartyVictory("RDD")); // Dire
console.log(predictPartyVictory("DDRRR")); // Dire
console.log(predictPartyVictory("RRDDD")); // Radiant
console.log(predictPartyVictory("DRRDRDRDRDDRDRDR")); // Radiant
console.log(predictPartyVictory("RRDRDDRDRRDDDDDRDRDR")); // Radiant

// Input: senate = "RD"
// Output: "Radiant"
// Explanation:
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

// Input: senate = "RDD"
// Output: "Dire"
// Explanation:
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And the third senator comes from Dire and he can ban the first senator's right in round 1.
// And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

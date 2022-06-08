const longestCommonPrefix = (strs) => {
  // Common letter counter
  let counter = 0;

  external: for (let i = 0; i < strs[0].length; i++) {
    // Get letter from first word
    var letter = strs[0].charAt(i);

    // Check rest of the strs on that same positions
    for (let j = 1; j < strs.length; j++) {
      // Break when word is shorter or letter is different
      if (strs[j].length <= i || letter != strs[j].charAt(i)) {
        break external;
      }
    }

    // Increase counter, because all of strs
    // has the same letter (e.g. "E") on the same position (e.g. position "5")
    counter++;
  }

  // Return proper substring
  return strs[0].substring(0, counter);
};

module.exports = {longestCommonPrefix};
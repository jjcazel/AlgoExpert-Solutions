// O(n^2 + m) time and O(n + m) space, where n is the length of the string and 
// m is the length of the pattern
function patternMatcher(pattern, string) { 
  if (pattern.length > string.length) return [];
  let patternSwitched = pattern[0] === 'y' ? true : false; 
  const newPattern = getNewPattern(pattern, patternSwitched); 
  const counts = {x: 0, y: 0}; 
  const firstYPos = getPatternHashAndFirstYPos(counts, newPattern); 
  const numOfXs = counts['x'];
  const numOfYs = counts['y']; 

  if (numOfYs !== 0) {
    for (let lenOfX = 1; lenOfX < string.length; lenOfX++) { 
      const lenOfY = (string.length - lenOfX * numOfXs) / numOfYs; 
      if (lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      const yIdx = firstYPos * lenOfX; 
      const x = string.slice(0, lenOfX); 
      const y = string.slice(yIdx, yIdx + lenOfY); 

      const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
      if (string === potentialMatch.join('')) {
        return patternSwitched ? [y, x] : [x, y];
      }
    }
  } else {
    const lenOfX = string.length / numOfXs;
    if (lenOfX % 1 === 0) {
      const x = string.slice(0, lenOfX);
      const potentialMatch = newPattern.map(char => (char === 'x' ? x : ''));
      if (string === potentialMatch.join('')) {
        return patternSwitched ? ['', x] : [x, ''];
      }
    }
  }
  return [];
}

function getNewPattern(pattern, patternSwitched) {
  const newPattern = [];
  
  for (const char of pattern) {
    if (patternSwitched) {
       if (char === 'y') {
        newPattern.push('x');
      } else {
        newPattern.push('y');
      }
    } else {
      newPattern.push(char)
    }
  }
  
  return newPattern;
}

function getPatternHashAndFirstYPos(counts, pattern) {
  let firstYPos = null;
  for (let idx = 0; idx < pattern.length; idx++) {
    counts[pattern[idx]]++;
    if (pattern[idx] === 'y' && firstYPos == null) {
      firstYPos = idx;
    }
  }
  
  return firstYPos;
}


// Do not edit the line below.
exports.patternMatcher = patternMatcher;

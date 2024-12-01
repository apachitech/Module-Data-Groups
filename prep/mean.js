function calculateMean(list) {
    let total = 0;
    for (const item of list) {
      total += item;
    }
    return total / list.length; // Return the mean value
    
  }

  module.exports = calculateMean; // Properly exporting the function
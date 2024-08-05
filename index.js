// Code your solution here
// Find matching drivers
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Find drivers whose names begin with the given string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Find drivers with matching name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Example usage
  const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'San Francisco' },
    { name: 'Bobby', hometown: 'Boston' }
  ];
  
  console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette'], 'bobby')); // ['Bobby']
  console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette'], 'Sa')); // ['Sammy', 'Sally']
  console.log(matchName(drivers, 'bobby')); // [{ name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'Boston' }]
  
  // To run tests, use a testing framework like Jest or Mocha
  // Install dependencies: npm install
  // Run tests: npm test
  
console.log("Question 4: Monthly Distributor");

let monthlyArray = [
  { state: "SP", value: 67836.43, percentage: 0 },
  { state: "RJ", value: 36678.66, percentage: 0 },
  { state: "MG", value: 29229.88, percentage: 0 },
  { state: "ES", value: 27165.48, percentage: 0 },
  { state: "OTHERS", value: 19849.53, percentage: 0 },
];

function calculatePercentageForState(array) {
  let totalValue = array.reduce((acc, cur) => acc + cur.value, 0);

  let monthlyArrayWithPercentage = array.map((item) => {
    return {
      ...item,
      percentage: (item.value / totalValue) * 100,
    };
  });

  return console.table(monthlyArrayWithPercentage);
}

calculatePercentageForState(monthlyArray);

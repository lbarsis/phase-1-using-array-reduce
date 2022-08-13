const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((initialCount, newCount) => initialCount + newCount, 0)

console.log(totalBatteries)
// Task 1
// (20 - 0) / 5 = 4 
solution1_actual_result = solution1(0, 20, 5);
solution1_expected_result = 4;

console.log("Task 1. Test 1: '(20 - 0) / 5 = 4'")

testExt(solution1_actual_result, solution1_expected_result);

// (30 - 5) / 4 = 6,25 (i.e. 7 days)
solution1_actual_result = solution1(5, 30, 4);
solution1_expected_result = 7;

console.log("Task 1. Test 2: '(30 - 5) / 4 = 6,25 (i.e. 7 days)'")

testExt(solution1_actual_result, solution1_expected_result);

// Task 2
// Between 12 and 19 -> max: 31
solution2_actual_result = solution2(12, 19);
solution2_expected_result = 31;

console.log("Task 2. Test 1: 'Between 12 and 19 -> max: 31'")

testExt(solution2_actual_result, solution2_expected_result);

// Between -10 and 10 -> max: 15
solution2_actual_result = solution2(-10, 10);
solution2_expected_result = 15;

console.log("Task 2. Test 2: 'Between -10 and 10 -> max: 15'")

testExt(solution2_actual_result, solution2_expected_result);

// Between -20 and -10 -> max: 0
solution2_actual_result = solution2(-19, -12);
solution2_expected_result = 31;

console.log("Task 2. Test 3: 'Between -19 and -12 -> max: 31'")

testExt(solution2_actual_result, solution2_expected_result);
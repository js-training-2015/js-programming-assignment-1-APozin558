/*
John is travelling from one city to another. So far he has travelled A kilometers and the total distance to his destination is B kilometers. He can only travel C kilometers per day.

Write a function:
function solution1(A, B, C);

that returns a minimal number of days it will take John to get to the destination from his current position.
*/

function solution1(A, B, C){
	return Math.ceil((B - A) / C);	
};

/*
Write a function
function solution2(A, B);

that returns a maximal XOR value for two numbers between A and B (including A and B)
*/

function solution2(A, B){
	
	var result = Number.MIN_VALUE;;
	
	while(A < B){		
		for (I = A + 1; I <= B; I++){
			if ((A ^ I) > result){
				result = A ^ I;
			}
		}		
		A++;
	}
	
	return result;
}
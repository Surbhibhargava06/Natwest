/* Possible Approach */
1.Find all possible subsets of an array which will return array of subsets.
2.Remove the subset which is of same length as the input array, as we want maximal subset 
3.Sort array of subsets based on the length e.g subset of more elements should come first in the list
4.Iterate the array of subsets and inside each iteration ,Find below things  
    1. initialize new array (which is requiredSubset) with subset[i]
    2. All possible pairs of subset[i], Iterate all the pairs and check if it is not divisible by k
        1.if none of the Pairs are divisible by k return the requiredSubset = Answer
          else do nothing and continue with the next iteration.

        
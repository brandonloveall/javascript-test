/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left, right
 * and all 4 diagonal directions). This function is case-insensitive in its matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/
module.exports = function search(grid, wordlist) {
    if (grid.length === 0) return "Grid is empty.";
    let mutList = wordlist
    mutList.map(e => { e = e.toLowerCase() })

    let string = ""

    let ans = []

    function traverseGrid(x, y) {
        let mutX = x
        let mutY = y

        //the directions to traverse
       let directions = [
        [0,-1],[1,0],[0,1],[-1,0],
        [-1,1],[1,1],[-1,-1],[1,-1]
    ]

    //loops through all sets of directions for each coordinate passed through until it hits the "edge" of the grid
    //if a match is found in that direction, pushes it to the answer array
    for(let i = 0; i < directions.length; i++){
        while((mutX < grid.length && mutX >= 0) && (mutY < grid[x].length && mutY >= 0)){
            string = string + grid[mutX][mutY]
            mutX += directions[i][0]
            mutY += directions[i][1]

            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }

        }

        string = ""
        mutX = x
        mutY = y
    }
    }

   

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            traverseGrid(i, j)
        }
    }

    return ans
}

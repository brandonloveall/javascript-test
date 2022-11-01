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

    let ans = []

    function traverseGrid(x, y) {
        let string = ""
        /////////////////////////////////
        //TRAVERSE IN CARDINAL DIRECTIONS
        /////////////////////////////////

        //traverse up
        for (i = x; i >= 0; i--) {
            string = string + grid[i][y]
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""

        //traverse down
        for (i = x; i < grid.length; i++) {
            string = string + grid[i][y]
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""

        //traverse right
        for (i = y; i < grid[x].length - 1; i++) {
            string = string + grid[x][i]
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""

        //traverse left
        for (i = y; i >= 0; i--) {
            string = string + grid[x][i]
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""



        /////////////////////////////////
        //TRAVERSE IN DIAGONAL DIRECTIONS
        /////////////////////////////////
        let mutX = x
        let mutY = y

        //traverse top right
        while (mutX >= 0 && mutY < grid[x].length) {
            string = string + grid[mutX][mutY]
            mutX -= 1
            mutY += 1
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""
        mutX = x
        mutY = y


        //traverse bottom right
        while (mutX < grid.length && mutY < grid[x].length) {
            string = string + grid[mutX][mutY]
            mutX += 1
            mutY += 1
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""
        mutX = x
        mutY = y

        //traverse bottom left
        while (mutX < grid.length && mutY >= 0) {
            string = string + grid[mutX][mutY]
            mutX += 1
            mutY -= 1
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""
        mutX = x
        mutY = y

        //traverse top left
        while (mutX >= 0 && mutY >= 0) {
            string = string + grid[mutX][mutY]
            console.log(string)
            mutX -= 1
            mutY -= 1
            if (mutList.includes(string.toLowerCase() + "\r") && !ans.includes(string.toLowerCase())) {
                ans.push(string.toLowerCase())
            }
        }
        string = ""
        mutX = x
        mutY = y

    }



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            traverseGrid(i, j)
        }
    }

    return ans
}

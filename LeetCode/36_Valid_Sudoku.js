/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const columns = [];
    const rows = [];
    const boxes = [[[], [], []], [[], [], []], [[], [], []]];
    let result = true;
    let value;
    let xBox;
    let yBox;

    for (let ix = 0; ix < 9; ix++) {
        if (!rows[ix]) {
            rows[ix] = [];
        }

        for (let jx = 0; jx < 9; jx++) {
            value = board[ix][jx];
            xBox = Math.floor(ix / 3);
            yBox = Math.floor(jx / 3);

            if (!columns[jx]) {
                columns[jx] = [];
            }

            if (value === '.') {
                continue;
            }


            if (rows[ix][value]) {
                result = false;
                break;
            } else {
                rows[ix][value] = true;
            }

            if (columns[jx][value]) {
                result = false;
                break;
            } else {
                columns[jx][value] = true;
            }

            if (boxes[xBox][yBox][value]) {
                result = false;
                break;
            } else {
                boxes[xBox][yBox][value] = true;
            }
        }
    }

    return result;
};
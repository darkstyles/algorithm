var spiralOrder = function(matrix) {
    if (!matrix.length) {
        return [];
    } else if (matrix.length === 1) {
        return matrix[0];
    }

    let startX = 0;
    let startY = 0;
    let yLen = matrix.length;
    let xLen = matrix[0].length;
    let endX = xLen - 1;
    let endY = yLen - 1;
    let xPos = 0;
    let yPos = 0;
    let visited = [];
    let isReturn = false;

    const result = [];

    for (let ix = 0; ix < yLen; ix++) {
        visited[ix] = [];
    }

    while(1) {
        if (!visited[yPos][xPos] && matrix[yPos][xPos] !== undefined) {
            visited[yPos][xPos] = true;
            result.push(matrix[yPos][xPos]);

            if (xPos < endX || xPos > endX) {
                isReturn ? xPos-- : xPos++;
            } else {
                isReturn ? yPos-- : yPos++;
            }
        } else {
            break;
        }

        if (xPos === endX && yPos === endY) {
            isReturn = true;
            endX = startX;
        }

        if (xPos === startX && yPos === startY) {
            isReturn = false;
            startX += 1;
            startY += 1;
            endX = xLen - startX - 1;
            endY = yLen - startY - 1;
            xPos = startX;
            yPos = startY;
        }
    }

    return result;
};
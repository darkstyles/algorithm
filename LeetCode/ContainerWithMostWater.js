var maxArea = function(height) {
    let max = 0;
    let startY;
    let currentArea;

    for (let ix = 0; ix < height.length; ix++) {
        startY = height[ix];
        for (let jx = ix + 1; jx < height.length; jx++) {
            if (startY <= height[jx]) {
                currentArea = startY;
            } else {
                currentArea = height[jx];
            }

            currentArea = currentArea * (jx - ix);
            max = Math.max(max, currentArea);
        }
    }

    return max;
};
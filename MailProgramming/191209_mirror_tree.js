const tree = {
    value: 1,
    left: {
        value: 3,
    },
    right: {
        value: 2,
        left: {
            value: 5
        },
        right: {
            value: 4
        }
    }
};

const mirrorTree = function(node) {
    if (node.left && node.right) {
        [node.left, node.right] = [node.right, node.left];
    } else if (node.left) {
        node.right = node.left;
        delete node.left;
    } else if (node.right) {
        node.left = node.right;
        delete node.right;
    }

    if (node.left) {
        mirrorTree(node.left);
    }

    if (node.right) {
        mirrorTree(node.right);
    }
};

mirrorTree(tree);

console.log(tree);
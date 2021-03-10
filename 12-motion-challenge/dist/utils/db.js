var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var selectAllBlocks = function () {
    var prev = window.localStorage.getItem("blocks");
    if (prev) {
        var prevBlocks = JSON.parse(prev).blocks;
        return prevBlocks;
    }
    return [];
};
export var addBlock = function (newBlock) {
    var addedBlocks = {};
    var prev = window.localStorage.getItem("blocks");
    if (prev) {
        var prevBlocks = JSON.parse(prev).blocks;
        addedBlocks = {
            blocks: __spreadArrays(prevBlocks, [newBlock]),
        };
    }
    else {
        addedBlocks = {
            blocks: [newBlock],
        };
    }
    window.localStorage.setItem("blocks", JSON.stringify(addedBlocks));
};

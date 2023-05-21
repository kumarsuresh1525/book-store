function matchMedia() {
    return {
        matches: false,
        addListener: function addListener() {},
        removeListener: function removeListener() {},
    };
}

window.matchMedia = window.matchMedia || matchMedia;

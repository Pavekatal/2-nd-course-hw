const runningBox = document.querySelector('.top__nav-box');

function runningFunc() {
    const totalWidth = runningBox.scrollWidth;
    const containerWidth = runningBox.clientWidth;
    let animationLine = (totalWidth / containerWidth) * 20; 
    runningBox.style.animationDuration = `${animationLine}s`; 
}

// let resizeTimeout;
window.onresize = function() {
    clearTimeout(resizeTimeot);
    resizeTimeout = setTimeout(runningFunc, 200);
};

window.onload = runningFunc;
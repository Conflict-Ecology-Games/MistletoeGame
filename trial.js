var logger = null;
var startTime = 0;
var timeoutId = null;
var timerId;
var photos;
var numBadMistakes = 0, totalScored = 0;
var buttonsDisabled = false;
// UGLY! Hardwire the animation duration so we can use setTimeout rather than transitionend events
var animationDuration = 500;
var iii = 0;

// For debugging, allow escatimerpe behaviour to be turned off
var allowEscape = true;

// =======================
// General functions

// General function to insert a DOM node after an existing node
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// General function to remove a DOM node
function removeElement(element) {
    var par = element.parentNode;
    if (par != null)
        par.removeChild(element);
}

// =======================
// Game functions

// "Disable" the buttons.
// They aren't really disabled, but scoring doesn't function while they are disabled
function disableButtons() {
    //console.log("DISABLE");
    buttonsDisabled = true;
}

// "Enable" the buttons.
function enableButtons() {
    //console.log("ENABLE " + iii++);
    buttonsDisabled = false;
}

/** Loads a new photo. A new image element is created, its src
    attribute is set to the specified url, and its class is set to
    "sample" and "loading". Once the image has been loaded, the
    element is added to the document, its ID set to "sample",
    "loading" is removed from its class, and the countdown timer is
    started. */
function LoadPhoto(url) {
    var img = new Image;
    img.onload = function () {
        var img = this;
        var old = document.getElementById("sample");
        // Clear ID on old element, and set it on the new element
        old.id = null;
        img.id = "sample"; 
        insertAfter(this, old);
        // Calling setTimeout is an ugly hack to get the display to animate. It can fail
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            //img.removeEventListener("transitionend", photoDisplayed, false);
            //enableButtons();
			//photoTimeout = 10500;
			//StartTiming();
            // New image is now displayed, get rid of the old one
            removeElement(old);
        }
        // Another ugly thing - CSS animations are not run when the
        // tab is inactive, so use a timeout rather than transitionend
        // event to ensure the buttons are always enabled. Hard-wire
        // the animation duration
        //img.addEventListener("transitionend", photoDisplayed, false);
        setTimeout(photoDisplayed, animationDuration);
        //StartTiming();
		LoadPhoto7(photos.url7) //NOW GO TO THE NEXT PHOTO
    };
    img.className = "sample loading";
    img.src = url;
}


function LoadPhoto3(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img3 = new Image;
    img3.onload = function () {
        var img = this;
        var old = document.getElementById("sample3");
        old.id = null;
        img.id = "sample3"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		LoadPhoto5(photos.url5) //NOW GO TO THE NEXT PHOTO
    };
    img3.className = "sample3 loading";
    img3.src = url;
}

function LoadPhoto2(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img2 = new Image;
    img2.onload = function () {
        var img = this;
        var old = document.getElementById("sample2");
        old.id = null;
        img.id = "sample2"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		LoadPhoto6(photos.url6) //NOW GO TO THE NEXT PHOTO
    };
    img2.className = "sample2 loading";
    img2.src = url;
}

function LoadPhoto4(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img4 = new Image;
    img4.onload = function () {
        var img = this;
        var old = document.getElementById("sample4");
        old.id = null;
        img.id = "sample4"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            enableButtons();
			photoTimeout = 10500;
			StartTiming();
			removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		//LoadPhoto5(photos.url5) //NOW GO TO THE NEXT PHOTO
    };
    img4.className = "sample4 loading";
    img4.src = url;
}

function LoadPhoto5(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img5 = new Image;
    img5.onload = function () {
        var img = this;
        var old = document.getElementById("sample5");
        old.id = null;
        img.id = "sample5"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		LoadPhoto4(photos.url4) //NOW GO TO THE NEXT PHOTO
    };
    img5.className = "sample5 loading";
    img5.src = url;
}

function LoadPhoto6(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img6 = new Image;
    img6.onload = function () {
        var img = this;
        var old = document.getElementById("sample6");
        old.id = null;
        img.id = "sample6"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		LoadPhoto3(photos.url3) //NOW GO TO THE NEXT PHOTO
    };
    img6.className = "sample6 loading";
    img6.src = url;
}

function LoadPhoto7(url) { //NEW FUNCTION SAME AS LoadPhoto BUT FOR A DIFF LEAF
    var img7 = new Image;
    img7.onload = function () {
        var img = this;
        var old = document.getElementById("sample7");
        old.id = null;
        img.id = "sample7"; 
        insertAfter(this, old);
        setTimeout(function() {img.classList.remove("loading"); }, 100);
        function photoDisplayed(e) {
            removeElement(old);
        }
        setTimeout(photoDisplayed, animationDuration);
		LoadPhoto2(photos.url2) //NOW GO TO THE NEXT PHOTO
    };
    img7.className = "sample7 loading";
    img7.src = url;
}

function showTimeInSecs(secs) {
    document.getElementById("time").innerHTML = Math.abs(photoTimeout / 1000 - secs).toFixed(0);
}

// Starts the timer, and sets a timeout to score the current image as
// "escape" once the timeout has elapsed.
function StartTiming() {
    startTime = Date.now();
    
    // Update timer regularly
    timerId = setInterval(function() {
        nMilliSecs = Date.now() - startTime;
        showTimeInSecs(nMilliSecs / 1000);
    }, 20);

    function timeoutFired() {
        timeoutId = null;
        if (allowEscape)
            userScore("escape");
    }
    timeoutId = setTimeout(timeoutFired, photoTimeout);
}

// Stops the timer
function StopTiming() {
    nMilliSecs = Date.now() - startTime;
    clearInterval(timerId);
    return nMilliSecs;
}

// Called when there are no more images to be scored. Saves the total
// time in a cookie, and displays the finish page
function trialFinished() {
    setCookie("totalTime", logger.totalElapsed);
    setCookie("totalScored", totalScored);
    setCookie("numBadMistakes", numBadMistakes);
    // Browse to the finish page
    window.location = "finish.html"; 
}

// Returns true if the user's score seems to represent a reasonable choice.
function scorePlausible(score) {
    var kt = photos.knownType;
    //if (!(kt == null || kt == score))
    //    console.log("ERROR: " + kt + " =? " + score + ", " + (kt == null || kt == score));
    return (kt == null || kt == score);
}

// Records the user's classification for the current image.  Animates
// the current image away, and loads the next image.
function userScore(score) {
    // There's a short potential race condition - while the new photo
    // is loading, we could accidentally re-score the old photo. To
    // avoid this, we "disable" the buttons while a photo is loading,
    // and if the user scores during that time, we just ignore it
    if (buttonsDisabled) {
        //console.log("Ignoring score, buttons disabled: " + photos.url + ", " + score  + ", " + nMilliSecs);
        return false;
    }
    
    // Cancel the timeout since the image has been scored
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    if (!photos.hasCurrentPhoto) {
        //console.log("Skipping score - no current photo (" + photos.index + " of " + photos.numToShow + ")");
        return false;
    }
    
    disableButtons();

    nMilliSecs = StopTiming();
    logger.logImageScore(photos.url, photos.url2, photos.url3, photos.url4, photos.url5, photos.url6, photos.url7, score, nMilliSecs);

    totalScored++;
    // Did they get it blatantly wrong?
    numBadMistakes += scorePlausible(score) ? 0 : 1;
    
    // Move on to the next image
    var morePhotos = photos.moveToNext;
    var ie = document.getElementById("sample");
	var ie2 = document.getElementById("sample2"); //added these extras
	var ie3 = document.getElementById("sample3");
	var ie4 = document.getElementById("sample4");
	var ie5 = document.getElementById("sample5");
	var ie6 = document.getElementById("sample6");
	var ie7 = document.getElementById("sample7");
    ie.classList.add(score);
	ie2.classList.add(score);
	ie3.classList.add(score);
	ie4.classList.add(score);
	ie5.classList.add(score);
	ie6.classList.add(score);
	ie7.classList.add(score);
    function onTransEnd(e) {
        // Hide it, but don't remove it because it's a place holder for the next image
        ie.style.display = "none";
		ie2.style.display = "none";
		ie3.style.display = "none";
		ie4.style.display = "none";
		ie5.style.display = "none";
		ie6.style.display = "none";
		ie7.style.display = "none";
        if (!morePhotos)
            trialFinished();
    }
    // Don't use transitionend since it doesn't fire if tab is inactive
    //ie.addEventListener("transitionend", onTransEnd, false);
    setTimeout(onTransEnd, animationDuration);
    
    // Load next image
    if (morePhotos) {
        //LoadPhoto2(photos.url2);
		LoadPhoto(photos.url);
    }

    return true;
}

// Setup keyboard shortcut keys
document.addEventListener("keydown", handleKey);
function handleKey(e) {
    if (e.keyCode == "37") {
        userScore("Left");
    } else if (e.keyCode == "39") {
        userScore("Right");
    }
}

// ---- Startup function ----

function StartTrial(dryRun) {
    // Get the data logger
    logger = GetLogger(dryRun);
    // Is this the user's first attempt?
    const noob = new URLSearchParams(window.location.search).get('first');
    logger.logUserSession(noob == "T", window.screen.width, window.screen.height, window.devicePixelRatio, navigator.userAgent);
    
    // Setup the photos to be displayed, and show the first one
    photos = new PhotoSeq(candidatePhotos, numPhotos);
    //document.getElementById("sample").setAttribute("src", photos.url)    //these are commented out to control the first image that is views
	//document.getElementById("sample2").setAttribute("src", photos.url2)
	//document.getElementById("sample3").setAttribute("src", photos.url3)
	//document.getElementById("sample4").setAttribute("src", photos.url4)
	//document.getElementById("sample5").setAttribute("src", photos.url5)
	//document.getElementById("sample6").setAttribute("src", photos.url6)
	//document.getElementById("sample7").setAttribute("src", photos.url7)
	
    // Setup click event handlers on buttons
    scoreBtns = document.querySelectorAll(".button");
    scoreBtns.forEach(function(elem) {
        elem.addEventListener("click", (e) => {
            userScore(e.currentTarget.id);
        })
    });
    // Start the countdown timer
    StartTiming();
}

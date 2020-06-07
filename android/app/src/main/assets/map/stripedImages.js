var stripes_vertical_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAQCAIAAADrtar6AAAAKklEQVQ4jWO8azKdgVygfCaTbL1MZOukEIxaPGrxqMWjFo9aPGrx4LMYANs6AyCCdQL3AAAAAElFTkSuQmCC';
var stripes_horizontal_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAoCAIAAAB4uO32AAAAIklEQVQ4jWP8++AuAymAiSTVoxpGNYxqoLOGUTAKRsHwAgDFewLihehmMwAAAABJRU5ErkJggg==';
var stripes_45_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAt0lEQVRYhcXWsQ3DMAwEQJJFlssUmSxTeLlUKQwYhiBbIv3/YvP8griW/vtuVp3X512+dTNbYvseetuPTWz7uShtb7rMbmGZ3YE1dh8W2Jcw276DqfYA5tljmGRPwQx7FobbCRhr52CgnYZRdgWG2EX4uV2HH9qx6tkLW/TsxR56O45NbMe5KO1ousxuYZndgTV2HxbYlzDbvoOp9gDm2WOYZE/BDHsWhtsJGGvnYKCdhlF2BYbYf9ead4rnCfBEAAAAAElFTkSuQmCC';
var stripes_135_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAwklEQVRYhcXYQQqFMAwE0ORfWvAAwj+1bgRRqm2SmWn35ZHdzPjqi2Xftv/Tf39T1NWXJFxULXdxXc3AEDUMo9QYDFQDMFYdheHqEMxQ+zBJ7cA89Qumqq8wW23DArUBa9QnLFNvsFK9YLF6wnrVzDxNVtQSXEyJSbieTTMwJBGHYVQOj8HA9B+AsZ1jFIY3nSGY0a/6MKnVdWBel/yCqQ32FWb35jYsaOsNWLMRPGHZMnGDlXvIBYtXGJ+invCUxekA3SB2LoxaiVMAAAAASUVORK5CYII=';

var stripesVertical  = new Image();
stripesVertical.onLoad = function () {
	console.log(stripesVertical.width);
};
stripesVertical.src = stripes_vertical_base64;

var stripesHorizontal  = new Image();
stripesHorizontal.onLoad = function () {
	console.log(stripesHorizontal.width);
};
stripesHorizontal.src = stripes_horizontal_base64;

var stripes45  = new Image();
stripes45.onLoad = function () {
	console.log(stripes45.width);
};
stripes45.src = stripes_45_base64;

var stripes135  = new Image();
stripes135.onLoad = function () {
	console.log(stripes135.width);
};
stripes135.src = stripes_135_base64;

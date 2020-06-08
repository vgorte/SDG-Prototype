var stripes_vertical_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAQCAIAAADrtar6AAAAKklEQVQ4jWN8UyDCQC4QmfCGbL1MZOukEIxaPGrxqMWjFo9aPGrx4LMYAM4aAyCh+OQFAAAAAElFTkSuQmCC';
var stripes_horizontal_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAoCAIAAAB4uO32AAAAIklEQVQ4jWP8/30PAymAiSTVoxpGNYxqoLOGUTAKRsHwAgCIbgLa6e9jtwAAAABJRU5ErkJggg==';
var stripes_45_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAtUlEQVRYhcXWsQ3EMAwDQElzZYfM+jv8XI8vAgSB4cSWQtJqKBbCtfLfd7fqxPYp37qZLbH9CL3t5ya2/VqUtjddZrewzO7AGrsPC+xbmG0/wVR7APPsMUyyp2CGPQvD7QSMtXMw0E7DKLsCQ+wi/N6uw2/tVc9e2KJnL47Q23FuYjuuRWlH02V2C8vsDqyx+7DAvoXZ9hNMtQcwzx7DJHsKZtizMNxOwFg7BwPtNIyyKzDE/gN4VndNChy3MQAAAABJRU5ErkJggg==';
var stripes_135_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAt0lEQVRYhcXWsQ3DMAwEQJLISNkpM2Unj5QihQHDEGRLpP9fbJ5fENfSv++XVeez/cq3bmZLbN9Db/uxiW0/F6XtTZfZLSyzO7DG7sMC+xJm23cw1R7APHsMk+wpmGHPwnA7AWPtHAy00zDKrsAQuwg/t+vwQztWPXthi5692ENvx7GJ7TgXpR1Nl9ktLLM7sMbuwwL7EmbbdzDVHsA8ewyT7CmYYc/CcDsBY+0cDLTTMMquwBD7D4Zjdg0qTFQrAAAAAElFTkSuQmCC';

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

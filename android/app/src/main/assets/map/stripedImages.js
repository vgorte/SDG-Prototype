var stripes_horizontal_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAIAAACqmwlGAAAAH0lEQVQ4jWP8//8pAymAiSTVoxpGNQykhlEwCoYxAAAS3wMBioY7HwAAAABJRU5ErkJggg==';
var stripes_22_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAIAAACQzIFuAAAAzElEQVRIibXUMQ6CQBSE4Z3DWG6i/WYPZGXjKWys5DJUxoQOTSw9CCUWJoi4sI9982gIhMzXLD9i8OfTfrfdONl1f7wOx8v19pR8jM/NyMD4gW7g/xXRSKwTjdl1ipFZVxqIwQuPV4GBvqtXHeFVBvquHii68V23MKbrXCO9zjKW1vVGfl1joG0qo/zG4OHM8uvGJbAwpp3hGumKsYylRuqNfIE1hqjvxQbapjLKrxv+VaPE/5SAbiQ6QzRmK0YxMo1UGqICFxvSvpcZb8LYOZEtnfeKAAAAAElFTkSuQmCC';
var stripes_45_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAj0lEQVRIibXUwQnAMAgFUHWPzthZOmP3KD0EQpAkGv160Q/y8CR/70Pukuv2LzMRFencWoXOfYLrPAaszioDdU0D9QmN0uc0RF/SeX1HJ3WDzug2HdZddEz30gH9gD7W6/61HN/i1qW1Cl36BNdlDFhdVAbqmgbqExqlz2mIvqTz+o5O6gad0W06rLvomP4DBRBZn4bPUIUAAAAASUVORK5CYII=';
var stripes_67_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8CAIAAAD+Np3IAAABZUlEQVRYhbXYMUoDQRTG8c9nL0J6O63ExV5yAS/hCZScJCh6DO8guYBELMRGLxCw8AAWLq47zO58894322QHhj8/Qnbnkb1lt3h6uAB3Xa9f7h8/yM222e6e37/I3Xers2W3YNMAVrev5G4A65vTinQV/PzkkITb70cLeJ9uAbe/Ozl8SMvh9n+hhY/SWrglayE8TQvhaRo6eCatgmfSEMHzaQk8n4YCPpmOwyfTCMPn0kH4XBoxeCEdgRfSCMDLaTe8nIYXTqV9cCoNF5xNO+D7vOXt8/vq8ojc3B0fGD/D1cKNn+FQ+Y0bP8OhEm6oGT5RAzfUDJ+ogfc/vhbwPt0CPjwycviQlsNHD7oWPkpr4enrSQhP00J45qWqgmfSKnj+KJDA82kJfPIAi8Mn03H43LEbhM+lg/DCsBCBF9IReHnEccPLaTecGsx8cCrtg7PjpAPOph1wNo16uLX4hw/AZrv7AXppEymkSeKyAAAAAElFTkSuQmCC';

var stripes_horizontal = new Image();
stripes_horizontal.onLoad = function () {
	console.log(stripes_horizontal.width);
};
stripes_horizontal.src = stripes_horizontal_base64;

var stripes_22 = new Image();
stripes_22.onLoad = function () {
	console.log(stripes_22.width);
};
stripes_22.src = stripes_22_base64;

var stripes_45 = new Image();
stripes_45.onLoad = function () {
	console.log(stripes_45.width);
};
stripes_45.src = stripes_45_base64;

var stripes_67 = new Image();
stripes_67.onLoad = function () {
	console.log(stripes_67.width);
};
stripes_67.src = stripes_67_base64;

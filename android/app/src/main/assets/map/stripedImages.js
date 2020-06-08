var stripes_vertical_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAlCAIAAADEJv4oAAAAIElEQVQ4jWP893giAymAiSTVoxpGNQxvDaNgFIyC4QUACqsClKJPHXkAAAAASUVORK5CYII=';
var stripes_horizontal_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAlCAIAAADEJv4oAAAAIElEQVQ4jWP8//8pAymAiSTVoxpGNQxvDaNgFIyC4QUAKegDBRo1guIAAAAASUVORK5CYII=';
var stripes_45_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAs0lEQVRYhcXWsQ7EMAgDUGDrf/Wz779uvBsqVVWUNoHaDovxgN6K/74fq45ve/3WzJbYfoTe9nMT234tStubLrNbWGZ3YI3dhwX2Lcy2n2CqPYB59hgm2VMww56F4XYCxto5GGinYZRdgSF2EX5v1+GXdqx69sIWPXtxhN6OcxPbcS1KO5ous1tYZndgjd2HBfYtzLafYKo9gHn2GCbZUzDDnoXhdgLG2jkYaKdhlF2BIfYfAzh37v/RohoAAAAASUVORK5CYII=';
var stripes_135_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAwklEQVRYhcXYwQ2AMAwDwJS52IFZ2YG5EB8kBCptk9hu/9UpP9vlPDaLvmXd43+nqOexBeGkarGL82oEhqhuGKX6YKDqgLHqKAxXh2CG2odJagfmqS2Yqv7CbLUOC9QKrFG/sEx9wUr1gcXqDetVMythMqOm4GRKDML5bBqBIYnYDaNyuA8Gpn8HjO0cozC86QzBjH7Vh0mtrgPzumQLpjbYX5jdm+uwoK1XYM1G8IVly8QLVu4hDyxeYcoU9YanLE4XdT93Tcs2L/MAAAAASUVORK5CYII=';

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

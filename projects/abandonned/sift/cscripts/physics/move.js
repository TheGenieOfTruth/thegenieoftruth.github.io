module.exports = function (object, distance, direction) {
	object.x = object.x + distance * Math.cos(direction * Math.PI / 180);
	object.y = object.y + distance * Math.sin(direction * Math.PI / 180);
};
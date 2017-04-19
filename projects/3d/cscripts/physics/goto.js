module.exports = function (obj) {
	function a(min, max) {
		return Math.random() * (max - min) + min;
	}
	var func = {
		"obj": obj,
		"to": function to(obj2) {
			obj.position.x = obj2.position.x;
			obj.position.y = obj2.position.y;
			obj.position.z = obj2.position.z;
			obj.xvel = obj2.xvel;
			obj.yvel = obj2.yvel;
			obj.zvel = obj2.zvel;
			return func;
		},
		"randomly": function randomly(arr) {
			obj.position.x += a(arr[0][0], arr[0][1]);
			obj.position.y += a(arr[1][0], arr[1][1]);
			obj.position.z += a(arr[2][0], arr[2][1]);
			return func;
		},
		"gravity": function gravity(str) {
			obj.yvel -= str;
			obj.position.y += obj.yvel;
			return func;
		}
	};
	return func;
};
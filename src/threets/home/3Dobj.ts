import { placeholderSign } from "element-plus/es/components/table-v2/src/private";
import {
	BoxGeometry,
	BufferAttribute,
	DoubleSide,
	Mesh,
	MeshBasicMaterial,
	MeshPhongMaterial,
	PlaneGeometry,
} from "three";

const world = {
	plane: {
		width: 19,
	},
};

const plane = new Mesh(
	new PlaneGeometry(400, 400, 50, 50),
	new MeshPhongMaterial({
		side: DoubleSide,
		flatShading: true,
		vertexColors: true,
	})
);
// gui.add(world.plane, "width", 1, 500, 1).onChange(() => {
// 	plane.geometry.dispose();
// 	plane.geometry = new PlaneGeometry(world.plane.width, 10, 10, 10);
// 	let arr = plane.geometry.attributes.position["array"];
// 	for (let i = 0; i < arr.length; i += 3) {
// 		arr[i + 2] += Math.random();
// 	}
// });
// plane.geometry = new PlaneGeometry(19, 19, 17, 17);
let arr = plane.geometry.attributes.position["array"];
let randomL = [];
for (let i = 0; i < arr.length; i++) {
	if (i % 3 == 0) {
		arr[i + 2] += (Math.random() - 0.5) * 3;
		arr[i] += (Math.random() - 0.5) * 3;
		arr[i + 1] += (Math.random() - 0.5) * 3;
	}
	randomL.push(((Math.random() - 0.5) * Math.PI) / 5);
}
plane.geometry.attributes.position["randomValues"] = randomL;

plane.geometry.attributes.position["originalPosition"] = arr;
const colors = [];
for (let i = 0; i < plane.geometry.attributes.position["count"]; i++) {
	colors.push(0, 0.19, 0.4);
}
plane.geometry.setAttribute(
	"color",
	new BufferAttribute(new Float32Array(colors), 3)
);
// plane.castShadow = true;
// plane.receiveShadow = true;

export const objs = plane;

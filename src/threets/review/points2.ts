import {
	BufferAttribute,
	BufferGeometry,
	MathUtils,
	Points,
	PointsMaterial,
	TextureLoader,
} from "three";
let geometry = new BufferGeometry();

const vertices = [];
let randomL = [];
for (let i = 0; i < 600; i++) {
	if (i % 3 == 0) {
		const x = Math.random() * 4 - 1.2;
		const y = Math.random() * 3 - 1.5;
		const z = Math.random() * 4;
		vertices.push(x, y, z);
	}
	randomL.push((Math.random() * Math.PI) / 5);
}
console.log(geometry);
geometry.setAttribute(
	"position",
	new BufferAttribute(new Float32Array(vertices), 3)
);
let map = new TextureLoader();
map.crossOrigin = "";
let points2 = new Points(
	geometry,
	new PointsMaterial({
		size: 0.06,
		map: map.load("./src/assets/white-dot.png"),
		alphaTest: 0.1,
		opacity: 0.5,
		transparent: true,
		depthTest: true,
	})
);

export { points2, randomL, vertices };

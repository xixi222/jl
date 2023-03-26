import {
	BufferAttribute,
	BufferGeometry,
	MathUtils,
	Points,
	PointsMaterial,
	TextureLoader,
} from "three";
let geometry = new BufferGeometry();

const vertices2 = [];
let randomL2 = [];
for (let i = 0; i < 300; i++) {
	if (i % 3 == 0) {
		const x = Math.random() * -2.6;
		const y = Math.random() * 3 - 1.5;
		const z = Math.random() * 3;
		vertices2.push(x, y, z);
	}
	randomL2.push(((Math.random() - 0.5) * Math.PI) / 5);
}
console.log(geometry);
geometry.setAttribute(
	"position",
	new BufferAttribute(new Float32Array(vertices2), 3)
);
let map = new TextureLoader();
map.crossOrigin = "";
let points3 = new Points(
	geometry,
	new PointsMaterial({
		size: 0.06,
		map: map.load(new URL("@/assets/white-dot.png", import.meta.url).href),
		alphaTest: 0.1,
		opacity: 0.5,
		transparent: true,
		depthTest: true,
	})
);

export { points3, randomL2, vertices2 };

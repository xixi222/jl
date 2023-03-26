import {
	BufferGeometry,
	Float32BufferAttribute,
	Points,
	PointsMaterial,
	TextureLoader,
} from "three";
let geo = new BufferGeometry();
let pos = [];
for (let i = 0; i < 10000; i++) {
	const x = (Math.random() - 0.5) * 2000;
	const y = (Math.random() - 0.5) * 2000;
	const z = (Math.random() - 0.5) * 2000;
	pos.push(x, y, z);
}
geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
let map = new TextureLoader();
map.crossOrigin = "";
const star = new Points(
	geo,
	new PointsMaterial({
		map: map.load("./src/assets/white-dot.png"),
		transparent: true,
		depthTest: true,
	})
);
export default star;

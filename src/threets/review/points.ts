import {
	BufferAttribute,
	BufferGeometry,
	MathUtils,
	Points,
	PointsMaterial,
	TextureLoader,
} from "three";
import TWEEN from "@tweenjs/tween.js";
let geometry = new BufferGeometry();
geometry["tween"] = [];
const vertices = [];

for (let i = 0; i < 27468; i++) {
	const position = MathUtils.randFloat(-4, 4);
	geometry["tween"].push(
		new TWEEN.Tween({ position }).easing(TWEEN.Easing.Exponential.In)
	);
	vertices.push(position);
}
geometry.setAttribute(
	"position",
	new BufferAttribute(new Float32Array(vertices), 3)
);
let map = new TextureLoader();
map.crossOrigin = "";
let points = new Points(
	geometry,
	new PointsMaterial({
		size: 0.05,
		map: map.load(new URL("@/assets/white-dot.png", import.meta.url).href),
		alphaTest: 0.1,
		// opacity: 0.5,
		transparent: true,
		depthTest: true,
	})
);

export default points;

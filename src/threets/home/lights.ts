import {
	AmbientLight,
	BufferGeometry,
	DirectionalLight,
	Float32BufferAttribute,
	Mesh,
	Points,
	PointsMaterial,
} from "three";
const dL = new DirectionalLight(0xffffff, 1);
dL.position.set(0, 0.5, 1);
dL.castShadow = true;
dL.receiveShadow = true;

export const lights = [dL];

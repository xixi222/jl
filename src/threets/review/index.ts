import TWEEN from "@tweenjs/tween.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import {
	CanvasTexture,
	FogExp2,
	MathUtils,
	Object3D,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
} from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { manager, bufArrays } from "./gltf";
import points from "./points";
import { points2, randomL, vertices } from "./points2";
import { points3, randomL2, vertices2 } from "./points3";

export class initThree2 {
	private dom: HTMLElement;
	private render: WebGLRenderer;
	private scene: Scene;
	private camera: PerspectiveCamera;
	arr: number[] = [-1.5, 0.1, 0];
	constructor(dom: HTMLElement) {
		let stats = Stats();

		this.dom = dom;
		stats.setMode(0);
		stats.domElement.style.position = "absolute";
		stats.domElement.style.left = "0px";
		stats.domElement.style.top = "0px";

		this.dom.appendChild(stats.domElement);
		this.scene = new Scene();
		// this.scene.background = backgroundTexture();
		this.render = new WebGLRenderer({ antialias: true });
		this.render.shadowMap.enabled = true;
		this.scene.fog = new FogExp2(0x05050c, 0.16);
		// this.render.setClearColor(this.scene.fog.color);
		this.camera = new PerspectiveCamera(
			45,
			this.dom.offsetWidth / this.dom.offsetHeight,
			0.1,
			80
		);

		this.camera.position.set(0, 0, 5);
		this.render.setPixelRatio(window.devicePixelRatio);
		this.render.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
		this.dom.appendChild(this.render.domElement);

		window.addEventListener("resize", () => {
			this.render.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
			this.camera.aspect = this.dom.offsetWidth / this.dom.offsetHeight;
			this.camera.updateProjectionMatrix();
		});
		manager.onLoad = () => {
			this.transition(0);
		};
		this.scene.add(points2);
		this.scene.add(points3);
		// new OrbitControls(this.camera, dom);
		let frame = 0;

		let mouse = {
			x: 0,
			y: 0,
		};
		let b = this.changePivot(points);
		console.log(b);
		window.onmousemove = this.debounce((e) => {
			mouse.x = (e.clientX / innerWidth) * 2 - 1;
			mouse.y = -(e.clientY / innerHeight) * 2 + 1;
		}, 25);

		let roin = points.rotation.y;
		let roinx = points.rotation.x;
		const renderFn = () => {
			// console.log(b.rotation.x);
			b.rotation.x = roinx - mouse.y * 0.2;
			b.rotation.y = roin + mouse.x * 0.3;
			// b.rotation.z += 0.001;

			frame += 0.01;
			for (let i = 0; i < 300; i++) {
				if (i % 3 == 0) {
					points2.geometry.attributes.position["array"][i] =
						vertices[i] + Math.sin(frame + randomL[i]) * 0.3;
					points2.geometry.attributes.position["array"][i + 1] =
						vertices[i + 1] + Math.cos(frame + randomL[i + 1]) * 0.3;
					points2.geometry.attributes.position["array"][i + 2] =
						vertices[i + 2] + Math.cos(frame + randomL[i + 2]) * 0.5;
				}
			}
			points2.geometry.attributes.position.needsUpdate = true;
			frame += 0.01;
			for (let i = 0; i < 200; i++) {
				if (i % 3 == 0) {
					points3.geometry.attributes.position["array"][i] =
						vertices2[i] + Math.cos(frame + randomL2[i]) * 0.3;
					points3.geometry.attributes.position["array"][i + 1] =
						vertices2[i + 1] + Math.sin(frame + randomL2[i + 1]) * 0.3;
					points3.geometry.attributes.position["array"][i + 2] =
						vertices[i + 2] + Math.cos(frame + randomL[i + 2]) * 1;
				}
				// points2.geometry.attributes.position["array"][i + 2] +=
				// 	(Math.random() - 0.5) / 10;
			}
			points3.geometry.attributes.position.needsUpdate = true;
			TWEEN.update();
			stats.update();
			this.render.render(this.scene, this.camera);
			requestAnimationFrame(renderFn);
		};
		renderFn();
	}
	addObj(...obj: Object3D[]) {
		obj.forEach((i) => {
			this.scene.add(i);
		});
	}

	transition(current: number) {
		for (let i = 0, j = 0; i < 27468; i++, j++) {
			//26016
			const item = points.geometry["tween"][i];

			if (j >= bufArrays[current].length) {
				j = 0;
			}
			item
				.to(
					{ position: bufArrays[current][j] },
					MathUtils.randFloat(1000, 4000)
				)
				.onUpdate(function () {
					points.geometry.attributes.position["array"][i] =
						this._object.position;
					points.geometry.attributes.position.needsUpdate = true;
				})
				.onComplete((a) => {
					points.geometry["tween"][i] = new TWEEN.Tween(a).easing(
						TWEEN.Easing.Exponential.In
					);
					// console.log(points.geometry["tween"][i], a);
					// geometry.setAttribute(
					//   "position",
					//   new BufferAttribute(new Float32Array(vertices), 3)
					// );
				})
				.start();
		}
	}
	// debounce(callback, time = 50) {
	// 	let timer = null;
	// 	// return () => {
	// 	if (timer) {
	// 		clearTimeout(timer);
	// 		// timer = null
	// 	}
	// 	timer = setTimeout(() => {
	// 		callback();
	// 	}, time);
	// 	// };
	// }
	debounce(fn, wait = 25) {
		var context, args;
		var previous = 0;
		return function () {
			var now = +new Date();
			context = this;
			args = arguments;
			if (now - previous > wait) {
				fn.apply(context, args);
				previous = now;
			}
		};
	}

	changePivot(obj) {
		let center = new Vector3();
		obj.geometry.computeBoundingBox();
		obj.geometry.boundingBox.getCenter(center);
		let wrapper = new Object3D();
		wrapper.position.set(center.x, center.y, center.z);
		wrapper.add(obj);
		obj.position.set(-center.x, -center.y, -center.z);
		this.scene.add(wrapper);
		return wrapper;
	}
}

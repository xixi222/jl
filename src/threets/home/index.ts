import { objs } from "./3Dobj";
import { gsap } from "gsap";
import {
	Object3D,
	PerspectiveCamera,
	Raycaster,
	Scene,
	WebGLRenderer,
} from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import star from "./starts";
export class initThree {
	private dom: HTMLElement;
	private render: WebGLRenderer;
	private scene: Scene;
	private camera: PerspectiveCamera;

	constructor(dom: HTMLElement) {
		this.dom = dom;
		this.scene = new Scene();
		this.render = new WebGLRenderer({ antialias: true });
		this.render.shadowMap.enabled = true;
		this.camera = new PerspectiveCamera(
			75,
			this.dom.offsetWidth / this.dom.offsetHeight,
			0.1,
			1000
		);
		this.camera.position.set(0, -20, 45);
		this.camera.lookAt(0, 0, 0);
		this.render.setPixelRatio(window.devicePixelRatio);
		this.render.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
		this.dom.appendChild(this.render.domElement);
		let mouse = {
			x: undefined,
			y: undefined,
		};

		(this.dom.onmousemove = this.debounce((e) => {
			mouse.x = (e.clientX / innerWidth) * 2 - 1;
			mouse.y = -(e.clientY / innerHeight) * 2 + 1;
		})),
			25;

		window.addEventListener("resize", () => {
			this.render.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
			this.camera.aspect = this.dom.offsetWidth / this.dom.offsetHeight;
			this.camera.updateProjectionMatrix();
		});
		window.addEventListener("mouseleave", function () {
			mouse = {
				x: undefined,
				y: undefined,
			};
		});
		this.dom.addEventListener("mouseleave", function () {
			mouse = {
				x: undefined,
				y: undefined,
			};
		});
		const ray = new Raycaster();
		// new OrbitControls(this.camera, dom);
		let frame = 0;
		const renderFn = () => {
			star.rotation.x += 0.001;
			frame += 0.01;
			let arr = objs.geometry.attributes.position["array"];
			let originalPosition =
				objs.geometry.attributes.position["originalPosition"];
			let randomValues = objs.geometry.attributes.position["randomValues"];
			for (let i = 0; i < arr.length; i += 3) {
				//
				arr[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.03;
				arr[i + 1] =
					originalPosition[i + 1] +
					Math.sin(frame + randomValues[i + 1]) * 0.01;
				// arr[i+2] =
				// originalPosition[i+2] + Math.cos(frame + randomValues[i+2]) * 0.004;
			}
			objs.geometry.attributes.position["needsUpdate"] = true;
			ray.setFromCamera(mouse, this.camera);
			let intersects = ray.intersectObject(objs);
			if (intersects.length > 0) {
				let colors = (intersects[0] as any).object.geometry.attributes.color;
				colors.setX(intersects[0].face.a, 0.1);
				colors.setY(intersects[0].face.a, 0.5);
				colors.setZ(intersects[0].face.a, 1);
				colors.setX(intersects[0].face.b, 0.1);
				colors.setY(intersects[0].face.b, 0.5);
				colors.setZ(intersects[0].face.b, 1);
				colors.setX(intersects[0].face.c, 0.1);
				colors.setY(intersects[0].face.c, 0.5);
				colors.setZ(intersects[0].face.c, 1);
				colors.needsUpdate = true;
				const initColor = {
					r: 0,
					g: 0.19,
					b: 0.4,
				};
				const hoverColor = {
					r: 0.1,
					g: 0.5,
					b: 1,
				};
				gsap.to(hoverColor, {
					delay: 0.3,
					r: initColor.r,
					g: initColor.g,
					b: initColor.b,
					onUpdate: () => {
						colors.setX(intersects[0].face.a, initColor.r);
						colors.setY(intersects[0].face.a, initColor.g);
						colors.setZ(intersects[0].face.a, initColor.b);
						colors.setX(intersects[0].face.b, initColor.r);
						colors.setY(intersects[0].face.b, initColor.g);
						colors.setZ(intersects[0].face.b, initColor.b);
						colors.setX(intersects[0].face.c, initColor.r);
						colors.setY(intersects[0].face.c, initColor.g);
						colors.setZ(intersects[0].face.c, initColor.b);
						colors.needsUpdate = true;
					},
				});
			}

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
	fly(fn: () => void) {
		gsap.to(this.camera.position, {
			z: 25,
			ease: "power3.inOut",
			duration: 1.5,
		});
		gsap.to(this.camera.rotation, {
			x: Math.PI / 2,
			ease: "power3.inOut",
			duration: 1.5,
		});
		gsap.to(this.camera.position, {
			y: 1000,
			ease: "power3.in",
			duration: 1.6,
			delay: 1.4,
			onComplete: fn,
		});
	}
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
}

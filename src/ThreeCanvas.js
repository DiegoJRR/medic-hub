import React, {
    Component
} from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import {
    STLLoader
} from 'three/examples/jsm/loaders/STLLoader';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'

class ThreeCanvas extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let width = 400, height = 500;
        if (this.props.width) width = this.props.width;
        if (this.props.height) height = this.props.height;

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        camera.position.set(100, 50, 100);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee);

        scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff));

        renderer.setSize(width, height);
        this.mount.appendChild(renderer.domElement);
        camera.position.z = 5;
        let loader = new STLLoader();
        loader.load(this.props.modelUrl, function (geometry) {
            var material = new THREE.MeshPhongMaterial({
                color: 0xff5533,
                specular: 0x111111,
                shininess: 200
            });
            var mesh = new THREE.Mesh(geometry, material);
            
            mesh.position.set(0, 0, 0);
            mesh.scale.set(0.5, 0.5, 0.5);
            geometry.computeBoundingSphere();
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            scene.add(mesh);
            camera.lookAt(geometry.boundingSphere.center);
            // controls.target(geometry.boundingSphere.center);
            controls.update();
        })

        var controls = new OrbitControls(camera, renderer.domElement);

        var animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };
        animate();
    }
    render() {
        return ( <
            div ref = {
                ref => (this.mount = ref)
            }
            />
        )
    }
}

export default ThreeCanvas;
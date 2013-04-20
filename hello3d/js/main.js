var createPlanets = function(scene) {
	var planet2 = new THREE.Mesh(
	        new THREE.SphereGeometry(10, 10, 10),
	        new THREE.MeshLambertMaterial({color: 0x00B3FF}));
	
	
    scene.add(planet2);
	
	var planetMercury = new THREE.Mesh(
	        new THREE.SphereGeometry(10, 10, 10),
	        new THREE.MeshLambertMaterial({color: 0xE9F235}));
			
	scene.add(planetMercury);
	
	var planetVenus = new THREE.Mesh(
	        new THREE.SphereGeometry(10, 10, 10),
	        new THREE.MeshLambertMaterial({color: 0xF2B035}));
			
	scene.add(planetVenus);
}

$('#mylink').click(function(e){
	e.preventDefault();
	console.log('clicked!');
});
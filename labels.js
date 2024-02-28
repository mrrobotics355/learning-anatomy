module.exports = [
    {
        text: "Stomach",
        position: new BABYLON.Vector3(0, 3, 0),
    },
    {
        text: "Liver",
        position: new BABYLON.Vector3(-2, 2, 1),
    },
    {
        text: "Intestines",
        position: new BABYLON.Vector3(2, 1, -1),
        targetMesh: meshes[1], // Assuming meshes[1] corresponds to the liver mesh
    },
];

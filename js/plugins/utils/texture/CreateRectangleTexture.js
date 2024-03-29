var CreateRectangleTexture = function (scene, key, width, height, color) {
    if (color === undefined) {
        color = 0xffffff;
    }
    scene.add.graphics()
        .fillStyle(color)
        .fillRect(0, 0, width, height)
        .generateTexture(key, width, width)
        .destroy();
}
export default CreateRectangleTexture;
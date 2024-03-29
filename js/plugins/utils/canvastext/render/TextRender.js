/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var renderWebGL = require('../../object/NOOP');
var renderCanvas = require('../../object/NOOP');

if (typeof WEBGL_RENDERER)
{
    renderWebGL = require('./TextWebGLRenderer');
}

if (typeof CANVAS_RENDERER)
{
    renderCanvas = require('./TextCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};

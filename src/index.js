import Vertices from '@renderium/vertices'

class Geometry {
  constructor (length = 0xff) {
    this.length = length
    this.vertices = new Vertices(this.length)
    this.indices = new Uint16Array(this.length)
    this.lastIndex = 0
  }

  arc (options) {
    var x = options.x
    var y = options.y
    var radius = options.radius
    var theta = options.theta
    var length = options.length
    var stroke = options.stroke
    var width = options.width || 1
    var opacity = options.opacity
    opacity = opacity != null ? opacity : 1

    // TODO
  }

  realloc (length) {
    this.vertices.realloc(length)

    var indices = new Uint16Array(length)
    indices.set(this.indices)
    this.indices = indices
  }
}

export default Geometry

import Vertices from '@renderium/vertices'

class Geometry {
  constructor (length = 255) {
    this.length = length
    this.vertices = new Vertices(this.length)
    this.indices = new Uint16Array(this.length)
  }
}

export default Geometry

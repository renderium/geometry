import pkg from './package.json'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.umd, format: 'umd', name: 'Geometry' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    nodeResolve()
  ]
}

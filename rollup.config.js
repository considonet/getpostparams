import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve()
  ],
  external: ["url-search-params-polyfill"]
};

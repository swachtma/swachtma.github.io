export default (() => {
  return typeof window !== `undefined`
    ? require('materialize-css/dist/js/materialize')
    : { AutoInit: () => console.log('Materialize suspended: not in browser') }
})()

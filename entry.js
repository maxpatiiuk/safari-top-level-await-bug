const [{ utils }, { common }] = await Promise.all([
  import('./utils.js'),
  import('./common.js'),
]);
console.log('entry', { common, utils });

if (common === undefined || utils === undefined) {
  alert('common.js or utils.js module did not load correctly.');
}

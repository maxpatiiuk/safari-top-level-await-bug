const [{ utils }, { common }] = await Promise.all([
  import('./utils.js'),
  import('./common.js'),
]);
console.log('entry', { common, utils });

if (common === undefined || utils === undefined) {
  alert('BUG: top-level-await module failed to load');
} else alert('no bug: top-level-await module loaded successfully');

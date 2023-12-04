import {
  duoLayer,
  layer,
  map,
  rule,
  withModifier,
  writeToProfile,
} from 'karabiner.ts';

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
// writeToProfile('--dry-run', [
//   // It is not required, but recommended to put symbol alias to layers,
//   // (If you type fast, use simlayer instead, see https://evan-liu.github.io/karabiner.ts/rules/simlayer)
//   // to make it easier to write '←' instead of 'left_arrow'.
//   // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts
//   layer('/', 'symbol-mode').manipulators([
//     //     / + [ 1    2    3    4    5 ] =>
//     withMapper(['⌘', '⌥', '⌃', '⇧', '⇪'])((k, i) =>
//       map((i + 1) as NumberKeyValue).toPaste(k),
//     ),
//     withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⇥', '⎋', '⌫', '⌦', '⇪'])((k) =>
//       map(k).toPaste(k),
//     ),
//   ]),

//   rule('Key mapping').manipulators([
//     // config key mappings
//     map(1).to(1),
//   ]),
// ]);

let manipulators = [
  map('j').to('down_arrow'),
  map('k').to('up_arrow'),
  map('h').to('left_arrow'),
  map('l').to('right_arrow'),
  map('u').to('left_arrow', 'command'),
  map('i').to('right_arrow', 'command'),
  map('n').to('left_arrow', 'option'),
  map('m').to('right_arrow', 'option'),
  map('f').to('tab', ['control']),
  map('d').to('tab', ['control', 'shift']),
  map('o').to('-', ['control']),
  map('p').to('-', ['control', 'shift']),
  map('w').to('y', ['command']),
  map('equal_sign').to('volume_up'),
  map('hyphen').to('volume_down'),
  map('0').to('mute'),
];

writeToProfile('sam', [
  layer('caps_lock', 'caps_layer')
    .modifiers('optionalAny')
    .configKey((k) => k.toIfAlone('escape'), true)
    .manipulators(manipulators),
  duoLayer('f', 'd', 'fd duo layer').manipulators(manipulators),
]);

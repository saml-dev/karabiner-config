import {
  duoLayer,
  layer,
  map,
  simlayer,
  withModifier,
  writeToProfile,
} from 'karabiner.ts';

let fdManipulators = withModifier('optionalAny')([
  map('j').to('down_arrow'),
  map('k').to('up_arrow'),
  map('h').to('left_arrow'),
  map('l').to('right_arrow'),
  map('u').to('left_arrow', 'command'),
  map('i').to('right_arrow', 'command'),
  map('n').to('left_arrow', 'option'),
  map('m').to('right_arrow', 'option'),
  map('o').to('-', ['control']),
  map('p').to('-', ['control', 'shift']),
  map('w').to('y', ['command']),
  map('equal_sign').to('volume_up'),
  map('hyphen').to('volume_down'),
  map('0').to('mute'),
]);

let capsManipulators = [
  map('f').to('tab', ['control']),
  map('d').to('tab', ['control', 'shift']),
  map('c').to('delete_or_backspace'),
  map('v').to('spacebar'),
];

let symbolsManipulators = [
  map('j').to('9', ['shift']), // left parenthesis
  map('k').to('0', ['shift']), // right parenthesis
  map('u').to('open_bracket', ['shift']), // open curly bracket
  map('i').to('close_bracket', ['shift']), // close curly bracket
  map('m').to('open_bracket'), // left bracket
  map(',').to('close_bracket'), // right bracket
];

writeToProfile('sam', [
  layer('caps_lock', 'caps_layer')
    .modifiers('optionalAny')
    .configKey((k) => k.toIfAlone('escape'), true)
    .manipulators(capsManipulators)
    .manipulators(fdManipulators.build()),

  simlayer(';', 'symbol')
    .options({
      key_down_order: 'strict',
    })
    .modifiers('optionalAny')
    .manipulators([
      map('d').to('9', ['shift']), // left parenthesis
      map('f').to('0', ['shift']), // right parenthesis
      map('e').to('open_bracket', ['shift']), // left curly bracket
      map('r').to('close_bracket', ['shift']), // right curly bracket
      map('c').to('open_bracket'), // left bracket
      map('v').to('close_bracket'), // right bracket
      map('t').to([
        { key_code: 'equal_sign' },
        { key_code: 'period', modifiers: ['shift'] },
      ]), // =>
      map('g').to([
        { key_code: 'hyphen' },
        { key_code: 'period', modifiers: ['shift'] },
      ]), // =>
    ]),

  // Open in (a)rc
  duoLayer(';', 'a', 'arc layer')
    .options({
      key_down_order: 'strict',
    })
    .description('Arc')
    .notification('Arc')
    .leaderMode({ escape: [';'] })
    .manipulators([
      map('t').to$('open https://x.com'),
      map('l').to$('open https://laravel.com/docs'),
      map('b').to$('open https://bsky.app'),
      map('n').to$('open https://news.ycombinator.com'),
      map('r').to$('open https://old.reddit.com'),
    ]),

  // (J)ump to app
  duoLayer(';', 'j', 'jump layer')
    .description('Jump')
    .notification('Jump')
    .options({
      key_down_order: 'strict',
    })
    .leaderMode({ escape: ';' })
    .manipulators([
      map('a').toApp('Arc'),
      map('v').toApp('Visual Studio Code'),
      map('m').toApp('Messages'),
      map('t').toApp('Alacritty'),
    ]),
]);

# lookatmysco.re simple nodejs wrapper
https://lookatmyscor.re is a website / tool developed by [omkelderman][omkelderman] <br/> Used to dynamically generate images from Osu! scores.

## Installing

Using npm:

```bash
$ npm install lookatmyscore
```

## Features

- Make dynamically created topplay cards for pleasurable viewing!

## Examples

### Usage:
```js
    const lookatmyscore = require('lookatmyscore');
    
    const JSON = {
        mode: 0, // 0 = osu!std, 1 = osu!taiko, 3 = osu!catch, 4 = osu!mania
        beatmap_id: '2469345', // Osu Beatmap ID 
        score: {
            username: 'WhiteCat',
            date: '2020-06-28 18:39:24',
            enabled_mods: 600, // Bitmask of mods, look https://github.com/ppy/osu-api/wiki#mods
            score: '4930126',
            maxcombo: '464',
            rank: 'SH', // accepted types are XH (SSH), X(SS), SH, S, A, B, C or D 
            count50: '0',
            count100: '7',
            count300: '330',
            countmiss: '0',
            countkatu: '6',
            countgeki: '95',
            pp: '1089.33' // floats are always rounded to 2 decimal places
        }
    }


    
    const res = await lookatmyscore(JSON)
    console.log(res)
```
> **NOTE:** Supplied `JSON` must be structured like in the example above,
> else API will hit you with status code 400.
### Output:
```js
    {
        result: 'image',
        image: {
            id: '758c7563-8ff6-4ac2-b0ba-24cb89d36ea6',
            url: 'https://nicesco.re/758c7563-8ff6-4ac2-b0ba-24cb89d36ea6.png'
        }
    }
```

## Disclaimer

This project is in not way affiliated with Osu! in any way!

[omkelderman]: https://github.com/omkelderman
# GEL Matter

BBC GEL's Matter([?](https://github.com/bbc/collider-core#whats-matter)) library.


## Installation

`npm install --save bbc/gel-matter`

*This requires NPM version 1.1.65 and above.*

In order to use gel-matter while developing another project, it's often helpful to symlink it within node_modules  of the project so you don't have to keep running npm/yarn update.

To do this, navigate into your gel-matter directory and run `npm link` or `yarn link` depending on your preferred tool. Next, navigate to your projects directory and run `npm link gel-matter` or `yarn link gel-matter` which will link everything together for you.


## Usage

```js
import { GelLabel } from 'gel-matter/atoms';
import { GelMasthead } from 'gel-matter/organisms';

export default {
	components: { GelLabel, GelMasthead }
}

```

```html
<gel-label></gel-label>
<gel-masthead></gel-masthead>

```

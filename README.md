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

# Creating your matter library

...

## Create a example file for your new component
While writing your component, you'll want to be able to see what it actually looks like! You can do this by simply adding a new example file.
It might be a good idea to create this file first, and write the API you'd like to have. In order to ease layout, you have all the usual gel foundation css classes available, along with grandstand.

If you try to visit this page, it will obviously give you an error, so you'll need to create your component source!

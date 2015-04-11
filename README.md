# reactive-var-toggle
Toggle boolean values of reactive variables.

# API
This package extends the prototype of [reactive variables](http://docs.meteor.com/#/full/reactivevar_pkg) with a `toggle` method.

The fastest way to understand what is going on is to look at the [8 lines of implementation](https://github.com/dferber90/meteor-reactive-var-toggle/blob/master/toggle.js#L5-L12).

# Example
Here is an example of what this package allows you to do.
Instances of reactive variables have the methods `get` and a `set`.
This package adds another method called `toggle` to toggle boolean values.
```
var a = new ReactiveVar(true);
console.log(a.get()); // logs "true"
a.toggle(); // this `toggle` method is the only thing this package provides.
console.log(a.get()); // logs "false"
```

This is just a shorthand for writing `a.set(!a.get())`,
except `a.toggle()` does not [depend](http://docs.meteor.com/#/full/dependency_depend) on `a`, like `a.get()` would.
It will still call [changed](http://docs.meteor.com/#/full/dependency_changed).

# Installation
`meteor add dferber:reactive-var-toggle`

# Context
This is a package for [Meteor](https://www.meteor.com/), published on [Atmosphere](https://atmospherejs.com/) as [dferber:reactive-var-toggle](https://atmospherejs.com/dferber/reactive-var-toggle).


# License
The MIT License (MIT)

Copyright (c) 2015 Dominik Ferber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

jQueryForm
==========

Now, find three fancy functions:

`appendElement, prependElement, contentElement.`

The `appendElement` insert content, specified by the parameter, to the end of each element in the set of matched elements.
The `prependElement` insert content into the beginning, and `contentElement` remove everything, and put the new content into the parent element.

All of this need: `parent, type, id, attributes` parameters.

#parent:

The `parent` is the jQuery selector, or jQuery instance. 
For example: `div#box`.
```
jQueryForm.contentElement('div#box', {input:'text'}, 'title', {value:5});
```

In this example, the content will be in the div, what use #box id.

#type:

The type is really simple. `textarea, a, div, span, etc` `string` for the `normal tags`.
`Object`, for `input`.
See the previous example for input, and this, for `textarea`:
```
jQueryForm.contentElement('div#box', 'textarea', 'title', {value:5});
```

#id:
This will be the element id. This is necessary for the identification.

#attributes:
`Content, class, name, rel, value, etc`. This is an `object`.

Every function return with the core object, so more implementation is easy:
```
jQueryForm
    .contentElement('div#box', {input:'text'}, 'title', {value:5})
    .appendElement('div#box', {input:'password'}, 'name', {value:6, name: password});
```

jQueryForm
==========

Now, find some fancy methods:

`appendElement, prependElement, insertElement, createElement.`

The `appendElement` insert content, specified by the parameter, to the end of each element in the set of matched elements.
The `prependElement` insert content into the beginning, and `insertElement` remove everything, and put the new content into the parent element.
The last function `createElement` is the core of the other ones. This method create a new jQuery instance from the parameters.

All of this need: `parent, element, attributes, value` parameters.

First parameter: `parent` 
Type: string (jQuery selector) or object of jQuery instance.
 
For example: `div#box`.

Second parameter: `element`
Type: string
This will be the tag.
`input` will be `<input ... />` or `div` will be `<div></div>`

Third parameter: `attributes`
Type: object or null string ('')
If type is object, this will be use for `$().attr(attributes)`.

The last parameter: `value`
Type: string ('' or something).
If the content is not empty, this will be the value or text/html of the created tag.

In this example, the content (Jee, it's....) will be in the div, what use '#box' id:

```
new jQueryForm().insertElement('div#box', 'input', {id: '#box_1'}, "Jee, it's a pretty content");
```


Every function return with the core object, so more implementation is easy:
```
new jQueryForm()
    .contentElement('div#box', {input:'text'}, 'title', {value:5})
    .appendElement('div#box', {input:'password'}, 'name', {value:6, name: password});
```
If you want, you can change the return value with `setJquery` method. If this `true`, the methods return with jQuery instance, else with the jQueryForm instance.

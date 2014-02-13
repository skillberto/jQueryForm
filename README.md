jQueryForm
==========

Now, find some fancy methods:

`appendElement, prependElement, insertElement, createElement.`

The `appendElement` insert content, specified by the parameter, to the end of each element in the set of matched elements.
The `prependElement` insert content into the beginning, and `insertElement` remove everything, and put the new content into the parent element.
The last function `createElement` is the core of the other ones. This method create a new jQuery instance from the parameters.

All of this need: `parent, properties` parameters.

First parameter: `parent`.
Type: string (jQuery selector) or object of jQuery instance.
 
For example: `div#box`.

Second parameter: `properties`.
Type: object

Element property is rendered for HTML DOM tag, this is necessary.

Value is the property for content/value.

All of others rendered into method .attr like `$(element).attr(properties)`.

In this example, the content (Jee, it's....) will be in the div, what use '#box' id:

```
new jQueryForm().insertElement('div#box', {element: 'input', id: '#box_1', value: "Jee, it's a pretty content"});
```

Every function return with the core object, so more implementation is easy:
```
new jQueryForm()
    .insertElement('div#box', {input:'text'}, 'title', {value:5})
    .appendElement('div#box', {input:'password'}, 'name', {value:6, name: password});
```
If you want, you can change the return value with `getJquery` method. If this `true`, the methods return with jQuery instance, else with the jQueryForm instance.

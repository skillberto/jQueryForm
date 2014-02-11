- new mode of creation.

jQueryForm().createElement() is the core of all others.

jQueryForm().contentElement() is removed, changed to
jQueryForm().insertElement()

Changed parameters:
Paremeter 2:
Removed: type
New:     element    (only string for input too, don't need object anyway)

Paremeter 3:
Removed: id
New:     attributes (include id, class, custom, etc)

Paremeter 4:
Removed: attributes
New:     value
/**
 * Create HTML tag into a jQuery parent Node by DOM type and id.
 * 
 * 
 * @type Class
 * @author NorbertHeiszler <skillbertoo@gmail.com>
 * @version 2.0
 */
function jQueryForm ()
{
    var A = 'array', O = 'object', S = 'string', D = '',  P = '', U = 'undefined';

	this.returnJquery = false;
	
    function getParent(parent) {
        if ((!( parent instanceof jQuery)) && (typeof parent == S)) {
            return $(parent);
        } else {
            if (parent instanceof jQuery) {
                return parent;
            } else {
                throw new Exception("Invalid input for jQueryForm parent");
            }
        }
    }

    this.appendElement = function(parent, properties) {

        var $j = getParent(parent).prepend(this.createElement(properties));

		if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    this.prependElement = function(parent, properties) {

        var $j = getParent(parent).prepend(this.createElement(properties));

		if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    this.insertElement = function(parent, properties) {

        var $j = getParent(parent).html(this.createElement(properties));

        if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    /**
     * Create jQuery node by name with properties and value
     *
     * @param object properties
     * @returns jQuery
     */
    this.createElement = function(properties) {
        //injected input not lose property
        var properties = $.extend(true, {}, properties);

        var element = properties.element;

        delete properties.element;

        var $node = $(document.createElement(element));

        if (typeof properties.value != U) {

            var value = properties.value;

            delete properties.value;

            //for input
            $node.val(value);
            //for textarea
            $node.text(value);
            //for else
            $node.html(value);
        }

        if (typeof properties != U) {
            $node.attr(properties);
        }

        return $node;
    }
	
	this.getJquery = function(set) {
	
		this.returnJquery = set;
		
		return this;
	};
}


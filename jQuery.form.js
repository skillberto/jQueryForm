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

    this.appendElement = function(parent, element, attributes, value) {

        var $j = getParent(parent).prepend(this.createElement(element, attributes, value));

		if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    this.prependElement = function(parent, element, attributes, value) {

        var $j = getParent(parent).prepend(this.createElement(element, attributes, value));

		if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    this.insertElement = function(parent, element, attributes, value) {

        var $j = getParent(parent).html(this.createElement(element, attributes, value));

        if (this.returnJquery) {
			return $j;
		}
		
        return this;
    }

    /**
     * Create jQuery node by name with attributes and value
     *
     * @param string element
     * @param object attributes
     * @returns jQuery
     */
    this.createElement = function(element, attributes, value) {
        var $node = $(document.createElement(element));

        if (typeof attributes != U) {
            $node.attr(attributes);
        }

        if (typeof value != U) {
            //for input
            $node.val(value);
            //for textarea
            $node.text(value);
            //for else
            $node.html(value);
        }

        return $node;
    }
	
	this.setJquery = function(set) {
	
		this.returnJquery = set;
		
		return this;
	};
}


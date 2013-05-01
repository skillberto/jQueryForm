/**
 * Create HTML tag into a jQuery parent Node by DOM type and id.
 * 
 * 
 * @type Class
 * @author NorbertHeiszler <skillbertoo@gmail.com>
 * @version 1.0
 */
function jQueryForm ()
{
    var A = 'array', O = 'object', S = 'string', D = '',  P = '', U = 'undefined';
    
    /**
     * Create HTML element from type and id
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @returns jQueryForm
     */
    function initElement(parent, type, id) {
        try {
            var data;

            if (typeof type == A || typeof type == O) {
                $.each(type, function(k,v){
                    if (k == 'input') {
                        data = '<input type="'+v+'" id="'+id+'" />';
                    } else {
                        throw new Error("Invalid DOM type! For input array need, else string.");
                    }
                });
            } else {
                data = '<'+type+' id="'+id+'" ></'+type+'>';
            }

            D = data;

            if (typeof parent == O) {
                P=parent;
            } else {
                if (typeof parent == S) {
                    P=$(parent);
                } else {
                    throw new EventException('Invalid parent Node type. jQuery instance, or string need.');
                }
            }
            
        } catch (Error) {
            document.write('<span style="color: red; font-weight: bold;">'+Error+'</span><br>');
        }
        
        return this;
    }
        
    function initAttributes(type, id, attributes){
        if (typeof attributes == U)
            return this;
        
        P.find("#"+id).attr(attributes);

        var v;
        
        switch (typeof attributes) {
            case A:
                if (typeof attributes["value"] != U) 
                    v = attributes["value"];
                
                
                break;
            case O:
                if (typeof attributes.value != U) 
                    v = attributes.value;
                                    
                break;
            case U:
                return this;                
        }
        
        

        if (typeof type == S) {            
            P.find("#"+id).html(v);            
        } else {            
            P.find("#"+id).val(v);
        }
        
        return this;
    }
    
    this.jQueryForm = function()
    {
        return this;
    }
    
    /**
     * Append HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    this.appendElement = function(parent, type, id, attributes) {
        initElement(parent, type, id);
        
        P.append(D);
        initAttributes(type, id, attributes);
        
        return this;
    }
    
    /**
     * Prepend HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    this.prependElement = function(parent, type, id, attributes) {
        initElement(parent, type, id);
        
        P.prepend(D);
        initAttributes(type, id, attributes);
        
        return this;
    }
    
    /**
     * Change HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    this.contentElement = function(parent, type, id, attributes) {        
        initElement(parent, type, id);
       
        P.html(D);
        initAttributes(type, id, attributes);
        
        return this;
    }
}


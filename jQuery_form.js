/**
 * Create HTML tag from type and id into a parent
 * 
 * @type Object
 */
var jQueryForm = {
    a: 'array',
    o: 'object',
    s: 'string',
    d: '',
    p: '',
    
    /**
     * Create HTML element from type and id
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @returns jQueryForm
     */
    createElement : function(parent, type, id) {
        var data;
        if (typeof type == this.a || typeof type == this.o) {
            $.each(type, function(k,v){
                if (k == 'input') {
                    data = '<input type="'+v+'" id="'+id+'" />';
                } else {
                    throw new Exception("Invalid type! For input array need, else string.");
                }
            });
        } else {
            data = '<'+type+' id="'+id+'" ></'+type+'>';
        }
        
        this.d = data;
        
        if (typeof parent == this.o) {
            this.p=parent;
        } else {
            if (typeof parent == this.s) {
                this.p=$(parent);
            } else {
                throw new Exception('Invalid parent type. jQuery instance, or string need.');
            }
        }
        
        return this;
    },
    
    /**
     * Append HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    appendElement : function(parent, type, id, attributes) {
        this.createElement(parent, type, id);
        
        this.p.append(this.d);
        this.createAttributes(type, id, attributes);
        
        return this;
    },
    
    /**
     * Prepend HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    prependElement: function(parent, type, id, attributes) {
        this.createElement(parent, type, id);
        
        this.p.prepend(this.d);
        this.createAttributes(type, id, attributes);
        
        return this;
    },
    
    /**
     * Change HTML element.
     * 
     * @param string|jQuery parent
     * @param string|array|object type
     * @param string id
     * @param array|object attributes
     * @returns jQueryForm
     */
    contentElement: function(parent, type, id, attributes) {        
        this.createElement(parent, type, id);
        
        this.p.html(this.d);
        this.createAttributes(type, id, attributes);
        
        return this;
    },
    
    createAttributes: function(type, id, attributes){
        this.p.find("#"+id).attr(attributes);

        if (typeof type == this.s) {            
            var v;
            
            if (typeof attributes == this.a) {
                v = attributes["value"];
            } else {
                v = attributes.value;
            }
            
            if (type == 'textarea') {
                this.p.find("#"+id).val(v);
            } else {
                this.p.find("#"+id).html(v);
            }
        }
        
        return this;
    }
};


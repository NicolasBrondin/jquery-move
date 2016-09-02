(function ( $ ) {
 
    //{x: 15, y: -50, position: "relative", unit: "px"}
    $.fn.move = function(options) {
        if(options && (options.x || options.y) ) {
            if(!options.unit) {
                options.unit = "px";
            }
            if(options.position=="relative") {
                if(options.y) 
                    this.css("margin-top", (parseFloat(this.css("margin-top"))+options.y)+options.unit);
                if(options.x) 
                    this.css("margin-left", (parseFloat(this.css("margin-left"))+options.x)+options.unit);
            } else {
                if(options.y) 
                    this.css("top", (parseFloat(this.css("top"))+options.y)+options.unit);
                if(options.x) 
                    this.css("left", (parseFloat(this.css("left"))+options.x)+options.unit);
            }
        }
        return this;
    };
 
}( jQuery ));
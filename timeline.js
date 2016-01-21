/**
 * TimelineJS calculates the right differences between two dates based on
 * given date or date ranges.
 *
 * @version   2.0
 * @author    Jakob Ploens <jakob@2helden.com>
 * @copyright Jakob Ploens 2016
 * @license   The MIT License
 */

var Timeline = function(list, settings){

    var self = this;

    /**
     * Define default settings we go for.
     */
    this.defaults = {
        spacing: 5,
        vertical: true
    };

    /**
     * Get options.
     */
    this.options = merge(this.defaults, settings);

    /**
     * Save some objects.
     */
    this.timeline = list;
    this.items    = this.timeline.children;
    this.start    = this.items[0].getAttribute('data-timeline-date');
    this.end      = this.items[this.items.length - 1].getAttribute('data-timeline-date');

    /**
     * Init function which builds our tooltip
     *
     * @return prototype
     */
    this.init = function(){
        self.range = self.convertDate(self.end) - self.convertDate(self.start);

        /**
         * Remove existing tooltips, just to be sure
         */
        Array.prototype.forEach.call(self.items, function(item, i){
            var previousevent = item.previousElementSibling;
            if(!previousevent) return;

            var date         = item.getAttribute('data-timeline-date');
            var previousdate = previousevent.getAttribute('data-timeline-end') || previousevent.getAttribute('data-timeline-date');
            var interval     = self.convertDate(date) - self.convertDate(previousdate);
            var percentage   = (interval / self.range) * 100;
            var margin       = self.options.spacing * percentage;

            if(self.options.vertical){
                item.style.marginTop = margin + 'px';
            } else {
                item.style.marginLeft = margin + 'px';
            }
        });

        /**
         * Return this
         */
        return self;
    };

    /**
     * Convert Date
     */
    this.convertDate = function(date){
        if(!date || date === ""){
            return;
        }

        var d = date.toString().split("-");
        var y = (d[0]) ? d[0] : "1970";
        var m = (d[1]) ? d[1] : "01";
        var t = (d[2]) ? d[2] : "01";
        var b = new Date(y, m, t);

        return Date.parse(b);
    };

    /**
     * Destroy plugin and unbind events.
     */
    this.destroy = function(){
        self = null;
        delete self;
        return;
    };

    /**
     * Return init function
     */
    return this.init();
};


/**
 * Short function to merge two objects.
 *
 * @param  object (gets overwritten)
 * @param  object (overwrites)
 * @return object (merged)
 */
function merge(objectA, objectB){
    var result = {};
    for(var attr in objectA){
        result[attr] = objectA[attr];
    }
    for(attr in objectB){
        result[attr] = objectB[attr];
    }
    return result;
}


if(window.jQuery){
    (function($){
        'use strict';

        /**
         * Initialize jQuery plugin
         */
        $.fn.timeline = function(options){
            $(this).each(function(){
                var tooltip = new Timeline(this, options);
            });
            return;
        };
    })(jQuery);
}
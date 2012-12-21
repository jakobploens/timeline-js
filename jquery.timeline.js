/**
 * -----------------------------------------------------------------------------------------------------------
 *   Timeline Plugin for jQuery
 * -----------------------------------------------------------------------------------------------------------
 *
 * A simple and lightweight jQuery plugin for displaying a nice and simple timeline with correct margins.
 * 
 * This plugin calculates correct margins between dated events. Therefore it searches for
 * the whole stretch, and calculates the top-margin of every single element, based on the following formula.
 * 
 *
 * Formula
 * -------
 * For a better understanding of the spacing value (and the whole process, of course),
 * here is the formula for calculating the margins.
 *
 * 1.   Calculating the whole stretch:                      stretch = last date - first date
 * 2.   Calculating the interval for the single element:    interval = this date - prior date
 * 3.   Calculating the margin based on the spacing:        margin = spacing * (interval / stretch) * 100
 *
 * If you want it simple and short:     m = sp * ((this - prior) / (last - first)) * 100
 *
 * If you use em's instead of pixels, the spacing is only multiplied by 10 (not by 100).
 * 
 *
 *
 * @copyright   (c) Jakob Ploens 2012
 * @author      Jakob Ploens <post@jakobploens.de>
 * @url         www.jakobploens.de.de
 *
 * @version     1.0
 * @usage       $("#timeline").timeline()
                
                <div id="timeline">
                    <ul>
                        <li data-date="2012-02-12" data-end="2012-02-15" data-title="December '12">Some event lasting from 12th to 15th Dec 12</li>
                        ...
                    </ul>
                </div>
                
                required: data-date (who thought)
                optional: data-end and data-title
                
 * @params      spacingUnit     string      whether it should use px or em's for the margins    default: "px"
 *              spacing         integer     indicates the spacing between the events (in px     default: 5
 *                                          multiplied by the percentage; see formula)
 * 
 **/

$.fn.timeline = function(settings){



    /* -- extend the given settings and setting defaults */
    settings = $.extend({
        spacingUnit     :   "px",                   // px or em
        spacing         :   5,                      // in px or em, depends on spacingUnit
    }, settings);
    
    
    
    /* -- defining some variables and functions */
    var me          = $(this),
        list        = me.find("ul"),                // doesn't need this one too much, but maybe in the future with some updates...
        items       = list.find("li"),
        start       = items.first().data("date"),
        end         = items.last().data("date"),
        
        
        /* convert date into some nice amount of numbers */
        convertDate = function(i){
        
            if(!i || i == "") return false;

            var d, b, y, m, t;
            
            d   = i.toString().split("-");
            y   = (d[0]) ? d[0] : "1970";
            m   = (d[1]) ? d[1] : "01";
            t   = (d[2]) ? d[2] : "01";
            b   = new Date(y, m, t);
            
            return Date.parse(b);
            
        },
        
        
        /* display the given (ugly) date-format in a nice, german way (like dd.mm.yyyy) - if needed */
        dateToTitle = function(i){

            if(!i || i == "") return false;
        
            var d, r;
            
            d   = i.toString().split("-");
            r   = "";
            r   += (d[2]) ? d[2] + "." : "";    // t
            r   += (d[1]) ? d[1] + "." : "";    // m
            r   += d[0];
            
            return r;
            
        },
        
        
        /* rounding numbers - isn't required if using ems, but cleaner and easier to analyize */
        rounding = function(n, i){
            
            var r;
            
            if(isNaN(n)) r = parseInt(n + 0.5);
            else {
                if(!i){
                    r = Math.round(n);
                    
                } else {
                    i = Math.pow(10, i);
                    r = Math.round(n * i) / i;
                }
            }
            
            return r;
        },
        
        
        /* calculating the first part of the formula: the stretch (with converted dates YAY) */
        stretch = convertDate(end) - convertDate(start);
        
        
    /* -- add the css-class and the line to the timeline, hehe */
    me.addClass("timeline").prepend("<div class='line' />");
    
    
    
    /* -- now the REAL magic begins -- */
    items.each(function(i){

        
        var me = $(this),
            thisdate, date, datetitle, pr, priordate, prior, interval, percentage, margin;
        
        
        /* wow, magic pure */
        date = me.data("date");
        
        
        /* setting the datetitle, it looks a bit messi, but works perfectly - just play arround with the
           data-types and look how the title changes */
        if(me.data("title")){
            datetitle = me.data("title");
        } else if(me.data("end")){
            datetitle = dateToTitle(me.data("date")) + "-" + dateToTitle(me.data("end"));
        } else {
            datetitle = dateToTitle(me.data("date"));
        }
        
        
        /* only for all-but-the-first-one; the latter doesn't need margin to the prior event, does it? */
        if(i > 0){
            
            pr          = me.prev("li");
            prior       = (pr.data("end")) ? pr.data("end") : pr.data("date");
            
            /* calculating */
            interval    = convertDate(date) - convertDate(prior);
            percentage  = (interval / stretch) * 100;
            margin      = settings.spacing * percentage;
            /* if em's are used */
            margin      = (settings.spacingUnit == "em") ? rounding(margin * 0.1, 2) : rounding(margin);
            
            /* setting the margin; works better than relative positioning */
            me.css("margin-top", margin + settings.spacingUnit);
            
        }
        
        
        /* how to display the datetitle? */
        me.prepend("<span class='date'>" + datetitle + "</span>");
        
        
        /* increase the i, the most important part of the whole plugin !!!!1!11!*/
        i++;
            
    });
    

};
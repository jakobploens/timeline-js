<<<<<<< baa7400b2a9d3dcbbe988e64d11e0d3d74c937b7
# Timeline Plugin for jQuery

Simple and lightweight jQuery Plugin for displaying a nice, vertical timeline with margins based on the whole stretch (as 100%) and the corresponding difference between two events (in percentage based on the whole stretch). Just see the comments and everything should be clear. If you have some wishes or thoughts or something else which is interesting (!), feel free to drop me a line at post@jakobploens.de

## Documentation

### HTML

	<div id="timeline">
		<ul>
			<li data-date="1999">Description what happened in 1999</li>
			<li data-date="2001">Description what happened in 2001</li>
			<li data-date="2012">Description what happened in 2012</li>
			<li data-date="2013">Description what will happen in 2013</li>
			<li data-date="2020">Description what will happen in 2020</li>
		</ul>
	</div>


**Required:**
	data-date="yyyy[[-mm]-dd]"

**Optional:**
	data-date-end="yyyy[[-mm]-dd]"
	data-title="If you want to show this title instead of the date"

The date format given to the function should always be like <code>YYYY-MM-DD</code>. Month and day are optional. You can also combine different kinds of date types for your different events – if no month and no day is given, the plugin will interpret it as 01/01/1970. Something like this is possible:

	<li data-date="2010" data-date-end="2011-06-12">…</li>
	<li data-date="2012-11" data-date-end="2013">…</li>


### CSS

Just look it up in the jquery.timeline.css – there's everything you need. Just change all the values at the top, but don't do so underneath line 43.

### Javascript

As usual:

	$(document).ready(function(){
		$("#timeline").timeline();
	});

With options:

	$(document).ready(function(){
		$("#timeline").timeline({
			spacing: 5,
			spacingUnit: "px"
		});
	});

<code>spacing</code>: This number is multiplied by the percentage between two dates, based on the whole stretch (which is, of course, 100%).
<code>spacingUnit</code>: Whether <code>spacing</code> is given in px or em.


## Important note

Just use the code in the way you like, but please do not sell it and do not claim it as yours. I'm very happy with some feedback (see mail address above) or back links (www.jakobploens.de). Thanks a lot!
=======
# TimelineJS

TimelineJS calculates the right differences between two dates based on given date or date ranges.

### Usage

Insert JS and CSS files. Following markup is recommended:

```html
<ul class="timeline">
    <li class="timeline-event" data-timeline-date="1966">
        <span class="timeline-event-date">1966</span>
        <span class="timeline-event-title">Batman: The Movie</span>
    </li>
    <li class="timeline-event" data-timeline-date="1989">
        <span class="timeline-event-date">1989</span>
        <span class="timeline-event-title">Batman</span>
    </li>
    <li class="timeline-event" data-timeline-date="1992">
        <span class="timeline-event-date">1992</span>
        <span class="timeline-event-title">Batman Returns</span>
    </li>
    <li class="timeline-event" data-timeline-date="1995">
        <span class="timeline-event-date">1995</span>
        <span class="timeline-event-title">Batman Forever</span>
    </li>
    <li class="timeline-event" data-timeline-date="1997">
        <span class="timeline-event-date">1997</span>
        <span class="timeline-event-title">Batman & Robin</span>
    </li>
    <li class="timeline-event" data-timeline-date="2005">
        <span class="timeline-event-date">2005</span>
        <span class="timeline-event-title">Batman Begins</span>
    </li>
    <li class="timeline-event" data-timeline-date="2008">
        <span class="timeline-event-date">2008</span>
        <span class="timeline-event-title">The Dark Knight</span>
    </li>
    <li class="timeline-event" data-timeline-date="2012">
        <span class="timeline-event-date">2012</span>
        <span class="timeline-event-title">The Dark Knight Rises</span>
    </li>
</ul>
```

You can ommit everything inside the li, change the classes, go with DIVs, what you want. The only required thing is that the child elements have a "data-timeline-date" value. If you want to add the end, add "data-timeline-end".

### Options

`spacing`
Integer, default: 5
Defines the basic spacing between two events in PX.

`vertical`
Boolean, default: true
If true, margin is set vertical (`margin-top`), otherwise it is set horizontally (`margin-left`).


### Roadmap

- Add horizontal CSS
- Collect evens from the same date
>>>>>>> version 2.0: no dependencies, plain JS, better CSS

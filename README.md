# Timeline Plugin for jQuery

Simple and lightweight jQuery Plugin for displaying a nice, vertical timeline with margins based on the whole stretch (as 100%) and the corresponding difference between two events (in percentage based on the whole stretch). Just see the comments and everything should be clear. If you have some wishes or thoughts or something else which is interesting (!), feel free to drop me a line at post@jakobploens.de

## Documentation

### HTML

	<ul>
		<li data-date="1999">Description what happened in 1999</li>
		<li data-date="2001">Description what happened in 2001</li>
		<li data-date="2012">Description what happened in 2012</li>
		<li data-date="2013">Description what will happen in 2013</li>
		<li data-date="2020">Description what will happen in 2020</li>
	</ul>


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
		$(".some-class-name").timeline();
	});

With options:

	$(document).ready(function(){
		$(".some-class-name").timeline({
			spacing: 5,
			spacingUnit: "px"
		});
	});

<code>spacing</code>: This number is multiplied by the percentage between two dates, based on the whole stretch (which is, of course, 100%).
<code>spacingUnit</code>: Whether <code>spacing</code> is given in px or em.


## Important note

Just use the code in the way you like, but please do not sell it and do not claim it as yours. I'm very happy with some feedback (see mail address above) or back links (www.jakobploens.de). Thanks a lot!
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

```javascript
// Call plugin
new Timeline(document.querySelector('.timeline'));
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
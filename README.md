# Notify Theme (RWD) v1.0
---

Graphic project and files PSD by Michael Reimer | www.bestpsdfreebies.com \
Cut and coding by Patryk Górski

Template features:
 - Responsive design
 - Text animate (opinion and header section)
 - Newsletter
 - Links to social networking sites
 - Simple edit text animation
 - The possibility of connecting pages for various CMS systems
 - Opinion section
 - Ability to add slide on telephone
 - SASS FILES


 #### Tutorial 1. How to add new slide:
 Open files index.html and search element "slide-text" or "op-text".\
 Add inside the element a new paragraph and write your text.\
index.html:

```html
    <div class="op-text">
		<p>Your text</p>
	</div>
```

#### Tutorial 2. Edit animation:
JavaScript:
```javascript
        var headerSlide = new slideText();
        headerSlide.slideStartFun(".slide-text p"); // Element
        headerSlide.slideAnimationTime = 200; // Time animation default 500 ms
        headerSlide.slideTime = 3000; // How long slide show default 4000 ms 
        headerSlide.slideStart = 0; // What first slide
```

#### Changelog:
```
	v1.0 - End work :)
```


### Libraries/Freemwork:

 * [jQuery](https://jquery.com)
 * [Notify PSD Theme](http://graphicburger.com/notify-psd-theme/) 
 * [Foundation 5](http://foundation.zurb.com/)
 * [Font Awesome](https://fortawesome.github.io/Font-Awesome/) 
 * [SASS](http://sass-lang.com)

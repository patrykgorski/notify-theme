# Notify Theme (RWD) - UWAGA PRACE CIĄGLE TRWAJĄ.
---

Motyw o tematyce aplikacji mobilnych a także projektów.\
Projekt graficzny i pliki PSD wykonane przez Michael Reimer | www.bestpsdfreebies.com \
Cięcie i kodowanie szablonu wykonane przez Patryk Górski.

Cechy szablonu:
 - Responsywny design
 - Animacja tekstu pod logotypem jak i w sekcji "opinie".
 - Newsletter
 - Odnośniki do portalów społecznościowych
 - Możliwość prostej edycji animacji tekstów.
 - Możliwość podpięcia strony pod różne systemy CMS.
 - Sekcja opinii.
 - Możliwość dodania slajdów imitujących działanie telefonu.
 - PLIKI SASS


 #### Tutorial 1. Edycja slajdów:
 Otwórz plik html i znajdź element "slide-text" lub "op-text".\
 Dodaj wewnątrz tego elementu nowy paragraf i wstaw w nim swój tekst.\
index.html:

```html
	<p>Mój nowy paragraf z nowym tekstem</p>
```

#### Tutorial 2. Edycja animacji tekstu:
Java Script:
```javascript
        var headerSlide = new slideText();
        headerSlide.slideStartFun(".slide-text p"); // Element
        headerSlide.slideAnimationTime = 200; // Time animation default 500 ms
        headerSlide.slideTime = 3000; // How long slide show default 4000 ms 
        headerSlide.slideStart = 0; // What first slide
```


### Biblioteki/Freemworki:

 * [jQuery](https://jquery.com)
 * [Notify PSD Theme](http://graphicburger.com/notify-psd-theme/) 
 * [Foundation 5](http://foundation.zurb.com/)
 * [Font Awesome](https://fortawesome.github.io/Font-Awesome/) 
 * [SASS](http://sass-lang.com)
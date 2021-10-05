# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Mack Hooijmans

#### Je startniveau:
Rode piste

#### Je focus:
Extra aandacht voor de surface laag.
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.q-dance.com/

 
#### Screenshot(s) van de eerste pagina (small screen):
##### 'Q-dance - Event & Tickets' 
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/qdance-screens/eventstickets.png" width="375px" alt="Mobiele screenshot van Events en Tickets pagina van de Q-Dance website">
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/qdance-screens/eventstickets-menu.png" width="375px" alt="Mobiele screenshot van Events en Tickets pagina met uitgeklapt menu van de Q-Dance website">
 
 
 Je kunt op deze pagina het aanbod van aankomende events bekijken en daarbij ook het volledige aanbod aan events bekijken 
 
#### Screenshot(s) van de tweede pagina (small screen): 
##### 'Q-dance - Defqon.1 Weekend Festival'
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/qdance-screens/detailpagina.png" width="375px" alt="Mobiele screenshot van de Qlimax festival pagina van de Q-Dance website">
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/qdance-screens/detailpagina-menu.png" width="375px" alt="Mobiele screenshot van de Qlimax festival pagina met uitgeklapt menu van de Q-Dance website">

 
 Je kunt op deze pagina oriënteren over het desbetreffende festival en kaarten kopen, lineup bekijken, etc.
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/breakdownschets/breakdownschets-eventstickets-01.jpg" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (menu): 
<img src="https://github.com/MackDonaldo/mackfed/blob/main/images/breakdownschets/breakdownschets-sidemenu-02.jpg" width="375px" alt="breakdown van een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Ik heb een begin gemaakt aan de website op desktop versie. Ik ga dit omzetten naar een
mobiele versie, om eventueel later de mogelijkheid voor responsiveness te vergemakkelijken.

### Agenda voor meeting
samen met je groepje opstellen

| Ryan                                            | Joost              | Sjors               | Mack   |
| ---                                             | ---                | ---                 | ---    |
| Werk laten zien.                                | Werk laten zien.   | Werk laten zien.    | ---    |
| Hoe ver moeten we zijn om op schema te blijven? | ---                | ---                 | ---    |
| ---                                             | ---                | ---                 | ---    |


### Verslag van meeting
Na het missen van het voortgangsgesprek heb ik mijn medestudenten gevraagd wat er besproken is. 
Hier kwam vooral uit dat iedereen nog wat stappen moet gaan maken.
 
Hierna realiseerde ik me dat ik het beste een planning kon gaan maken om hier 
vervolgens productief mee aan de slag te gaan.


</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Ik had deze week moeite met het feit dat wanneer ik een deel van de content naar een kant wilde verplaatsen, de hele paginagrootte daarbij werd mee gescaled. Betekent dus dat de 100vh van de side-navigatie niet meer klopte als je scrollt. Bedoeling is uiteindelijk dus dat als je scrollt de header en de side-nav fixed zijn.

Dit heb ik gefixt door de volgende meta code op te nemen in mijn head:
<img src="https://github.com/MackDonaldo/mackfed/blob/main/voortgang_2_screen2.png" width="375px" alt="omschrijving van de pagina">

 
<img src="https://github.com/MackDonaldo/mackfed/blob/main/voortgang_2_screen1.png" width="375px" alt="omschrijving van de pagina">

 



### Agenda voor meeting
samen met je groepje opstellen

| Ryan                                                    | Joost              | Sjors          | Mack             |
| ---                                                     | ---                | ---            | ---              |
| Werk laten zien                                         | Werk laten zien    | Werk laten zien| Werk laten zien  |
| Foto's staan niet in het midden, hoe dit op te lossen?  | ---                | ---            | Van een CSS slide menu, een werkend javascript menuutje maken.|
| ---                                                     | ---                | ---            | ---              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Gebruik: em en px --> em
- Misschien nog leuk: animatie hamburger menu: hamburger --> kruisje (m.b.v span's)
- CSS nav-slide --> Javascript

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Test 1: screenread test.
##### De resultaten:
 - Alt-teksten toevoegen om afbeeldingen de omschrijven
 - Er wordt steeds bij 'a'-elementen 'koppeling' opgeroepen, i.p.v de inhoud van de koppeling/button
 - Teksten zoals titels, locaties en data van evenementen worden overgeslagen. Bij de knop 'tickets' wordt daardoor alleen 'tickets' opgenoemd en niet van welk evenement, dat werkt nogal verwarrend.
 
##### De oplossingen:
 - Alt-teksten toevoegen
 - De button element verwijderen en het a-element stylen als button.
 - Focus state toevoegen en div's een role=group geven en een aria-label=evenement-naam toevoegen, waardoor de group label word opgelezen, zodat je kunt weten welk evenement je op focust.


#### Test 2: TAB-test

##### De resultaten:
 - Om knoppen de selecteren moet je twee keer tabbben. 
 <img src="https://github.com/MackDonaldo/mackfed/blob/main/images/toegankelijkheidstest/tab-test.jpg" width="375px" alt="Testpersoon wijst naar focus state van een button element">
 - Bij de detailpagina (Qlimax) is de overview dropdown niet selecteer-baar.
 - De side menu is wel selecteerbaar, maar niet 'enter-baar'.
 - Er is geen hover- en active state bij de knoppen.
 
##### De oplossingen:
 - Het button element verwijderen en het a element stylen.
 - Om de list items van de 'Overview'-dropdown zou je focus states moeten toevoegen.
 - Het feit dat (sommige) list items niet 'enter-baar' zijn komt doordat deze pagina's niet bestaan. Enige list item die werkend is, is de Events & Tickets pagina.
 - States nog even toevoegen.
 


#### Test 3: oog-test
##### De resultaten:
 - Bij vrijwel elke bril kwam het er op neer dat de knoppen te klein zijn.
 - Het contrast is niet overal goed.

##### De oplossingen:
 - Knoppen groter maken
 - Contrast verbeteren door misschien een toggle voor mensen met een oogafwijking toe te voegen.


#### Test 4: ballon-test
 ##### Het resultaat en de oplossing:
 - Om de concentratie niet te verliezen moeten acties duidelijker en simpeler worden gemaakt.

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Ik heb ondertussen de content uitgewerkt en ingevuld. Daarnaast heb ik het side bar menuutje klikbaar gemaakt met behulp van JavaScript.


### Agenda voor meeting
samen met je groepje opstellen

| Ryan                                          | Joost              | Sjors           | Mack                                                           
| ---                                           | ---                | ---             | ---                                                           
| Werk laten zien                               | Werk laten zien    | Werk laten zien | Werk laten zien                                               
| Responsiveness werkt nog niet helemaal lekker | ---                | ---             | Moet ik de website nog verder responsive maken, of is de huidige mobiele versie voldoende?|
| ---              | ---                        | ---                | ---                                                                                                                    


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Focus states
- punt 2
- nog een punt
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

1. Bron 1. Algehele content: https://www.q-dance.com/
1. Bron 2. Sidebar Menu using HTML & CSS: https://www.youtube.com/watch?v=V0O4pY2xX10&t=495s
2. Bron 3. Gradients: https://css-tricks.com/css3-gradients/
3. Bron 4. JavaScript code voor de sidebar menu: https://codepen.io/shooft/pen/dyRVVRr

</details>

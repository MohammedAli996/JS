// Vandaag datumobject maken
var vandaag = new Date();
var factuurDatum = new Date('2023-05-15');

// Termijn van 30 dagen berekenen
var termijn = 30;

// Betaaldatum berekenen
var betaaldatum = new Date(vandaag.getTime() + termijn * 24 * 60 * 60 * 1000);

// Resterende dagen berekenen
var resterendeDagen = Math.ceil((betaaldatum.getTime() - vandaag.getTime()) / (24 * 60 * 60 * 1000));

// Betaalstatus controleren en melding weergeven
var betaalstatusElement = document.getElementById('betaalstatus');
var resterendeDagenElement = document.getElementById('resterendeDagen');

if (vandaag > betaaldatum) {
  betaalstatusElement.textContent = 'Meld incassobureau';
} else {
  resterendeDagenElement.textContent = 'U hebt nog ' + resterendeDagen + ' resterende dagen om te betalen.';
}

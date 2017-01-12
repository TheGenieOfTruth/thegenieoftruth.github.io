var paragraph = `
  <p>Voltage, amperage, and resistance; I would think that these are magical, but truly there is quite a bit of science behind it. So first and foremost... </p><br>
  <h3>V<b></b>oltage</h3>
  <p>Voltage is the difference between the electrons at the start of a circuit and the end of the circuit. Voltage is measured in volts with a voltometer. How creative.</p>
  <p>Voltage can increase amperage, as it forces the electrons through more swiftly. It can be thought of as a push that moves the electrons through a circuit. What exactly is amperage?</p><br>
  <h3>A<b></b>mperage</h3>
  <p>Amperage is a measure of electric current, which is measured with an ammeter. The higher the amperage, well, the higher speed of the electrons. The scientists are especially creative when they name the units for amperage "amperes", or amps.</p>
  <br>
  <h3>R<b></b>esistance</h3>
  <p>Resistance is something that tries to stop or slow down electrons. This decreases current, but sadly is not measured in a resistometer. It is measured in ohms, with an ohmeter. You can also use this cool little Ω symbol as well.</p>
  <br>
  <p>So maybe it isn't magical, but its still pretty cool stuff.</p>
  <br>
  <h3>Vocabulary</h3>
  <br>
  <hr>
`
var words = [
	["Amperage", "The strength of an e<b></b>lectric current in a<b></b>mperes."],
	["Ammeter", "The tool used to measure the amount of a<b></b>mps in a c<b></b>ircuit."],
	["Amperes", "A unit of e<b></b>lectric current."],
	["Ampere", "A unit of e<b></b>lectric current."],
	["Amps", "Short for a<b></b>mperes, a unit of e<b></b>lectric current."],
	["Amp", "Short for a<b></b>mpere, a unit of e<b></b>lectric current."],
	["Circuit", "A pathway in which e<b></b>lectrons can travel."],
	["Electricity", "Moving e<b></b>lectrons in a c<b></b>ircuit."],
	["Electrons", "Subatomic particles in which are negatively charged"],
	["Electron", "A subatomic particle in which is negatively charged."]
	["Ohms", "The unit of electrical r<b></b>esistance, expressing the r<b></b>esistance in a c<b></b>ircuit."],
	["Resistance", "An electrical unit that measures how something reduces e<b></b>lectric current."],
	["Volts", "A unit that measures how strong the force moving the e<b></b>lectrons is."],
	["Voltage", "A difference of electrical potential with the system."],
	["Voltometer", "The tool used to measure the amount of v<b></b>olts in a c<b></b>ircuit."],
	["Ω", "A symbol for o<b></b>hms, a unit of electrical r<b></b>esistance."]
]
paragraph = paragraph.split(" ")
words.forEach(function(value, index) {
	var replace = value[0];
	var re = new RegExp("(" + replace + ")", "gi");
	paragraph = paragraph.map(function(val) {
		return val.replace(re, function(match) {
			return "<sp class = 'active' data-html = 'true' title = '" + "<h4>" + value[0].substring(0, 1) + "<b></b>" + value[0].substring(1, value[0].length) + "</h4>" + words[index][1] + "' style = 'border-bottom: 1px dotted #3498db;cursor:pointer'><x>" + match.substring(0, 1) + "<b></b>" + match.substring(1, match.length) + "</x></sp>"
		});
	});
});
console.log(paragraph)
$("#stuff").html(paragraph.join(" "))
$("sp").tooltip()
var diction = "";
words.forEach(function(val){
	diction+= "<h3>"+val[0]+"</h3>"
	diction+= "<p>"+val[1]+"</p>"
});
diction+="<br>"

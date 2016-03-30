//REQUIREMENTS
var express = require('express'),
    router = express.Router();

var Museum = require('../models/museums');
var User = require('../models/users');

router.get('/', function(req, res){
	Museum.find(function(err, museums){
		res.send(museums)
	})
})

router.post('/', function(req, res) {
	Museum.create(req.body, function(err, museum) {
		res.send(museum);
	});
});

router.get('/seed', function(req, res) {

	var museums = [
		{ name: 'MoMA', address: "11 West 53rd Street, New York, NY 10019", img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/MoMa_NY_USA_1.jpg", history:"The Museum of Modern Art (MoMA) is an art museum located in Midtown Manhattan in New York City, on 53rd Street between Fifth and Sixth Avenues. It has been important in developing and collecting modernist art, and is often identified as the most influential museum of modern art in the world. It is also one of the largest. The museum's collection offers an overview of modern and contemporary art, including works of architecture and design, drawing, painting, sculpture, photography, prints, illustrated books and artist's books, film and electronic media. The Library's holdings include approximately 300,000 books and exhibition catalogs, over 1,000 periodical titles, and over 40,000 files of ephemera about individual artists and groups."},
		{ name: 'Guggenheim', address: "1071 Fifth Avenue at 89th Street, New York, NY", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NYC_-_Guggenheim_Museum.jpg/280px-NYC_-_Guggenheim_Museum.jpg', history:'The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City. It is the permanent home of a continuously expanding collection of Impressionist, Post-Impressionist, early Modern and contemporary art and also features special exhibitions throughout the year. The museum was established by the Solomon R. Guggenheim Foundation in 1939 as the Museum of Non-Objective Painting, under the guidance of its first director, the artist Hilla von Rebay. It adopted its current name after the death of its founder, Solomon R. Guggenheim, in 1952.'},
		{ name: 'The Cloisters', address: '99 Margaret Corbin Drive, Fort Tryon Park, New York, NY', img: 'https://media-cdn.tripadvisor.com/media/photo-s/00/14/c3/5d/the-cloisters.jpg', history: 'The Cloisters is situated on a hill overlooking the Hudson River and incorporates portions of five distinct European abbeys which were disassembled and shipped to New York City, where, between 1934 and 1939, they were reconstructed and integrated with new buildings in the medieval style designed by Charles Collens. The area around the buildings was landscaped with gardens planted according to horticultural information obtained from medieval manuscripts and artifacts, and the structure includes multiple medieval-style cloistered herb gardens.'},
	];

	Museum.create(museums, function(err, museum) {
		res.redirect('/');
	});

});

router.put('/', function(req, res){
	 Museum.findByIdAndUpdate(req.body._id, {$set: req.body}, function(err, museum){
		res.send('updatedMuseum');
  });

});
// 	DELETE ROUTE FIXED
router.delete('/:museumId', function(req, res){
 	Museum.findByIdAndRemove(req.params.museumId, function(err, museum){
		res.send('deleted museum')
  });
});

module.exports = router;
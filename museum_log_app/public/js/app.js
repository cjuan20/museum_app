var app = angular.module('museumApp', []);

app.controller('MainController', ['$http', function($http){

	var controller = this;

	// this.getUsers = function(){
	// 	//console.log("GET USERS");

	// 	$http({method:'GET', url:'/users'
	// 	}).then(function(response){
	// 		controller.userList = response.data;
	// 	})
	// }
	// this.getUsers();

	this.editMuseumEnabled = false;
	this.editingMuseum = {};

	this.getMuseums = function(){
		console.log("GET MUSEUM");

		$http({method:'GET', url:'/museums'
		}).then(function(response){
			controller.museumList = response.data;
		});
	};
	this.getMuseums();

	this.addMuseums = function(){
		//console.log('User data: ', this.userdata);

		$http({method:'POST', url:'/museums', data: this.museumdata
		}).then(function(result){
			controller.getMuseums();
		});
	};


	this.deleteMuseum = function(museum){
	 	console.log('delete clicked')
	 	this.museumId = museum._id;
	 	console.log(museum)
		$http({
			method: "DELETE",
			url:'/museums/' + controller.museumId,
			data: museum
		})
		.then (
			function(response) {
					controller.getMuseums();
			}, 
			function(err){
				console.log(err)
			}
		)
	 };

	 this.editMuseum = function(museum) {
	 	this.editMuseumEnabled = true;
	 	this.editingMuseum = museum;
	 	this.getMuseums();
	 }

	 this.updateMuseum = function(museum) {
	 	console.log('update clicked')
	 	this.editMuseumEnabled = false;
	 	this.editingMuseum = {};
	 	$http({
			method: "PUT",
			url:'/museums/',
			data: museum
		})
		.then (
			function(response) {
					controller.getMuseums();
			}, 
			function(err){
				console.log(err)
			}
		)
	 }
}]) //->Ends MainController
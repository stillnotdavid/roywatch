angular.module('roywatch', [])
.controller('indexController', ['$http', function(http) {
    var vm = this;
    //for local dev
    vm.stats = {"mcdavid":{"gamesPlayed":{"display":"games played","stat":10},"goals":{"display":"goals","stat":5},"assists":{"display":"assists","stat":5},"points":{"display":"points","stat":10},"shots":{"display":"shots on goal","stat":20},"shootingPercentage":{"display":"shooting percentage","stat":25},"plusMinus":{"display":"plus / minus","stat":-3},"ppg":{"display":"power play goals","stat":2},"shg":{"display":"short handed goals","stat":0},"gwg":{"display":"game winning goals","stat":1}},"eichel":{"gamesPlayed":{"display":"games played","stat":9},"goals":{"display":"goals","stat":3},"assists":{"display":"assists","stat":0},"points":{"display":"points","stat":3},"shots":{"display":"shots on goal","stat":27},"shootingPercentage":{"display":"shooting percentage","stat":11.1111},"plusMinus":{"display":"plus / minus","stat":-6},"ppg":{"display":"power play goals","stat":2},"shg":{"display":"short handed goals","stat":0},"gwg":{"display":"game winning goals","stat":1}}};
    /*http.get('/stats', function(data) {
        vm.stats = data;
    });*/
}]);
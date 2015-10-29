angular.module('roywatch', [])
.controller('indexController', ['$http', function(http) {
    var vm = this;
    http.get('/stats').then(function(data){
        vm.stats = data.data;
        $(".loader").fadeOut("slow");
        $('.number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 700,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
}]);
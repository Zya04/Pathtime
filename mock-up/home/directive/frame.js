angular.module('appPathtime').directive('frame', function(){
    return{
            restrict: 'EA',
            link: function (scope, element) {
                var url = '././assets/frames/eiffelTower.jpg';
                element.replaceWith('<img src="'+url+'" class="eiffelTower">');
            }
    }
})
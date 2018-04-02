(function() {
    'use strict';

    angular.module('app').component('home', {
        controller: HomeController,
        controllerAs: 'home_',
        templateUrl: 'app/home/home.view.html',
    });

    /** @ngInject */
    function HomeController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
        var _this = this;

        // Scope variables go here:
        // _this.variable = 'value';

        _this.showSampleConstant = showSampleConstant;
        _this.switchLanguage = switchLanguage;

        activate();

        function activate() {
            $log.debug('home activated');
        }

        function showSampleConstant() {
            alert(SAMPLE_CONSTANT);
        }

        function switchLanguage(language) {
            $translate.use(language);
        }
    }
}());

(function (angular) {

    angular.module('app').controller('Home', [
        '$scope',
        Home])

    function Home($scope) {
        var vm = this

        vm.mathBirthdayDays = 'your day-old...'
        vm.mathBirthday = 'your math birthday...'

        vm.birthDateOptions = {
            format: 'dd MMMM yyyy',
            change: calculateMathBirthday,
            max: new Date()
        }

        function calculateMathBirthday() {
            var birthDate = moment(this.value())
            var currentDate = moment()

            var nDay = 1
            var mathBirthday = null

            do {
                var tempBirthDate = moment(this.value())
                var mathBirthdayDays = Math.pow(10, nDay)
                mathBirthday = tempBirthDate.add(mathBirthdayDays, 'days')
                nDay = nDay + 1
            }
            while (mathBirthday.isBefore(currentDate))

            vm.mathBirthdayDays = 'Your ' + mathBirthdayDays + '-day-old on:'

            if (currentDate.diff(birthDate, 'years', true) >= 2) {
                vm.mathBirthday = mathBirthday.format('DD MMMM YYYY')
            }
            else {
                vm.mathBirthday = mathBirthday.diff(currentDate, 'weeks') + ' week(s)'
            }


            $scope.$apply()
        }
    }

})(angular)
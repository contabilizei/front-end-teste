function ControllerLucroPresumido($scope, $http) {
	$scope.items = [];
    $scope.CalcularImpostosLucroPresumido = function() {
    $http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/imposto/lucropresumido?faturamento='+($scope.faturamentoLP == null ? '' : $scope.faturamentoLP)+'&folha='+($scope.folhaLP == null ? '' : $scope.folhaLP))
        .success(function(data) {
            $scope.items = data;
        })
		.error(function(data, status) {
                alert("Erro ao chamar o webservice de imposto lucro presumido.");
        });
    };
}

function ControllerSimplesNacional($scope, $http) {
	$scope.items = [];
    $scope.CalcularImpostosSimplesNacional = function() {
    $http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/imposto/simples?fatanterior='+($scope.fatanteriorSN == null ? '' : $scope.fatanteriorSN)+'&faturamento='+($scope.faturamentoSN == null ? '' : $scope.faturamentoSN)+
	'&folha='+($scope.folhaSN == null ? '' : $scope.folhaSN)+'&codatividade='+($scope.codatividadeSN == null ? '' : $scope.codatividadeSN))
        .success(function(data) {
            $scope.items = data;
        })
		.error(function(data, status) {
                alert("Erro ao chamar o webservice de imposto simples.");
        });
    };
}
 
function ControllerListarAtividades($scope, $http) {
	$scope.items = [];
	$scope.ListarAtividades = function() {
    $http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/atividades')
        .success(function(data) {
            $scope.items = data;
        })
		.error(function(data, status) {
                alert("Erro ao chamar o webservice de listar as atividades.");
        });
	};
}
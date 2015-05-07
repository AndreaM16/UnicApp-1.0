myApp.controller("myNewsController2", ["$scope","$http",function($scope,$http){

  $scope.initGetRequestMyNews2 = function(){
   $http.get('data/otherPages/news/myNew2JSON.json').success(function(data){

    $scope.data=data;
  })
 }

}]);

/*premio destinato a finanziare progetti di \
                                    ricerca innovativi nell\’ambito dell\’ICT con lo scopo dichiarato di sostenere il lavoro \
                                    di eccellenti ricercatori delle migliori università del mondo”. E’ la prima volta che il \
                                    prestigioso riconoscimento – una somma di 50mila dollari - viene assegnato ad un ricercatore sardo. \
                                    Selezionato tra 808 progetti provenienti da 55 nazioni, il progetto \“Exploiting Structured Queries \
                                    in Question Answering and Search\”, presentato in collaborazione da Atzori e da Carlo Zaniolo, \
                                    professore della University of California in Los Angeles (UCLA), è uno dei 122 selezionati tra \
                                    cui soltanto 2 provengono da università italiane (UNICA e POLIMI). In passato, il premio è stato \
                                    conferito a ricercatori di 13 atenei italiani, di cui al sud solo a ricercatori di Napoli e Bari. \
                                    Grazie ai fondi della Regione Sardegna, il Professor Zaniolo è stato visiting professor al Dipartimento \
                                    di Matematica e Informatica nel 2011 e nel 2012. Il progetto prende spunto dalle attività sviluppate \
                                    nell\’ambito del progetto DENIS, coordinato dalla professoressa Nicoletta Dessì e \
                                    finanziato dalla legge 7.*/
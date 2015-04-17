  myApp.controller('MainController', function($scope){

          $scope.myTitle='UnicApp';

          $scope.metas=[
                {name:'description', content:'WebApp inspired on Appdoits UnicApp made by me'},
                {name:'viewport', content:'width=device-width, initial-scale=1'}
          ];

          $scope.items=[
                {link:'#/', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/home.png'+')', title:'Benvenuto'},
                {link:'#news', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/news.png'+')', title:'Ultime Notizie'},
                {link:'#report', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/report.png'+')', title:'Segnalazioni'},
                {link:'#info', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/info.png'+')', title:'Info & Contatti'},
                {link:'#courses', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/courses.png'+')', title:'Corsi'},
                {link:'#booking', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/booking.png'+')', title:'Prenotazione'},
                {link:'#calendar', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/calendar.png'+')', title:'Calendario & Attività'},
                {link:'#events', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/events.png'+')', title:'Eventi'},
                {link:'#documents', imgClass:'mnImg', backgroundImage:'background-image:url('+'images/docu.png'+')', title:'Documenti'}
          ];

          $scope.myText='Benvenuto';

          /*
          $scope.slides=[
                {swipe:'swiper-slide', script:'swipers()', backgroundImage:'background-image:url('+'images/img1.jpg'+')'},
                {swipe:'swiper-slide', script:'swipers()', backgroundImage:'background-image:url('+'images/img2.jpg'+')'},
                {swipe:'swiper-slide', script:'swipers()', backgroundImage:'background-image:url('+'images/img3.jpg'+')'}
          ];*/

          $scope.textBox1='Quest App ha lo scopo di riportare notizie relative all Università di Cagliari, fare segnalazioni, conoscere contatti utili e visualizzare i corsi disponibili.';
          
          $scope.textBox2='Puoi anche visitare:';

          $scope.myLink='http://www.unica.it/';

          $scope.myButton='mainBtn btn-lg btn-default active';

          $scope.myStyle='font-size:40%; vertical-align: middle;';
        
  });
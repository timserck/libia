$( document ).ready(function() {

    /* COUNTDOWN POUR LA REDIRECTION SUR L'ACCUEIL */

    function countdown(counter) {
        var count = counter;
        counter = setInterval(timer, 1000);

        function timer(){
            $(".counter").text(count);
            count=count-1;
            if (count < 0) {
                clearInterval(counter);
                location.reload(true);
            }

        };
    }

    /* PANEL CONTENT */

    function panelContent(page) {
        var currentPanel = $(page);
        $(".panel-scan").hide();
        setTimeout(function() {
            currentPanel.fadeIn(400);
        }, 220);
    }


    /* GESTION DU SLIDE ENTRE LES PAGES */

    var i = 0;
    var process = 0;
    var headerTitle = $(".header-title");
    var panel = $(".panel");
    var panelActive = false;
    var lastPanelActive = false;
    var panelName;

    var panelFooter = $(".caution");
    var panelTitle = $(".titre-panel");
    var panelParagraph1 = $(".panel-paragraph1");
    var panelParagraph2 = $(".panel-paragraph2");

    function panelShow(){
        panel.animate({"left": "0"},400,"easeInQuint");
        panelActive = true;
    }
    
    function panelHide(){
        panel.animate({"left": "-40%"},400,"easeInQuint");
        panelActive = false;
    }    

    if(i==0) {
            $(".header-show").css("display","none");
            panelActive = false;
        }
        else {
            $(".header-show").css("display","block");
        }  

    function slide(event, i) {
        event.preventDefault();            
        nbrToskip = i*-100;
        $( ".page-container" ).animate({
            "left": nbrToskip+"%"
            },400,"easeInQuint"
        );

        if(i==0) {
            panelHide();
            panelActive = false;
            $(".header-show").css("display","none");
            headerTitle.text("Libia.vélo");
        }
        else {
            $(".header-show").css("display","block");
        };

        switch(process){

            case 1:
                switch (i){
                    case 1:
                        panelShow();
                        panelActive = true;
                        headerTitle.text("Choix de la formule");

                        var panelName = ".panel-louer";
                        panelContent(panelName);
                        panelFooter.show();

                        var panelMapActive1 = false;
                        case1 = true;
                        case2 = false;
                        case3 = false;
                        case4 = false;
                        case5 = false;
                        case6 = false;
                        $( ".btn-map" ).click(function(event) {
                            if(panelMapActive1 == true && case1 == 1) {
                                panelContent(panelName);
                                panelFooter.slideDown();
                                panelMapActive1 = false;
                            }
                            else if(panelMapActive1 == false && case1 == true) {
                                panelContent(".panel-map");
                                panelFooter.slideUp();
                                panelMapActive1 = true;
                            }
                        });
                    
                        break;

                    case 2:
                        headerTitle.text("Achat du ticket");

                        var panelName = ".panel-achat";
                        panelContent(panelName);
                        panelFooter.slideDown();
                        
                        var panelMapActive2 = false;
                        case1 = false;
                        case2 = true;
                        case3 = false;
                        case4 = false;
                        case5 = false;
                        case6 = false;
                        $( ".btn-map" ).click(function(event) {
                            if(panelMapActive2 == true && case2 == true) {
                                panelContent(panelName);
                                panelFooter.slideDown();
                                panelMapActive2 = false;
                            }
                            else if(panelMapActive2 == false && case2 == true) {
                                panelContent(".panel-map");
                                panelFooter.slideUp();
                                panelMapActive2 = true;
                            }
                        });

                        break;
                    case 3:
                        headerTitle.text("Choix du vélo");

                        var panelName = ".panel-choix";
                        panelContent(panelName);
                        panelFooter.slideUp();

                        var panelMapActive3 = false;
                        case1 = false;
                        case2 = false;
                        case3 = true;
                        case4 = false;
                        case5 = false;
                        case6 = false;
                        $( ".btn-map" ).click(function(event) {
                            if(panelMapActive3 == true && case3 == true) {
                                panelContent(panelName);
                                panelMapActive3 = false;
                            }
                            else if(panelMapActive3 == false && case3 == true) {
                                panelContent(".panel-map");
                                panelMapActive3 = true;
                            }
                        });

                        break;
                    case 4:
                        panelActive = false;
                        panelHide();
                        $(".header-back").css("display","none");
                        headerTitle.text("Bonne route !");
                        countdown(10);
                        $( ".btn-map" ).click(function(event) {
                            if(lastPanelActive == false) {
                                panelShow();
                                lastPanelActive = true;
                            }
                            else {
                                if(lastPanelActive == true) {
                                    panelHide();
                                    lastPanelActive = false;
                                }
                            }
                        });
                        break;
            }
            break;

            case 2:
                switch (i){
                    case 1:
                        panelShow();
                        panelActive = true;
                        headerTitle.text("Connexion");

                        var panelName = ".panel-connexion";
                        panelContent(panelName);
                        panelFooter.hide();

                        var panelMapActive4 = false;
                        case1 = false;
                        case2 = false;
                        case3 = false;
                        case4 = true;
                        case5 = false;
                        case6 = false;
                        $( ".btn-map" ).click(function(event) {
                            if(panelMapActive4 == true && case4 == true) {
                                panelContent(panelName);
                                panelMapActive4 = false;
                            }
                            else if(panelMapActive4 == false && case4 == true) {
                                panelContent(".panel-map");
                                panelMapActive4 = true;
                            }
                        });
                        break;

                    case 2:
                        headerTitle.text("Choix du vélo");

                        var panelName = ".panel-choix";
                        panelContent(panelName);
                        panelParagraph2.hide();

                        var panelMapActive5 = false;
                        case1 = false;
                        case2 = false;
                        case3 = false;
                        case4 = false;
                        case5 = true;
                        case6 = false;
                        $( ".btn-map" ).click(function(event) {
                            if(panelMapActive5 == true && case5 == true) {
                                panelContent(panelName);
                                panelMapActive5 = false;
                            }
                            else if(panelMapActive5 == false && case5 == true) {
                                panelContent(".panel-map");
                                panelMapActive5 = true;
                            }
                        });
                        break;

                    case 3:
                        panelHide();
                        panelActive = false;
                        $(".header-back").css("display","none");
                        headerTitle.text("Bonne route !");
                        countdown(10);
                        $( ".btn-map" ).click(function(event) {
                            if(lastPanelActive == false) {
                                panelShow();
                                lastPanelActive = true;
                            }
                            else {
                                if(lastPanelActive == true) {
                                    panelHide();
                                    lastPanelActive = false;
                                }
                            }
                        });
                        break;
            }
            break;

            case 3:
                switch (i){
                        case 1:
                            panelShow();
                            panelActive = true;
                            headerTitle.text("Choix du vélo");

                            var panelName = ".panel-choix";
                            panelContent(panelName);
                            panelFooter.hide();

                            var panelMapActive6 = false;
                            case1 = false;
                            case2 = false;
                            case3 = false;
                            case4 = false;
                            case5 = false;
                            case6 = true;
                            $( ".btn-map" ).click(function(event) {
                                if(panelMapActive6 == true && case6 == true) {
                                    panelContent(panelName);
                                    panelMapActive6 = false;
                                }
                                else if(panelMapActive6 == false && case6 == true) {
                                    panelContent(".panel-map");
                                    panelMapActive6 = true;
                                }
                            });
                            break;

                        case 2:
                            panelHide();
                            panelActive = false;
                            $(".header-back").css("display","none");
                            headerTitle.text("Bonne route !");
                            countdown(10);
                            $( ".btn-map" ).click(function(event) {
                                if(lastPanelActive == false) {
                                    panelShow();
                                    lastPanelActive = true;
                                }
                                else {
                                    if(lastPanelActive == true) {
                                        panelFooter.hide();

                                        panelHide();
                                        lastPanelActive = false;
                                    }
                                }
                            });
                            break;
            }
            break;

        }
    };


    $(".btn-process1").click(function process_1(event) {
        process = 1;
        event.preventDefault();
        $(".process2").css("display", "none");
        $(".process3").css("display", "none");
        $(".process1").css("display", "block");
    });


    $(".btn-process2").click(function process_2(event) {
        process = 2;
        event.preventDefault();
        $(".process1").css("display", "none");
        $(".process3").css("display", "none");
        $(".process2").css("display", "block");
    });

    $(".btn-process3").click(function process_3(event) {
        process = 3;
        event.preventDefault();
        $(".process1").css("display", "none");
        $(".process2").css("display", "none");
        $(".process3").css("display", "block");
    });

    $( ".slide-next" ).click( function() { i++; slide(event, i)});


    $( ".slide-prev" ).click( function() { i--; slide(event, i)});


    /* AFFICHAGE HEADER MAP */

    $( ".btn-map" ).click(function map(event) {
        event.preventDefault();
        $(this).toggleClass( "mapActive");
        if ( $(this).hasClass("mapActive") ) {
            $( ".page-map" ).animate({"bottom":"0%"},500 ,"easeInQuint");                            
        } else {
            $(".page-map").animate({"bottom":"100%"},500 ,"easeInQuint");
        };
        $(".header-menu").fadeToggle(400);
        $(".img-map").toggleClass("opacity");
        if(panelActive == false) {
            panelShow();
            panelActive = true;
            panelContent(".panel-map");
            panelFooter.hide();
        }
        else {
            if(i==0) {
                panelContent(".panel-map");
                panelHide();
            }
        }
    });


    /* GESTION DE LA DATE */

    var moisLettre = new Array("janvier", "février", "mars", 
    "avril", "mai", "juin", "juillet", "Aout", "Septembre", 
    "octobre", "novembre", "décembre");

    var jourLettre = new Array("Dimanche", "Lundi", "Mardi",
    "Mercredi", "Jeudi", "Vendredi", "Samedi");


    function displayDate(i){
        var oldDate  = new Date();

        var date = new Date(oldDate);
        date.setDate(oldDate.getDate()+i);

        var minutes = date.getMinutes();

        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        var heure = date.getHours() + "h" + minutes;
        var jour = date.getDate();


        var jourL = jourLettre[date.getDay()];
        var mois = moisLettre[date.getMonth()];


        var fullDate = jourL + " " + jour + " " + mois + ", " + heure;

        $(".horaire").text(fullDate);

    }

    displayDate(1);

    /* GESTION DE LA FORMULE + DATE */

    $(".bouton-formule").click(function formule(event){
        event.preventDefault();
        $(".bouton-formule").removeClass('bouton-actif-transparent');
        $(this).addClass('bouton-actif-transparent');

        var formule = $(".bouton-actif-transparent").text();

        if(formule == "1 semaine/ 4€"){
            $(".duree-formule").text("1 semaine : 4€");
            displayDate(7);
        }
        else {
            $(".duree-formule").text("1 jour : 1€");
            displayDate(1);
        }
    });


    /* CHOIX DU VELO */
    
    $(".velo-dispo").click(function choixVelo(i) {
        var number = $(this).text();
        if(number < 10) {
            number = "0" + number;
        }
        $(".velo-choisi").text(number);
    });

    $(".case-content").click(function nope(event){
        event.preventDefault();
    });


    /* REFRESH LA BORNE SUR L'ACCUEIL */

    $(".countdown").click(function refresh(event) {
        event.preventDefault();
        location.reload(true);
    });

})
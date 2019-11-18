class Game extends Phaser.Scene{

    constructor(){
        super("GameClass");

        

        this.mapArray = [1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,10 ,11 ,12 ,13 ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                        1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,30 ,31 ,32 ,33 ,34 ,35 ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                    1  ,1  ,1  ,1  ,1  ,1  ,49 ,50 ,51 ,52 ,53 ,54 ,55 ,56 ,57 ,58 ,1  ,1  ,1  ,1  ,1  ,
                    1  ,1  ,1  ,1  ,68 ,69 ,70 ,71 ,72 ,73 ,74 ,75 ,76 ,77 ,78 ,79 ,80 ,81 ,1  ,1  ,1  ,
                    1  ,1  ,87 ,88 ,89 ,90 ,91 ,92 ,93 ,94 ,95 ,96 ,97 ,98 ,99 ,100,101,102,103,104,1  ,
                    1  ,107,108,109,110,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,
                    127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,
                    1  ,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,
                    169,170,171,172,173,174,175,176,178,1  ,180,181,182,183,184,185,186,187,188,189,
                    190,191,192,193,194,195,196,197,198,199,1  ,1  ,202,203,204,205,206,207,208,209,  1,
                    1  ,212,213,214,215,1  ,217,218,219,220,221,222,223,224,225,226,227,228,1  ,1  ,  1,
                    1  ,1  ,1  ,235,236,237,238,1  ,240,241,242,243,244,245,246,247,1  ,1  ,1  ,1  ,  1,
                    1  ,1  ,1  ,1  ,257,258,259,26 ,261,262,263,264,265,266,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                    1  ,1  ,1  ,1  ,1  ,1  ,280,281,282,283,284,285,286,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                    295,296,297,298,299,300,301,302,303,304,305,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ];
    }
    preload(){
    }



    create(){
        this.map = this.add.container(0,0);
        this.ini = this.add.container(0,0);
        this.intrucciones = this.add.container(0,0);
        this.seccion = this.add.container(0,0);
        this.final = this.add.container(0,0);

        
        this.hud = this.add.container(0,0);
        var maptilewidth = 309;
        var mapscolumns = 20;
        var mapsLines  = 15;
        var columscount = 0;
        var linesCount = 0;
        var mapwidth = maptilewidth*mapscolumns;
        var mapHeight = maptilewidth*mapsLines;

        for(var i = 0;i<this.mapArray.length;i++){
            if(columscount > mapscolumns){
                columscount = 0;
                linesCount ++;
            }
            this.map.add(this.add.image(maptilewidth*columscount,maptilewidth*linesCount,'mapa'+i));
            columscount ++;
        }

        this.currentIndex = 0;
        this.currentAnswer = 0;
        this.r1Selected = false;
        this.r2Selected = false;
        this.r3Selected = false;
        this.r4Selected = false;
        this.r5Selected = false;
        this.currenPoints = 0;
        this.totalPoints = 0;

        //Edificios
        /*this.edificio1 = this.add.image(1453,507,'edificio0').setOrigin(0,0);
        this.edificio2 = this.add.image(3897,2216,'edificio1').setOrigin(0,0);
        this.edificio3 = this.add.image(2479,2225,'edificio2').setOrigin(0,0);
        this.edificio4 = this.add.image(4308,1680,'edificio3').setOrigin(0,0);
        this.edificio5 = this.add.image(1252,2057,'edificio4').setOrigin(0,0);
        this.edificio6 = this.add.image(316,2214,'edificio5').setOrigin(0,0);
        this.edificio7 = this.add.image(883,2535,'edificio5').setOrigin(0,0);
        this.edificio8 = this.add.image(1049,1452,'edificio6').setOrigin(0,0);
        this.edificio9 = this.add.image(3313,753,'edificio7').setOrigin(0,0);
        this.edificio10 = this.add.image(2436,760,'edificio8').setOrigin(0,0);
        this.edificio11 = this.add.image(3611,399,'edificio9').setOrigin(0,0);
        this.edificio12 = this.add.image(1985,1613,'edificio10').setOrigin(0,0);
        this.edificio13 = this.add.image(3494,1945,'edificio11').setOrigin(0,0);*/

        ///props
        /*this.prop0 = this.add.image(2730,3098,'prop0').setOrigin(0,0);
        this.prop1 = this.add.image(2738,2074,'prop1').setOrigin(0,0);
        this.prop2 = this.add.image(4319,2530,'prop2').setOrigin(0,0);
        this.prop3 = this.add.image(2749,4063,'prop3').setOrigin(0,0);
        this.prop4 = this.add.image(2806,3863,'prop4').setOrigin(0,0);
        this.prop5 = this.add.image(2078,2206,'prop5').setOrigin(0,0);
        this.prop6 = this.add.image(2006,2294,'prop6').setOrigin(0,0);
        this.prop7 = this.add.image(3540,2010,'prop7').setOrigin(0,0);
        this.prop8 = this.add.image(3517,2058,'prop8').setOrigin(0,0);
        this.prop9 = this.add.image(5120,1512,'prop10').setOrigin(0,0);
        this.prop10 = this.add.image(5093,1247,'prop11').setOrigin(0,0);
        this.prop11 = this.add.image(4940,796,'prop12').setOrigin(0,0);
        this.prop12 = this.add.image(3052,110,'prop13').setOrigin(0,0);
        this.prop13 = this.add.image(4966,1486,'prop13').setOrigin(0,0);
        this.prop14 = this.add.image(4663,1072,'prop14').setOrigin(0,0);
        this.prop15 = this.add.image(3072,503,'prop14').setOrigin(0,0);
        this.prop16 = this.add.image(3118,1311,'prop15').setOrigin(0,0);
        this.prop17 = this.add.image(3112,1115,'prop16').setOrigin(0,0);
        this.prop18 = this.add.image(2193,2714,'prop17').setOrigin(0,0);
        this.prop19 = this.add.image(2453,2844,'prop19').setOrigin(0,0);
        this.prop20 = this.add.image(2754,2607,'prop20').setOrigin(0,0);
        this.prop21 = this.add.image(1759,2034,'prop9').setOrigin(0,0);*/

        this.flag1 = this.add.image(4753,1152,'canino').setOrigin(0,0);
        this.flag1.setInteractive();
        this.flag1.on('pointerup', () => {this.alarma1.play()});
        this.flag1.on('pointerup', () => { this. showPregunta(0); })
        this.flag2 = this.add.image(3156,2667,'agente').setOrigin(0,0);
        this.flag2.setInteractive();
        this.flag2.on('pointerup', () => {this.alarma1.play()});
        this.flag2.on('pointerup', () => { this. showPregunta(1); })
        this.flag3 = this.add.image(700,2287,'carabineros').setOrigin(0,0);
        this.flag3.setInteractive();
        this.flag3.on('pointerup', () => {this.alarma1.play()});
        this.flag3.on('pointerup', () => { this. showPregunta(2); })
        this.flag4 = this.add.image(1994,1168,'explosivo').setOrigin(0,0);
        this.flag4.setInteractive();
        this.flag4.on('pointerup', () => {this.alarma1.play()});
        this.flag4.on('pointerup', () => { this. showPregunta(3); })
        this.flag5 = this.add.image(2000,2170,'esmad').setOrigin(0,0);
        this.flag5.setInteractive();
        this.flag5.on('pointerup', () => {this.alarma1.play()});
        this.flag5.on('pointerup', () => { this. showPregunta(4); })
        this.flag6 = this.add.image(4000,2000,'gaula').setOrigin(0,0);
        this.flag6.setInteractive();
        this.flag6.on('pointerup', () => {this.alarma1.play()});
        this.flag6.on('pointerup', () => { this. showPregunta(5); })
        this.flag7 = this.add.image(5500,1950,'polfa').setOrigin(0,0);
        this.flag7.setInteractive();
        this.flag7.on('pointerup', () => {this.alarma1.play()});
        this.flag7.on('pointerup', () => { this. showPregunta(6); })
        this.flag8 = this.add.image(898,1835,'ponalsar').setOrigin(0,0);
        this.flag8.setInteractive();
        this.flag8.on('pointerup', () => {this.alarma1.play()});
        this.flag8.on('pointerup', () => { this. showPregunta(7); })
        this.flag9 = this.add.image(2599,3296,'transito').setOrigin(0,0);
        this.flag9.setInteractive();
        this.flag9.on('pointerup', () => {this.alarma1.play()});
        this.flag9.on('pointerup', () => { this. showPregunta(8); })
        this.flag10 = this.add.image(3610,1766,'copes').setOrigin(0,0);
        this.flag10.setInteractive();
        this.flag10.on('pointerup', () => {this.alarma1.play()});
        this.flag10.on('pointerup', () => { this. showPregunta(9); })
        this.flagArray = [this.flag1,this.flag2,this.flag3,this.flag4,this.flag5,this.flag6,this.flag7,this.flag8,this.flag9,this.flag10];
        //this.seccionArray =[this.canino,this.agente,this.carabineros,this.explosivo,this.esmad,this.gaula,this.polfa,this.ponalsar,this.transito,this.copes];

        console.log(this.flagArray[0]);

        this.control1 = this.add.image(4713,1192,'controlada').setOrigin(0,0);
        this.control2 = this.add.image(3156,2667,'controlada').setOrigin(0,0);
        this.control3 = this.add.image(997,2787,'controlada').setOrigin(0,0);
        this.control4 = this.add.image(1994,1168,'controlada').setOrigin(0,0);
        this.control5 = this.add.image(1971,2170,'controlada').setOrigin(0,0);
        this.control6 = this.add.image(4452,2391,'controlada').setOrigin(0,0);
        this.control7 = this.add.image(2522,3829,'controlada').setOrigin(0,0);
        this.control8 = this.add.image(898,1835,'controlada').setOrigin(0,0);
        this.control9 = this.add.image(2599,3296,'controlada').setOrigin(0,0);
        this.control10 = this.add.image(3640,1766,'controlada').setOrigin(0,0);

        this.controlArray = [this.control1,this.control2,this.control3,this.control4,this.control5,this.control6,this.control7,this.control8,this.control9,this.control10];

       /* this.map.add(this.edificio1);
        this.map.add(this.prop5);
        this.map.add(this.prop6);
        this.map.add(this.prop7);
        this.map.add(this.prop8);
        this.map.add(this.edificio8);
        this.map.add(this.edificio2);
        this.map.add(this.edificio3);
        this.map.add(this.edificio4);
        this.map.add(this.edificio5);
        this.map.add(this.edificio6);
        this.map.add(this.edificio7);
        this.map.add(this.edificio9);
        this.map.add(this.edificio10);
        this.map.add(this.edificio11);
        this.map.add(this.edificio12);
        this.map.add(this.edificio13);
        this.map.add(this.prop0);
        this.map.add(this.prop1);
        this.map.add(this.prop2);
        this.map.add(this.prop4);
        this.map.add(this.prop3);
        this.map.add(this.prop9);
        this.map.add(this.prop10);
        this.map.add(this.prop11);
        this.map.add(this.prop12);
        this.map.add(this.prop13);
        this.map.add(this.prop14);
        this.map.add(this.prop15);
        this.map.add(this.prop16);
        this.map.add(this.prop17);
        this.map.add(this.prop18);
        this.map.add(this.prop19);
        this.map.add(this.prop20);
        this.map.add(this.prop21);*/

        this.createAnimation();

        this.animaEsmadLoop = this.add.sprite(2180,2450,'esmad_loop','1_ESMAD_LOOP_00001').play('loop_esmad');
        this.map.add(this.animaEsmadLoop);

        this.animaEsmadBien = this.add.sprite(2180,2450,'esmad_bien','1_ESMAD_BIEN_00001').play('esmad_bien');
        this.map.add(this.animaEsmadBien);

        this.animaAntiexpLoop = this.add.sprite(2150,1450,'antiexpl_loop','2_ANTIEXPL_LOOP_00001').play('antiexpl_loop');
        this.map.add(this.animaAntiexpLoop);

        this.animaAntiexpBien = this.add.sprite(2150,1450,'antiexpl_bien','2_ANTIEXPL_BIEN_00001').play('antiexpl_bien');
        this.map.add(this.animaAntiexpBien);

        this.animaAntiexpMal = this.add.sprite(2150,1450,'antiexpl_mal','2_ANTIEXPL_MAL_00001').play('antiexpl_mal');
        this.map.add(this.animaAntiexpMal);
        
        this.animaGaulaLoop = this.add.sprite(4190,2477,'gaula_loop','3_Gaula_LOOP_00001').play('gaula_loop');
        this.map.add(this.animaGaulaLoop);

        this.animaGaulaBien = this.add.sprite(4190,2477,'gaula_bien','3_Gaula_BIEN_00001').play('gaula_bien');
        this.map.add(this.animaGaulaBien);

        this.animaGaulaMal = this.add.sprite(4190,2477,'gaula_mal','3_Gaula_MAL_00001').play('gaula_mal');
        this.map.add(this.animaGaulaMal);

        this.animaCopesLoop = this.add.sprite(3775,2200,'copes_loop','01_COPES_LOOP_00001').play('copes_loop');
        this.map.add(this.animaCopesLoop);

        this.animaCopesBueno = this.add.sprite(3775,2200,'copes_bueno','01_COPES_BUENO_00001').play('copes_bueno');
        this.map.add(this.animaCopesBueno);

        this.animaCopesMalo = this.add.sprite(3775,2200,'copes_malo','01_COPES_MALO_00001').play('copes_malo');
        this.map.add(this.animaCopesMalo);

        this.animaCarabinerosLoop = this.add.sprite(1633,2800,'carabineros_loop','06_CARABINEROS_LOOP_00001').play('carabineros_loop');
        this.map.add(this.animaCarabinerosLoop);

        this.animaCarabinerosMal = this.add.sprite(1630,2815,'carabineros_mal','06_CARABINEROS_MAL_00001').play('carabineros_mal');
        this.map.add(this.animaCarabinerosMal);

        this.animaCarabinerosBien = this.add.sprite(1630,2815,'carabineros_bien','06_CARABINEROS_BIEN_00001').play('carabineros_bien');
        this.map.add(this.animaCarabinerosBien);
        
        //this.animaTransitoLoop = this.add.sprite(3475,3300,'transito_loop','07_TRANSITO_LOOP_00001').play('transito_loop');
        //this.map.add(this.animaTransitoLoop);

        //this.animaTransitoBien = this.add.sprite(3475,3300,'transito_bien','07_TRANSITO_BIEN_corte_00001').play('transito_bien');
        //this.map.add(this.animaTransitoBien);

        //this.animaTransitoMal = this.add.sprite(3475,3300,'transito_mal','07_TRANSITO_MAL_00001').play('transito_mal');
        //this.map.add(this.animaTransitoMal);

        this.animaPolfaBueno = this.add.sprite(6200,2000,'polfa_bueno','08_POLFA_Bueno_00001').play('polfa_bueno');
        this.map.add(this.animaPolfaBueno);

        /*this.animaPolfaLoop = this.add.sprite(6200,2000,'polfa_bueno','08_POLFA_Loop_00001').play('polfa_loop');
        this.map.add(this.animaPolfaLoop);*/

        this.animaPerritoLoop = this.add.sprite(5040,1400,'guia_loop','09_GUIA_PERRITO_LOOP_00001').play('guia_loop');
        this.map.add(this.animaPerritoLoop);

        this.animaPerritoBueno = this.add.sprite(5040,1400,'guia_bueno','09_GUIA_PERRITO_BUENO_00001').play('guia_bueno');
        this.map.add(this.animaPerritoBueno);

        this.animaPerritoMalo = this.add.sprite(5040,1400,'guia_malo','09_GUIA_PERRITO_MALO_00001').play('guia_malo');
        this.map.add(this.animaPerritoMalo);

        this.animaPonalsarBueno = this.add.sprite(980,2000,'ponalsar_bueno','05_PONALSAR_BUENO_00001').play('ponalsar_bueno');
        this.map.add(this.animaPonalsarBueno);

        /*this.animaPonalsarLoop = this.add.sprite(980,2000,'ponalsar_loop','05_PONALSAR_LOOP_00001').play('ponalsar_loop');
        this.map.add(this.animaPonalsarLoop);

        this.animaPonalsarMalo = this.add.sprite(980,2000,'ponalsar_malo','05_PONALSAR_MALO_00001').play('ponalsar_malo');
        this.map.add(this.animaPonalsarMalo);*/




        this.animaEsmadBien.visible = false;
        this.animaAntiexpBien.visible = false;
        this.animaAntiexpMal.visible = false;
        this.animaGaulaBien.visible = false;
        this.animaGaulaMal.visible = false;
        this.animaCopesBueno.visible = false;
        this.animaCopesMalo.visible = false;
        this.animaCarabinerosMal.visible = false;
        this.animaCarabinerosBien.visible = false;
        //this.animaTransitoBien.visible = false;
        //this.animaTransitoMal.visible = false;
        this.animaPerritoBueno.visible = false;
        this.animaPerritoMalo.visible = false;
        this.animaPonalsarBueno.visible = false;
        //this.animaPonalsarMalo.visible = false;

        this.personaje1 = this.add.image(1100,2200,'personaje1');
        this.personaje2 = this.add.image(3100,3700,'personaje2');
        this.personaje3 = this.add.image(380,2500,'personaje3');
        this.personaje4 = this.add.image(2600,2350,'personaje4');
        this.personaje5 = this.add.image(4000,3000,'personaje5');
        this.personaje6 = this.add.image(3080,3000,'personaje6');
        this.personaje7 = this.add.image(4200,2600,'personaje7');
        this.personaje8 = this.add.image(4130,1950,'personaje8');
        this.personaje9 = this.add.image(3000,2200,'personaje9');
        this.personaje10 = this.add.image(2370,2610,'personaje10');
        this.personaje11 = this.add.image(2800,3500,'personaje11');
        this.personaje12 = this.add.image(300,2500,'personaje12');
        this.personaje13 = this.add.image(900,2100,'personaje13');
        this.personaje14 = this.add.image(4900,2300,'personaje14');
        this.personaje15 = this.add.image(3250,3140,'personaje15');
        this.personaje16 = this.add.image(3500,1450,'personaje16');
        this.personaje17 = this.add.image(1500,1190,'personaje17');
        this.personaje18 = this.add.image(3280,3150,'personaje18');
        this.personaje19 = this.add.image(2400,2580,'personaje19');
        this.personaje20 = this.add.image(1500,3300,'personaje20');
        this.personaje21 = this.add.image(2950,1800,'personaje21');
        this.personaje22 = this.add.image(2950,2700,'personaje22');
        this.personaje23 = this.add.image(3500,2200,'personaje23');
        this.personaje24 = this.add.image(5500,2200,'personaje24');
        this.personaje25 = this.add.image(2450,1500,'personaje25');
        this.personaje26 = this.add.image(1550,3330,'personaje26');
        this.personaje27 = this.add.image(2270,2380,'personaje27');
        this.personaje28 = this.add.image(2400,2450,'personaje28');
        this.personaje29 = this.add.image(1450,3290,'personaje29');
        this.personaje30 = this.add.image(2800,3900,'personaje30');
        this.personaje31 = this.add.image(3800,1500,'personaje31');
        this.personaje32 = this.add.image(3770,1460,'personaje32');
        this.personaje33 = this.add.image(2950,1800,'personaje33');


        this.map.add(this.personaje1);
        this.map.add(this.personaje2);
        this.map.add(this.personaje3);
        this.map.add(this.personaje4);
        this.map.add(this.personaje5);
        this.map.add(this.personaje6);
        this.map.add(this.personaje7);
        this.map.add(this.personaje8);
        this.map.add(this.personaje9);
        this.map.add(this.personaje11);
        this.map.add(this.personaje12);
        this.map.add(this.personaje13);
        this.map.add(this.personaje14);
        this.map.add(this.personaje15);
        this.map.add(this.personaje16);
        this.map.add(this.personaje17);
        this.map.add(this.personaje18);
        this.map.add(this.personaje19);
        this.map.add(this.personaje20);
        this.map.add(this.personaje21);
        this.map.add(this.personaje10);
        this.map.add(this.personaje22);
        this.map.add(this.personaje23);
        this.map.add(this.personaje24);
        this.map.add(this.personaje25);
        this.map.add(this.personaje26);
        this.map.add(this.personaje27);
        this.map.add(this.personaje28);
        this.map.add(this.personaje29);
        this.map.add(this.personaje30);
        this.map.add(this.personaje31);
        this.map.add(this.personaje32);
        this.map.add(this.personaje33);
        this.map.add(this.flag1);
        this.map.add(this.flag2);
        this.map.add(this.flag3);
        this.map.add(this.flag4);
        this.map.add(this.flag5);
        this.map.add(this.flag6);
        this.map.add(this.flag7);
        this.map.add(this.flag8);
        this.map.add(this.flag9);
        this.map.add(this.flag10);

        this.map.add(this.control1);
        this.map.add(this.control2);
        this.map.add(this.control3);
        this.map.add(this.control4);
        this.map.add(this.control5);
        this.map.add(this.control6);
        this.map.add(this.control7);
        this.map.add(this.control8);
        this.map.add(this.control9);
        this.map.add(this.control10);

        //Sound

        var musicConfig = {
            mute: false,
            volumen: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0 
        }
        this.aeropuerto = this.sound.add('aeropuerto');
        this.alarma1 = this.sound.add('alarma');
        this.alerta = this.sound.add('alerta');
        this.protesta = this.sound.add('protesta');
        this.mal = this.sound.add('mal');
        this.bien = this.sound.add('bien');
        this.SoundVolver = this.sound.add('SoundVolver');

        //hud
        var hudBar = this.add.image(-15,-10,'barra').setOrigin(0,0);

        this.btBack = this.add.image(0,0,'Recurso20').setOrigin(0,0);
        this.btBack.setInteractive();
        this.btBack.on('pointerup', () => {this.SoundVolver.play()});

        this.SonidoFondo = this.sound.add('fondo');
        this.SoundOn = this.add.image(-12,150,'Recurso15').setOrigin(0,0);
        this.SoundOn.setInteractive();
        this.SoundOn.on('pointerup', () => {this.SoundOff;})
        this.SonidoFondo.play();
        this.SoundOff = this.add.image(-12,150,'Recurso12').setOrigin(0,0);
        this.SoundOff.setInteractive();
        this.SoundOff.on('pointerup', () => {this.SoundOn;})
        //this.help = this.add.image(-12,339,'Recurso11').setOrigin(0,0);
        this.pre = this.add.image(-12,920,'Recurso14').setOrigin(0,0);
        this.pre.setInteractive();
        this.pre.on('pointerup', () => {this.SoundVolver.play()});
        this.pre.on('pointerup', () => { window.location.href = "https://sinco.policia.gov.co/sitiopreinscripcion/ZonaPublica/InicioPre.aspx"; })

        console.log(this.btBack.width);


        this.hud.add(hudBar);
        this.hud.add(this.btBack);
        this.hud.add(this.add.image(this.btBack.width+7,7,'logo').setOrigin(0,0).setScale(0.07,0.07));
        this.hud.add(this.SoundOff);
        this.hud.add(this.SoundOn);
        //this.hud.add(this.help);
        this.hud.add(this.pre);


        //pantalla inicio

        var backGroundIni =  this.add.graphics();
        backGroundIni.fillStyle(0xffffff, 0.7);
        backGroundIni.fillRect(0, 0, 1920, 1080);

        

        this.buttonIni = this.add.image(1920/2,915,'Recurso16');
        this.buttonIni.setInteractive();
        this.buttonIni.on('pointerup', () => {this.SoundVolver.play()});
        this.buttonIni.on('pointerup', () => { this.instruccionesFn(); })


        this.ini.add(backGroundIni);
        this.ini.add(this.add.image(1920/2,1080/2,'Recurso17'));
        this.ini.add(this.buttonIni);

        //pantalla intrucciones

        var backGroundIns =  this.add.graphics();
        backGroundIns.fillStyle(0xffffff, 0.7);
        backGroundIns.fillRect(0, 0, 1920, 1080);

        var backGroundInstrucciones =  this.add.graphics();
        backGroundInstrucciones.fillStyle(0xffffff, 1);
        backGroundInstrucciones.fillRect(1920-863, 0, 863, 1080);

        this.buttonIns = this.add.image(1920-(863/2),965,'Recurso16');
        this.buttonIns.setInteractive();
        this.buttonIns.on('pointerup', () => {this.SoundVolver.play()});
        this.buttonIns.on('pointerup', () => { this.GameFn(); })

        this.intrucciones.add(backGroundIns);
        this.intrucciones.add(backGroundInstrucciones);
        this.intrucciones.add(this.add.image(1920-863,100,'Recurso21').setOrigin(0,0));
        this.intrucciones.add(this.add.image(1217,439,'Recurso10'));
        this.intrucciones.add(this.add.image(1217,620,'Recurso9'));
        this.intrucciones.add(this.add.image(1217,792,'Recurso8'));
        this.intrucciones.add(this.add.image(1317,390,'Recurso22').setOrigin(0,0));
        this.intrucciones.add(this.add.image(1317,554,'Recurso23').setOrigin(0,0));
        this.intrucciones.add(this.add.image(1317,734,'Recurso24').setOrigin(0,0));
        this.intrucciones.add(this.buttonIns);

        //Pantalla preguntas

        this.orderPreguntas();
        this.seccionArray =[this.canino,this.agente,this.carabineros,this.explosivo,this.esmad,this.gaula,this.polfa,this.ponalsar,this.transito,this.copes];
        this.numArray = ['n1','n2','n3','n4','n5']


        var backGroundPre =  this.add.graphics();
        backGroundPre.fillStyle(0xffffff, 0.7);
        backGroundPre.fillRect(0, 0, 1920, 1080);

        this.contPregunta = this.add.container(0,0);
        this.contInfo = this.add.container(0,0);
        this.contRes = this.add.container(0,0);
        this.resultado = this.add.container(0,0);


        this.pregunta = this.add.image(1090,0,this.seccionArray[0].pregunta).setOrigin(0,0);
        this.btInfo = this.add.image(1189,944,this.seccionArray[0].boton).setOrigin(0,0);
        this.btInfo.setInteractive();
        this.btInfo.on('pointerup', () => {this.SoundVolver.play()});
        this.btInfo.on('pointerup', () => { this.showInfo(); });
        this.btContinuar = this.add.image(1518,944,'continuar').setOrigin(0,0);
        this.btContinuar.setInteractive();
        this.btContinuar.on('pointerup', () => {this.SoundVolver.play()});
        this.btContinuar.on('pointerup', () => { this.showRes(); });
        this.btVolver = this.add.image(977,146,'volver').setOrigin(0,0);
        this.btVolver.setInteractive();
        this.btVolver.on('pointerup', () => {this.SoundVolver.play()});
        this.btVolver.on('pointerup', () => { this.hidePregunta(); });

        this.info = this.add.image(1090,0,this.seccionArray[0].info).setOrigin(0,0);
        this.btVolverInfo = this.add.image(977,146,'volver').setOrigin(0,0);
        this.btVolverInfo.setInteractive();
        this.btVolverInfo.on('pointerup', () => {this.SoundVolver.play()});
        this.btVolverInfo.on('pointerup', () => { this.hideInfo(); });

        this.fondo = this.add.image(1090,0,'fondo').setOrigin(0,0);
        this.p1 = this.add.image(1043,291,this.seccionArray[0].r1.imagen).setOrigin(0,0);
        this.p1.setInteractive();
        this.p1.on('pointerup', () => { this.Respuesta('r1'); });
        this.p2 = this.add.image(1043,418,this.seccionArray[0].r2.imagen).setOrigin(0,0);
        this.p2.setInteractive();
        this.p2.on('pointerup', () => { this.Respuesta('r2'); });
        this.p3 = this.add.image(1043,543,this.seccionArray[0].r3.imagen).setOrigin(0,0);
        this.p3.setInteractive();
        this.p3.on('pointerup', () => { this.Respuesta('r3'); });
        this.p4 = this.add.image(1043,667,this.seccionArray[0].r4.imagen).setOrigin(0,0);
        this.p4.setInteractive();
        this.p4.on('pointerup', () => { this.Respuesta('r4'); });
        this.p5 = this.add.image(1043,790,this.seccionArray[0].r5.imagen).setOrigin(0,0);
        this.p5.setInteractive();
        this.p5.on('pointerup', () => { this.Respuesta('r5'); });
        this.btVolverRes = this.add.image(977,146,'volver').setOrigin(0,0);
        this.btVolverRes.setInteractive();
        this.btVolverRes.on('pointerup', () => {this.SoundVolver.play()});
        this.btVolverRes.on('pointerup', () => { this.hideRes(); });
        this.actuar = this.add.image(1543,968,'actuar').setOrigin(0,0);
        this.actuar.setInteractive();
        this.actuar.on('pointerup', () => {this.SoundVolver.play()});
        this.actuar.on('pointerup', () => { this.finPregunta(); });
        this.corregir = this.add.image(1224,968,'corregir').setOrigin(0,0);
        this.corregir.setInteractive();
        this.corregir.on('pointerup', () => {this.SoundVolver.play()});
        this.corregir.on('pointerup', () => { this.resetAnswer(); });
        this.n1 = this.add.image(1043,306,'n1').setOrigin(0,0);
        this.n2 = this.add.image(1043,433,'n2').setOrigin(0,0);
        this.n3 = this.add.image(1043,558,'n3').setOrigin(0,0);
        this.n4 = this.add.image(1043,682,'n4').setOrigin(0,0);
        this.n5 = this.add.image(1043,805,'n5').setOrigin(0,0);


        this.fondoFinal = this.add.image(1090,0,'bien').setOrigin(0,0);
        this.continuarFinal = this.add.image(1358,924,'continuar').setOrigin(0,0);
        this.refuerzos  = this.add.image(1358,764,'refuerzos').setOrigin(0,0);
        this.refuerzos.setInteractive();
        this.refuerzos.on('pointerup', () => {this.SoundVolver.play()});
        this.refuerzos.on('pointerup', () => { this.showPregunta(this.currentIndex); });
        this.texto = this.add.text(1494, 687, '10/10', { fontFamily: 'Arial', fontSize: 40, color: '#000000' }).setOrigin(0,0);
        this.continuarFinal.setInteractive();
        this.continuarFinal.on('pointerup', () => {this.SoundVolver.play()});
        this.continuarFinal.on('pointerup', () => { this.RevisarFinal(); });



        this.seccion.add(backGroundPre);
        this.seccion.add(this.contPregunta);
        this.seccion.add(this.contInfo);
        this.seccion.add(this.contRes);
        this.seccion.add(this.resultado);
        this.contPregunta.add(this.pregunta);
        this.contPregunta.add( this.btInfo);
        this.contPregunta.add( this.btContinuar);
        this.contPregunta.add( this.btVolver);
        this.contInfo.add(this.info);
        this.contInfo.add(this.btVolverInfo);
        this.contRes.add(this.fondo);
        this.contRes.add(this.p1);
        this.contRes.add(this.p2);
        this.contRes.add(this.p3);
        this.contRes.add(this.p4);
        this.contRes.add(this.p5);
        this.contRes.add(this.btVolverRes);
        this.contRes.add(this.n1);
        this.contRes.add(this.n2);
        this.contRes.add(this.n3);
        this.contRes.add(this.n4);
        this.contRes.add(this.n5);
        this.contRes.add(this.actuar);
        this.contRes.add(this.corregir);
        this.resultado.add(this.fondoFinal);
        this.resultado.add(this.continuarFinal);
        this.resultado.add(this.refuerzos);
        this.resultado.add(this.texto);


        //final

        var backGroundfin =  this.add.graphics();
        backGroundfin.fillStyle(0xffffff, 0.7);
        backGroundfin.fillRect(0, 0, 1920, 1080);

        this.fondoend = this.add.image(1090,0,'ganaste').setOrigin(0,0);
        this.continuarend = this.add.image(1355,854,'inscribir').setOrigin(0,0);
        this.textoend = this.add.text(1461, 344, '10/10', { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' }).setOrigin(0,0);
        this.continuarend.setInteractive();
        this.continuarend.on('pointerup', () => {this.SoundVolver.play()});
        this.continuarend.on('pointerup', () => { console.log("end") });

        this.final.add(backGroundfin);
        this.final.add(this.fondoend);
        this.final.add(this.textoend);
        this.final.add(this.continuarend);





        

        
        
        //this.map.setScale(0.25,0.25);
        //this.map.x = this.map.width - (1920/2);
        //this.map.y = this.map.Height - (1080/2);
        console.log(this.map);
        this.map.setInteractive(new Phaser.Geom.Rectangle(0, 0, mapwidth, mapHeight), Phaser.Geom.Rectangle.Contains);;
        this.input.setDraggable(this.map);


        /////SEmi editor Grafico

        //this.temp = this.animaEsmad;

        //this.temp.setInteractive();

       // this.input.setDraggable(this.temp);

        this.input.on('drag',function(pointer,gameObject,dragX,dragY){
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
        this.input.on('dragend',(pointer,gameObject,dragX,dragY) => {
            console.log(gameObject.x);
            console.log(gameObject.y);
        });

        this.input.on('dragend',(pointer,gameObject,dragX,dragY) => {
            console.log(gameObject.x);
           if(gameObject.x < -4417){
            this.tweens.add({
                targets: this.map,
                x: -4417,
                y: gameObject.y,
                duration: 500,
                ease: 'Bounce'
            });
           }else if(gameObject.x > 140){
            this.tweens.add({
                targets: this.map,
                x: 140,
                y: gameObject.y,
                duration: 500,
                ease: 'Bounce'
            });
           }
           if(gameObject.y < -3270){
            this.tweens.add({
                targets: this.map,
                x: gameObject.x,
                y: -3274,
                duration: 500,
                ease: 'Bounce'
            });
            
           }else if(gameObject.y > 87){
            this.tweens.add({
                targets: this.map,
                x: gameObject.x,
                y: 87,
                duration: 500,
                ease: 'Bounce'
            });
            }

        });

        this.map.x = (1920/2)-(mapwidth/2);
        this.map.y = (1080/2)-(mapHeight/2);

        this.setup();
        this.setupflag();
        this.inicio();

    }
    update(){
        
    }
    setupflag(){
        for(var i = 0;i<10;i++){
            this.controlArray[i].visible = false;
        }
    }
    setup(){
        this.ini.visible = false;
        this.intrucciones.visible = false;
        this.seccion.visible = false;
        this.final.visible = false;
    }
    inicio(){
        this.setup();
        this.ShowGroup(this.ini);
    }

    instruccionesFn(){
        this.setup();
        this.ShowGroup(this.intrucciones);
    }
    
    GameFn(){
        this.setup();
    }

    hiddeGroup(group){
      
        this.tweens.add({
            targets: group,
            alpha: 0,
            duration:300,
            onComplete: function(){
                group.visible =  false;
            }

        })
    }
    ShowGroup(group){
      group.visible = true;
      group.alpha = 0;
        this.tweens.add({
            targets: group,
            alpha: 1,
            duration:300,
            onComplete: function(){
            }

        })
    }
    secctionSetup(){
        this.contPregunta.visible = false;
        this.contInfo.visible = false;
        this.contRes.visible = false;
        this.resultado.visible = false;
    }
    resetAnswer(){
        this.currentAnswer = 0;
        this.currenPoints = 0;
        this.r1Selected = false;
        this.r2Selected = false;
        this.r3Selected = false;
        this.r4Selected = false;
        this.r5Selected = false;
        this.n1.visible = false;
        this.n2.visible = false;
        this.n3.visible = false;
        this.n4.visible = false;
        this.n5.visible = false;
    }
    showPregunta(index){
        console.log(this.currentIndex);
        this.secctionSetup();
        this.currentIndex = index;
        this.pregunta.setTexture(this.seccionArray[index].pregunta);
        this.btInfo.setTexture(this.seccionArray[index].boton);
        this.info.setTexture(this.seccionArray[index].info);
        this.p1.setTexture(this.seccionArray[index].r1.imagen);
        this.p2.setTexture(this.seccionArray[index].r2.imagen);
        this.p3.setTexture(this.seccionArray[index].r3.imagen);
        this.p4.setTexture(this.seccionArray[index].r4.imagen);
        this.p5.setTexture(this.seccionArray[index].r5.imagen);
        //this.controlArray[pregunta].visible = true;
        this.ShowGroup(this.seccion);
        this.ShowGroup(this.contPregunta);

    }
    hidePregunta(){
        this.hiddeGroup(this.seccion);
    }
    showInfo(){
        this.hiddeGroup(this.contPregunta);
        this.ShowGroup(this.contInfo);

    }
    hideInfo(){
        this.hiddeGroup(this.contInfo);
        this.ShowGroup(this.contPregunta);

    }
    showRes(){
        this.resetAnswer();
        this.hiddeGroup(this.contPregunta);
        this.ShowGroup(this.contRes);

    }
    hideRes(){
        this.hiddeGroup(this.contRes);
        this.ShowGroup(this.contPregunta);

    }
    finPregunta(){
        this.seccionArray[this.currentIndex].aniamcionloop.visible = false;
        if(this.currenPoints == 5){
            this.totalPoints ++;
            this.fondoFinal.setTexture('bien');
            this.refuerzos.visible = false;
            this.texto.visible = true;
            this.texto.setText(this.totalPoints + '/10');
            this.flagArray[this.currentIndex].visible = false;
            this.controlArray[this.currentIndex].visible = true;
            this.seccionArray[this.currentIndex].animacionBien.visible = true;

        }else{
            this.fondoFinal.setTexture('mal');
            this.refuerzos.visible = true;
            this.texto.visible = false;
            this.seccionArray[this.currentIndex].animacionMal.visible = true;
            this.flagArray[this.currentIndex].visible = false;

        }
        this.hiddeGroup(this.contRes);
        this.ShowGroup(this.resultado);
    }
    RevisarFinal(){
        if(this.totalPoints == 10){
            this.hiddeGroup(this.seccion);
            this.ShowGroup(this.final);

        }else{
            this.hiddeGroup(this.seccion);
        }
    }
    Respuesta(position){
        switch (position){
            case 'r1':
                if( this.r1Selected == false){
                    this.r1Selected = true;
                    this.n1.visible = true;
                    this.n1.setTexture( this.numArray[this.currentAnswer]);
                    this.currentAnswer ++;
                    if(this.currentAnswer == this.seccionArray[this.currentIndex].r1.numero){
                        this.currenPoints ++;
                    }
                }
                break;
            case 'r2':
                    if( this.r2Selected == false){
                        this.r2Selected = true;
                        this.n2.visible = true;
                        this.n2.setTexture( this.numArray[this.currentAnswer]);
                        this.currentAnswer ++;
                        if(this.currentAnswer == this.seccionArray[this.currentIndex].r2.numero){
                            this.currenPoints ++;
                        }
                    }
                break;
            case 'r3':
                    if( this.r3Selected == false){
                        this.r3Selected = true;
                        this.n3.visible = true;
                        this.n3.setTexture( this.numArray[this.currentAnswer]);
                        this.currentAnswer ++;
                        if(this.currentAnswer == this.seccionArray[this.currentIndex].r3.numero){
                            this.currenPoints ++;
                        }
                    }
                break;
            case 'r4':
                    if( this.r4Selected == false){
                        this.r4Selected = true;
                        this.n4.visible = true;
                        this.n4.setTexture( this.numArray[this.currentAnswer]);
                        this.currentAnswer ++;
                        if(this.currentAnswer == this.seccionArray[this.currentIndex].r4.numero){
                            this.currenPoints ++;
                        }
                    }
                break;
            case 'r5':
                    if( this.r5Selected == false){
                        this.r5Selected = true;
                        this.n5.visible = true;
                        this.n5.setTexture( this.numArray[this.currentAnswer]);
                        this.currentAnswer ++;
                        if(this.currentAnswer == this.seccionArray[this.currentIndex].r5.numero){
                            this.currenPoints ++;
                        }
                    }
                break;

        }
        console.log(this.currenPoints);

        

    }
    createAnimation(){
        this.anims.create({
            key: 'loop_esmad',
            frames: this.anims.generateFrameNames('esmad_loop',{prefix: '1_ESMAD_LOOP_',start: 1, end: 76, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'esmad_bien',
            frames: this.anims.generateFrameNames('esmad_bien',{prefix: '1_ESMAD_BIEN_',start: 1, end: 85, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'antiexpl_loop',
            frames: this.anims.generateFrameNames('antiexpl_loop',{prefix: '2_ANTIEXPL_LOOP_',start: 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'antiexpl_bien',
            frames: this.anims.generateFrameNames('antiexpl_bien',{prefix: '2_ANTIEXPL_BIEN_',start: 1, end: 10, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'antiexpl_mal',
            frames: this.anims.generateFrameNames('antiexpl_mal',{prefix: '2_ANTIEXPL_MAL_',start: 1, end: 98, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'gaula_loop',
            frames: this.anims.generateFrameNames('gaula_loop',{prefix: '3_Gaula_LOOP_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'gaula_bien',
            frames: this.anims.generateFrameNames('gaula_bien',{prefix: '3_Gaula_BIEN_',start : 1, end: 72, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'gaula_mal',
            frames: this.anims.generateFrameNames('gaula_mal',{prefix: '3_Gaula_MAL_',start : 1, end: 112, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'copes_loop',
            frames: this.anims.generateFrameNames('copes_loop',{prefix: '01_COPES_LOOP_',start : 1, end: 91, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'copes_bueno',
            frames: this.anims.generateFrameNames('copes_bueno',{prefix: '01_COPES_BUENO_',start : 1, end: 108, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'copes_malo',
            frames: this.anims.generateFrameNames('copes_malo',{prefix: '01_COPES_MALO_',start : 1, end: 108, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
            this.anims.create({
            key: 'carabineros_loop',
            frames: this.anims.generateFrameNames('carabineros_loop',{prefix: '06_CARABINEROS_LOOP_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'carabineros_mal',
            frames: this.anims.generateFrameNames('carabineros_mal',{prefix: '06_CARABINEROS_MAL_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:11
        });
        this.anims.create({
            key: 'carabineros_bien',
            frames: this.anims.generateFrameNames('carabineros_bien',{prefix: '06_CARABINEROS_BIEN_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:11
        });
        this.anims.create({
            key: 'transito_loop',
            frames: this.anims.generateFrameNames('transito_loop',{prefix: '07_TRANSITO_LOOP_',start : 1, end: 76, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'transito_bien',
            frames: this.anims.generateFrameNames('transito_bien',{prefix: '07_TRANSITO_BIEN_corte_',start : 1, end: 76, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'transito_mal',
            frames: this.anims.generateFrameNames('transito_mal',{prefix: '07_TRANSITO_MAL_',start : 1, end: 76, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'polfa_bueno',
            frames: this.anims.generateFrameNames('polfa_bueno',{prefix: '08_POLFA_Bueno_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'polfa_loop',
            frames: this.anims.generateFrameNames('polfa_loop',{prefix: '08_POLFA_Loop_00001',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'guia_loop',
            frames: this.anims.generateFrameNames('guia_loop',{prefix: '09_GUIA_PERRITO_LOOP_',start : 1, end: 87, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'guia_bueno',
            frames: this.anims.generateFrameNames('guia_bueno',{prefix: '09_GUIA_PERRITO_BUENO_',start : 1, end: 66, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'guia_malo',
            frames: this.anims.generateFrameNames('guia_malo',{prefix: '09_GUIA_PERRITO_MALO_',start : 1, end: 139, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'ponalsar_bueno',
            frames: this.anims.generateFrameNames('ponalsar_bueno',{prefix: '05_PONALSAR_BUENO_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'ponalsar_loop',
            frames: this.anims.generateFrameNames('ponalsar_loop',{prefix: '05_PONALSAR_LOOP_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });
        this.anims.create({
            key: 'ponalsar_malo',
            frames: this.anims.generateFrameNames('ponalsar_malo',{prefix: '05_PONALSAR_MALO_',start : 1, end: 75, zeroPad: 5 }), 
            repeat: -1,
            frameRate:12
        });

    }

    orderPreguntas(){
        this.copes  = {
            name:"copes",
            pregunta:'p_copes',
            r2:{
                imagen: 'copes1',
                numero: 1
            },
            r1:{
                imagen: 'copes2',
                numero: 2
            },
            r3:{
                imagen: 'copes3',
                numero: 3
            },
            r5:{
                imagen: 'copes4',
                numero: 4
            },
            r4:{
                imagen: 'copes5',
                numero: 5
            },
            info: 'i_copes',
            boton: 'b_copes',
            animacionBien: this.animaCopesBueno,
            animacionMal:  this.animaCopesMalo,
            aniamcionloop:  this.animaCopesLoop,
        }
        this.transito  = {
            name:"transito",
            pregunta:'p_transito',
            r3:{
                imagen: 'transito1',
                numero: 1
            },
            r2:{
                imagen: 'transito2',
                numero: 2
            },
            r1:{
                imagen: 'transito3',
                numero: 3
            },
            r4:{
                imagen: 'transito4',
                numero: 4
            },
            r5:{
                imagen: 'transito5',
                numero: 5
            },
            info: 'i_transito',
            boton: 'b_transito',
            animacionBien: this.animaTransitoBien,
            animacionMal:  this.animaTransitoMal,
            aniamcionloop:  this.animaTransitoLoop,
        }
        this.ponalsar  = {
            name:"ponalsar",
            pregunta:'p_ponalsar',
            r5:{
                imagen: 'ponalsar1',
                numero: 1
            },
            r3:{
                imagen: 'ponalsar2',
                numero: 2
            },
            r2:{
                imagen: 'ponalsar3',
                numero: 3
            },
            r4:{
                imagen: 'ponalsar4',
                numero: 4
            },
            r1:{
                imagen: 'ponalsar5',
                numero: 5
            },
            info: 'i_ponalsar',
            boton: 'b_ponalsar',
            animacionBien: this.animaPonalsarBueno,
            animacionMal:  this.animaPonalsarBueno,
            aniamcionloop:  this.animaPonalsarBueno,
        }
        this.polfa  = {
            name:"polfa",
            pregunta:'p_polfa',
            r4:{
                imagen: 'polfa1',
                numero: 1
            },
            r2:{
                imagen: 'polfa2',
                numero: 2
            },
            r3:{
                imagen: 'polfa3',
                numero: 3
            },
            r1:{
                imagen: 'polfa4',
                numero: 4
            },
            r5:{
                imagen: 'polfa5',
                numero: 5
            },
            info: 'i_polfa',
            boton: 'b_polfa',
            animacionBien: this.animaTransitoBien,
            animacionMal:  this.animaTransitoMal,
            aniamcionloop:  this.animaTransitoLoop,
        }
        this.gaula  = {
            name:"gaula",
            pregunta:'p_gaula',
            r5:{
                imagen: 'gaula1',
                numero: 1
            },
            r3:{
                imagen: 'gaula2',
                numero: 2
            },
            r2:{
                imagen: 'gaula3',
                numero: 3
            },
            r4:{
                imagen: 'gaula4',
                numero: 4
            },
            r1:{
                imagen: 'gaula5',
                numero: 5
            },
            info: 'i_gaula',
            boton: 'b_gaula',
            animacionBien: this.animaGaulaBien,
            animacionMal:  this.animaGaulaMal,
            aniamcionloop:  this.animaGaulaLoop,
        }
        this.esmad  = {
            name:"esmad",
            pregunta:'p_esmad',
            r2:{
                imagen: 'esmad1',
                numero: 1
            },
            r1:{
                imagen: 'esmad2',
                numero: 2
            },
            r5:{
                imagen: 'esmad3',
                numero: 3
            },
            r4:{
                imagen: 'esmad4',
                numero: 4
            },
            r3:{
                imagen: 'esmad5',
                numero: 5
            },
            info: 'i_esmad',
            boton: 'b_esmad',
            animacionBien: this.animaEsmadBien,
            animacionMal:  this.animaEsmadBien,
            aniamcionloop:  this.animaEsmadLoop,
        }
        this.explosivo  = {
            name:"explosivo",
            pregunta:'p_explosivo',
            r4:{
                imagen: 'explosivo1',
                numero: 1
            },
            r3:{
                imagen: 'explosivo2',
                numero: 2
            },
            r5:{
                imagen: 'explosivo3',
                numero: 3
            },
            r1:{
                imagen: 'explosivo4',
                numero: 4
            },
            r2:{
                imagen: 'explosivo5',
                numero: 5
            },
            info: 'i_explosivo',
            boton: 'b_explosivo',
            animacionBien: this.animaAntiexpBien,
            animacionMal:  this.animaAntiexpMal,
            aniamcionloop:  this.animaAntiexpLoop,
        }
        this.carabineros  = {
            name:"carabineros",
            pregunta:'p_carabineros',
            r1:{
                imagen: 'carabineros1',
                numero: 1
            },
            r4:{
                imagen: 'carabineros2',
                numero: 2
            },
            r3:{
                imagen: 'carabineros3',
                numero: 3
            },
            r5:{
                imagen: 'carabineros4',
                numero: 4
            },
            r2:{
                imagen: 'carabineros5',
                numero: 5
            },
            info: 'i_carabineros',
            boton: 'b_carabineros',
            animacionBien: this.animaCarabinerosBien,
            animacionMal:  this.animaCarabinerosMal,
            aniamcionloop:  this.animaCarabinerosLoop,
        }
        this.agente  = {
            name:"agente",
            pregunta:'p_agente',
            r2:{
                imagen: 'agente1',
                numero: 1
            },
            r1:{
                imagen: 'agente2',
                numero: 2
            },
            r5:{
                imagen: 'agente3',
                numero: 3
            },
            r4:{
                imagen: 'agente4',
                numero: 4
            },
            r3:{
                imagen: 'agente5',
                numero: 5
            },
            info: 'i_agente',
            boton: 'b_agente',
            animacionBien: this.animaTransitoBien,
            animacionMal:  this.animaTransitoMal,
            aniamcionloop:  this.animaTransitoLoop,
        }
        this.canino  = {
            name:"canino",
            pregunta:'p_canino',
            r4:{
                imagen: 'canino1',
                numero: 1
            },
            r3:{
                imagen: 'canino2',
                numero: 2
            },
            r2:{
                imagen: 'canino3',
                numero: 3
            },
            r1:{
                imagen: 'canino4',
                numero: 4
            },
            r5:{
                imagen: 'canino5',
                numero: 5
            },
            info: 'i_canino',
            boton: 'b_canino',
            animacionBien: this.animaPerritoBueno,
            animacionMal:  this.animaPerritoMalo,
            aniamcionloop:  this.animaPerritoLoop,
        }

    }
}
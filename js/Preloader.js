class PreLoader extends Phaser.Scene{

    constructor(){
        super("PreloaderGame");

    }
    preload(){
        //PRELOADER BAR
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(800, 515, 320, 50);
            
            var width = 1920;
            var height = 1080;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
        
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(810, 525, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
        
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
        
        
        
        
        
            
        var i = 0;
        
        this.widthArrayB = [1741,857,1571,734,1222,413,1337,1608,1414,131,884,1013];
        this.heightarrayB = [1036,528,855,549,549,363,737,1037,1002,418,680,491];
        this.widthArrayP = [367,110,150,324,472,171,184,126,86,157,78,132,438,362,361,112,126,308,0,302,158];
        this.heightarrayP = [373,226,140,220,289,98,104,82,69,151,57,116,414,268,268,90,128,194,0,232,141];
        
        this.widthArrayH =  [236,129,139,75,309,70,296,102,94,122,309,309,429,350,309,410,806,187,895,394,864,509,484,484,492];
        this.heightarrayH = [325,172,183,75,148,70,94,121,124,121,146,147,147,135,147,150,487,147,111,99,194,98,127,98,106];

        this.widthArrayP =  [27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,37,27,27,27,27,27,27,40,40,27,27,27,27,27];
        this.heightarrayP = [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,71,50,50,50,50,50,50,70,70,50,50,50,50,50];
        
        for(i = 0;i<315;i++){
            this.load.image('mapa'+i,'img/mapa/images/mapa2_'+(i+1)+'.png');
        }
        /*for(i = 0;i<12;i++){
            //img\Buldings
            this.load.svg('edificio'+i,'img/Buldings/Recurso'+(i+1)+'.svg',{width: this.widthArrayB[i], height: this.heightarrayB[i]});
        }*/
        /*for(i = 0;i<21;i++){
            //img\Buldings
            this.load.svg('prop'+i,'img/props/prop'+(i)+'.svg',{width: this.widthArrayP[i], height: this.heightarrayP[i]});
        }*/
        for(i = 0;i<25;i++){
            //img\Buldings
            this.load.svg('Recurso'+(i+1),'img/hud/Recurso'+(i+1)+'.svg',{width: this.widthArrayH[i], height: this.heightarrayH[i]});
        }
        for(i = 0;i<33;i++){
            //img\Buldings
            this.load.svg('personaje'+(i+1),'img/Personajes/img'+(i+1)+'.svg',{width: this.widthArrayP[i], height: this.heightarrayP[i]});
        }
        this.load.image('logo','img/hud/logo.png');
        this.load.svg('agente','img/flags/agente.svg',{width: 342, height: 322});
        this.load.svg('canino','img/flags/canino.svg',{width: 425, height: 321});
        this.load.svg('carabineros','img/flags/carabineros.svg',{width: 423, height: 321});
        this.load.svg('controlada','img/flags/controlada.svg',{width: 422, height: 321});
        this.load.svg('explosivo','img/flags/explosivos.svg',{width: 425, height: 321});
        this.load.svg('esmad','img/flags/esmad.svg',{width: 342, height: 321});
        this.load.svg('gaula','img/flags/gaula.svg',{width: 341, height: 322});
        this.load.svg('polfa','img/flags/polfa.svg',{width: 342, height: 321});
        this.load.svg('ponalsar','img/flags/ponalsar.svg',{width: 358, height: 321});
        this.load.svg('refuerzos1','img/flags/refuerzos.svg',{width: 472, height: 321});
        this.load.svg('transito','img/flags/transito.svg',{width: 357, height: 321});
        this.load.svg('copes','img/flags/copes.svg',{width: 357, height: 321});
        
        this.load.svg('n1','img/flags/1_1.svg',{width: 81,height:81});
        this.load.svg('n2','img/flags/2_1.svg',{width: 81,height:81});
        this.load.svg('n3','img/flags/3_1.svg',{width: 81,height:81});
        this.load.svg('n4','img/flags/4_1.svg',{width: 81,height:81});
        this.load.svg('n5','img/flags/5_1.svg',{width: 81,height:81});
        this.load.svg('actuar','img/flags/actuar.svg',{width: 280,height:110});
        this.load.svg('agente1','img/flags/agente_1.svg',{width: 894,height:112});
        this.load.svg('agente2','img/flags/agente_2.svg',{width: 894,height:112});
        this.load.svg('agente3','img/flags/agente_3.svg',{width: 894,height:112});
        this.load.svg('agente4','img/flags/agente_4.svg',{width: 894,height:112});
        this.load.svg('agente5','img/flags/agente_5.svg',{width: 894,height:112});
        this.load.svg('b_agente','img/flags/boton_agente.svg',{width: 331 ,height: 125});
        this.load.svg('b_explosivo','img/flags/boton_antiexplosivos.svg',{width: 331,height:125});
        this.load.svg('b_canino','img/flags/boton_canino.svg',{width: 331,height:125});
        this.load.svg('b_carabineros','img/flags/boton_carabineros.svg',{width: 331,height:125});
        this.load.svg('b_copes','img/flags/boton_copes.svg',{width: 331,height:125});
        this.load.svg('b_esmad','img/flags/boton_esmad.svg',{width: 331,height:125});
        this.load.svg('b_gaula','img/flags/boton_gaula.svg',{width: 331,height:125});
        this.load.svg('b_polfa','img/flags/boton_polfa.svg',{width: 331,height:125});
        this.load.svg('b_ponalsar','img/flags/boton_ponalsar.svg',{width: 331,height:125});
        this.load.svg('b_transito','img/flags/boton_transito.svg',{width: 331,height:125});
        this.load.svg('canino1','img/flags/canino_1.svg',{width: 894,height:112});
        this.load.svg('canino2','img/flags/canino_2.svg',{width: 894,height:112});
        this.load.svg('canino3','img/flags/canino_3.svg',{width: 894,height:112});
        this.load.svg('canino4','img/flags/canino_4.svg',{width: 894,height:112});
        this.load.svg('canino5','img/flags/canino_5.svg',{width: 894,height:112});
        this.load.svg('carabineros1','img/flags/carabineros_1.svg',{width: 894,height:112});
        this.load.svg('carabineros2','img/flags/carabineros_2.svg',{width: 894,height:112});
        this.load.svg('carabineros3','img/flags/carabineros_3.svg',{width: 894,height:112});
        this.load.svg('carabineros4','img/flags/carabineros_4.svg',{width: 894,height:112});
        this.load.svg('carabineros5','img/flags/carabineros_5.svg',{width: 894,height:112});
        this.load.svg('continuar','img/flags/continuar.svg',{width: 331,height:125});
        this.load.svg('copes1','img/flags/copes_1.svg',{width: 894,height:112});
        this.load.svg('copes2','img/flags/copes_2.svg',{width: 894,height:112});
        this.load.svg('copes3','img/flags/copes_3.svg',{width: 894,height:112});
        this.load.svg('copes4','img/flags/copes_4.svg',{width: 894,height:112});
        this.load.svg('copes5','img/flags/copes_5.svg',{width: 894,height:112});
        this.load.svg('esmad1','img/flags/esmad_1.svg',{width: 894,height:112});
        this.load.svg('esmad2','img/flags/esmad_2.svg',{width: 894,height:112});
        this.load.svg('esmad3','img/flags/esmad_3.svg',{width: 894,height:112});
        this.load.svg('esmad4','img/flags/esmad_4.svg',{width: 894,height:112});
        this.load.svg('esmad5','img/flags/esmad_5.svg',{width: 894,height:112});
        this.load.svg('explosivo1','img/flags/explosivos_1.svg',{width: 894,height:112});
        this.load.svg('explosivo2','img/flags/explosivos_2.svg',{width: 894,height:112});
        this.load.svg('explosivo3','img/flags/explosivos_3.svg',{width: 894,height:112});
        this.load.svg('explosivo4','img/flags/explosivos_4.svg',{width: 894,height:112});
        this.load.svg('explosivo5','img/flags/explosivos_5.svg',{width: 894,height:112});
        this.load.svg('gaula1','img/flags/gaula_1.svg',{width: 894,height:112});
        this.load.svg('gaula2','img/flags/gaula_2.svg',{width: 894,height:112});
        this.load.svg('gaula3','img/flags/gaula_3.svg',{width: 894,height:112});
        this.load.svg('gaula4','img/flags/gaula_4.svg',{width: 894,height:112});
        this.load.svg('gaula5','img/flags/gaula_5.svg',{width: 894,height:112});
        this.load.svg('i_agente','img/flags/info_agentes.svg',{width: 830,height:1080});
        this.load.svg('i_canino','img/flags/info_canino.svg',{width: 830,height:1080});
        this.load.svg('i_carabineros','img/flags/info_carabineros.svg',{width:830 ,height:1080});
        this.load.svg('i_copes','img/flags/info_copes.svg',{width: 830,height:1080});
        this.load.svg('i_esmad','img/flags/info_esmad.svg',{width: 830,height:1080});
        this.load.svg('i_explosivo','img/flags/info_explosivos.svg',{width: 830,height:1080});
        this.load.svg('i_gaula','img/flags/info_gaula.svg',{width: 830,height:1080});
        this.load.svg('i_polfa','img/flags/info_polfa.svg',{width: 830,height:1080});
        this.load.svg('i_ponalsar','img/flags/info_ponalsar.svg',{width: 830,height:1080});
        this.load.svg('i_transito','img/flags/info_transito.svg',{width: 830,height:1080});
        this.load.svg('polfa1','img/flags/polfa_1.svg',{width: 894,height:112});
        this.load.svg('polfa2','img/flags/polfa_2.svg',{width: 894,height:112});
        this.load.svg('polfa3','img/flags/polfa_3.svg',{width: 894,height:112});
        this.load.svg('polfa4','img/flags/polfa_4.svg',{width: 894,height:112});
        this.load.svg('polfa5','img/flags/polfa_5.svg',{width: 894,height:112});
        this.load.svg('ponalsar1','img/flags/ponalsar_1.svg',{width: 894,height:112});
        this.load.svg('ponalsar2','img/flags/ponalsar_2.svg',{width: 894,height:112});
        this.load.svg('ponalsar3','img/flags/ponalsar_3.svg',{width: 894,height:112});
        this.load.svg('ponalsar4','img/flags/ponalsar_4.svg',{width: 894,height:112});
        this.load.svg('ponalsar5','img/flags/ponalsar_5.svg',{width: 894,height:112});
        this.load.svg('p_agente','img/flags/pregunta_agente.svg',{width: 830,height:1080});
        this.load.svg('p_explosivo','img/flags/pregunta_antiexplosivos.svg',{width: 830 ,height:1080});
        this.load.svg('p_canino','img/flags/pregunta_canino.svg',{width: 830,height:1080});
        this.load.svg('p_copes','img/flags/pregunta_copes.svg',{width: 830,height:1080});
        this.load.svg('p_esmad','img/flags/pregunta_esmad.svg',{width: 830,height:1080});
        this.load.svg('p_gaula','img/flags/pregunta_gaula.svg',{width: 830,height:1080});
        this.load.svg('p_polfa','img/flags/pregunta_polfa.svg',{width: 830,height:1080});
        this.load.svg('p_transito','img/flags/pregunta_transito.svg',{width: 830,height:1080});
        this.load.svg('p_carabineros','img/flags/preguntas_carabineros.svg',{width: 830,height:1080});
        this.load.svg('p_ponalsar','img/flags/preguntas_ponalsar.svg',{width: 830,height:1080});
        this.load.svg('transito1','img/flags/transito_1.svg',{width: 894,height:112});
        this.load.svg('transito2','img/flags/transito_2.svg',{width: 894,height:112});
        this.load.svg('transito3','img/flags/transito_3.svg',{width: 894,height:112});
        this.load.svg('transito4','img/flags/transito_4.svg',{width: 894,height:112});
        this.load.svg('transito5','img/flags/transito_5.svg',{width: 894,height:112});
        this.load.svg('volver','img/flags/volver.svg',{width: 228,height:72});
        this.load.svg('fondo','img/flags/fondo_pregunta.svg',{width: 830,height:1080});
        this.load.svg('corregir','img/flags/corregir.svg',{width: 280,height:110});
        
        this.load.svg('bien','img/flags/ganaste.svg',{width: 830,height:1080});
        this.load.svg('mal','img/flags/perdiste.svg',{width: 830,height:1080});
        this.load.svg('ganaste','img/flags/ganaste_final.svg',{width: 830,height:1080});
        this.load.svg('refuerzos','img/flags/btn_refuerzos.svg',{width: 331,height:125});
        this.load.svg('inscribir','img/flags/btn_inscripcion.svg',{width: 331,height:125});
        
        this.load.atlas('esmad_bien','img/Animaciones/1_ESMAD/1_ESMAD_BIEN/ESMAD_BIEN.png','img/Animaciones/1_ESMAD/1_ESMAD_BIEN/ESMAD_BIEN.json');
        this.load.atlas('esmad_loop','img/Animaciones/1_ESMAD/1_ESMAD_LOOP/ESMAD_LOOP.png','img/Animaciones/1_ESMAD/1_ESMAD_LOOP/ESMAD_LOOP.json');
        
        this.load.atlas('antiexpl_bien','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_BIEN/ANTIEXPL_BIEN.png','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_BIEN/ANTIEXPL_BIEN.json');
        this.load.atlas('antiexpl_loop','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_LOOP/ANTIEXPL_LOOP.png','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_LOOP/ANTIEXPL_LOOP.json');
        this.load.atlas('antiexpl_mal','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_MAL/ANTIEXPL_MAL.png','img/Animaciones/2_ANTIEXPLOSIVOS/2_ANTIEXPL_MAL/ANTIEXPL_MAL.json');
        
        this.load.atlas('gaula_bien','img/Animaciones/3_GAULA/3_Gaula_BIEN/Gaula_BIEN.png','img/Animaciones/3_GAULA/3_Gaula_BIEN/Gaula_BIEN.json');
        this.load.atlas('gaula_loop','img/Animaciones/3_GAULA/3_Gaula_LOOP/Gaula_LOOP.png','img/Animaciones/3_GAULA/3_Gaula_LOOP/Gaula_LOOP.json');
        this.load.atlas('gaula_mal','img/Animaciones/3_GAULA/3_Gaula_MAL/Gaula_MAL.png','img/Animaciones/3_GAULA/3_Gaula_MAL/Gaula_MAL.json');
        
        this.load.atlas('copes_bueno','img/Animaciones/4_COPES/4_COPES_BUENO/COPES_BUENO.png','img/Animaciones/4_COPES/4_COPES_BUENO/COPES_BUENO.json');
        this.load.atlas('copes_loop','img/Animaciones/4_COPES/4_COPES_LOOP/COPES_LOOP.png','img/Animaciones/4_COPES/4_COPES_LOOP/COPES_LOOP.json');
        this.load.atlas('copes_malo','img/Animaciones/4_COPES/4_COPES_MALO/COPES_MALO.png','img/Animaciones/4_COPES/4_COPES_MALO/COPES_MALO.json');
  
        this.load.atlas('ponalsar_bueno','img/Animaciones/5_PONALSAR/05_PONALSAR_BUENO/PONALSAR_BUENO.png','img/Animaciones/5_PONALSAR/05_PONALSAR_BUENO/PONALSAR_BUENO.json');
        this.load.atlas('ponalsar_loop','img/Animaciones/5_PONALSAR/05_PONALSAR_LOOP/PONALSAR_LOOP.png','img/Animaciones/5_PONALSAR/05_PONALSAR_LOOP/PONALSAR_LOOP.json');
        this.load.atlas('ponalsar_malo','img/Animaciones/5_PONALSAR/05_PONALSAR_MALO/PONALSAR_MALO.png','img/Animaciones/5_PONALSAR/05_PONALSAR_MALO/PONALSAR_MALO.json');
        
        this.load.atlas('carabineros_bien','img/Animaciones/6_CARABINEROS/6_CARABINEROS_BIEN/CARABINEROS_BIEN.png','img/Animaciones/6_CARABINEROS/6_CARABINEROS_BIEN/CARABINEROS_BIEN.json');
        this.load.atlas('carabineros_loop','img/Animaciones/6_CARABINEROS/6_CARABINEROS_LOOP/CARABINEROS_LOOP.png','img/Animaciones/6_CARABINEROS/6_CARABINEROS_LOOP/CARABINEROS_LOOP.json');
        this.load.atlas('carabineros_mal','img/Animaciones/6_CARABINEROS/6_CARABINEROS_MAL/CARABINEROS_MAL.png','img/Animaciones/6_CARABINEROS/6_CARABINEROS_MAL/CARABINEROS_MAL.json');
        
        this.load.atlas('transito_bien','img/Animaciones/7_TRANSITO/7_TRANSITO_BIEN/7_TRANSITO_BIEN.png','img/Animaciones/7_TRANSITO/7_TRANSITO_BIEN/7_TRANSITO_BIEN.json');
        this.load.atlas('transito_loop','img/Animaciones/7_TRANSITO/7_TRANSITO_LOOP/TRANSITO_LOOP.png','img/Animaciones/7_TRANSITO/7_TRANSITO_LOOP/TRANSITO_LOOP.json');
        this.load.atlas('transito_mal','img/Animaciones/7_TRANSITO/7_TRANSITO_MAL/7_TRANSITO_MAL.png','img/Animaciones/7_TRANSITO/7_TRANSITO_MAL/7_TRANSITO_MAL.json');
        
        this.load.atlas('polfa_bueno','img/Animaciones/8_POLFA/8_POLFA_BUENO/POLFA_BUENO.png','img/Animaciones/8_POLFA/8_POLFA_BUENO/POLFA_BUENO.json');
        this.load.atlas('polfa_loop','img/Animaciones/8_POLFA/8_POLFA_LOOP/POLFA_LOOP.png','img/Animaciones/8_POLFA/8_POLFA_LOOP/POLFA_LOOP.json');
        this.load.atlas('polfa_malo','img/Animaciones/8_POLFA/8_POLFA_MALO/POLFA_MAL.png','img/Animaciones/8_POLFA/8_POLFA_MALO/POLFA_MAL.json');
        
        this.load.atlas('guia_bueno','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_BUENO/GUIA_PERRITO_BUENO.png','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_BUENO/GUIA_PERRITO_BUENO.json');
        this.load.atlas('guia_loop','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_LOOP/GUIA_PERRITO_LOOP.png','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_LOOP/GUIA_PERRITO_LOOP.json');
        this.load.atlas('guia_malo','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_MALO/GUIA_PERRITO_MALO.png','img/Animaciones/9_GUIA_CANINO/09_GUIA_PERRITO_MALO/GUIA_PERRITO_MALO.json');
        
        this.load.atlas('agentes_loop','img/Animaciones/10_AGENTES/10_AGENTES_LOOP/AGENTES_LOOP.png','img/Animaciones/10_AGENTES/10_AGENTES_LOOP/AGENTES_LOOP.json');
        this.load.atlas('agentes_mal','img/Animaciones/10_AGENTES/10_AGENTES_MAL/AGENTES_MAL.png','img/Animaciones/10_AGENTES/10_AGENTES_MAL/AGENTES_MAL.json');
        
        this.load.svg('barra','img/hud/barra.svg',{width: 1950,height:130});

        this.load.audio('fondo', 'img/audio/fondo/ciudad.ogg','img/audio/fondo/ciudad.mp3');
        this.load.audio('aeropuerto', 'img/audio/aeropuerto.ogg','img/audio/aeropuerto.mp3');
        this.load.audio('alarma', 'img/audio/alarma1.ogg','img/audio/alarma1.mp3');
        this.load.audio('alerta', 'img/audio/alarma2.ogg','img/audio/alarma2.mp3');
        this.load.audio('protesta', 'img/audio/protesta.ogg','img/audio/protesta.mp3');
        this.load.audio('mal', 'img/audio/mal.ogg','img/audio/mal.mp3');
        this.load.audio('bien', 'img/audio/bien.ogg','img/audio/bien.mp3');
        this.load.audio('SoundVolver', 'img/audio/volver.ogg','img/audio/volver.mp3');

        //this.load.svg('puntero'+(i+1),'img/hud/mouse.svg'
        //esta es la imagen paea agregar al mouse


    }



    create(){
        this.add.text(20,20,"Preload Game...");
        
        this.scene.start("GameClass");

    }
}
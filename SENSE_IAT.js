/****************** 
 * Sense_Iat *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SENSE_IAT';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.95, 0.95, 0.91]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const repeat_instLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_instLoopBegin(repeat_instLoopScheduler));
flowScheduler.add(repeat_instLoopScheduler);
flowScheduler.add(repeat_instLoopEnd);













const repeat_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_trialsLoopBegin(repeat_trialsLoopScheduler));
flowScheduler.add(repeat_trialsLoopScheduler);
flowScheduler.add(repeat_trialsLoopEnd);










flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'rep_inst.xlsx', 'path': 'rep_inst.xlsx'},
    {'name': 'instructs.xlsx', 'path': 'instructs.xlsx'},
    {'name': 'b_o - test.xlsx', 'path': 'b_o - test.xlsx'},
    {'name': 'Test_words.xlsx', 'path': 'Test_words.xlsx'},
    {'name': 'repTrials.xlsx', 'path': 'repTrials.xlsx'},
    {'name': 'blocks_order - long.xlsx', 'path': 'blocks_order - long.xlsx'},
    {'name': 'pos_neg_train - 20.xlsx', 'path': 'pos_neg_train - 20.xlsx'},
    {'name': 'cong_train - long.xlsx', 'path': 'cong_train - long.xlsx'},
    {'name': 'cong_test - 20.xlsx', 'path': 'cong_test - 20.xlsx'},
    {'name': 'cong_test - 40.xlsx', 'path': 'cong_test - 40.xlsx'},
    {'name': 'incong_train - long.xlsx', 'path': 'incong_train - long.xlsx'},
    {'name': 'incong_test - 20.xlsx', 'path': 'incong_test - 20.xlsx'},
    {'name': 'incong_test - 40.xlsx', 'path': 'incong_test - 40.xlsx'},
    {'name': 'Images/mosaiques2.png', 'path': 'Images/mosaiques2.png'},
    {'name': 'Images/logoSENSE_S4.png', 'path': 'Images/logoSENSE_S4.png'},
    {'name': 'Images/Mots.png', 'path': 'Images/Mots.png'},
    {'name': 'Images/Diagramme Score IAT.png', 'path': 'Images/Diagramme Score IAT.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_end;
var mosaique;
var logo;
var instructionsClock;
var instructions_text;
var instructions_end;
var mosaique_2;
var ready_testClock;
var leftw;
var leftw_color;
var rightw;
var rightw_color;
var ready_text_2;
var ready_end_2;
var rightcat_3;
var leftcat_3;
var trial_testClock;
var rightcat_color;
var fixation_2;
var text_stim_2;
var keyboard_resp_2;
var rightcat_4;
var leftcat_4;
var error_msg_2;
var transition_testClock;
var cross_2;
var error_msg_slow_2;
var msg_error_fast_2;
var text_2;
var wordsClock;
var all_words;
var words_end;
var mosaique_3;
var Mots;
var repeat_instructionsClock;
var repeat_text;
var keyboard_resp_repeat;
var readyClock;
var top_leftw;
var top_leftw_color;
var bot_leftw;
var bot_leftw_color;
var top_rightw;
var top_rightw_color;
var bot_rightw;
var bot_rightw_color;
var ready_text;
var ready_end;
var rightcat_2;
var top_rightcat_2;
var bot_rightcat_2;
var leftcat_2;
var bot_leftcat_2;
var top_leftcat_2;
var trialClock;
var text_stim_color;
var liste_mots_genre;
var liste_mots_sciences;
var rt_block3;
var corr_rt_block3;
var incorr_rt_block3;
var err_block3;
var rt_block4;
var corr_rt_block4;
var incorr_rt_block4;
var err_block4;
var rt_block6;
var corr_rt_block6;
var incorr_rt_block6;
var err_block6;
var rt_block7;
var corr_rt_block7;
var incorr_rt_block7;
var err_block7;
var fast_responses;
var slow_responses;
var total_responses;
var num_errors;
var fixation;
var text_stim;
var keyboard_resp;
var error_msg;
var rightcat;
var top_rightcat;
var bot_rightcat;
var leftcat;
var bot_leftcat;
var top_leftcat;
var transitionClock;
var cross;
var scoreClock;
var score_feedback;
var end_score;
var adapted_fb;
var skip_score;
var score2Clock;
var score_meaning_2;
var end_score_2;
var gradient;
var endClock;
var text;
var end_key_resp;
var mosaique_4;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: "Bienvenue dans ce Test d'Associations Implicites Sciences et Genre. \n\nPour effectuer ce test, vous n'aurez besoin que de votre clavier. Il durera environ 5 minutes. Vous pouvez quitter le test à tout moment en appuyant sur la touche échap de votre clavier.\n\nAppuyez sur la barre espace pour passer à l'étape suivante.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mosaique = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mosaique', units : 'norm', 
    image : 'Images/mosaiques2.png', mask : undefined,
    anchor : 'bottom-left',
    ori : 0.0, pos : [(- 1), (- 1)], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  logo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'logo', units : undefined, 
    image : 'Images/logoSENSE_S4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.4], size : [(0.1803 * 2), (0.0669 * 2)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mosaique_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mosaique_2', units : 'norm', 
    image : 'Images/mosaiques2.png', mask : undefined,
    anchor : 'bottom-left',
    ori : 0.0, pos : [(- 1), (- 1)], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "ready_test"
  ready_testClock = new util.Clock();
  // Run 'Begin Experiment' code from text_color_3
  leftw = "";
  leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  rightw = "";
  rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  
  ready_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ready_text_2',
    text: 'Voici les catégories dans lesquelles vous devrez classer les mots qui apparaîtront à l\'écran.\n\nPositionnez vos doigts sur les touches "E" et "I". Répondez le plus vite possible sans faire d\'erreur. En cas d\'erreur, appuyez sur la touche correcte pour continuer.\n\nAppuyez sur la barre espace pour commencer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -1.0 
  });
  
  ready_end_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rightcat_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightcat_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  leftcat_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftcat_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "trial_test"
  trial_testClock = new util.Clock();
  // Run 'Begin Experiment' code from text_color_4
  leftw = "";
  leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  rightw = "";
  rightcat_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  
  fixation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0, 0, 0]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_stim_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stim_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  keyboard_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rightcat_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightcat_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  leftcat_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftcat_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  error_msg_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'error_msg_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -8.0 
  });
  
  // Initialize components for Routine "transition_test"
  transition_testClock = new util.Clock();
  cross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0, 0, 0]),  opacity: undefined,
    depth: 0.0 
  });
  
  error_msg_slow_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'error_msg_slow_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  msg_error_fast_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_error_fast_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "words"
  wordsClock = new util.Clock();
  all_words = new visual.TextStim({
    win: psychoJS.window,
    name: 'all_words',
    text: "Cette version de l'IAT mesure les stéréotypes de genre dans les sciences. Voici les catégories et les mots associés utilisés lors de ce test : \n\n\n\n\n\n\n\nAppuyez sur la barre espace pour passer à l'étape suivante.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: 0.0 
  });
  
  words_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mosaique_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mosaique_3', units : 'norm', 
    image : 'Images/mosaiques2.png', mask : undefined,
    anchor : 'bottom-left',
    ori : 0.0, pos : [(- 1), (- 1)], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  Mots = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Mots', units : undefined, 
    image : 'Images/Mots.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [(1.386 * 0.93), (0.267 * 0.93)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "repeat_instructions"
  repeat_instructionsClock = new util.Clock();
  repeat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'repeat_text',
    text: 'Souhaitez-vous répéter les instructions ? \n\nAppuyez sur la touche "E" pour relire les instructions et repasser la partie d\'entraînement. \n\nAppuyez sur "I" pour débuter le test.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -1.0 
  });
  
  keyboard_resp_repeat = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  // Run 'Begin Experiment' code from text_color_2
  top_leftw = "";
  top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  bot_leftw = "";
  bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  leftw = "";
  leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  rightw = "";
  rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  top_rightw = "";
  top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  bot_rightw = "";
  bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  
  ready_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ready_text',
    text: 'Voici les catégories dans lesquelles vous devrez classer les mots qui apparaîtront à l\'écran.\n\nPositionnez vos doigts sur les touches "E" et "I". Répondez le plus vite possible sans faire d\'erreur. En cas d\'erreur, appuyez sur la touche correcte pour continuer.\n\nAppuyez sur la barre espace pour commencer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -1.0 
  });
  
  ready_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rightcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  top_rightcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_rightcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.43], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  bot_rightcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_rightcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.37], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  leftcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  bot_leftcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_leftcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.37], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  top_leftcat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_leftcat_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.43], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from text_color
  top_leftw = "";
  top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  bot_leftw = "";
  bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  leftw = "";
  leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  rightw = "";
  rightcat_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  top_rightw = "";
  top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  bot_rightw = "";
  bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  text_stim_color = [(- 0.9137), (- 0.749), (- 0.6941)];
  liste_mots_genre = ["Demoiselle", "Gar\u00e7on", "Femme", "Homme", "Tante", "Oncle", "Fille", "Fils", "F\u00e9minin", "Masculin"];
  liste_mots_sciences = ["Biologie", "Philosophie", "Physique", "Humanit\u00e9s", "Chimie", "Arts", "Math\u00e9matiques", "Litt\u00e9rature", "Informatique", "Latin"];
  
  // Run 'Begin Experiment' code from compute_score
  rt_block3 = [];
  corr_rt_block3 = [];
  incorr_rt_block3 = [];
  err_block3 = 0;
  rt_block4 = [];
  corr_rt_block4 = [];
  incorr_rt_block4 = [];
  err_block4 = 0;
  rt_block6 = [];
  corr_rt_block6 = [];
  incorr_rt_block6 = [];
  err_block6 = 0;
  rt_block7 = [];
  corr_rt_block7 = [];
  incorr_rt_block7 = [];
  err_block7 = 0;
  fast_responses = 0;
  slow_responses = 0;
  total_responses = 0;
  num_errors = 0;
  
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0, 0, 0]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  keyboard_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  error_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'error_msg',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -6.0 
  });
  
  rightcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  top_rightcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_rightcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.43], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  bot_rightcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_rightcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.37], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  leftcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  bot_leftcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_leftcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.37], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  top_leftcat = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_leftcat',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.43], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "transition"
  transitionClock = new util.Clock();
  cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0, 0, 0]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "score"
  scoreClock = new util.Clock();
  score_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -1.0 
  });
  
  end_score = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adapted_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'adapted_fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -3.0 
  });
  
  skip_score = new visual.TextStim({
    win: psychoJS.window,
    name: 'skip_score',
    text: 'Appuyez sur la barre espace pour terminer le test',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "score2"
  score2Clock = new util.Clock();
  score_meaning_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_meaning_2',
    text: 'Un score positif correspond à des associations stéréotypiques et un score négatif à des associations contre-stéréotypiques. Plus sa valeur est proche de -2 ou 2, plus les associations sont fortes.\n\nLe score moyen d\'un échantillon français est de 0.43\nLe score moyen international de 0.38\n\nPour terminer le test, appuyez sur la barre espace. Pour le recommencer, appuyez sur la touche "E".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.08], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: -1.0 
  });
  
  end_score_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  gradient = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gradient', units : undefined, 
    image : 'Images/Diagramme Score IAT.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.4)], size : [1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "Ce test d'associations implicites est terminé. Nous vous remercions d'y avoir pris part. Aucune donnée n'est conservée à l'issue de ce test, qui ne sert qu'à rendre compte de ses propres stéréotypes. Ainsi, si votre score est positif, vous êtes sujets aux stéréotypes sur les femmes dans les sciences.\n\nVous pouvez quitter l'expérience en appuyant sur n'importe quelle touche.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.349), (- 0.1373), (- 0.0196)]),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mosaique_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mosaique_4', units : 'norm', 
    image : 'Images/mosaiques2.png', mask : undefined,
    anchor : 'bottom-left',
    ori : 0.0, pos : [(- 1), (- 1)], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _welcome_end_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcome_end.keys = undefined;
    welcome_end.rt = undefined;
    _welcome_end_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_end);
    welcomeComponents.push(mosaique);
    welcomeComponents.push(logo);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // *welcome_end* updates
    if (t >= 1 && welcome_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_end.tStart = t;  // (not accounting for frame time here)
      welcome_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      welcome_end.clock.reset();
      welcome_end.start();
    }
    
    if (welcome_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_end.getKeys({keyList: ['space'], waitRelease: false});
      _welcome_end_allKeys = _welcome_end_allKeys.concat(theseKeys);
      if (_welcome_end_allKeys.length > 0) {
        welcome_end.keys = _welcome_end_allKeys[_welcome_end_allKeys.length - 1].name;  // just the last key pressed
        welcome_end.rt = _welcome_end_allKeys[_welcome_end_allKeys.length - 1].rt;
        welcome_end.duration = _welcome_end_allKeys[_welcome_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *mosaique* updates
    if (t >= 0.0 && mosaique.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mosaique.tStart = t;  // (not accounting for frame time here)
      mosaique.frameNStart = frameN;  // exact frame index
      
      mosaique.setAutoDraw(true);
    }
    
    
    // *logo* updates
    if (t >= 0.0 && logo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      logo.tStart = t;  // (not accounting for frame time here)
      logo.frameNStart = frameN;  // exact frame index
      
      logo.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    welcome_end.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var repeat_inst;
function repeat_instLoopBegin(repeat_instLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_inst = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'rep_inst.xlsx',
      seed: undefined, name: 'repeat_inst'
    });
    psychoJS.experiment.addLoop(repeat_inst); // add the loop to the experiment
    currentLoop = repeat_inst;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeat_inst of repeat_inst) {
      snapshot = repeat_inst.getSnapshot();
      repeat_instLoopScheduler.add(importConditions(snapshot));
      const instructions_loopLoopScheduler = new Scheduler(psychoJS);
      repeat_instLoopScheduler.add(instructions_loopLoopBegin(instructions_loopLoopScheduler, snapshot));
      repeat_instLoopScheduler.add(instructions_loopLoopScheduler);
      repeat_instLoopScheduler.add(instructions_loopLoopEnd);
      const blocks_testLoopScheduler = new Scheduler(psychoJS);
      repeat_instLoopScheduler.add(blocks_testLoopBegin(blocks_testLoopScheduler, snapshot));
      repeat_instLoopScheduler.add(blocks_testLoopScheduler);
      repeat_instLoopScheduler.add(blocks_testLoopEnd);
      repeat_instLoopScheduler.add(wordsRoutineBegin(snapshot));
      repeat_instLoopScheduler.add(wordsRoutineEachFrame());
      repeat_instLoopScheduler.add(wordsRoutineEnd(snapshot));
      repeat_instLoopScheduler.add(repeat_instructionsRoutineBegin(snapshot));
      repeat_instLoopScheduler.add(repeat_instructionsRoutineEachFrame());
      repeat_instLoopScheduler.add(repeat_instructionsRoutineEnd(snapshot));
      repeat_instLoopScheduler.add(repeat_instLoopEndIteration(repeat_instLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var instructions_loop;
function instructions_loopLoopBegin(instructions_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructs.xlsx',
      seed: undefined, name: 'instructions_loop'
    });
    psychoJS.experiment.addLoop(instructions_loop); // add the loop to the experiment
    currentLoop = instructions_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstructions_loop of instructions_loop) {
      snapshot = instructions_loop.getSnapshot();
      instructions_loopLoopScheduler.add(importConditions(snapshot));
      instructions_loopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      instructions_loopLoopScheduler.add(instructionsRoutineEachFrame());
      instructions_loopLoopScheduler.add(instructionsRoutineEnd(snapshot));
      instructions_loopLoopScheduler.add(instructions_loopLoopEndIteration(instructions_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instructions_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructions_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks_test;
function blocks_testLoopBegin(blocks_testLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_test = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'b_o - test.xlsx',
      seed: undefined, name: 'blocks_test'
    });
    psychoJS.experiment.addLoop(blocks_test); // add the loop to the experiment
    currentLoop = blocks_test;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlocks_test of blocks_test) {
      snapshot = blocks_test.getSnapshot();
      blocks_testLoopScheduler.add(importConditions(snapshot));
      blocks_testLoopScheduler.add(ready_testRoutineBegin(snapshot));
      blocks_testLoopScheduler.add(ready_testRoutineEachFrame());
      blocks_testLoopScheduler.add(ready_testRoutineEnd(snapshot));
      const trials_testLoopScheduler = new Scheduler(psychoJS);
      blocks_testLoopScheduler.add(trials_testLoopBegin(trials_testLoopScheduler, snapshot));
      blocks_testLoopScheduler.add(trials_testLoopScheduler);
      blocks_testLoopScheduler.add(trials_testLoopEnd);
      blocks_testLoopScheduler.add(blocks_testLoopEndIteration(blocks_testLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_test;
function trials_testLoopBegin(trials_testLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_test = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conds_file_test,
      seed: undefined, name: 'trials_test'
    });
    psychoJS.experiment.addLoop(trials_test); // add the loop to the experiment
    currentLoop = trials_test;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_test of trials_test) {
      snapshot = trials_test.getSnapshot();
      trials_testLoopScheduler.add(importConditions(snapshot));
      trials_testLoopScheduler.add(trial_testRoutineBegin(snapshot));
      trials_testLoopScheduler.add(trial_testRoutineEachFrame());
      trials_testLoopScheduler.add(trial_testRoutineEnd(snapshot));
      trials_testLoopScheduler.add(transition_testRoutineBegin(snapshot));
      trials_testLoopScheduler.add(transition_testRoutineEachFrame());
      trials_testLoopScheduler.add(transition_testRoutineEnd(snapshot));
      trials_testLoopScheduler.add(trials_testLoopEndIteration(trials_testLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_testLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_test);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_testLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_testLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_test);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_testLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_instLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_inst);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_instLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var repeat_trials;
function repeat_trialsLoopBegin(repeat_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'repTrials.xlsx',
      seed: undefined, name: 'repeat_trials'
    });
    psychoJS.experiment.addLoop(repeat_trials); // add the loop to the experiment
    currentLoop = repeat_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeat_trial of repeat_trials) {
      snapshot = repeat_trials.getSnapshot();
      repeat_trialsLoopScheduler.add(importConditions(snapshot));
      const blocksLoopScheduler = new Scheduler(psychoJS);
      repeat_trialsLoopScheduler.add(blocksLoopBegin(blocksLoopScheduler, snapshot));
      repeat_trialsLoopScheduler.add(blocksLoopScheduler);
      repeat_trialsLoopScheduler.add(blocksLoopEnd);
      repeat_trialsLoopScheduler.add(scoreRoutineBegin(snapshot));
      repeat_trialsLoopScheduler.add(scoreRoutineEachFrame());
      repeat_trialsLoopScheduler.add(scoreRoutineEnd(snapshot));
      repeat_trialsLoopScheduler.add(score2RoutineBegin(snapshot));
      repeat_trialsLoopScheduler.add(score2RoutineEachFrame());
      repeat_trialsLoopScheduler.add(score2RoutineEnd(snapshot));
      repeat_trialsLoopScheduler.add(repeat_trialsLoopEndIteration(repeat_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks_order - long.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(readyRoutineBegin(snapshot));
      blocksLoopScheduler.add(readyRoutineEachFrame());
      blocksLoopScheduler.add(readyRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conds_file,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(transitionRoutineBegin(snapshot));
      trialsLoopScheduler.add(transitionRoutineEachFrame());
      trialsLoopScheduler.add(transitionRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _instructions_end_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructions_text.setText(instruct_text);
    instructions_end.keys = undefined;
    instructions_end.rt = undefined;
    _instructions_end_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_text);
    instructionsComponents.push(instructions_end);
    instructionsComponents.push(mosaique_2);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_text* updates
    if (t >= 0.0 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }
    
    
    // *instructions_end* updates
    if (t >= 1.0 && instructions_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_end.tStart = t;  // (not accounting for frame time here)
      instructions_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instructions_end.clock.reset();
      instructions_end.start();
    }
    
    if (instructions_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_end.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_end_allKeys = _instructions_end_allKeys.concat(theseKeys);
      if (_instructions_end_allKeys.length > 0) {
        instructions_end.keys = _instructions_end_allKeys[_instructions_end_allKeys.length - 1].name;  // just the last key pressed
        instructions_end.rt = _instructions_end_allKeys[_instructions_end_allKeys.length - 1].rt;
        instructions_end.duration = _instructions_end_allKeys[_instructions_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *mosaique_2* updates
    if (t >= 0.0 && mosaique_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mosaique_2.tStart = t;  // (not accounting for frame time here)
      mosaique_2.frameNStart = frameN;  // exact frame index
      
      mosaique_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instructions_end.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _ready_end_2_allKeys;
var ready_testComponents;
function ready_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready_test' ---
    t = 0;
    ready_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from text_color_3
    leftw = "\"E\" = Gauche";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "\"I\" = Droite";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    text_stim_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
    
    ready_end_2.keys = undefined;
    ready_end_2.rt = undefined;
    _ready_end_2_allKeys = [];
    rightcat_3.setColor(new util.Color(rightw_color));
    rightcat_3.setText(rightw);
    leftcat_3.setColor(new util.Color(leftw_color));
    leftcat_3.setText(leftw);
    // keep track of which components have finished
    ready_testComponents = [];
    ready_testComponents.push(ready_text_2);
    ready_testComponents.push(ready_end_2);
    ready_testComponents.push(rightcat_3);
    ready_testComponents.push(leftcat_3);
    
    for (const thisComponent of ready_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ready_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready_test' ---
    // get current time
    t = ready_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ready_text_2* updates
    if (t >= 0.0 && ready_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_text_2.tStart = t;  // (not accounting for frame time here)
      ready_text_2.frameNStart = frameN;  // exact frame index
      
      ready_text_2.setAutoDraw(true);
    }
    
    
    // *ready_end_2* updates
    if (t >= 1.0 && ready_end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_end_2.tStart = t;  // (not accounting for frame time here)
      ready_end_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      ready_end_2.clock.reset();
      ready_end_2.start();
    }
    
    if (ready_end_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_end_2.getKeys({keyList: ['space'], waitRelease: false});
      _ready_end_2_allKeys = _ready_end_2_allKeys.concat(theseKeys);
      if (_ready_end_2_allKeys.length > 0) {
        ready_end_2.keys = _ready_end_2_allKeys[_ready_end_2_allKeys.length - 1].name;  // just the last key pressed
        ready_end_2.rt = _ready_end_2_allKeys[_ready_end_2_allKeys.length - 1].rt;
        ready_end_2.duration = _ready_end_2_allKeys[_ready_end_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *rightcat_3* updates
    if (t >= 0 && rightcat_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightcat_3.tStart = t;  // (not accounting for frame time here)
      rightcat_3.frameNStart = frameN;  // exact frame index
      
      rightcat_3.setAutoDraw(true);
    }
    
    
    // *leftcat_3* updates
    if (t >= 0 && leftcat_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftcat_3.tStart = t;  // (not accounting for frame time here)
      leftcat_3.frameNStart = frameN;  // exact frame index
      
      leftcat_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ready_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ready_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready_test' ---
    for (const thisComponent of ready_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from text_color_3
    top_leftw = "";
    top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_leftw = "";
    bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    leftw = "";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    top_rightw = "";
    top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_rightw = "";
    bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    
    ready_end_2.stop();
    // the Routine "ready_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var slow;
var fast;
var cor_resp;
var _keyboard_resp_2_allKeys;
var trial_testComponents;
function trial_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_test' ---
    t = 0;
    trial_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from check_rt
    slow = 0;
    fast = 0;
    
    // Run 'Begin Routine' code from text_color_4
    leftw = "\"E\" = Gauche";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "\"I\" = Droite";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    text_stim_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
    
    // Run 'Begin Routine' code from check_corr_2
    cor_resp = 1;
    
    text_stim_2.setColor(new util.Color(text_stim_color));
    text_stim_2.setText(stimWordTest);
    keyboard_resp_2.keys = undefined;
    keyboard_resp_2.rt = undefined;
    _keyboard_resp_2_allKeys = [];
    rightcat_4.setColor(new util.Color(rightw_color));
    rightcat_4.setText(rightw);
    leftcat_4.setColor(new util.Color(leftw_color));
    leftcat_4.setText(leftw);
    error_msg_2.setText('Erreur');
    // keep track of which components have finished
    trial_testComponents = [];
    trial_testComponents.push(fixation_2);
    trial_testComponents.push(text_stim_2);
    trial_testComponents.push(keyboard_resp_2);
    trial_testComponents.push(rightcat_4);
    trial_testComponents.push(leftcat_4);
    trial_testComponents.push(error_msg_2);
    
    for (const thisComponent of trial_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_test' ---
    // get current time
    t = trial_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from check_corr_2
    if (keyboard_resp_2.keys) {
        if (((keyboard_resp_2.keys[0] !== CorrAnsTest) && (keyboard_resp_2.keys.length > 0))) {
            cor_resp = 0;
        } else {
            cor_resp = 1;
        }
    }
    if (keyboard_resp_2.keys) {
        if (((keyboard_resp_2.keys.length > 0) && (keyboard_resp_2.keys.slice((- 1))[0] === CorrAnsTest))) {
            keyboard_resp_2.corr = true;
            continueRoutine = false;
        }
    }
    
    
    // *fixation_2* updates
    if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
    }
    
    
    // *text_stim_2* updates
    if (t >= 0.5 && text_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stim_2.tStart = t;  // (not accounting for frame time here)
      text_stim_2.frameNStart = frameN;  // exact frame index
      
      text_stim_2.setAutoDraw(true);
    }
    
    
    // *keyboard_resp_2* updates
    if (t >= 0.5 && keyboard_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboard_resp_2.tStart = t;  // (not accounting for frame time here)
      keyboard_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboard_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp_2.clearEvents(); });
    }
    
    if (keyboard_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboard_resp_2.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _keyboard_resp_2_allKeys = _keyboard_resp_2_allKeys.concat(theseKeys);
      if (_keyboard_resp_2_allKeys.length > 0) {
        keyboard_resp_2.keys = _keyboard_resp_2_allKeys.map((key) => key.name);  // storing all keys
        keyboard_resp_2.rt = _keyboard_resp_2_allKeys.map((key) => key.rt);
        keyboard_resp_2.duration = _keyboard_resp_2_allKeys.map((key) => key.duration);
        // was this correct?
        if (keyboard_resp_2.keys == CorrAnsTest) {
            keyboard_resp_2.corr = 1;
        } else {
            keyboard_resp_2.corr = 0;
        }
      }
    }
    
    
    // *rightcat_4* updates
    if (t >= 0 && rightcat_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightcat_4.tStart = t;  // (not accounting for frame time here)
      rightcat_4.frameNStart = frameN;  // exact frame index
      
      rightcat_4.setAutoDraw(true);
    }
    
    
    // *leftcat_4* updates
    if (t >= 0 && leftcat_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftcat_4.tStart = t;  // (not accounting for frame time here)
      leftcat_4.frameNStart = frameN;  // exact frame index
      
      leftcat_4.setAutoDraw(true);
    }
    
    
    // *error_msg_2* updates
    if (((cor_resp == 0)) && error_msg_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_msg_2.tStart = t;  // (not accounting for frame time here)
      error_msg_2.frameNStart = frameN;  // exact frame index
      
      error_msg_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_test' ---
    for (const thisComponent of trial_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from check_rt
    if ((keyboard_resp_2.keys && (keyboard_resp_2.rt.slice((- 1))[0] > 3))) {
        slow = 1;
    } else {
        if ((keyboard_resp_2.keys && (keyboard_resp_2.rt.slice((- 1))[0] < 0.3))) {
            fast = 1;
        }
    }
    keyboard_resp_2.keys = [];
    
    // Run 'End Routine' code from text_color_4
    top_leftw = "";
    top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_leftw = "";
    bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    leftw = "";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    top_rightw = "";
    top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_rightw = "";
    bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    text_stim_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    
    // was no response the correct answer?!
    if (keyboard_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(CorrAnsTest)) {
         keyboard_resp_2.corr = 1;  // correct non-response
      } else {
         keyboard_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyboard_resp_2.corr, level);
    }
    psychoJS.experiment.addData('keyboard_resp_2.keys', keyboard_resp_2.keys);
    psychoJS.experiment.addData('keyboard_resp_2.corr', keyboard_resp_2.corr);
    if (typeof keyboard_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyboard_resp_2.rt', keyboard_resp_2.rt);
        psychoJS.experiment.addData('keyboard_resp_2.duration', keyboard_resp_2.duration);
        }
    
    keyboard_resp_2.stop();
    // the Routine "trial_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var transition_testComponents;
function transition_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'transition_test' ---
    t = 0;
    transition_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    transition_testComponents = [];
    transition_testComponents.push(cross_2);
    transition_testComponents.push(error_msg_slow_2);
    transition_testComponents.push(msg_error_fast_2);
    transition_testComponents.push(text_2);
    
    for (const thisComponent of transition_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function transition_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'transition_test' ---
    // get current time
    t = transition_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross_2* updates
    if (t >= 0.0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_2.setAutoDraw(false);
    }
    
    
    if (error_msg_slow_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      error_msg_slow_2.setText('Trop lent !', false);
    }
    
    // *error_msg_slow_2* updates
    if (((slow == 1)) && error_msg_slow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_msg_slow_2.tStart = t;  // (not accounting for frame time here)
      error_msg_slow_2.frameNStart = frameN;  // exact frame index
      
      error_msg_slow_2.setAutoDraw(true);
    }
    
    if (error_msg_slow_2.status === PsychoJS.Status.STARTED && t >= (error_msg_slow_2.tStart + 0.5)) {
      error_msg_slow_2.setAutoDraw(false);
    }
    
    
    if (msg_error_fast_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      msg_error_fast_2.setText('Trop rapide !', false);
    }
    
    // *msg_error_fast_2* updates
    if (((fast == 1)) && msg_error_fast_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      msg_error_fast_2.tStart = t;  // (not accounting for frame time here)
      msg_error_fast_2.frameNStart = frameN;  // exact frame index
      
      msg_error_fast_2.setAutoDraw(true);
    }
    
    if (msg_error_fast_2.status === PsychoJS.Status.STARTED && t >= (msg_error_fast_2.tStart + 0.5)) {
      msg_error_fast_2.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.51 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code
    if ((t >= 0.5)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transition_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function transition_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'transition_test' ---
    for (const thisComponent of transition_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "transition_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _words_end_allKeys;
var wordsComponents;
function wordsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'words' ---
    t = 0;
    wordsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    words_end.keys = undefined;
    words_end.rt = undefined;
    _words_end_allKeys = [];
    // keep track of which components have finished
    wordsComponents = [];
    wordsComponents.push(all_words);
    wordsComponents.push(words_end);
    wordsComponents.push(mosaique_3);
    wordsComponents.push(Mots);
    
    for (const thisComponent of wordsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wordsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'words' ---
    // get current time
    t = wordsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *all_words* updates
    if (t >= 0.0 && all_words.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      all_words.tStart = t;  // (not accounting for frame time here)
      all_words.frameNStart = frameN;  // exact frame index
      
      all_words.setAutoDraw(true);
    }
    
    
    // *words_end* updates
    if (t >= 1.0 && words_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      words_end.tStart = t;  // (not accounting for frame time here)
      words_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      words_end.clock.reset();
      words_end.start();
    }
    
    if (words_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = words_end.getKeys({keyList: ['space'], waitRelease: false});
      _words_end_allKeys = _words_end_allKeys.concat(theseKeys);
      if (_words_end_allKeys.length > 0) {
        words_end.keys = _words_end_allKeys[_words_end_allKeys.length - 1].name;  // just the last key pressed
        words_end.rt = _words_end_allKeys[_words_end_allKeys.length - 1].rt;
        words_end.duration = _words_end_allKeys[_words_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *mosaique_3* updates
    if (t >= 0.0 && mosaique_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mosaique_3.tStart = t;  // (not accounting for frame time here)
      mosaique_3.frameNStart = frameN;  // exact frame index
      
      mosaique_3.setAutoDraw(true);
    }
    
    
    // *Mots* updates
    if (t >= 0.0 && Mots.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mots.tStart = t;  // (not accounting for frame time here)
      Mots.frameNStart = frameN;  // exact frame index
      
      Mots.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wordsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wordsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'words' ---
    for (const thisComponent of wordsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    words_end.stop();
    // the Routine "words" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyboard_resp_repeat_allKeys;
var repeat_instructionsComponents;
function repeat_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'repeat_instructions' ---
    t = 0;
    repeat_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('repeat_instructions.started', globalClock.getTime());
    keyboard_resp_repeat.keys = undefined;
    keyboard_resp_repeat.rt = undefined;
    _keyboard_resp_repeat_allKeys = [];
    // keep track of which components have finished
    repeat_instructionsComponents = [];
    repeat_instructionsComponents.push(repeat_text);
    repeat_instructionsComponents.push(keyboard_resp_repeat);
    
    for (const thisComponent of repeat_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function repeat_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'repeat_instructions' ---
    // get current time
    t = repeat_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from check_key
    /*if keyboard_resp_repeat.keys:
    if len(keyboard_resp_repeat.keys) > 0 and keyboard_resp_repeat.keys[-1] != repAns: #vérifie si la touche est I et passe à l'essai suivant le cas échéant
    repeat_inst.finished=1
    elif len(keyboard_resp_repeat.keys) > 0 and keyboard_resp_repeat.keys[-1] == repAns:
    continueRoutine = False
    */
    
    
    // *repeat_text* updates
    if (t >= 0.0 && repeat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repeat_text.tStart = t;  // (not accounting for frame time here)
      repeat_text.frameNStart = frameN;  // exact frame index
      
      repeat_text.setAutoDraw(true);
    }
    
    
    // *keyboard_resp_repeat* updates
    if (t >= 1 && keyboard_resp_repeat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboard_resp_repeat.tStart = t;  // (not accounting for frame time here)
      keyboard_resp_repeat.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboard_resp_repeat.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp_repeat.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp_repeat.clearEvents(); });
    }
    
    if (keyboard_resp_repeat.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboard_resp_repeat.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _keyboard_resp_repeat_allKeys = _keyboard_resp_repeat_allKeys.concat(theseKeys);
      if (_keyboard_resp_repeat_allKeys.length > 0) {
        keyboard_resp_repeat.keys = _keyboard_resp_repeat_allKeys.map((key) => key.name);  // storing all keys
        keyboard_resp_repeat.rt = _keyboard_resp_repeat_allKeys.map((key) => key.rt);
        keyboard_resp_repeat.duration = _keyboard_resp_repeat_allKeys.map((key) => key.duration);
        // was this correct?
        if (keyboard_resp_repeat.keys == repAns) {
            keyboard_resp_repeat.corr = 1;
        } else {
            keyboard_resp_repeat.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of repeat_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function repeat_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'repeat_instructions' ---
    for (const thisComponent of repeat_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('repeat_instructions.stopped', globalClock.getTime());
    // Run 'End Routine' code from check_key
    if (keyboard_resp_repeat.keys) {
        if (((keyboard_resp_repeat.keys.length > 0) && (keyboard_resp_repeat.keys.slice((- 1))[0] !== repAns))) {
            repeat_inst.finished = 1;
            continueRoutine = false;
        } else {
            if (((keyboard_resp_repeat.keys.length > 0) && (keyboard_resp_repeat.keys.slice((- 1))[0] === repAns))) {
                continueRoutine = false;
            }
        }
    }
    
    // was no response the correct answer?!
    if (keyboard_resp_repeat.keys === undefined) {
      if (['None','none',undefined].includes(repAns)) {
         keyboard_resp_repeat.corr = 1;  // correct non-response
      } else {
         keyboard_resp_repeat.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyboard_resp_repeat.corr, level);
    }
    psychoJS.experiment.addData('keyboard_resp_repeat.keys', keyboard_resp_repeat.keys);
    psychoJS.experiment.addData('keyboard_resp_repeat.corr', keyboard_resp_repeat.corr);
    if (typeof keyboard_resp_repeat.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyboard_resp_repeat.rt', keyboard_resp_repeat.rt);
        psychoJS.experiment.addData('keyboard_resp_repeat.duration', keyboard_resp_repeat.duration);
        routineTimer.reset();
        }
    
    keyboard_resp_repeat.stop();
    // the Routine "repeat_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var _ready_end_allKeys;
var readyComponents;
function readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready' ---
    t = 0;
    readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from text_color_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("\"E\" = Sciences", label_left)) {
        leftw = "\"E\" = Sciences";
        leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    } else {
        if (_pj.in_es6("\"E\" = Masculin  ", label_left)) {
            leftw = "\"E\" = Masculin";
            leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
        } else {
            if (_pj.in_es6("\"E\" = Masculin ou Sciences", label_left)) {
                top_leftw = "\"E\" = Masculin";
                top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                bot_leftw = "ou Sciences";
                bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
            } else {
                if (_pj.in_es6("\"E\" = Lettres", label_left)) {
                    leftw = "\"E\" = Lettres";
                    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                } else {
                    if (_pj.in_es6("\"E\" = Masculin ou Lettres", label_left)) {
                        top_leftw = "\"E\" = Masculin";
                        top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_leftw = "ou Lettres";
                        bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                    } else {
                        top_leftw = "\"E\" = elsem";
                        top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_leftw = "ou else";
                        bot_leftw_color = "black";
                        leftw = "\"E\" = else";
                        leftw_color = "black";
                    }
                }
            }
        }
    }
    if (_pj.in_es6("\"I\" = Lettres", label_right)) {
        rightw = "\"I\" = Lettres";
        rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    } else {
        if (_pj.in_es6("\"I\" = F\u00e9minin  ", label_right)) {
            rightw = "\"I\" = F\u00e9minin";
            rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
        } else {
            if (_pj.in_es6("\"I\" = F\u00e9minin ou Lettres", label_right)) {
                top_rightw = "\"I\" = F\u00e9minin";
                top_rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                bot_rightw = "ou Lettres";
                bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
            } else {
                if (_pj.in_es6("\"I\" = Sciences", label_right)) {
                    rightw = "\"I\" = Sciences";
                    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                } else {
                    if (_pj.in_es6("\"I\" = F\u00e9minin ou Sciences", label_right)) {
                        top_rightw = "\"I\" = F\u00e9minin";
                        top_rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_rightw = "ou Sciences";
                        bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                    }
                }
            }
        }
    }
    
    ready_end.keys = undefined;
    ready_end.rt = undefined;
    _ready_end_allKeys = [];
    rightcat_2.setColor(new util.Color(rightw_color));
    rightcat_2.setText(rightw);
    top_rightcat_2.setColor(new util.Color(top_rightw_color));
    top_rightcat_2.setText(top_rightw);
    bot_rightcat_2.setColor(new util.Color(bot_rightw_color));
    bot_rightcat_2.setText(bot_rightw);
    leftcat_2.setColor(new util.Color(leftw_color));
    leftcat_2.setText(leftw);
    bot_leftcat_2.setColor(new util.Color(bot_leftw_color));
    bot_leftcat_2.setText(bot_leftw);
    top_leftcat_2.setColor(new util.Color(top_leftw_color));
    top_leftcat_2.setText(top_leftw);
    // keep track of which components have finished
    readyComponents = [];
    readyComponents.push(ready_text);
    readyComponents.push(ready_end);
    readyComponents.push(rightcat_2);
    readyComponents.push(top_rightcat_2);
    readyComponents.push(bot_rightcat_2);
    readyComponents.push(leftcat_2);
    readyComponents.push(bot_leftcat_2);
    readyComponents.push(top_leftcat_2);
    
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready' ---
    // get current time
    t = readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ready_text* updates
    if (t >= 0.0 && ready_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_text.tStart = t;  // (not accounting for frame time here)
      ready_text.frameNStart = frameN;  // exact frame index
      
      ready_text.setAutoDraw(true);
    }
    
    
    // *ready_end* updates
    if (t >= 1.0 && ready_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_end.tStart = t;  // (not accounting for frame time here)
      ready_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      ready_end.clock.reset();
      ready_end.start();
    }
    
    if (ready_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_end.getKeys({keyList: ['space'], waitRelease: false});
      _ready_end_allKeys = _ready_end_allKeys.concat(theseKeys);
      if (_ready_end_allKeys.length > 0) {
        ready_end.keys = _ready_end_allKeys[_ready_end_allKeys.length - 1].name;  // just the last key pressed
        ready_end.rt = _ready_end_allKeys[_ready_end_allKeys.length - 1].rt;
        ready_end.duration = _ready_end_allKeys[_ready_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *rightcat_2* updates
    if (t >= 0 && rightcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightcat_2.tStart = t;  // (not accounting for frame time here)
      rightcat_2.frameNStart = frameN;  // exact frame index
      
      rightcat_2.setAutoDraw(true);
    }
    
    
    // *top_rightcat_2* updates
    if (t >= 0 && top_rightcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_rightcat_2.tStart = t;  // (not accounting for frame time here)
      top_rightcat_2.frameNStart = frameN;  // exact frame index
      
      top_rightcat_2.setAutoDraw(true);
    }
    
    
    // *bot_rightcat_2* updates
    if (t >= 0 && bot_rightcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bot_rightcat_2.tStart = t;  // (not accounting for frame time here)
      bot_rightcat_2.frameNStart = frameN;  // exact frame index
      
      bot_rightcat_2.setAutoDraw(true);
    }
    
    
    // *leftcat_2* updates
    if (t >= 0 && leftcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftcat_2.tStart = t;  // (not accounting for frame time here)
      leftcat_2.frameNStart = frameN;  // exact frame index
      
      leftcat_2.setAutoDraw(true);
    }
    
    
    // *bot_leftcat_2* updates
    if (t >= 0 && bot_leftcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bot_leftcat_2.tStart = t;  // (not accounting for frame time here)
      bot_leftcat_2.frameNStart = frameN;  // exact frame index
      
      bot_leftcat_2.setAutoDraw(true);
    }
    
    
    // *top_leftcat_2* updates
    if (t >= 0 && top_leftcat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_leftcat_2.tStart = t;  // (not accounting for frame time here)
      top_leftcat_2.frameNStart = frameN;  // exact frame index
      
      top_leftcat_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready' ---
    for (const thisComponent of readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from text_color_2
    top_leftw = "";
    top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_leftw = "";
    bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    leftw = "";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    top_rightw = "";
    top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_rightw = "";
    bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    
    ready_end.stop();
    // the Routine "ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyboard_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from text_color
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("\"E\" = Sciences", label_left)) {
        leftw = "\"E\" = Sciences";
        leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    } else {
        if (_pj.in_es6("\"E\" = Masculin  ", label_left)) {
            leftw = "\"E\" = Masculin";
            leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
        } else {
            if (_pj.in_es6("\"E\" = Masculin ou Sciences", label_left)) {
                top_leftw = "\"E\" = Masculin";
                top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                bot_leftw = "ou Sciences";
                bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
            } else {
                if (_pj.in_es6("\"E\" = Lettres", label_left)) {
                    leftw = "\"E\" = Lettres";
                    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                } else {
                    if (_pj.in_es6("\"E\" = Masculin ou Lettres", label_left)) {
                        top_leftw = "\"E\" = Masculin";
                        top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_leftw = "ou Lettres";
                        bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                    } else {
                        top_leftw = "\"E\" = elsem";
                        top_leftw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_leftw = "ou else";
                        bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                        leftw = "\"E\" = else";
                        leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                    }
                }
            }
        }
    }
    if (_pj.in_es6("\"I\" = Lettres", label_right)) {
        rightw = "\"I\" = Lettres";
        rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    } else {
        if (_pj.in_es6("\"I\" = F\u00e9minin  ", label_right)) {
            rightw = "\"I\" = F\u00e9minin";
            rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
        } else {
            if (_pj.in_es6("\"I\" = F\u00e9minin ou Lettres", label_right)) {
                top_rightw = "\"I\" = F\u00e9minin";
                top_rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                bot_rightw = "ou Lettres";
                bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
            } else {
                if (_pj.in_es6("\"I\" = Sciences", label_right)) {
                    rightw = "\"I\" = Sciences";
                    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                } else {
                    if (_pj.in_es6("\"I\" = F\u00e9minin ou Sciences", label_right)) {
                        top_rightw = "\"I\" = F\u00e9minin";
                        top_rightw_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
                        bot_rightw = "ou Sciences";
                        bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
                    }
                }
            }
        }
    }
    /*
    else:
    top_rightw = '"I" = elsef'
    top_rightw_color = 'green' [-0.4667, -0.0745, -0.9686]
    bot_rightw = 'ou else'
    bot_rightw_color = 'black'
    rightw = '"I" = else'
    rightw_color = 'black'*/
    if (_pj.in_es6(stimWord, liste_mots_genre)) {
        text_stim_color = [(- 0.4667), (- 0.0745), (- 0.9686)];
    } else {
        if (_pj.in_es6(stimWord, liste_mots_sciences)) {
            text_stim_color = [(- 0.9137), (- 0.749), (- 0.6941)];
        }
    }
    
    // Run 'Begin Routine' code from check_corr
    cor_resp = 1;
    
    text_stim.setColor(new util.Color(text_stim_color));
    text_stim.setText(stimWord);
    keyboard_resp.keys = undefined;
    keyboard_resp.rt = undefined;
    _keyboard_resp_allKeys = [];
    error_msg.setText('Erreur');
    rightcat.setColor(new util.Color(rightw_color));
    rightcat.setText(rightw);
    top_rightcat.setColor(new util.Color(top_rightw_color));
    top_rightcat.setText(top_rightw);
    bot_rightcat.setColor(new util.Color(bot_rightw_color));
    bot_rightcat.setText(bot_rightw);
    leftcat.setColor(new util.Color(leftw_color));
    leftcat.setText(leftw);
    bot_leftcat.setColor(new util.Color(bot_leftw_color));
    bot_leftcat.setText(bot_leftw);
    top_leftcat.setColor(new util.Color(top_leftw_color));
    top_leftcat.setText(top_leftw);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(text_stim);
    trialComponents.push(keyboard_resp);
    trialComponents.push(error_msg);
    trialComponents.push(rightcat);
    trialComponents.push(top_rightcat);
    trialComponents.push(bot_rightcat);
    trialComponents.push(leftcat);
    trialComponents.push(bot_leftcat);
    trialComponents.push(top_leftcat);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from check_corr
    if (keyboard_resp.keys) {
        if (((keyboard_resp.keys[0] !== CorrAns) && (keyboard_resp.keys.length > 0))) {
            cor_resp = 0;
        } else {
            cor_resp = 1;
        }
    }
    if (keyboard_resp.keys) {
        if (((keyboard_resp.keys.length > 0) && (keyboard_resp.keys.slice((- 1))[0] === CorrAns))) {
            keyboard_resp.corr = true;
            continueRoutine = false;
        }
    }
    
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *text_stim* updates
    if (t >= 0.5 && text_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stim.tStart = t;  // (not accounting for frame time here)
      text_stim.frameNStart = frameN;  // exact frame index
      
      text_stim.setAutoDraw(true);
    }
    
    
    // *keyboard_resp* updates
    if (t >= 0.5 && keyboard_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboard_resp.tStart = t;  // (not accounting for frame time here)
      keyboard_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboard_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboard_resp.clearEvents(); });
    }
    
    if (keyboard_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboard_resp.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _keyboard_resp_allKeys = _keyboard_resp_allKeys.concat(theseKeys);
      if (_keyboard_resp_allKeys.length > 0) {
        keyboard_resp.keys = _keyboard_resp_allKeys.map((key) => key.name);  // storing all keys
        keyboard_resp.rt = _keyboard_resp_allKeys.map((key) => key.rt);
        keyboard_resp.duration = _keyboard_resp_allKeys.map((key) => key.duration);
        // was this correct?
        if (keyboard_resp.keys == CorrAns) {
            keyboard_resp.corr = 1;
        } else {
            keyboard_resp.corr = 0;
        }
      }
    }
    
    
    // *error_msg* updates
    if (((cor_resp == 0)) && error_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      error_msg.tStart = t;  // (not accounting for frame time here)
      error_msg.frameNStart = frameN;  // exact frame index
      
      error_msg.setAutoDraw(true);
    }
    
    
    // *rightcat* updates
    if (t >= 0 && rightcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightcat.tStart = t;  // (not accounting for frame time here)
      rightcat.frameNStart = frameN;  // exact frame index
      
      rightcat.setAutoDraw(true);
    }
    
    
    // *top_rightcat* updates
    if (t >= 0 && top_rightcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_rightcat.tStart = t;  // (not accounting for frame time here)
      top_rightcat.frameNStart = frameN;  // exact frame index
      
      top_rightcat.setAutoDraw(true);
    }
    
    
    // *bot_rightcat* updates
    if (t >= 0 && bot_rightcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bot_rightcat.tStart = t;  // (not accounting for frame time here)
      bot_rightcat.frameNStart = frameN;  // exact frame index
      
      bot_rightcat.setAutoDraw(true);
    }
    
    
    // *leftcat* updates
    if (t >= 0 && leftcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftcat.tStart = t;  // (not accounting for frame time here)
      leftcat.frameNStart = frameN;  // exact frame index
      
      leftcat.setAutoDraw(true);
    }
    
    
    // *bot_leftcat* updates
    if (t >= 0 && bot_leftcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bot_leftcat.tStart = t;  // (not accounting for frame time here)
      bot_leftcat.frameNStart = frameN;  // exact frame index
      
      bot_leftcat.setAutoDraw(true);
    }
    
    
    // *top_leftcat* updates
    if (t >= 0 && top_leftcat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_leftcat.tStart = t;  // (not accounting for frame time here)
      top_leftcat.frameNStart = frameN;  // exact frame index
      
      top_leftcat.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from text_color
    top_leftw = "";
    top_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_leftw = "";
    bot_leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    leftw = "";
    leftw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    rightw = "";
    rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    top_rightw = "";
    top_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    bot_rightw = "";
    bot_rightw_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    text_stim_color = [(- 0.9137), (- 0.749), (- 0.6941)];
    
    // Run 'End Routine' code from compute_score
    /* Bloc 3 */
    if ((conds_file === "cong_test - 20.xlsx")) {
        if ((((typeof keyboard_resp.rt.slice((- 1))[0]) === "number") || (keyboard_resp.rt.slice((- 1))[0] instanceof Number))) {
            rt_block3.push(keyboard_resp.rt.slice((- 1))[0]);
            if ((keyboard_resp.keys[0] !== CorrAns)) {
                err_block3 = (err_block3 + 1);
                incorr_rt_block3.push(keyboard_resp.rt.slice((- 1))[0]);
            } else {
                if ((keyboard_resp.keys[0] === CorrAns)) {
                    corr_rt_block3.push(keyboard_resp.rt.slice((- 1))[0]);
                }
            }
        }
    }
    /* Bloc 4 */
    if ((conds_file === "cong_test - 40.xlsx")) {
        if ((((typeof keyboard_resp.rt.slice((- 1))[0]) === "number") || (keyboard_resp.rt.slice((- 1))[0] instanceof Number))) {
            rt_block4.push(keyboard_resp.rt.slice((- 1))[0]);
            if ((keyboard_resp.keys[0] !== CorrAns)) {
                err_block4 = (err_block4 + 1);
                incorr_rt_block4.push(keyboard_resp.rt.slice((- 1))[0]);
            } else {
                if ((keyboard_resp.keys[0] === CorrAns)) {
                    corr_rt_block4.push(keyboard_resp.rt.slice((- 1))[0]);
                }
            }
        }
    }
    /* Bloc 6 */
    if ((conds_file === "incong_test - 20.xlsx")) {
        if ((((typeof keyboard_resp.rt.slice((- 1))[0]) === "number") || (keyboard_resp.rt.slice((- 1))[0] instanceof Number))) {
            rt_block6.push(keyboard_resp.rt.slice((- 1))[0]);
            if ((keyboard_resp.keys[0] !== CorrAns)) {
                err_block6 = (err_block6 + 1);
                incorr_rt_block6.push(keyboard_resp.rt.slice((- 1))[0]);
            } else {
                if ((keyboard_resp.keys[0] === CorrAns)) {
                    corr_rt_block6.push(keyboard_resp.rt.slice((- 1))[0]);
                }
            }
        }
    }
    /* Bloc 7 */
    if ((conds_file === "incong_test - 40.xlsx")) {
        if ((((typeof keyboard_resp.rt.slice((- 1))[0]) === "number") || (keyboard_resp.rt.slice((- 1))[0] instanceof Number))) {
            rt_block7.push(keyboard_resp.rt.slice((- 1))[0]);
            if ((keyboard_resp.keys[0] !== CorrAns)) {
                err_block7 = (err_block7 + 1);
                incorr_rt_block7.push(keyboard_resp.rt.slice((- 1))[0]);
            } else {
                if ((keyboard_resp.keys[0] === CorrAns)) {
                    corr_rt_block7.push(keyboard_resp.rt.slice((- 1))[0]);
                }
            }
        }
    }
    /* Autre */
    if (((keyboard_resp.keys[0] !== CorrAns) && keyboard_resp.keys)) {
        num_errors = (num_errors + 1);
    }
    if (((keyboard_resp.rt.slice((- 1))[0] > 3) && keyboard_resp.keys)) {
        slow_responses = (slow_responses + 1);
    } else {
        if (((keyboard_resp.rt.slice((- 1))[0] < 0.3) && keyboard_resp.keys)) {
            fast_responses = (fast_responses + 1);
        }
    }
    total_responses = (total_responses + 1);
    keyboard_resp.keys = [];
    
    // was no response the correct answer?!
    if (keyboard_resp.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         keyboard_resp.corr = 1;  // correct non-response
      } else {
         keyboard_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyboard_resp.corr, level);
    }
    psychoJS.experiment.addData('keyboard_resp.keys', keyboard_resp.keys);
    psychoJS.experiment.addData('keyboard_resp.corr', keyboard_resp.corr);
    if (typeof keyboard_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyboard_resp.rt', keyboard_resp.rt);
        psychoJS.experiment.addData('keyboard_resp.duration', keyboard_resp.duration);
        }
    
    keyboard_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var transitionComponents;
function transitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'transition' ---
    t = 0;
    transitionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    transitionComponents = [];
    transitionComponents.push(cross);
    
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function transitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'transition' ---
    // get current time
    t = transitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross* updates
    if (t >= 0.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function transitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'transition' ---
    for (const thisComponent of transitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var score_msg;
var err_msg;
var feedback_msg;
var mean_rt_block3;
var mean_rt_block4;
var mean_rt_block6;
var mean_rt_block7;
var std_rt_block3;
var std_rt_block4;
var std_rt_block6;
var std_rt_block7;
var pooled_std36;
var pooled_std47;
var new_value3;
var new_value4;
var new_value6;
var new_value7;
var fblock3;
var fblock4;
var fblock6;
var fblock7;
var mb3;
var mb4;
var mb6;
var mb7;
var iat_score;
var _end_score_allKeys;
var scoreComponents;
function scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'score' ---
    t = 0;
    scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from score
    // Initialisation des variables pour JS
    score_msg = "";
    err_msg = "";
    feedback_msg ="";
    mean_rt_block3 = 0;
    mean_rt_block4 = 0;
    mean_rt_block6 = 0;
    mean_rt_block7 = 0;
    std_rt_block3 = 0;
    std_rt_block4 = 0;
    std_rt_block6 = 0;
    std_rt_block7 = 0;
    pooled_std36 = 0;
    pooled_std47 = 0;
    new_value3 = 0;
    new_value4 = 0;
    new_value6 = 0;
    new_value7 = 0;
    fblock3 = [];
    fblock4 = [];
    fblock6 = [];
    fblock7 = [];
    mb3 = 0;
    mb4 = 0;
    mb6 = 0;
    mb7 = 0;
    iat_score = 0;
    
    // Fonctions utilitaires
    function moyenne(liste) {
        return liste.length ? liste.reduce((a, b) => a + b, 0) / liste.length : 0;
    }
    
    function ecartType(liste, moyenne) {
        if (liste.length > 1) {
            let variance = liste.reduce((sum, x) => sum + Math.pow(x - moyenne, 2), 0) / (liste.length - 1);
            return Math.sqrt(variance);
        }
        return 0;
    }
    
    function pooledStd(liste1, liste2, std1, std2) {
        if (liste1.length > 1 && liste2.length > 1) {
            let pooledVariance = (((liste1.length - 1) * Math.pow(std1, 2)) + ((liste2.length - 1) * Math.pow(std2, 2))) / (liste1.length + liste2.length - 2);
            return Math.sqrt(pooledVariance);
        }
        return 0;
    }
    
    function remplacerIncorrects(parMoyenne, incorrects) {
        return Array(incorrects.length).fill(parMoyenne + 0.6);
    }
    
    // Calcul des données
    if ((fast_responses / total_responses) > 0.1) {
        score_msg = "Vous avez répondu trop rapidement pour obtenir un score valide. Recommencez le test en répondant correctement et sans vous précipiter.";
        err_msg = "Vous avez fait " + num_errors + " erreurs.";
    } else if ((slow_responses / total_responses) > 0.05) {
        score_msg = "Vous avez répondu trop lentement pour obtenir un score valide. Recommencez le test en répondant correctement le plus rapidement possible.";
        err_msg = "Vous avez fait " + num_errors + " erreurs.";
    } else {
        // Moyennes des réponses correctes de chaque bloc
        let corr_mean_rt_block3 = moyenne(corr_rt_block3);
        let corr_mean_rt_block4 = moyenne(corr_rt_block4);
        let corr_mean_rt_block6 = moyenne(corr_rt_block6);
        let corr_mean_rt_block7 = moyenne(corr_rt_block7);
    
        // Moyennes des blocs
        mean_rt_block3 = moyenne(rt_block3);
        mean_rt_block6 = moyenne(rt_block6);
        mean_rt_block4 = moyenne(rt_block4);
        mean_rt_block7 = moyenne(rt_block7);
    
        // Écarts types des blocs
        std_rt_block3 = ecartType(rt_block3, mean_rt_block3);
        std_rt_block6 = ecartType(rt_block6, mean_rt_block6);
        std_rt_block4 = ecartType(rt_block4, mean_rt_block4);
        std_rt_block7 = ecartType(rt_block7, mean_rt_block7);
    
        // Pooled std des blocs
        pooled_std36 = pooledStd(rt_block3, rt_block6, std_rt_block3, std_rt_block6);
        pooled_std47 = pooledStd(rt_block4, rt_block7, std_rt_block4, std_rt_block7);
    
        // Remplacement des RT incorrects
        incorr_rt_block3 = remplacerIncorrects(mean_rt_block3, incorr_rt_block3);
        incorr_rt_block4 = remplacerIncorrects(mean_rt_block4, incorr_rt_block4);
        incorr_rt_block6 = remplacerIncorrects(mean_rt_block6, incorr_rt_block6);
        incorr_rt_block7 = remplacerIncorrects(mean_rt_block7, incorr_rt_block7);
    
        // Fusion des blocs incorrects modifiés et des blocs corrects
        fblock3 = incorr_rt_block3.concat(corr_rt_block3);
        fblock4 = incorr_rt_block4.concat(corr_rt_block4);
        fblock6 = incorr_rt_block6.concat(corr_rt_block6);
        fblock7 = incorr_rt_block7.concat(corr_rt_block7);
    
        // Calcul des moyennes des blocs mis à jour
        mb3 = moyenne(fblock3);
        mb4 = moyenne(fblock4);
        mb6 = moyenne(fblock6);
        mb7 = moyenne(fblock7);
    
        // Score de l'IAT
        if (((pooled_std36 !== 0) && (pooled_std47 !== 0))) {
            iat_score = ((mb6 - mb3) / pooled_std36 + (mb7 - mb4) / pooled_std47) / 2;
        } else { 
            iat_score = 0;
        }
        score_msg = "Votre score à l'IAT est de " + iat_score.toFixed(5);
        if (0 <= iat_score && iat_score <= 0.5) {
        feedback_msg = "Un score positif inférieur à 0.5 traduit des associations stéréotypiques entre masculin et sciences et féminin et lettres.";
        } else if (-0.5 <= iat_score && iat_score < 0) {
        feedback_msg = "Un score négatif supérieur à -0.5 traduit des associations contre-stéréotypiques entre féminin et sciences et masculin et lettres.";
        } else if (iat_score < -0.5) {
        feedback_msg = "Un score inférieur à -0.5 traduit des associations contre-stéréotypiques fortes entre féminin et sciences et masculin et lettres.";
        } else if (iat_score > 0.5) {
        feedback_msg = "Un score supérieur à 0.5 traduit des associations stéréotypiques fortes entre masculin et sciences et féminin et lettres.";
        }
    
    }
    
    score_feedback.setText(score_msg);
    end_score.keys = undefined;
    end_score.rt = undefined;
    _end_score_allKeys = [];
    adapted_fb.setText(feedback_msg);
    // keep track of which components have finished
    scoreComponents = [];
    scoreComponents.push(score_feedback);
    scoreComponents.push(end_score);
    scoreComponents.push(adapted_fb);
    scoreComponents.push(skip_score);
    
    for (const thisComponent of scoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function scoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'score' ---
    // get current time
    t = scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score_feedback* updates
    if (t >= 0.0 && score_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score_feedback.tStart = t;  // (not accounting for frame time here)
      score_feedback.frameNStart = frameN;  // exact frame index
      
      score_feedback.setAutoDraw(true);
    }
    
    
    // *end_score* updates
    if (t >= 0.1 && end_score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_score.tStart = t;  // (not accounting for frame time here)
      end_score.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      end_score.clock.reset();
      end_score.start();
    }
    
    if (end_score.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_score.getKeys({keyList: ['space'], waitRelease: false});
      _end_score_allKeys = _end_score_allKeys.concat(theseKeys);
      if (_end_score_allKeys.length > 0) {
        end_score.keys = _end_score_allKeys[_end_score_allKeys.length - 1].name;  // just the last key pressed
        end_score.rt = _end_score_allKeys[_end_score_allKeys.length - 1].rt;
        end_score.duration = _end_score_allKeys[_end_score_allKeys.length - 1].duration;
        // was this correct?
        if (end_score.keys == "'space'") {
            end_score.corr = 1;
        } else {
            end_score.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *adapted_fb* updates
    if (t >= 0.0 && adapted_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adapted_fb.tStart = t;  // (not accounting for frame time here)
      adapted_fb.frameNStart = frameN;  // exact frame index
      
      adapted_fb.setAutoDraw(true);
    }
    
    
    // *skip_score* updates
    if (t >= 0.0 && skip_score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_score.tStart = t;  // (not accounting for frame time here)
      skip_score.frameNStart = frameN;  // exact frame index
      
      skip_score.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scoreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'score' ---
    for (const thisComponent of scoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end_score.stop();
    // the Routine "score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_score_2_allKeys;
var score2Components;
function score2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'score2' ---
    t = 0;
    score2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_score_2.keys = undefined;
    end_score_2.rt = undefined;
    _end_score_2_allKeys = [];
    // keep track of which components have finished
    score2Components = [];
    score2Components.push(score_meaning_2);
    score2Components.push(end_score_2);
    score2Components.push(gradient);
    
    for (const thisComponent of score2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function score2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'score2' ---
    // get current time
    t = score2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score_meaning_2* updates
    if (t >= 0.0 && score_meaning_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score_meaning_2.tStart = t;  // (not accounting for frame time here)
      score_meaning_2.frameNStart = frameN;  // exact frame index
      
      score_meaning_2.setAutoDraw(true);
    }
    
    
    // *end_score_2* updates
    if (t >= 1 && end_score_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_score_2.tStart = t;  // (not accounting for frame time here)
      end_score_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_score_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_score_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_score_2.clearEvents(); });
    }
    
    if (end_score_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_score_2.getKeys({keyList: ['space', 'e'], waitRelease: false});
      _end_score_2_allKeys = _end_score_2_allKeys.concat(theseKeys);
      if (_end_score_2_allKeys.length > 0) {
        end_score_2.keys = _end_score_2_allKeys.map((key) => key.name);  // storing all keys
        end_score_2.rt = _end_score_2_allKeys.map((key) => key.rt);
        end_score_2.duration = _end_score_2_allKeys.map((key) => key.duration);
        // was this correct?
        if (end_score_2.keys == repTrialsAns) {
            end_score_2.corr = 1;
        } else {
            end_score_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *gradient* updates
    if (t >= 0.0 && gradient.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gradient.tStart = t;  // (not accounting for frame time here)
      gradient.frameNStart = frameN;  // exact frame index
      
      gradient.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of score2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function score2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'score2' ---
    for (const thisComponent of score2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from repeat_trial
    if (end_score_2.keys) {
        if (((end_score_2.keys.length > 0) && (end_score_2.keys.slice((- 1))[0] !== repTrialsAns))) {
            repeat_trials.finished = 1;
        } else {
            if (((end_score_2.keys.length > 0) && (end_score_2.keys.slice((- 1))[0] === repTrialsAns))) {
                continueRoutine = false;
            }
        }
    }
    
    // was no response the correct answer?!
    if (end_score_2.keys === undefined) {
      if (['None','none',undefined].includes(repTrialsAns)) {
         end_score_2.corr = 1;  // correct non-response
      } else {
         end_score_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_score_2.corr, level);
    }
    psychoJS.experiment.addData('end_score_2.keys', end_score_2.keys);
    psychoJS.experiment.addData('end_score_2.corr', end_score_2.corr);
    if (typeof end_score_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_score_2.rt', end_score_2.rt);
        psychoJS.experiment.addData('end_score_2.duration', end_score_2.duration);
        routineTimer.reset();
        }
    
    end_score_2.stop();
    // the Routine "score2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key_resp.keys = undefined;
    end_key_resp.rt = undefined;
    _end_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text);
    endComponents.push(end_key_resp);
    endComponents.push(mosaique_4);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *end_key_resp* updates
    if (t >= 1.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key_resp.tStart = t;  // (not accounting for frame time here)
      end_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      end_key_resp.clock.reset();
      end_key_resp.start();
    }
    
    if (end_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key_resp.getKeys({keyList: [], waitRelease: false});
      _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
      if (_end_key_resp_allKeys.length > 0) {
        end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
        end_key_resp.duration = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *mosaique_4* updates
    if (t >= 0.0 && mosaique_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mosaique_4.tStart = t;  // (not accounting for frame time here)
      mosaique_4.frameNStart = frameN;  // exact frame index
      
      mosaique_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

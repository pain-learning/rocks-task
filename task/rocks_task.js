/******************* 
 * Rocks_Task Test *
 *******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'rocks_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'order': ['random', 1, 2, 3], 'session': '001', 'study': '', 'group': 'A', 'qpid': ''};

// Start code blocks for 'Before Experiment'
var cash_left, loss_amount, points, press_loss, cond;
points = 0;
cash_left = 600;
loss_amount = 10;
press_loss = 2;
cond = (Math.floor(Math.random() * 2)+1).toString();
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
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
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(final_scoreRoutineBegin());
flowScheduler.add(final_scoreRoutineEachFrame());
flowScheduler.add(final_scoreRoutineEnd());
flowScheduler.add(end_thanksRoutineBegin());
flowScheduler.add(end_thanksRoutineEachFrame());
flowScheduler.add(end_thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'blocks/blocks_order_longdemo1.xlsx', 'path': 'blocks/blocks_order_longdemo1.xlsx'},
    {'name': 'blocks/long_demo/conds_file_full_2_shC.xlsx', 'path': 'blocks/long_demo/conds_file_full_2_shC.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_3_shB.xlsx', 'path': 'blocks/short_demo/conds_file_full_3_shB.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_1_shB.xlsx', 'path': 'blocks/short_demo/conds_file_full_1_shB.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_3_shA.xlsx', 'path': 'blocks/short_demo/conds_file_full_3_shA.xlsx'},
    {'name': 'blocks/conds_file_full_2A.xlsx', 'path': 'blocks/conds_file_full_2A.xlsx'},
    {'name': 'blocks/long_demo/conds_file_full_3_shA.xlsx', 'path': 'blocks/long_demo/conds_file_full_3_shA.xlsx'},
    {'name': 'img/none.png', 'path': 'img/none.png'},
    {'name': 'blocks/conds_file_full_2D.xlsx', 'path': 'blocks/conds_file_full_2D.xlsx'},
    {'name': 'blocks/long_demo/conds_file_full_3_shD.xlsx', 'path': 'blocks/long_demo/conds_file_full_3_shD.xlsx'},
    {'name': 'img/1/CSplus2pTheta.png', 'path': 'img/1/CSplus2pTheta.png'},
    {'name': 'img/notSpiky.png', 'path': 'img/notSpiky.png'},
    {'name': 'blocks/blocks_order_shortdemo2.xlsx', 'path': 'blocks/blocks_order_shortdemo2.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_1_shA.xlsx', 'path': 'blocks/short_demo/conds_file_full_1_shA.xlsx'},
    {'name': 'blocks/blocks_order3.xlsx', 'path': 'blocks/blocks_order3.xlsx'},
    {'name': 'img/2/CSminus.png', 'path': 'img/2/CSminus.png'},
    {'name': 'img/1/CSplus2nTheta.png', 'path': 'img/1/CSplus2nTheta.png'},
    {'name': 'img/noLost.png', 'path': 'img/noLost.png'},
    {'name': 'blocks/short_demo/conds_file_full_2_shD.xlsx', 'path': 'blocks/short_demo/conds_file_full_2_shD.xlsx'},
    {'name': 'img/falling.wav', 'path': 'img/falling.wav'},
    {'name': 'img/2/CSplus2pTheta.png', 'path': 'img/2/CSplus2pTheta.png'},
    {'name': 'blocks/short_demo/conds_file_full_2_shC.xlsx', 'path': 'blocks/short_demo/conds_file_full_2_shC.xlsx'},
    {'name': 'img/1/CSplus1pTheta.png', 'path': 'img/1/CSplus1pTheta.png'},
    {'name': 'blocks/long_demo/conds_file_full_1_shD.xlsx', 'path': 'blocks/long_demo/conds_file_full_1_shD.xlsx'},
    {'name': 'img/tap.png', 'path': 'img/tap.png'},
    {'name': 'blocks/conds_file_full_3A.xlsx', 'path': 'blocks/conds_file_full_3A.xlsx'},
    {'name': 'img/2/CSplus1.png', 'path': 'img/2/CSplus1.png'},
    {'name': 'blocks/conds_file_full_1C.xlsx', 'path': 'blocks/conds_file_full_1C.xlsx'},
    {'name': 'img/p25.png', 'path': 'img/p25.png'},
    {'name': 'img/p100.png', 'path': 'img/p100.png'},
    {'name': 'blocks/long_demo/conds_file_full_3_shC.xlsx', 'path': 'blocks/long_demo/conds_file_full_3_shC.xlsx'},
    {'name': 'blocks/blocks_order2.xlsx', 'path': 'blocks/blocks_order2.xlsx'},
    {'name': 'img/shield.png', 'path': 'img/shield.png'},
    {'name': 'blocks/short_demo/conds_file_full_1_shD.xlsx', 'path': 'blocks/short_demo/conds_file_full_1_shD.xlsx'},
    {'name': 'img/1/CSplus1.png', 'path': 'img/1/CSplus1.png'},
    {'name': 'blocks/conds_file_full_3D.xlsx', 'path': 'blocks/conds_file_full_3D.xlsx'},
    {'name': 'img/2/CSplus2nTheta.png', 'path': 'img/2/CSplus2nTheta.png'},
    {'name': 'blocks/short_demo/conds_file_full_1_shC.xlsx', 'path': 'blocks/short_demo/conds_file_full_1_shC.xlsx'},
    {'name': 'blocks/blocks_order_longdemo2.xlsx', 'path': 'blocks/blocks_order_longdemo2.xlsx'},
    {'name': 'blocks/blocks_order_shortdemo1.xlsx', 'path': 'blocks/blocks_order_shortdemo1.xlsx'},
    {'name': 'img/1/CSplus1nTheta.png', 'path': 'img/1/CSplus1nTheta.png'},
    {'name': 'blocks/conds_file_full_1B.xlsx', 'path': 'blocks/conds_file_full_1B.xlsx'},
    {'name': 'img/2/CSplus1nTheta.png', 'path': 'img/2/CSplus1nTheta.png'},
    {'name': 'blocks/long_demo/conds_file_full_2_shD.xlsx', 'path': 'blocks/long_demo/conds_file_full_2_shD.xlsx'},
    {'name': 'blocks/long_demo/conds_file_full_1_shA.xlsx', 'path': 'blocks/long_demo/conds_file_full_1_shA.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_2_shA.xlsx', 'path': 'blocks/short_demo/conds_file_full_2_shA.xlsx'},
    {'name': 'blocks/blocks_order_shortdemo3.xlsx', 'path': 'blocks/blocks_order_shortdemo3.xlsx'},
    {'name': 'blocks/conds_file_full_1A.xlsx', 'path': 'blocks/conds_file_full_1A.xlsx'},
    {'name': 'blocks/blocks_order1.xlsx', 'path': 'blocks/blocks_order1.xlsx'},
    {'name': 'img/2/CSplus1pTheta.png', 'path': 'img/2/CSplus1pTheta.png'},
    {'name': 'blocks/long_demo/conds_file_full_2_shB.xlsx', 'path': 'blocks/long_demo/conds_file_full_2_shB.xlsx'},
    {'name': 'img/thud.wav', 'path': 'img/thud.wav'},
    {'name': 'img/stone.png', 'path': 'img/stone.png'},
    {'name': 'blocks/long_demo/conds_file_full_1_shB.xlsx', 'path': 'blocks/long_demo/conds_file_full_1_shB.xlsx'},
    {'name': 'blocks/conds_file_full_2C.xlsx', 'path': 'blocks/conds_file_full_2C.xlsx'},
    {'name': 'blocks/conds_file_full_3C.xlsx', 'path': 'blocks/conds_file_full_3C.xlsx'},
    {'name': 'blocks/conds_file_full_3B.xlsx', 'path': 'blocks/conds_file_full_3B.xlsx'},
    {'name': 'blocks/long_demo/conds_file_full_1_shC.xlsx', 'path': 'blocks/long_demo/conds_file_full_1_shC.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_3_shC.xlsx', 'path': 'blocks/short_demo/conds_file_full_3_shC.xlsx'},
    {'name': 'img/2/CSplus2.png', 'path': 'img/2/CSplus2.png'},
    {'name': 'blocks/long_demo/conds_file_full_2_shA.xlsx', 'path': 'blocks/long_demo/conds_file_full_2_shA.xlsx'},
    {'name': 'img/p50.png', 'path': 'img/p50.png'},
    {'name': 'img/dashboard.png', 'path': 'img/dashboard.png'},
    {'name': 'img/next.png', 'path': 'img/next.png'},
    {'name': 'blocks/long_demo/conds_file_full_3_shB.xlsx', 'path': 'blocks/long_demo/conds_file_full_3_shB.xlsx'},
    {'name': 'blocks/conds_file_full_2B.xlsx', 'path': 'blocks/conds_file_full_2B.xlsx'},
    {'name': 'img/spiky.png', 'path': 'img/spiky.png'},
    {'name': 'blocks/short_demo/conds_file_full_3_shD.xlsx', 'path': 'blocks/short_demo/conds_file_full_3_shD.xlsx'},
    {'name': 'img/1/CSplus2.png', 'path': 'img/1/CSplus2.png'},
    {'name': 'instructions.xlsx', 'path': 'instructions.xlsx'},
    {'name': 'blocks/short_demo/conds_file_full_2_shB.xlsx', 'path': 'blocks/short_demo/conds_file_full_2_shB.xlsx'},
    {'name': 'blocks/conds_file_full_1D.xlsx', 'path': 'blocks/conds_file_full_1D.xlsx'},
    {'name': 'img/continuum.png', 'path': 'img/continuum.png'},
    {'name': 'img/road22.png', 'path': 'img/road22.png'},
    {'name': 'img/go.png', 'path': 'img/go.png'},
    {'name': 'img/p75.png', 'path': 'img/p75.png'},
    {'name': 'img/start.png', 'path': 'img/start.png'},
    {'name': 'img/1/CSminus.png', 'path': 'img/1/CSminus.png'},
    {'name': 'blocks/blocks_order_longdemo3.xlsx', 'path': 'blocks/blocks_order_longdemo3.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var shield_sound_obj;
var rock_sound_obj;
var Image1Pos;
var Image1Size;
var Image2Pos;
var Image2Size;
var Image1Vis;
var Image2Vis;
var TapVis;
var NextVis;
var progress;
var next_pos;
var rockSound;
var shieldSound;
var welcomeClock;
var welcome_next;
var welcome_click;
var welcome_text;
var order_var;
var blocks_file;
var instructionsClock;
var image_road;
var instructs_text;
var instr_done_touch;
var next_img;
var tap_me_click;
var Img1;
var Img2;
var tap_me;
var start_buttonClock;
var break_dur;
var start_img;
var start_press;
var fixation_2Clock;
var background_0;
var trialClock;
var background_1;
var touch_resp;
var button;
var img;
var pop_2Clock;
var background_2;
var feedback_text;
var img_outcome;
var big_shield_2;
var rock_wav;
var shield_wav;
var block_scoreClock;
var text;
var block_cash;
var txt_part;
var progImg;
var final_scoreClock;
var score;
var end_thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  
  shield_sound_obj = new sound.Sound({
      win: psychoJS.window,
      value: 'img/thud.wav',
      secs: 1.0,
      });
  shield_sound_obj.setVolume(1.0);
  rock_sound_obj = new sound.Sound({
      win: psychoJS.window,
      value: 'img/falling.wav',
      secs: 1.0,
      });
  rock_sound_obj.setVolume(1.0);    
  Image1Pos = [0, 0.05, 0.05, (- 0.39), (- 0.39), (- 1), (- 0.39), (- 0.39)];
  Image1Size = [0, 0.3, 0.3, 0.17, 0.17, 0, 0.17, 0.17];
  Image2Pos = [0, 0, 0, 0, 0, 0.05, 0.05, 0.05];
  Image2Size = [0, 0, 0, 0, 0, 0.37, 0.3, 0.375];
  Image1Vis = [0, 1, 1, 1, 1, 0, 1, 1];
  Image2Vis = [0, 0, 0, 0, 0, 1, 1, 1];
  TapVis = [0, 0, 0, 0, 1, 0, 0, 0];
  NextVis = [1, 1, 1, 1, 0, 1, 1, 1];
  progress = 0;
  next_pos = [(- 0.185), (- 0.185), (- 0.185), (- 0.185), (- 1), (- 0.185), (- 0.185), (- 0.185)];
  rockSound = [0, 1, 0, 0, 0, 0, 0, 0];
  shieldSound = [0, 0, 0, 0, 0, 1, 0, 0];
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_next = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcome_next', units : undefined, 
    image : 'img/next.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.185)], size : [0.3, 0.092],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  welcome_click = new core.Mouse({
    win: psychoJS.window,
  });
  welcome_click.mouseClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Welcome to the ‘Stay safe’ game!\n\nThe task should take about 15 minutes.\n\nThere will be three breaks.\n\nPlease make sure you understand the instructions on the next page before you start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.12], height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  if ((expInfo["order"] === "random")) {
      expInfo["order"] = util.randint(1, 3);
      order_var = expInfo["order"];
  }
  blocks_file = (("blocks/blocks_order" + expInfo["order"].toString()) + ".xlsx");
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  image_road = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_road', units : undefined, 
    image : 'img/road22.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.7, 0.7],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  instructs_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_text',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.35], height: 0.04,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  next_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_img', units : 'height', 
    image : 'img/next.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.092],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  tap_me_click = new core.Mouse({
    win: psychoJS.window,
  });
  tap_me_click.mouseClock = new util.Clock();
  Img1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Img1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  Img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Img2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  tap_me = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tap_me', units : undefined, 
    image : 'img/tap.png', mask : undefined,
    ori : 45.0, pos : [0.05, (- 0.37)], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "start_button"
  start_buttonClock = new util.Clock();
  break_dur = 9;
  
  start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  start_press = new core.Mouse({
    win: psychoJS.window,
  });
  start_press.mouseClock = new util.Clock();
  // Initialize components for Routine "fixation_2"
  fixation_2Clock = new util.Clock();
  background_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_0', units : undefined, 
    image : 'img/road22.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.7, 0.7],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  background_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_1', units : undefined, 
    image : 'img/road22.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.7, 0.7],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button', units : undefined, 
    image : 'img/shield.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.39)], size : [0.17, 0.17],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.3, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "pop_2"
  pop_2Clock = new util.Clock();
  background_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_2', units : undefined, 
    image : 'img/road22.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.7, 0.7],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.01), (- 0.39)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -2.0 
  });
  
  img_outcome = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_outcome', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  big_shield_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'big_shield_2', units : undefined, 
    image : 'img/shield.png', mask : undefined,
    ori : 0.0, pos : [0, 0.05], size : [0.37, 0.37],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  rock_wav = new sound.Sound({
    win: psychoJS.window,
    value: 'img/falling.wav',
    secs: 1.0,
    });
  rock_wav.setVolume(1.0);
  shield_wav = new sound.Sound({
    win: psychoJS.window,
    value: 'img/thud.wav',
    secs: 1.0,
    });
  shield_wav.setVolume(1.0);
  // Initialize components for Routine "block_score"
  block_scoreClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_cash = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_cash',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  txt_part = " ";
  
  progImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'progImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.39)], size : [0.5, 0.0758],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "final_score"
  final_scoreClock = new util.Clock();
  score = new visual.TextStim({
    win: psychoJS.window,
    name: 'score',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_thanks"
  end_thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
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


function setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the welcome_click
    welcome_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_next);
    welcomeComponents.push(welcome_click);
    welcomeComponents.push(welcome_text);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_next* updates
    if (t >= 0.0 && welcome_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_next.tStart = t;  // (not accounting for frame time here)
      welcome_next.frameNStart = frameN;  // exact frame index
      
      welcome_next.setAutoDraw(true);
    }

    // *welcome_click* updates
    if (t >= 0.0 && welcome_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_click.tStart = t;  // (not accounting for frame time here)
      welcome_click.frameNStart = frameN;  // exact frame index
      
      welcome_click.status = PsychoJS.Status.STARTED;
      welcome_click.mouseClock.reset();
      prevButtonState = welcome_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (welcome_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = welcome_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [welcome_next]) {
            if (obj.contains(welcome_click)) {
              gotValidClick = true;
              welcome_click.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
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


function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructions.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(instructionsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(instructionsRoutineEachFrame());
      trials_2LoopScheduler.add(instructionsRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
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
      trialList: blocks_file,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineBegin(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineEachFrame());
      blocksLoopScheduler.add(start_buttonRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(block_scoreRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_scoreRoutineEachFrame());
      blocksLoopScheduler.add(block_scoreRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
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
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixation_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(fixation_2RoutineEachFrame());
      trialsLoopScheduler.add(fixation_2RoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(pop_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(pop_2RoutineEachFrame());
      trialsLoopScheduler.add(pop_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var tap_vis;
var next_vis;
var next_pos2;
var Image1Pos2;
var Image2Pos2;
var Image1Size2;
var Image2Size2;
var Vis1_bool;
var Vis2_bool;
var rock_fall_instr;
var shield_instr;
var rock_played;
var shield_played;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tap_vis = TapVis[trials_2.thisN];
    next_vis = NextVis[trials_2.thisN];
    next_pos2 = [0, next_pos[trials_2.thisN]];
    Image1Pos2 = [0, Image1Pos[trials_2.thisN]];
    Image2Pos2 = [0, Image2Pos[trials_2.thisN]];
    Image1Size2 = [Image1Size[trials_2.thisN], Image1Size[trials_2.thisN]];
    Image2Size2 = [Image2Size[trials_2.thisN], Image2Size[trials_2.thisN]];
    if ((Image2 === "img/continuum.png")) {
        Image2Size2 = [Image2Size[trials_2.thisN], (Image2Size[trials_2.thisN] / 2)];
    }
    Vis1_bool = Image1Vis[trials_2.thisN];
    Vis2_bool = Image2Vis[trials_2.thisN];
    rock_fall_instr = rockSound[trials_2.thisN];
    shield_instr = shieldSound[trials_2.thisN];
    rock_played = 0;
    shield_played = 0;
    if (((rock_played === 0) && (rock_fall_instr === 1))) {
        rock_played = 1;
        rock_sound_obj.play();
    }
    if (((shield_played === 0) && (shield_instr === 1))) {
        shield_played = 1;
        shield_sound_obj.play();
    }
    
    instructs_text.setOpacity(1);
    instructs_text.setText(Instruction);
    // setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    next_img.setOpacity(next_vis);
    next_img.setPos(next_pos2);
    // setup some python lists for storing info about the tap_me_click
    tap_me_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    Img1.setOpacity(Vis1_bool);
    Img1.setPos(Image1Pos2);
    Img1.setSize(Image1Size2);
    Img1.setImage(Image1);
    Img2.setOpacity(Vis2_bool);
    Img2.setPos(Image2Pos2);
    Img2.setSize(Image2Size2);
    Img2.setImage(Image2);
    tap_me.setOpacity(tap_vis);
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(image_road);
    instructionsComponents.push(instructs_text);
    instructionsComponents.push(instr_done_touch);
    instructionsComponents.push(next_img);
    instructionsComponents.push(tap_me_click);
    instructionsComponents.push(Img1);
    instructionsComponents.push(Img2);
    instructionsComponents.push(tap_me);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((tap_vis === 1) && tap_me_click.isPressedIn(Img1, {"buttons": [0]}))) {
        continueRoutine = false;
    }
    
    
    // *image_road* updates
    if (t >= 0.0 && image_road.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_road.tStart = t;  // (not accounting for frame time here)
      image_road.frameNStart = frameN;  // exact frame index
      
      image_road.setAutoDraw(true);
    }

    
    // *instructs_text* updates
    if (t >= 0.0 && instructs_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_text.tStart = t;  // (not accounting for frame time here)
      instructs_text.frameNStart = frameN;  // exact frame index
      
      instructs_text.setAutoDraw(true);
    }

    // *instr_done_touch* updates
    if (t >= 0.0 && instr_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch.tStart = t;  // (not accounting for frame time here)
      instr_done_touch.frameNStart = frameN;  // exact frame index
      
      instr_done_touch.status = PsychoJS.Status.STARTED;
      instr_done_touch.mouseClock.reset();
      prevButtonState = instr_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_img]) {
            if (obj.contains(instr_done_touch)) {
              gotValidClick = true;
              instr_done_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *next_img* updates
    if (t >= 0.0 && next_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_img.tStart = t;  // (not accounting for frame time here)
      next_img.frameNStart = frameN;  // exact frame index
      
      next_img.setAutoDraw(true);
    }

    
    // *Img1* updates
    if (t >= 0.0 && Img1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Img1.tStart = t;  // (not accounting for frame time here)
      Img1.frameNStart = frameN;  // exact frame index
      
      Img1.setAutoDraw(true);
    }

    
    // *Img2* updates
    if (t >= 0.0 && Img2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Img2.tStart = t;  // (not accounting for frame time here)
      Img2.frameNStart = frameN;  // exact frame index
      
      Img2.setAutoDraw(true);
    }

    
    // *tap_me* updates
    if (t >= 0.0 && tap_me.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tap_me.tStart = t;  // (not accounting for frame time here)
      tap_me.frameNStart = frameN;  // exact frame index
      
      tap_me.setAutoDraw(true);
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


var _mouseXYs;
function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch.getPos();
    _mouseButtons = instr_done_touch.getPressed();
    psychoJS.experiment.addData('instr_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch.rightButton', _mouseButtons[2]);
    if (instr_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0]);}
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = tap_me_click.getPos();
    _mouseButtons = tap_me_click.getPressed();
    psychoJS.experiment.addData('tap_me_click.x', _mouseXYs[0]);
    psychoJS.experiment.addData('tap_me_click.y', _mouseXYs[1]);
    psychoJS.experiment.addData('tap_me_click.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('tap_me_click.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('tap_me_click.rightButton', _mouseButtons[2]);
    if (tap_me_click.clicked_name.length > 0) {
      psychoJS.experiment.addData('tap_me_click.clicked_name', tap_me_click.clicked_name[0]);}
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var start_buttonComponents;
function start_buttonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_button'-------
    t = 0;
    start_buttonClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((progress > 0)) {
        start_img.setImage("img/go.png");
    } else {
        start_img.setImage("img/start.png");
    }
    
    // setup some python lists for storing info about the start_press
    start_press.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    start_buttonComponents = [];
    start_buttonComponents.push(start_img);
    start_buttonComponents.push(start_press);
    
    for (const thisComponent of start_buttonComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var countdown;
function start_buttonRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_button'-------
    // get current time
    t = start_buttonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    countdown = Math.round((1 - t));
    if (((countdown === 0) && (progress > 0))) {
        continueRoutine = false;
    }
    
    
    // *start_img* updates
    if (t >= 0.0 && start_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_img.tStart = t;  // (not accounting for frame time here)
      start_img.frameNStart = frameN;  // exact frame index
      
      start_img.setAutoDraw(true);
    }

    // *start_press* updates
    if (t >= 0.0 && start_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_press.tStart = t;  // (not accounting for frame time here)
      start_press.frameNStart = frameN;  // exact frame index
      
      start_press.status = PsychoJS.Status.STARTED;
      start_press.mouseClock.reset();
      prevButtonState = start_press.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_press.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_press.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_img]) {
            if (obj.contains(start_press)) {
              gotValidClick = true;
              start_press.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_buttonComponents)
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


function start_buttonRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_button'-------
    for (const thisComponent of start_buttonComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = start_press.getPos();
    _mouseButtons = start_press.getPressed();
    psychoJS.experiment.addData('start_press.x', _mouseXYs[0]);
    psychoJS.experiment.addData('start_press.y', _mouseXYs[1]);
    psychoJS.experiment.addData('start_press.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('start_press.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('start_press.rightButton', _mouseButtons[2]);
    if (start_press.clicked_name.length > 0) {
      psychoJS.experiment.addData('start_press.clicked_name', start_press.clicked_name[0]);}
    // the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation_2Components;
function fixation_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation_2'-------
    t = 0;
    fixation_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_2Components = [];
    fixation_2Components.push(background_0);
    
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation_2'-------
    // get current time
    t = fixation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_0* updates
    if (t >= 0.0 && background_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_0.tStart = t;  // (not accounting for frame time here)
      background_0.frameNStart = frameN;  // exact frame index
      
      background_0.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_0.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_2Components)
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


function fixation_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation_2'-------
    for (const thisComponent of fixation_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var CS;
var button_vis;
var shield_pressed;
var big_shield2_vis;
var rt;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the touch_resp
    // current position of the mouse:
    touch_resp.x = [];
    touch_resp.y = [];
    touch_resp.leftButton = [];
    touch_resp.midButton = [];
    touch_resp.rightButton = [];
    touch_resp.time = [];
    touch_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    //CS = [];
    CS=0;
    button_vis=1;
    shield_pressed = 0;
    big_shield2_vis=0;
    rt=0;
    if ((tts === 1)) {
        img.setImage((("img/" + cond) + "/CSminus.png"));
    //    CS.push(4);
        CS=4;
    } else {
        if (((tts === 2) || (tts === 3))) {
            img.setImage((("img/" + cond) + "/CSplus1.png"));
            CS=2;
        } else {
            if (((tts === 4) || (tts === 5))) {
                img.setImage((("img/" + cond) + "/CSplus2.png"));
                CS=6;
            } else {
                if ((tts === 6)) {
                    img.setImage((("img/" + cond) + "/CSplus1nTheta.png"));
                    CS=1;
                } else {
                    if ((tts === 7)) {
                        img.setImage((("img/" + cond) + "/CSplus1pTheta.png"));
                        CS=3;
                    } else {
                        if ((tts === 8)) {
                            img.setImage((("img/" + cond) + "/CSplus2nTheta.png"));
                            CS=5
                        } else {
                            if ((tts === 9)) {
                                img.setImage((("img/" + cond) + "/CSplus2pTheta.png"));
                                CS=7
                            }
                        }
                    }
                }
            }
        }
    }
    //point1.setText(("Current press count: " + points.toString()));
    //cash1.setText(("Total points: " + cash_left.toString()));
    //
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(background_1);
    trialComponents.push(touch_resp);
    trialComponents.push(button);
    trialComponents.push(img);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var mouse_down_detected;
var mouse_click;
var mouse_loc;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_1* updates
    if (t >= 0.0 && background_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_1.tStart = t;  // (not accounting for frame time here)
      background_1.frameNStart = frameN;  // exact frame index
      
      background_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_1.setAutoDraw(false);
    }
    // *touch_resp* updates
    if (t >= 0 && touch_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_resp.tStart = t;  // (not accounting for frame time here)
      touch_resp.frameNStart = frameN;  // exact frame index
      
      touch_resp.status = PsychoJS.Status.STARTED;
      touch_resp.mouseClock.reset();
      prevButtonState = touch_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (touch_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      touch_resp.status = PsychoJS.Status.FINISHED;
  }
    if (touch_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = touch_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = touch_resp.getPos();
          touch_resp.x.push(_mouseXYs[0]);
          touch_resp.y.push(_mouseXYs[1]);
          touch_resp.leftButton.push(_mouseButtons[0]);
          touch_resp.midButton.push(_mouseButtons[1]);
          touch_resp.rightButton.push(_mouseButtons[2]);
          touch_resp.time.push(touch_resp.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button]) {
            if (obj.contains(touch_resp)) {
              gotValidClick = true;
              touch_resp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    mouse_down_detected = false;
    mouse_click = touch_resp.getPressed();
    if (mouse_click[0]) {
        if ((! mouse_down_detected)) {
            mouse_loc = touch_resp.getPos();
            mouse_down_detected = true;
        }
    } else {
        mouse_down_detected = false;
    }
    
    
    // *button* updates
    if (t >= 0.0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button.setAutoDraw(false);
    }
    
    // *img* updates
    if (t >= 0 && img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img.tStart = t;  // (not accounting for frame time here)
      img.frameNStart = frameN;  // exact frame index
      
      img.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img.setAutoDraw(false);
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
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var outcome;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (touch_resp.x) {  psychoJS.experiment.addData('touch_resp.x', touch_resp.x[0])};
    if (touch_resp.y) {  psychoJS.experiment.addData('touch_resp.y', touch_resp.y[0])};
    if (touch_resp.leftButton) {  psychoJS.experiment.addData('touch_resp.leftButton', touch_resp.leftButton[0])};
    if (touch_resp.midButton) {  psychoJS.experiment.addData('touch_resp.midButton', touch_resp.midButton[0])};
    if (touch_resp.rightButton) {  psychoJS.experiment.addData('touch_resp.rightButton', touch_resp.rightButton[0])};
    if (touch_resp.time) {  psychoJS.experiment.addData('touch_resp.time', touch_resp.time[0])};
    if (touch_resp.clicked_name) {  psychoJS.experiment.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])};
    
    if ((mouse_down_detected === true)) {
        points += 1;
        shield_pressed = 1;
        cash_left -= press_loss
        rt = touch_resp.time[0]
    } else {
        points += 0;
        shield_pressed = 0;
    }
    if (((mouse_down_detected === false) && (tts === 2))) {
        outcome = (- 1);
        cash_left -= loss_amount;
    } else {
        if (((mouse_down_detected === false) && (tts === 4))) {
            outcome = (- 1);
            cash_left -= loss_amount;
        } else {
            outcome = 0;
        }
    }
    psychoJS.experiment.addData("cue", CS);
    psychoJS.experiment.addData("choice", shield_pressed);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("outcome", outcome);
    psychoJS.experiment.addData("shield_count", points);
    psychoJS.experiment.addData("cash_left", cash_left);
    psychoJS.experiment.addData("cond", cond);
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_pt;
var rock_sound;
var shield_sound;
var pop_2Components;
function pop_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pop_2'-------
    t = 0;
    pop_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_pt = "";
    rock_sound = 0;
    shield_sound = 0;
    if ((outcome === (- 1))) {
        img_outcome.setImage("img/stone.png");
        feedback_pt = "-10";
        rock_sound = 1;
    } else {
        img_outcome.setImage("img/noLost.png");
    }
    if (((outcome === 0) && (shield_pressed === 1))) {
        big_shield2_vis = 1;
        feedback_pt = "-2";
        shield_sound = 1;
    }
    
    feedback_text.setText(feedback_pt);
    big_shield_2.setOpacity(big_shield2_vis);
    rock_wav.secs=1.0;
    rock_wav.setVolume(rock_sound);
    shield_wav.secs=1.0;
    shield_wav.setVolume(shield_sound);
    // keep track of which components have finished
    pop_2Components = [];
    pop_2Components.push(background_2);
    pop_2Components.push(feedback_text);
    pop_2Components.push(img_outcome);
    pop_2Components.push(big_shield_2);
    pop_2Components.push(rock_wav);
    pop_2Components.push(shield_wav);
    
    for (const thisComponent of pop_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pop_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pop_2'-------
    // get current time
    t = pop_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_2* updates
    if (t >= 0.0 && background_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_2.tStart = t;  // (not accounting for frame time here)
      background_2.frameNStart = frameN;  // exact frame index
      
      background_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_2.setAutoDraw(false);
    }
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    
    // *img_outcome* updates
    if (t >= 0.0 && img_outcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_outcome.tStart = t;  // (not accounting for frame time here)
      img_outcome.frameNStart = frameN;  // exact frame index
      
      img_outcome.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img_outcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_outcome.setAutoDraw(false);
    }
    
    // *big_shield_2* updates
    if (t >= 0.0 && big_shield_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      big_shield_2.tStart = t;  // (not accounting for frame time here)
      big_shield_2.frameNStart = frameN;  // exact frame index
      
      big_shield_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (big_shield_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      big_shield_2.setAutoDraw(false);
    }
    // start/stop rock_wav
    if (t >= 0.0 && rock_wav.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rock_wav.tStart = t;  // (not accounting for frame time here)
      rock_wav.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ rock_wav.play(); });  // screen flip
      rock_wav.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rock_wav.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        rock_wav.stop();  // stop the sound (if longer than duration)
      }
      rock_wav.status = PsychoJS.Status.FINISHED;
    }
    // start/stop shield_wav
    if (t >= 0.0 && shield_wav.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shield_wav.tStart = t;  // (not accounting for frame time here)
      shield_wav.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ shield_wav.play(); });  // screen flip
      shield_wav.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (shield_wav.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        shield_wav.stop();  // stop the sound (if longer than duration)
      }
      shield_wav.status = PsychoJS.Status.FINISHED;
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pop_2Components)
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


function pop_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'pop_2'-------
    for (const thisComponent of pop_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    rock_wav.stop();  // ensure sound has stopped at end of routine
    shield_wav.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var timer_text;
var block_scoreComponents;
function block_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'block_score'-------
    t = 0;
    block_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    progress = (progress + 25);
    progImg.setImage((("img/p" + progress.toString()) + ".png"));
    if ((progress < 100)) {
        txt_part = (("Well done! You are " + progress.toString()) + "% through! Keep going!");
        block_cash.setText(((((((txt_part + "\n") + "\nYour current total remaining is ") + cash_left.toString()) + " points.") + "\n") + "\nTake a short rest and get ready to play."));
    }
    if ((progress === 100)) {
        txt_part = "Well done! You have finished the game. Please wait.";
        block_cash.setText(((((txt_part + "\n") + "\nYour total remaining is ") + cash_left.toString()) + " points."));
    }
    
    timer_text = "";
    
    // keep track of which components have finished
    block_scoreComponents = [];
    block_scoreComponents.push(text);
    block_scoreComponents.push(block_cash);
    block_scoreComponents.push(progImg);
    
    for (const thisComponent of block_scoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_score'-------
    // get current time
    t = block_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    if (text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text.setText(timer_text, false);
    }
    
    // *block_cash* updates
    if (t >= 0.0 && block_cash.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_cash.tStart = t;  // (not accounting for frame time here)
      block_cash.frameNStart = frameN;  // exact frame index
      
      block_cash.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block_cash.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block_cash.setAutoDraw(false);
    }
    
    // *progImg* updates
    if (t >= 0.0 && progImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progImg.tStart = t;  // (not accounting for frame time here)
      progImg.frameNStart = frameN;  // exact frame index
      
      progImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (progImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      progImg.setAutoDraw(false);
    }
    countdown = Math.round(((break_dur - 0.5) - t));
    if ((progress === 100)) {
        timer_text = "";
        continueRoutine = false;
    }
    if ((countdown === 0)) {
        if ((progress === 100)) {
            timer_text = "";
        } else {
            timer_text = "Go!";
        }
    } else {
        timer_text = (("The task will start again in: " + countdown.toString()) + " second(s).");
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_scoreComponents)
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


function block_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'block_score'-------
    for (const thisComponent of block_scoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "block_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var final_scoreComponents;
function final_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'final_score'-------
    t = 0;
    final_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    score.setText(((("You have earned " + cash_left.toString()) + " points!") + "\nWell done!"));
    
    // keep track of which components have finished
    final_scoreComponents = [];
    final_scoreComponents.push(score);
    
    for (const thisComponent of final_scoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function final_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'final_score'-------
    // get current time
    t = final_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score* updates
    if (t >= 0.0 && score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score.tStart = t;  // (not accounting for frame time here)
      score.frameNStart = frameN;  // exact frame index
      
      score.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (score.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      score.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of final_scoreComponents)
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


function final_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'final_score'-------
    for (const thisComponent of final_scoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var end_thanksComponents;
function end_thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_thanks'-------
    t = 0;
    end_thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    end_thanksComponents = [];
    end_thanksComponents.push(thanks_text);
    
    for (const thisComponent of end_thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_thanks'-------
    // get current time
    t = end_thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_thanksComponents)
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


function end_thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_thanks'-------
    for (const thisComponent of end_thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
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
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
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

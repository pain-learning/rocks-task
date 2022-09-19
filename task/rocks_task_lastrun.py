#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Fri Jul  8 14:42:51 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('2021.2.3')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import numpy as np

# set press counter
points = 0

# set cash counter
cash_left = 600
loss_amount = 10
press_loss = 2

# set sequence
cond = str(int(np.floor(np.random.rand(1)[0] * 2)+1))


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'IAT-1.4'  # from the Builder filename that created this script
expInfo = {'participant': '', 'order': ['random', 1, 2, 3], 'session': '001', 'study': '', 'group': 'A', 'qpid': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data' + os.path.sep + '%s_%s' %(expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/GoogleDrive/Shared drives/Cam Nox Lab/APDP/apdp_public_tasks/rocks_task_public/rocks_task_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
#thisExp=psychoJS.experiment;
#win=psychoJS.window;
#event=psychoJS.eventManager;
#Array.prototype.append = [].push;
#shuffle = util.shuffle;
Image1Pos = (0,0.05,0.05,-0.39,-0.39,-1,-0.39,-0.39);
Image1Size = (0,0.3,0.3,0.17,0.17,0,0.17,0.17);
Image2Pos = (0, 0, 0, 0, 0, 0.05,0.05,0.05);
Image2Size = (0, 0, 0, 0, 0, 0.37,0.3,0.375);
Image1Vis = (0,1,1,1,1,0,1,1)
Image2Vis = (0,0,0,0,0,1,1,1)
TapVis = (0,0,0,0,1,0,0,0);
NextVis = (1,1,1,1,0,1,1,1)
progress = 0;
next_pos = (-0.185, -0.185, -0.185, -0.185, -1, -0.185,-0.185,-0.185);
rockSound = (0,1,0,0,0,0,0,0);
shieldSound = (0,0,0,0,0,1,0,0);
shield_sound_obj = sound.Sound('img/thud.wav')
rock_sound_obj = sound.Sound('img/falling.wav')

# Initialize components for Routine "welcome"
welcomeClock = core.Clock()
welcome_next = visual.ImageStim(
    win=win,
    name='welcome_next', 
    image='img/next.png', mask=None,
    ori=0.0, pos=(0,-0.185), size=(0.3, 0.092),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
welcome_click = event.Mouse(win=win)
x, y = [None, None]
welcome_click.mouseClock = core.Clock()
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text='Welcome to the ‘Stay safe’ game!\n\nThe task should take about 15 minutes.\n\nThere will be three breaks.\n\nPlease make sure you understand the instructions on the next page before you start.',
    font='Arial',
    pos=(0, 0.12), height=0.04, wrapWidth=0.6, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
if expInfo['order']=='random':
    expInfo['order'] = randint(1,3)
    order_var = expInfo['order']
    
blocks_file = "blocks/blocks_order"+str(expInfo['order'])+".xlsx"
#blocks_file = "blocks/blocks_order_longdemo"+str(expInfo['order'])+".xlsx"
#blocks_file = "blocks/blocks_order_shortdemo"+str(expInfo['order'])+".xlsx"

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
image_road = visual.ImageStim(
    win=win,
    name='image_road', 
    image='img/road22.png', mask=None,
    ori=0.0, pos=(0, -.15), size=(0.7, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
instructs_text = visual.TextStim(win=win, name='instructs_text',
    text='',
    font='Arial',
    units='height', pos=[0, 0.35], height=0.04, wrapWidth=0.6, ori=0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-2.0);
instr_done_touch = event.Mouse(win=win)
x, y = [None, None]
instr_done_touch.mouseClock = core.Clock()
next_img = visual.ImageStim(
    win=win,
    name='next_img', units='height', 
    image='img/next.png', mask=None,
    ori=0.0, pos=[0,0], size=(0.3, 0.092),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
tap_me_click = event.Mouse(win=win)
x, y = [None, None]
tap_me_click.mouseClock = core.Clock()
Img1 = visual.ImageStim(
    win=win,
    name='Img1', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
Img2 = visual.ImageStim(
    win=win,
    name='Img2', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
tap_me = visual.ImageStim(
    win=win,
    name='tap_me', 
    image='img/tap.png', mask=None,
    ori=45.0, pos=(0.05,-0.37), size=(0.07,0.07),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)

# Initialize components for Routine "start_button"
start_buttonClock = core.Clock()
break_dur = 9
#break_dur = 1;
start_img = visual.ImageStim(
    win=win,
    name='start_img', 
    image=None, mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
start_press = event.Mouse(win=win)
x, y = [None, None]
start_press.mouseClock = core.Clock()

# Initialize components for Routine "fixation_2"
fixation_2Clock = core.Clock()
background_0 = visual.ImageStim(
    win=win,
    name='background_0', 
    image='img/road22.png', mask=None,
    ori=0.0, pos=(0, -.15), size=(0.7, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)

# Initialize components for Routine "trial"
trialClock = core.Clock()
background_1 = visual.ImageStim(
    win=win,
    name='background_1', 
    image='img/road22.png', mask=None,
    ori=0.0, pos=(0, -.15), size=(0.7, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
touch_resp = event.Mouse(win=win)
x, y = [None, None]
touch_resp.mouseClock = core.Clock()
button = visual.ImageStim(
    win=win,
    name='button', 
    image='img/shield.png', mask=None,
    ori=0.0, pos=(0,-0.39), size=(0.17, 0.17),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
img = visual.ImageStim(
    win=win,
    name='img', units='height', 
    image=None, mask=None,
    ori=0, pos=[0,0], size=(0.3, 0.35),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)

# Initialize components for Routine "pop_2"
pop_2Clock = core.Clock()
background_2 = visual.ImageStim(
    win=win,
    name='background_2', 
    image='img/road22.png', mask=None,
    ori=0.0, pos=(0, -.15), size=(0.7, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='',
    font='Arial',
    pos=(-0.01,-0.39), height=0.08, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-2.0);
img_outcome = visual.ImageStim(
    win=win,
    name='img_outcome', 
    image=None, mask=None,
    ori=0.0, pos=(0, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
big_shield_2 = visual.ImageStim(
    win=win,
    name='big_shield_2', 
    image='img/shield.png', mask=None,
    ori=0.0, pos=(0, 0.05), size=(0.37, 0.37),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
rock_wav = sound.Sound('img/falling.wav', secs=1.0, stereo=True, hamming=True,
    name='rock_wav')
rock_wav.setVolume(1.0)
shield_wav = sound.Sound('img/thud.wav', secs=1.0, stereo=True, hamming=True,
    name='shield_wav')
shield_wav.setVolume(1.0)

# Initialize components for Routine "block_score"
block_scoreClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Arial',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='darkgreen', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
block_cash = visual.TextStim(win=win, name='block_cash',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
txt_part = ' '
progImg = visual.ImageStim(
    win=win,
    name='progImg', 
    image=None, mask=None,
    ori=0.0, pos=(0, -0.39), size=(0.5, 0.0758),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "final_score"
final_scoreClock = core.Clock()
score = visual.TextStim(win=win, name='score',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end_thanks"
end_thanksClock = core.Clock()
thanks_text = visual.TextStim(win=win, name='thanks_text',
    text='Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font='Arial',
    units='height', pos=[0, 0], height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "welcome"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the welcome_click
welcome_click.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
welcomeComponents = [welcome_next, welcome_click, welcome_text]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcome"-------
while continueRoutine:
    # get current time
    t = welcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_next* updates
    if welcome_next.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_next.frameNStart = frameN  # exact frame index
        welcome_next.tStart = t  # local t and not account for scr refresh
        welcome_next.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_next, 'tStartRefresh')  # time at next scr refresh
        welcome_next.setAutoDraw(True)
    # *welcome_click* updates
    if welcome_click.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_click.frameNStart = frameN  # exact frame index
        welcome_click.tStart = t  # local t and not account for scr refresh
        welcome_click.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_click, 'tStartRefresh')  # time at next scr refresh
        welcome_click.status = STARTED
        welcome_click.mouseClock.reset()
        prevButtonState = welcome_click.getPressed()  # if button is down already this ISN'T a new click
    if welcome_click.status == STARTED:  # only update if started and not finished!
        buttons = welcome_click.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(welcome_next)
                    clickableList = welcome_next
                except:
                    clickableList = [welcome_next]
                for obj in clickableList:
                    if obj.contains(welcome_click):
                        gotValidClick = True
                        welcome_click.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        welcome_text.setAutoDraw(True)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcome"-------
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('welcome_next.started', welcome_next.tStartRefresh)
thisExp.addData('welcome_next.stopped', welcome_next.tStopRefresh)
# store data for thisExp (ExperimentHandler)
thisExp.addData('welcome_click.started', welcome_click.tStart)
thisExp.addData('welcome_click.stopped', welcome_click.tStop)
thisExp.nextEntry()
thisExp.addData('welcome_text.started', welcome_text.tStartRefresh)
thisExp.addData('welcome_text.stopped', welcome_text.tStopRefresh)
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('instructions.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    #set images and sounds
    tap_vis=TapVis[trials_2.thisN];
    next_vis=NextVis[trials_2.thisN];
    next_pos2 = (0,next_pos[trials_2.thisN]);
    Image1Pos2 = (0,Image1Pos[trials_2.thisN]);
    Image2Pos2 = (0,Image2Pos[trials_2.thisN]);
    Image1Size2 = (Image1Size[trials_2.thisN],Image1Size[trials_2.thisN]);
    Image2Size2 = (Image2Size[trials_2.thisN],Image2Size[trials_2.thisN]);
    if Image2 == 'img/continuum.png':
        Image2Size2 = (Image2Size[trials_2.thisN],Image2Size[trials_2.thisN]/2);
    Vis1_bool = Image1Vis[trials_2.thisN];
    Vis2_bool = Image2Vis[trials_2.thisN];
    rock_fall_instr = rockSound[trials_2.thisN];
    shield_instr = shieldSound[trials_2.thisN];
    
    #play sounds
    rock_played = 0
    shield_played = 0
    if (rock_played==0) and (rock_fall_instr==1):
        rock_played = 1
        rock_sound_obj.play()
    if (shield_played==0) and (shield_instr==1):
        shield_played = 1
        shield_sound_obj.play()
    
    instructs_text.setOpacity(1)
    instructs_text.setText(Instruction)
    # setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = []
    gotValidClick = False  # until a click is received
    next_img.setOpacity(next_vis)
    next_img.setPos(next_pos2)
    # setup some python lists for storing info about the tap_me_click
    tap_me_click.clicked_name = []
    gotValidClick = False  # until a click is received
    Img1.setOpacity(Vis1_bool)
    Img1.setPos(Image1Pos2)
    Img1.setSize(Image1Size2)
    Img1.setImage(Image1)
    Img2.setOpacity(Vis2_bool)
    Img2.setPos(Image2Pos2)
    Img2.setSize(Image2Size2)
    Img2.setImage(Image2)
    tap_me.setOpacity(tap_vis)
    # keep track of which components have finished
    instructionsComponents = [image_road, instructs_text, instr_done_touch, next_img, tap_me_click, Img1, Img2, tap_me]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions"-------
    while continueRoutine:
        # get current time
        t = instructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if (tap_vis==1) and tap_me_click.isPressedIn(Img1,buttons=[0]):
            continueRoutine = False
        
         
        
        # *image_road* updates
        if image_road.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_road.frameNStart = frameN  # exact frame index
            image_road.tStart = t  # local t and not account for scr refresh
            image_road.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_road, 'tStartRefresh')  # time at next scr refresh
            image_road.setAutoDraw(True)
        
        # *instructs_text* updates
        if instructs_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructs_text.frameNStart = frameN  # exact frame index
            instructs_text.tStart = t  # local t and not account for scr refresh
            instructs_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructs_text, 'tStartRefresh')  # time at next scr refresh
            instructs_text.setAutoDraw(True)
        # *instr_done_touch* updates
        if instr_done_touch.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_done_touch.frameNStart = frameN  # exact frame index
            instr_done_touch.tStart = t  # local t and not account for scr refresh
            instr_done_touch.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_done_touch, 'tStartRefresh')  # time at next scr refresh
            instr_done_touch.status = STARTED
            instr_done_touch.mouseClock.reset()
            prevButtonState = instr_done_touch.getPressed()  # if button is down already this ISN'T a new click
        if instr_done_touch.status == STARTED:  # only update if started and not finished!
            buttons = instr_done_touch.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(next_img)
                        clickableList = next_img
                    except:
                        clickableList = [next_img]
                    for obj in clickableList:
                        if obj.contains(instr_done_touch):
                            gotValidClick = True
                            instr_done_touch.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *next_img* updates
        if next_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            next_img.frameNStart = frameN  # exact frame index
            next_img.tStart = t  # local t and not account for scr refresh
            next_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_img, 'tStartRefresh')  # time at next scr refresh
            next_img.setAutoDraw(True)
        
        # *Img1* updates
        if Img1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Img1.frameNStart = frameN  # exact frame index
            Img1.tStart = t  # local t and not account for scr refresh
            Img1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Img1, 'tStartRefresh')  # time at next scr refresh
            Img1.setAutoDraw(True)
        
        # *Img2* updates
        if Img2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Img2.frameNStart = frameN  # exact frame index
            Img2.tStart = t  # local t and not account for scr refresh
            Img2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Img2, 'tStartRefresh')  # time at next scr refresh
            Img2.setAutoDraw(True)
        
        # *tap_me* updates
        if tap_me.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tap_me.frameNStart = frameN  # exact frame index
            tap_me.tStart = t  # local t and not account for scr refresh
            tap_me.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tap_me, 'tStartRefresh')  # time at next scr refresh
            tap_me.setAutoDraw(True)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions"-------
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('image_road.started', image_road.tStartRefresh)
    trials_2.addData('image_road.stopped', image_road.tStopRefresh)
    # store data for trials_2 (TrialHandler)
    x, y = instr_done_touch.getPos()
    buttons = instr_done_touch.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(next_img)
            clickableList = next_img
        except:
            clickableList = [next_img]
        for obj in clickableList:
            if obj.contains(instr_done_touch):
                gotValidClick = True
                instr_done_touch.clicked_name.append(obj.name)
    trials_2.addData('instr_done_touch.x', x)
    trials_2.addData('instr_done_touch.y', y)
    trials_2.addData('instr_done_touch.leftButton', buttons[0])
    trials_2.addData('instr_done_touch.midButton', buttons[1])
    trials_2.addData('instr_done_touch.rightButton', buttons[2])
    if len(instr_done_touch.clicked_name):
        trials_2.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0])
    trials_2.addData('instr_done_touch.started', instr_done_touch.tStart)
    trials_2.addData('instr_done_touch.stopped', instr_done_touch.tStop)
    trials_2.addData('next_img.started', next_img.tStartRefresh)
    trials_2.addData('next_img.stopped', next_img.tStopRefresh)
    # store data for trials_2 (TrialHandler)
    x, y = tap_me_click.getPos()
    buttons = tap_me_click.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(Img1)
            clickableList = Img1
        except:
            clickableList = [Img1]
        for obj in clickableList:
            if obj.contains(tap_me_click):
                gotValidClick = True
                tap_me_click.clicked_name.append(obj.name)
    trials_2.addData('tap_me_click.x', x)
    trials_2.addData('tap_me_click.y', y)
    trials_2.addData('tap_me_click.leftButton', buttons[0])
    trials_2.addData('tap_me_click.midButton', buttons[1])
    trials_2.addData('tap_me_click.rightButton', buttons[2])
    if len(tap_me_click.clicked_name):
        trials_2.addData('tap_me_click.clicked_name', tap_me_click.clicked_name[0])
    trials_2.addData('Img1.started', Img1.tStartRefresh)
    trials_2.addData('Img1.stopped', Img1.tStopRefresh)
    trials_2.addData('Img2.started', Img2.tStartRefresh)
    trials_2.addData('Img2.stopped', Img2.tStopRefresh)
    trials_2.addData('tap_me.started', tap_me.tStartRefresh)
    trials_2.addData('tap_me.stopped', tap_me.tStopRefresh)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_2'


# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(blocks_file),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "start_button"-------
    continueRoutine = True
    # update component parameters for each repeat
    if progress>0:
        start_img.setImage("img/go.png")
    else:
        start_img.setImage("img/start.png")
    # setup some python lists for storing info about the start_press
    start_press.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    start_buttonComponents = [start_img, start_press]
    for thisComponent in start_buttonComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    start_buttonClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "start_button"-------
    while continueRoutine:
        # get current time
        t = start_buttonClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=start_buttonClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        countdown = round(1-t)
        if countdown==0 and progress>0:
            continueRoutine = False;
        
        # *start_img* updates
        if start_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_img.frameNStart = frameN  # exact frame index
            start_img.tStart = t  # local t and not account for scr refresh
            start_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_img, 'tStartRefresh')  # time at next scr refresh
            start_img.setAutoDraw(True)
        # *start_press* updates
        if start_press.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_press.frameNStart = frameN  # exact frame index
            start_press.tStart = t  # local t and not account for scr refresh
            start_press.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_press, 'tStartRefresh')  # time at next scr refresh
            start_press.status = STARTED
            start_press.mouseClock.reset()
            prevButtonState = start_press.getPressed()  # if button is down already this ISN'T a new click
        if start_press.status == STARTED:  # only update if started and not finished!
            buttons = start_press.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(start_img)
                        clickableList = start_img
                    except:
                        clickableList = [start_img]
                    for obj in clickableList:
                        if obj.contains(start_press):
                            gotValidClick = True
                            start_press.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_buttonComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "start_button"-------
    for thisComponent in start_buttonComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('start_img.started', start_img.tStartRefresh)
    blocks.addData('start_img.stopped', start_img.tStopRefresh)
    # store data for blocks (TrialHandler)
    x, y = start_press.getPos()
    buttons = start_press.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(start_img)
            clickableList = start_img
        except:
            clickableList = [start_img]
        for obj in clickableList:
            if obj.contains(start_press):
                gotValidClick = True
                start_press.clicked_name.append(obj.name)
    blocks.addData('start_press.x', x)
    blocks.addData('start_press.y', y)
    blocks.addData('start_press.leftButton', buttons[0])
    blocks.addData('start_press.midButton', buttons[1])
    blocks.addData('start_press.rightButton', buttons[2])
    if len(start_press.clicked_name):
        blocks.addData('start_press.clicked_name', start_press.clicked_name[0])
    blocks.addData('start_press.started', start_press.tStart)
    blocks.addData('start_press.stopped', start_press.tStop)
    # the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condsFile),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "fixation_2"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        # keep track of which components have finished
        fixation_2Components = [background_0]
        for thisComponent in fixation_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixation_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = fixation_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixation_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *background_0* updates
            if background_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                background_0.frameNStart = frameN  # exact frame index
                background_0.tStart = t  # local t and not account for scr refresh
                background_0.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(background_0, 'tStartRefresh')  # time at next scr refresh
                background_0.setAutoDraw(True)
            if background_0.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > background_0.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    background_0.tStop = t  # not accounting for scr refresh
                    background_0.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(background_0, 'tStopRefresh')  # time at next scr refresh
                    background_0.setAutoDraw(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixation_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation_2"-------
        for thisComponent in fixation_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('background_0.started', background_0.tStartRefresh)
        trials.addData('background_0.stopped', background_0.tStopRefresh)
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        routineTimer.add(2.500000)
        # update component parameters for each repeat
        # setup some python lists for storing info about the touch_resp
        touch_resp.x = []
        touch_resp.y = []
        touch_resp.leftButton = []
        touch_resp.midButton = []
        touch_resp.rightButton = []
        touch_resp.time = []
        touch_resp.clicked_name = []
        gotValidClick = False  # until a click is received
        # set path
        button_vis=1;
        shield_pressed = 0;
        big_shield2_vis=0;
        rt=0
        if tts == 1:
            img.setImage('img/' + cond + "/CSminus.png")
            CS = 4
        elif tts == 2 or tts == 3:
            img.setImage("img/" + cond + "/CSplus1.png")
            CS = 2
        elif tts == 4 or tts == 5:
            img.setImage("img/" + cond + "/CSplus2.png")
            CS = 6
        elif tts == 6:
            img.setImage("img/" + cond + "/CSplus1nTheta.png")
            CS = 1
        elif tts == 7:
            img.setImage("img/" + cond + "/CSplus1pTheta.png")
            CS = 3
        elif tts == 8:
            img.setImage("img/" + cond + "/CSplus2nTheta.png")
            CS = 5
        elif tts == 9:
            img.setImage("img/" + cond + "/CSplus2pTheta.png")
            CS = 7
        
        # show cash
        cash_left = np.round(cash_left, 2)
        #cash1.setText('Total points: '+str(cash_left))
        # keep track of which components have finished
        trialComponents = [background_1, touch_resp, button, img]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *background_1* updates
            if background_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                background_1.frameNStart = frameN  # exact frame index
                background_1.tStart = t  # local t and not account for scr refresh
                background_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(background_1, 'tStartRefresh')  # time at next scr refresh
                background_1.setAutoDraw(True)
            if background_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > background_1.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    background_1.tStop = t  # not accounting for scr refresh
                    background_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(background_1, 'tStopRefresh')  # time at next scr refresh
                    background_1.setAutoDraw(False)
            # *touch_resp* updates
            if touch_resp.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                touch_resp.frameNStart = frameN  # exact frame index
                touch_resp.tStart = t  # local t and not account for scr refresh
                touch_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(touch_resp, 'tStartRefresh')  # time at next scr refresh
                touch_resp.status = STARTED
                touch_resp.mouseClock.reset()
                prevButtonState = touch_resp.getPressed()  # if button is down already this ISN'T a new click
            if touch_resp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > touch_resp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    touch_resp.tStop = t  # not accounting for scr refresh
                    touch_resp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(touch_resp, 'tStopRefresh')  # time at next scr refresh
                    touch_resp.status = FINISHED
            if touch_resp.status == STARTED:  # only update if started and not finished!
                buttons = touch_resp.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter(button)
                            clickableList = button
                        except:
                            clickableList = [button]
                        for obj in clickableList:
                            if obj.contains(touch_resp):
                                gotValidClick = True
                                touch_resp.clicked_name.append(obj.name)
                        x, y = touch_resp.getPos()
                        touch_resp.x.append(x)
                        touch_resp.y.append(y)
                        buttons = touch_resp.getPressed()
                        touch_resp.leftButton.append(buttons[0])
                        touch_resp.midButton.append(buttons[1])
                        touch_resp.rightButton.append(buttons[2])
                        touch_resp.time.append(touch_resp.mouseClock.getTime())
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            mouse_down_detected = False
            mouse_click = touch_resp.getPressed()
            
            if mouse_click[0]: # button 0 is pressed
                if not mouse_down_detected: # initial detection
                    mouse_loc = touch_resp.getPos()
            #        mouse_click_locations.append(mouse_loc)
                    mouse_down_detected = True
                 
                    
            else:
                mouse_down_detected = False
                
            
            
            # *button* updates
            if button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                button.frameNStart = frameN  # exact frame index
                button.tStart = t  # local t and not account for scr refresh
                button.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button, 'tStartRefresh')  # time at next scr refresh
                button.setAutoDraw(True)
            if button.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > button.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    button.tStop = t  # not accounting for scr refresh
                    button.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(button, 'tStopRefresh')  # time at next scr refresh
                    button.setAutoDraw(False)
            
            # *img* updates
            if img.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                img.frameNStart = frameN  # exact frame index
                img.tStart = t  # local t and not account for scr refresh
                img.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img, 'tStartRefresh')  # time at next scr refresh
                img.setAutoDraw(True)
            if img.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > img.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    img.tStop = t  # not accounting for scr refresh
                    img.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(img, 'tStopRefresh')  # time at next scr refresh
                    img.setAutoDraw(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('background_1.started', background_1.tStartRefresh)
        trials.addData('background_1.stopped', background_1.tStopRefresh)
        # store data for trials (TrialHandler)
        if len(touch_resp.x): trials.addData('touch_resp.x', touch_resp.x[0])
        if len(touch_resp.y): trials.addData('touch_resp.y', touch_resp.y[0])
        if len(touch_resp.leftButton): trials.addData('touch_resp.leftButton', touch_resp.leftButton[0])
        if len(touch_resp.midButton): trials.addData('touch_resp.midButton', touch_resp.midButton[0])
        if len(touch_resp.rightButton): trials.addData('touch_resp.rightButton', touch_resp.rightButton[0])
        if len(touch_resp.time): trials.addData('touch_resp.time', touch_resp.time[0])
        if len(touch_resp.clicked_name): trials.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])
        trials.addData('touch_resp.started', touch_resp.tStart)
        trials.addData('touch_resp.stopped', touch_resp.tStop)
        # mosue click detection
        
        if mouse_down_detected==True:
            points += 1
            shield_pressed = 1;
            cash_left -= press_loss
            rt = touch_resp.time[0]  # annoyingly mouse is a list of rts
        else:
            points += 0
            shield_pressed = 0;
        
        # determine outcome
        if mouse_down_detected==False and tts==2:
            outcome = -1
            cash_left -= loss_amount
        elif mouse_down_detected==False and tts==4:
            outcome = -1
            cash_left -= loss_amount
        else:
            outcome = 0
            
        # saving data
        thisExp.addData('cue', CS)
        thisExp.addData('choice', shield_pressed)
        thisExp.addData('rt', rt)
        thisExp.addData('outcome', outcome)
        thisExp.addData('shield_count', points)
        thisExp.addData('cash_left', cash_left)
        thisExp.addData('cond', cond)
        trials.addData('button.started', button.tStartRefresh)
        trials.addData('button.stopped', button.tStopRefresh)
        trials.addData('img.started', img.tStartRefresh)
        trials.addData('img.stopped', img.tStopRefresh)
        
        # ------Prepare to start Routine "pop_2"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # show outcome img
        feedback_pt = ''
        rock_sound = 0
        shield_sound = 0
        
        if outcome == -1:
            img_outcome.setImage('img/stone.png')
            feedback_pt = '-10'
            rock_sound = 1
        else:
            img_outcome.setImage('img/noLost.png')
            
        if (outcome==0) and (shield_pressed==1):
            big_shield2_vis = 1
            feedback_pt = '-2'
            shield_sound = 1
        
        feedback_text.setText(feedback_pt)
        big_shield_2.setOpacity(big_shield2_vis)
        rock_wav.setSound('img/falling.wav', secs=1.0, hamming=True)
        rock_wav.setVolume(rock_sound, log=False)
        shield_wav.setSound('img/thud.wav', secs=1.0, hamming=True)
        shield_wav.setVolume(shield_sound, log=False)
        # keep track of which components have finished
        pop_2Components = [background_2, feedback_text, img_outcome, big_shield_2, rock_wav, shield_wav]
        for thisComponent in pop_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        pop_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "pop_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = pop_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=pop_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *background_2* updates
            if background_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                background_2.frameNStart = frameN  # exact frame index
                background_2.tStart = t  # local t and not account for scr refresh
                background_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(background_2, 'tStartRefresh')  # time at next scr refresh
                background_2.setAutoDraw(True)
            if background_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > background_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    background_2.tStop = t  # not accounting for scr refresh
                    background_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(background_2, 'tStopRefresh')  # time at next scr refresh
                    background_2.setAutoDraw(False)
            
            # *feedback_text* updates
            if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                feedback_text.setAutoDraw(True)
            if feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_text.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_text.tStop = t  # not accounting for scr refresh
                    feedback_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(feedback_text, 'tStopRefresh')  # time at next scr refresh
                    feedback_text.setAutoDraw(False)
            
            # *img_outcome* updates
            if img_outcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                img_outcome.frameNStart = frameN  # exact frame index
                img_outcome.tStart = t  # local t and not account for scr refresh
                img_outcome.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img_outcome, 'tStartRefresh')  # time at next scr refresh
                img_outcome.setAutoDraw(True)
            if img_outcome.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > img_outcome.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    img_outcome.tStop = t  # not accounting for scr refresh
                    img_outcome.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(img_outcome, 'tStopRefresh')  # time at next scr refresh
                    img_outcome.setAutoDraw(False)
            
            # *big_shield_2* updates
            if big_shield_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                big_shield_2.frameNStart = frameN  # exact frame index
                big_shield_2.tStart = t  # local t and not account for scr refresh
                big_shield_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(big_shield_2, 'tStartRefresh')  # time at next scr refresh
                big_shield_2.setAutoDraw(True)
            if big_shield_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > big_shield_2.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    big_shield_2.tStop = t  # not accounting for scr refresh
                    big_shield_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(big_shield_2, 'tStopRefresh')  # time at next scr refresh
                    big_shield_2.setAutoDraw(False)
            # start/stop rock_wav
            if rock_wav.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rock_wav.frameNStart = frameN  # exact frame index
                rock_wav.tStart = t  # local t and not account for scr refresh
                rock_wav.tStartRefresh = tThisFlipGlobal  # on global time
                rock_wav.play(when=win)  # sync with win flip
            if rock_wav.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > rock_wav.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    rock_wav.tStop = t  # not accounting for scr refresh
                    rock_wav.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(rock_wav, 'tStopRefresh')  # time at next scr refresh
                    rock_wav.stop()
            # start/stop shield_wav
            if shield_wav.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                shield_wav.frameNStart = frameN  # exact frame index
                shield_wav.tStart = t  # local t and not account for scr refresh
                shield_wav.tStartRefresh = tThisFlipGlobal  # on global time
                shield_wav.play(when=win)  # sync with win flip
            if shield_wav.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > shield_wav.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    shield_wav.tStop = t  # not accounting for scr refresh
                    shield_wav.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(shield_wav, 'tStopRefresh')  # time at next scr refresh
                    shield_wav.stop()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pop_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "pop_2"-------
        for thisComponent in pop_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('background_2.started', background_2.tStartRefresh)
        trials.addData('background_2.stopped', background_2.tStopRefresh)
        trials.addData('feedback_text.started', feedback_text.tStartRefresh)
        trials.addData('feedback_text.stopped', feedback_text.tStopRefresh)
        trials.addData('img_outcome.started', img_outcome.tStartRefresh)
        trials.addData('img_outcome.stopped', img_outcome.tStopRefresh)
        trials.addData('big_shield_2.started', big_shield_2.tStartRefresh)
        trials.addData('big_shield_2.stopped', big_shield_2.tStopRefresh)
        rock_wav.stop()  # ensure sound has stopped at end of routine
        trials.addData('rock_wav.started', rock_wav.tStartRefresh)
        trials.addData('rock_wav.stopped', rock_wav.tStopRefresh)
        shield_wav.stop()  # ensure sound has stopped at end of routine
        trials.addData('shield_wav.started', shield_wav.tStartRefresh)
        trials.addData('shield_wav.stopped', shield_wav.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "block_score"-------
    continueRoutine = True
    # update component parameters for each repeat
    progress = progress + 25;
    progImg.setImage("img/p"+str(progress)+".png")
    # calculate block loss
    #press_loss = 2
    #block_loss = points * press_loss
    
    # block remaining
    #cash_left = cash_left - block_loss
    
    if progress <100:
        txt_part = 'Well done! You are '+str(progress)+'% through! Keep going!'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYour current total remaining is '+str(cash_left)+' points.'+
        '\n'+
        '\nTake a short rest and get ready to play.')
    if progress==100:
        txt_part = 'Well done! You have finished the game. Please wait.'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYour total remaining is '+str(cash_left)+' points.')
    ## reset count
    #points = 0
    timer_text = ''
    
    
    # keep track of which components have finished
    block_scoreComponents = [text, block_cash, progImg]
    for thisComponent in block_scoreComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    block_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "block_score"-------
    while continueRoutine:
        # get current time
        t = block_scoreClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=block_scoreClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                text.setAutoDraw(False)
        if text.status == STARTED:  # only update if drawing
            text.setText(timer_text, log=False)
        
        # *block_cash* updates
        if block_cash.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            block_cash.frameNStart = frameN  # exact frame index
            block_cash.tStart = t  # local t and not account for scr refresh
            block_cash.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(block_cash, 'tStartRefresh')  # time at next scr refresh
            block_cash.setAutoDraw(True)
        if block_cash.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > block_cash.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                block_cash.tStop = t  # not accounting for scr refresh
                block_cash.frameNStop = frameN  # exact frame index
                win.timeOnFlip(block_cash, 'tStopRefresh')  # time at next scr refresh
                block_cash.setAutoDraw(False)
        
        # *progImg* updates
        if progImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progImg.frameNStart = frameN  # exact frame index
            progImg.tStart = t  # local t and not account for scr refresh
            progImg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progImg, 'tStartRefresh')  # time at next scr refresh
            progImg.setAutoDraw(True)
        if progImg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > progImg.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                progImg.tStop = t  # not accounting for scr refresh
                progImg.frameNStop = frameN  # exact frame index
                win.timeOnFlip(progImg, 'tStopRefresh')  # time at next scr refresh
                progImg.setAutoDraw(False)
        countdown = round(break_dur-0.5-t)
        if progress==100:
            timer_text = '';    
            continueRoutine = False;
        if countdown==0:
            if progress==100:
                timer_text=""
            else:
                timer_text="Go!"
        else:
        #    if progress==100:
        #        timer_text = "The game will end in: "+str(countdown) + ' seconds.'    
        #    else:
            timer_text="The task will start again in: "+str(countdown) + ' second(s).'    
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block_scoreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "block_score"-------
    for thisComponent in block_scoreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('text.started', text.tStartRefresh)
    blocks.addData('text.stopped', text.tStopRefresh)
    blocks.addData('block_cash.started', block_cash.tStartRefresh)
    blocks.addData('block_cash.stopped', block_cash.tStopRefresh)
    blocks.addData('progImg.started', progImg.tStartRefresh)
    blocks.addData('progImg.stopped', progImg.tStopRefresh)
    # the Routine "block_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'blocks'


# ------Prepare to start Routine "final_score"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
score.setText('You have earned '+str(cash_left)+' points!'+
'\nWell done!')
# keep track of which components have finished
final_scoreComponents = [score]
for thisComponent in final_scoreComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
final_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "final_score"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = final_scoreClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=final_scoreClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *score* updates
    if score.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        score.frameNStart = frameN  # exact frame index
        score.tStart = t  # local t and not account for scr refresh
        score.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(score, 'tStartRefresh')  # time at next scr refresh
        score.setAutoDraw(True)
    if score.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > score.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            score.tStop = t  # not accounting for scr refresh
            score.frameNStop = frameN  # exact frame index
            win.timeOnFlip(score, 'tStopRefresh')  # time at next scr refresh
            score.setAutoDraw(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in final_scoreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "final_score"-------
for thisComponent in final_scoreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('score.started', score.tStartRefresh)
thisExp.addData('score.stopped', score.tStopRefresh)

# ------Prepare to start Routine "end_thanks"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
end_thanksComponents = [thanks_text]
for thisComponent in end_thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_thanks"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = end_thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thanks_text* updates
    if thanks_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks_text.frameNStart = frameN  # exact frame index
        thanks_text.tStart = t  # local t and not account for scr refresh
        thanks_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks_text, 'tStartRefresh')  # time at next scr refresh
        thanks_text.setAutoDraw(True)
    if thanks_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thanks_text.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            thanks_text.tStop = t  # not accounting for scr refresh
            thanks_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(thanks_text, 'tStopRefresh')  # time at next scr refresh
            thanks_text.setAutoDraw(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_thanks"-------
for thisComponent in end_thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thanks_text.started', thanks_text.tStartRefresh)
thisExp.addData('thanks_text.stopped', thanks_text.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

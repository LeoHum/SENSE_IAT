#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.4),
    on juin 07, 2024, at 11:18
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.1.4'
expName = 'SENSE_IAT'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1280, 720]
_loggingLevel = logging.getLevel('warning')
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # override logging level
    _loggingLevel = logging.getLevel(
        prefs.piloting['pilotLoggingLevel']
    )

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\p00688\\Documents\\PsychoPy\\IAT 2.0\\SENSE_IAT.py',
        savePickle=True, saveWideText=False,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(_loggingLevel)


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0.9500, 0.9500, 0.9100], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0.9500, 0.9500, 0.9100]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win.getActualFrameRate(infoMsg='Veuillez patienter...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = False
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('welcome_end') is None:
        # initialise welcome_end
        welcome_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='welcome_end',
        )
    if deviceManager.getDevice('instructions_end') is None:
        # initialise instructions_end
        instructions_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='instructions_end',
        )
    if deviceManager.getDevice('words_end') is None:
        # initialise words_end
        words_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='words_end',
        )
    if deviceManager.getDevice('ready_end') is None:
        # initialise ready_end
        ready_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='ready_end',
        )
    if deviceManager.getDevice('keyboard_resp') is None:
        # initialise keyboard_resp
        keyboard_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='keyboard_resp',
        )
    if deviceManager.getDevice('end_score') is None:
        # initialise end_score
        end_score = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='end_score',
        )
    if deviceManager.getDevice('end_key_resp') is None:
        # initialise end_key_resp
        end_key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='end_key_resp',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcome" ---
    welcome_text = visual.TextStim(win=win, name='welcome_text',
        text="Bienvenue dans ce Test d'Associations Implicites Sciences et Genre. \n\nPour effectuer ce test, vous n'aurez besoin que de votre clavier. Il durera environ 5 minutes. Vous pouvez quitter le test à tout moment en appuyant sur la touche échap de votre clavier.\n\nAppuyez sur la barre espace pour passer à l'étape suivante.",
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    welcome_end = keyboard.Keyboard(deviceName='welcome_end')
    mosaique = visual.ImageStim(
        win=win,
        name='mosaique', units='norm', 
        image='Images/mosaiques2.png', mask=None, anchor='bottom-left',
        ori=0.0, pos=(-1, -1), size=None,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    logo = visual.ImageStim(
        win=win,
        name='logo', 
        image='Images/logoSENSE_S4.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0.4), size=(0.1803*2, 0.0669*2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    
    # --- Initialize components for Routine "instructions" ---
    instructions_text = visual.TextStim(win=win, name='instructions_text',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instructions_end = keyboard.Keyboard(deviceName='instructions_end')
    mosaique_2 = visual.ImageStim(
        win=win,
        name='mosaique_2', units='norm', 
        image='Images/mosaiques2.png', mask=None, anchor='bottom-left',
        ori=0.0, pos=(-1, -1), size=None,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "words" ---
    all_words = visual.TextStim(win=win, name='all_words',
        text="Voici les catégories et les mots associés utilisés lors de ce test : \n\n\n\n\n\nAppuyez sur la barre espace pour passer à l'étape suivante.",
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    words_end = keyboard.Keyboard(deviceName='words_end')
    mosaique_3 = visual.ImageStim(
        win=win,
        name='mosaique_3', units='norm', 
        image='Images/mosaiques2.png', mask=None, anchor='bottom-left',
        ori=0.0, pos=(-1, -1), size=None,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    Mots = visual.ImageStim(
        win=win,
        name='Mots', 
        image='Images/Mots.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(1.386*0.93, 0.267*0.93),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    
    # --- Initialize components for Routine "ready" ---
    # Run 'Begin Experiment' code from text_color_2
    top_leftw = ''
    top_leftw_color = 'black'
    bot_leftw = ''
    bot_leftw_color = 'black'
    leftw = ''
    leftw_color = 'black'
    
    rightw = ''
    rightw_color = 'black'
    top_rightw = ''
    top_rightw_color = 'black'
    bot_rightw = ''
    bot_rightw_color = 'black'
    
    ready_text = visual.TextStim(win=win, name='ready_text',
        text='Voici les catégories dans lesquelles vous devrez classer les mots qui apparaîtront à l\'écran.\n\nPositionnez vos doigts sur les touches "E" et "I". \n\nAppuyez sur la barre espace pour commencer.',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.4667, -0.0745, -0.9686], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    ready_end = keyboard.Keyboard(deviceName='ready_end')
    rightcat_2 = visual.TextStim(win=win, name='rightcat_2',
        text='',
        font='black',
        pos=(0.4, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    top_rightcat_2 = visual.TextStim(win=win, name='top_rightcat_2',
        text='',
        font='black',
        pos=(0.4, 0.43), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    bot_rightcat_2 = visual.TextStim(win=win, name='bot_rightcat_2',
        text='',
        font='black',
        pos=(0.4, 0.37), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    leftcat_2 = visual.TextStim(win=win, name='leftcat_2',
        text='',
        font='Arial',
        pos=(-0.4, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    bot_leftcat_2 = visual.TextStim(win=win, name='bot_leftcat_2',
        text='',
        font='Arial',
        pos=(-0.4, 0.37), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    top_leftcat_2 = visual.TextStim(win=win, name='top_leftcat_2',
        text='',
        font='Arial',
        pos=(-0.4, 0.43), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    
    # --- Initialize components for Routine "trial" ---
    # Run 'Begin Experiment' code from text_color
    top_leftw = ''
    top_leftw_color = [-0.9137, -0.7490, -0.6941]
    bot_leftw = ''
    bot_leftw_color = [-0.9137, -0.7490, -0.6941]
    leftw = ''
    leftw_color = [-0.9137, -0.7490, -0.6941]
    
    rightw = ''
    rightcat_color = [-0.9137, -0.7490, -0.6941]
    top_rightw = ''
    top_rightw_color = [-0.9137, -0.7490, -0.6941]
    bot_rightw = ''
    bot_rightw_color = [-0.9137, -0.7490, -0.6941]
    text_stim_color = [-0.9137, -0.7490, -0.6941]
    
    liste_mots_genre = [
        "Demoiselle", "Garçon", "Femme", "Homme", 
        "Tante", "Oncle", "Fille", "Fils", 
        "Féminin", "Masculin"
    ]
    
    liste_mots_sciences = [
        "Biologie", "Philosophie", "Physique", 
        "Humanités", "Chimie", "Arts", 
        "Mathématiques", "Littérature", 
        "Informatique", "Latin"
    ]
    # Run 'Begin Experiment' code from compute_score
    rt_block3 = []
    corr_rt_block3 = []
    incorr_rt_block3 = []
    err_block3 = 0 
    
    rt_block4 = []
    corr_rt_block4 = []
    incorr_rt_block4 = []
    err_block4 = 0
    
    rt_block6 = []
    corr_rt_block6 = []
    incorr_rt_block6 = []
    err_block6 = 0
    
    rt_block7 = []
    corr_rt_block7 = []
    incorr_rt_block7 = []
    err_block7 = 0
    
    fast_responses = 0
    slow_responses = 0
    total_responses = 0
    num_errors = 0
    fixation = visual.TextStim(win=win, name='fixation',
        text='+',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[0, 0, 0], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    text_stim = visual.TextStim(win=win, name='text_stim',
        text='',
        font='black',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    keyboard_resp = keyboard.Keyboard(deviceName='keyboard_resp')
    error_msg = visual.TextStim(win=win, name='error_msg',
        text='',
        font='Arial',
        pos=(0, -0.1), height=0.05, wrapWidth=None, ori=0.0, 
        color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-6.0);
    rightcat = visual.TextStim(win=win, name='rightcat',
        text='',
        font='black',
        pos=(0.4, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    top_rightcat = visual.TextStim(win=win, name='top_rightcat',
        text='',
        font='black',
        pos=(0.4, 0.43), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    bot_rightcat = visual.TextStim(win=win, name='bot_rightcat',
        text='',
        font='black',
        pos=(0.4, 0.37), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    leftcat = visual.TextStim(win=win, name='leftcat',
        text='',
        font='Arial',
        pos=(-0.4, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    bot_leftcat = visual.TextStim(win=win, name='bot_leftcat',
        text='',
        font='Arial',
        pos=(-0.4, 0.37), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    top_leftcat = visual.TextStim(win=win, name='top_leftcat',
        text='',
        font='Arial',
        pos=(-0.4, 0.43), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    
    # --- Initialize components for Routine "transition" ---
    cross = visual.TextStim(win=win, name='cross',
        text='+',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[0, 0, 0], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "score" ---
    score_feedback = visual.TextStim(win=win, name='score_feedback',
        text='',
        font='Arial',
        pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    end_score = keyboard.Keyboard(deviceName='end_score')
    err_feedback = visual.TextStim(win=win, name='err_feedback',
        text='',
        font='Arial',
        pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    adapted_fb = visual.TextStim(win=win, name='adapted_fb',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "score2" ---
    score_meaning_2 = visual.TextStim(win=win, name='score_meaning_2',
        text="Le score peut être positif ou négatif, entre -2 et +2. Un score positif correspond à des associations stéréotypiques et un score négatif à des associations contre-stéréotypiques. Plus sa valeur absolue est élevée, plus les associations sont fortes.\n\n- Le score moyen d'un échantillon français est de 0.43 (Nosek et al., 2009)\n- Le score moyen de 61 pays est de 0.38 (Nosek et al., 2009)\n\nPour terminer le test, appuyez sur la barre espace.",
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "end" ---
    text = visual.TextStim(win=win, name='text',
        text="Ce test d'associations implicites est terminé. Nous vous remercions d'y avoir pris part. Aucune donnée n'est conservée à l'issue de ce test, qui ne sert qu'à rendre compte de ses propres stéréotypes. Ainsi, si votre score est positif, vous êtes sujets aux stéréotypes sur les femmes dans les sciences.\n\nVous pouvez quitter l'expérience en appuyant sur n'importe quelle touche.",
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color=[-0.3490, -0.1373, -0.0196], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    end_key_resp = keyboard.Keyboard(deviceName='end_key_resp')
    mosaique_4 = visual.ImageStim(
        win=win,
        name='mosaique_4', units='norm', 
        image='Images/mosaiques2.png', mask=None, anchor='bottom-left',
        ori=0.0, pos=(-1, -1), size=None,
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # set up handler to look after randomisation of conditions etc
    restart = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='restart')
    thisExp.addLoop(restart)  # add the loop to the experiment
    thisRestart = restart.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRestart.rgb)
    if thisRestart != None:
        for paramName in thisRestart:
            globals()[paramName] = thisRestart[paramName]
    
    for thisRestart in restart:
        currentLoop = restart
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisRestart.rgb)
        if thisRestart != None:
            for paramName in thisRestart:
                globals()[paramName] = thisRestart[paramName]
        
        # --- Prepare to start Routine "welcome" ---
        continueRoutine = True
        # update component parameters for each repeat
        welcome_end.keys = []
        welcome_end.rt = []
        _welcome_end_allKeys = []
        # keep track of which components have finished
        welcomeComponents = [welcome_text, welcome_end, mosaique, logo]
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
        frameN = -1
        
        # --- Run Routine "welcome" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *welcome_text* updates
            
            # if welcome_text is starting this frame...
            if welcome_text.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                welcome_text.frameNStart = frameN  # exact frame index
                welcome_text.tStart = t  # local t and not account for scr refresh
                welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                welcome_text.status = STARTED
                welcome_text.setAutoDraw(True)
            
            # if welcome_text is active this frame...
            if welcome_text.status == STARTED:
                # update params
                pass
            
            # *welcome_end* updates
            
            # if welcome_end is starting this frame...
            if welcome_end.status == NOT_STARTED and t >= 1-frameTolerance:
                # keep track of start time/frame for later
                welcome_end.frameNStart = frameN  # exact frame index
                welcome_end.tStart = t  # local t and not account for scr refresh
                welcome_end.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(welcome_end, 'tStartRefresh')  # time at next scr refresh
                # update status
                welcome_end.status = STARTED
                # keyboard checking is just starting
                welcome_end.clock.reset()  # now t=0
            if welcome_end.status == STARTED:
                theseKeys = welcome_end.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _welcome_end_allKeys.extend(theseKeys)
                if len(_welcome_end_allKeys):
                    welcome_end.keys = _welcome_end_allKeys[-1].name  # just the last key pressed
                    welcome_end.rt = _welcome_end_allKeys[-1].rt
                    welcome_end.duration = _welcome_end_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *mosaique* updates
            
            # if mosaique is starting this frame...
            if mosaique.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mosaique.frameNStart = frameN  # exact frame index
                mosaique.tStart = t  # local t and not account for scr refresh
                mosaique.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mosaique, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'mosaique.started')
                # update status
                mosaique.status = STARTED
                mosaique.setAutoDraw(True)
            
            # if mosaique is active this frame...
            if mosaique.status == STARTED:
                # update params
                pass
            
            # *logo* updates
            
            # if logo is starting this frame...
            if logo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                logo.frameNStart = frameN  # exact frame index
                logo.tStart = t  # local t and not account for scr refresh
                logo.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(logo, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'logo.started')
                # update status
                logo.status = STARTED
                logo.setAutoDraw(True)
            
            # if logo is active this frame...
            if logo.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in welcomeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "welcome" ---
        for thisComponent in welcomeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "welcome" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        instructions_loop = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('instructs.xlsx'),
            seed=None, name='instructions_loop')
        thisExp.addLoop(instructions_loop)  # add the loop to the experiment
        thisInstructions_loop = instructions_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
        if thisInstructions_loop != None:
            for paramName in thisInstructions_loop:
                globals()[paramName] = thisInstructions_loop[paramName]
        
        for thisInstructions_loop in instructions_loop:
            currentLoop = instructions_loop
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
            if thisInstructions_loop != None:
                for paramName in thisInstructions_loop:
                    globals()[paramName] = thisInstructions_loop[paramName]
            
            # --- Prepare to start Routine "instructions" ---
            continueRoutine = True
            # update component parameters for each repeat
            instructions_text.setText(instruct_text)
            instructions_end.keys = []
            instructions_end.rt = []
            _instructions_end_allKeys = []
            # keep track of which components have finished
            instructionsComponents = [instructions_text, instructions_end, mosaique_2]
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
            frameN = -1
            
            # --- Run Routine "instructions" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *instructions_text* updates
                
                # if instructions_text is starting this frame...
                if instructions_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    instructions_text.frameNStart = frameN  # exact frame index
                    instructions_text.tStart = t  # local t and not account for scr refresh
                    instructions_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(instructions_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    instructions_text.status = STARTED
                    instructions_text.setAutoDraw(True)
                
                # if instructions_text is active this frame...
                if instructions_text.status == STARTED:
                    # update params
                    pass
                
                # *instructions_end* updates
                
                # if instructions_end is starting this frame...
                if instructions_end.status == NOT_STARTED and t >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    instructions_end.frameNStart = frameN  # exact frame index
                    instructions_end.tStart = t  # local t and not account for scr refresh
                    instructions_end.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(instructions_end, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    instructions_end.status = STARTED
                    # keyboard checking is just starting
                    instructions_end.clock.reset()  # now t=0
                if instructions_end.status == STARTED:
                    theseKeys = instructions_end.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _instructions_end_allKeys.extend(theseKeys)
                    if len(_instructions_end_allKeys):
                        instructions_end.keys = _instructions_end_allKeys[-1].name  # just the last key pressed
                        instructions_end.rt = _instructions_end_allKeys[-1].rt
                        instructions_end.duration = _instructions_end_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *mosaique_2* updates
                
                # if mosaique_2 is starting this frame...
                if mosaique_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    mosaique_2.frameNStart = frameN  # exact frame index
                    mosaique_2.tStart = t  # local t and not account for scr refresh
                    mosaique_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mosaique_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'mosaique_2.started')
                    # update status
                    mosaique_2.status = STARTED
                    mosaique_2.setAutoDraw(True)
                
                # if mosaique_2 is active this frame...
                if mosaique_2.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in instructionsComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "instructions" ---
            for thisComponent in instructionsComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed 1.0 repeats of 'instructions_loop'
        
        
        # --- Prepare to start Routine "words" ---
        continueRoutine = True
        # update component parameters for each repeat
        words_end.keys = []
        words_end.rt = []
        _words_end_allKeys = []
        # keep track of which components have finished
        wordsComponents = [all_words, words_end, mosaique_3, Mots]
        for thisComponent in wordsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "words" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *all_words* updates
            
            # if all_words is starting this frame...
            if all_words.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                all_words.frameNStart = frameN  # exact frame index
                all_words.tStart = t  # local t and not account for scr refresh
                all_words.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(all_words, 'tStartRefresh')  # time at next scr refresh
                # update status
                all_words.status = STARTED
                all_words.setAutoDraw(True)
            
            # if all_words is active this frame...
            if all_words.status == STARTED:
                # update params
                pass
            
            # *words_end* updates
            
            # if words_end is starting this frame...
            if words_end.status == NOT_STARTED and t >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                words_end.frameNStart = frameN  # exact frame index
                words_end.tStart = t  # local t and not account for scr refresh
                words_end.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(words_end, 'tStartRefresh')  # time at next scr refresh
                # update status
                words_end.status = STARTED
                # keyboard checking is just starting
                words_end.clock.reset()  # now t=0
            if words_end.status == STARTED:
                theseKeys = words_end.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _words_end_allKeys.extend(theseKeys)
                if len(_words_end_allKeys):
                    words_end.keys = _words_end_allKeys[-1].name  # just the last key pressed
                    words_end.rt = _words_end_allKeys[-1].rt
                    words_end.duration = _words_end_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *mosaique_3* updates
            
            # if mosaique_3 is starting this frame...
            if mosaique_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mosaique_3.frameNStart = frameN  # exact frame index
                mosaique_3.tStart = t  # local t and not account for scr refresh
                mosaique_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mosaique_3, 'tStartRefresh')  # time at next scr refresh
                # update status
                mosaique_3.status = STARTED
                mosaique_3.setAutoDraw(True)
            
            # if mosaique_3 is active this frame...
            if mosaique_3.status == STARTED:
                # update params
                pass
            
            # *Mots* updates
            
            # if Mots is starting this frame...
            if Mots.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Mots.frameNStart = frameN  # exact frame index
                Mots.tStart = t  # local t and not account for scr refresh
                Mots.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Mots, 'tStartRefresh')  # time at next scr refresh
                # update status
                Mots.status = STARTED
                Mots.setAutoDraw(True)
            
            # if Mots is active this frame...
            if Mots.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in wordsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "words" ---
        for thisComponent in wordsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "words" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        blocks = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('blocks_order - long.xlsx'),
            seed=None, name='blocks')
        thisExp.addLoop(blocks)  # add the loop to the experiment
        thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
        if thisBlock != None:
            for paramName in thisBlock:
                globals()[paramName] = thisBlock[paramName]
        
        for thisBlock in blocks:
            currentLoop = blocks
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
            if thisBlock != None:
                for paramName in thisBlock:
                    globals()[paramName] = thisBlock[paramName]
            
            # --- Prepare to start Routine "ready" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ready.started', globalClock.getTime(format='float'))
            # Run 'Begin Routine' code from text_color_2
            #check couleur mots de gauche
            if '"E" = Sciences' in label_left:
                leftw = '"E" = Sciences'
                leftw_color = 'black'
            elif '"E" = Masculin  ' in label_left:
                leftw = '"E" = Masculin'
                leftw_color = 'green'
            elif '"E" = Masculin ou Sciences'  in label_left:
                top_leftw = '"E" = Masculin'
                top_leftw_color = 'green'
                bot_leftw = 'ou Sciences'
                bot_leftw_color = 'black'
            elif '"E" = Lettres' in label_left:
                leftw = '"E" = Lettres'
                leftw_color = 'black'
            elif '"E" = Masculin ou Lettres' in label_left:
                top_leftw = '"E" = Masculin'
                top_leftw_color = 'green'
                bot_leftw = 'ou Lettres'
                bot_leftw_color = 'black'
            else:
                top_leftw = '"E" = elsem'
                top_leftw_color = 'green'
                bot_leftw = 'ou else'
                bot_leftw_color = 'black'
                leftw = '"E" = else'
                leftw_color = 'black'
            
            #check couleur mots de droite
            if '"I" = Lettres' in label_right:
                rightw = '"I" = Lettres'
                rightw_color = 'black'
            elif '"I" = Féminin  ' in label_right:
                rightw = '"I" = Féminin'
                rightw_color = 'green'
            elif '"I" = Féminin ou Lettres' in label_right:
                top_rightw = '"I" = Féminin'
                top_rightw_color = 'green'
                bot_rightw = 'ou Lettres'
                bot_rightw_color = 'black'
            elif '"I" = Sciences' in label_right:
                rightw = '"I" = Sciences'
                rightw_color = 'black'
            elif '"I" = Féminin ou Sciences' in label_right:
                top_rightw = '"I" = Féminin'
                top_rightw_color = 'green'
                bot_rightw = 'ou Sciences'
                bot_rightw_color = 'black'
            
            ready_end.keys = []
            ready_end.rt = []
            _ready_end_allKeys = []
            rightcat_2.setColor(rightw_color, colorSpace='rgb')
            rightcat_2.setText(rightw)
            top_rightcat_2.setColor(top_rightw_color, colorSpace='rgb')
            top_rightcat_2.setText(top_rightw)
            bot_rightcat_2.setColor(bot_rightw_color, colorSpace='rgb')
            bot_rightcat_2.setText(bot_rightw)
            leftcat_2.setColor(leftw_color, colorSpace='rgb')
            leftcat_2.setText(leftw)
            bot_leftcat_2.setColor(bot_leftw_color, colorSpace='rgb')
            bot_leftcat_2.setText(bot_leftw)
            top_leftcat_2.setColor(top_leftw_color, colorSpace='rgb')
            top_leftcat_2.setText(top_leftw)
            # keep track of which components have finished
            readyComponents = [ready_text, ready_end, rightcat_2, top_rightcat_2, bot_rightcat_2, leftcat_2, bot_leftcat_2, top_leftcat_2]
            for thisComponent in readyComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "ready" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *ready_text* updates
                
                # if ready_text is starting this frame...
                if ready_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ready_text.frameNStart = frameN  # exact frame index
                    ready_text.tStart = t  # local t and not account for scr refresh
                    ready_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ready_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    ready_text.status = STARTED
                    ready_text.setAutoDraw(True)
                
                # if ready_text is active this frame...
                if ready_text.status == STARTED:
                    # update params
                    pass
                
                # *ready_end* updates
                
                # if ready_end is starting this frame...
                if ready_end.status == NOT_STARTED and t >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    ready_end.frameNStart = frameN  # exact frame index
                    ready_end.tStart = t  # local t and not account for scr refresh
                    ready_end.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ready_end, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    ready_end.status = STARTED
                    # keyboard checking is just starting
                    ready_end.clock.reset()  # now t=0
                if ready_end.status == STARTED:
                    theseKeys = ready_end.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _ready_end_allKeys.extend(theseKeys)
                    if len(_ready_end_allKeys):
                        ready_end.keys = _ready_end_allKeys[-1].name  # just the last key pressed
                        ready_end.rt = _ready_end_allKeys[-1].rt
                        ready_end.duration = _ready_end_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *rightcat_2* updates
                
                # if rightcat_2 is starting this frame...
                if rightcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    rightcat_2.frameNStart = frameN  # exact frame index
                    rightcat_2.tStart = t  # local t and not account for scr refresh
                    rightcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rightcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    rightcat_2.status = STARTED
                    rightcat_2.setAutoDraw(True)
                
                # if rightcat_2 is active this frame...
                if rightcat_2.status == STARTED:
                    # update params
                    pass
                
                # *top_rightcat_2* updates
                
                # if top_rightcat_2 is starting this frame...
                if top_rightcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    top_rightcat_2.frameNStart = frameN  # exact frame index
                    top_rightcat_2.tStart = t  # local t and not account for scr refresh
                    top_rightcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(top_rightcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    top_rightcat_2.status = STARTED
                    top_rightcat_2.setAutoDraw(True)
                
                # if top_rightcat_2 is active this frame...
                if top_rightcat_2.status == STARTED:
                    # update params
                    pass
                
                # *bot_rightcat_2* updates
                
                # if bot_rightcat_2 is starting this frame...
                if bot_rightcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    bot_rightcat_2.frameNStart = frameN  # exact frame index
                    bot_rightcat_2.tStart = t  # local t and not account for scr refresh
                    bot_rightcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bot_rightcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bot_rightcat_2.status = STARTED
                    bot_rightcat_2.setAutoDraw(True)
                
                # if bot_rightcat_2 is active this frame...
                if bot_rightcat_2.status == STARTED:
                    # update params
                    pass
                
                # *leftcat_2* updates
                
                # if leftcat_2 is starting this frame...
                if leftcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    leftcat_2.frameNStart = frameN  # exact frame index
                    leftcat_2.tStart = t  # local t and not account for scr refresh
                    leftcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(leftcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    leftcat_2.status = STARTED
                    leftcat_2.setAutoDraw(True)
                
                # if leftcat_2 is active this frame...
                if leftcat_2.status == STARTED:
                    # update params
                    pass
                
                # *bot_leftcat_2* updates
                
                # if bot_leftcat_2 is starting this frame...
                if bot_leftcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    bot_leftcat_2.frameNStart = frameN  # exact frame index
                    bot_leftcat_2.tStart = t  # local t and not account for scr refresh
                    bot_leftcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bot_leftcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bot_leftcat_2.status = STARTED
                    bot_leftcat_2.setAutoDraw(True)
                
                # if bot_leftcat_2 is active this frame...
                if bot_leftcat_2.status == STARTED:
                    # update params
                    pass
                
                # *top_leftcat_2* updates
                
                # if top_leftcat_2 is starting this frame...
                if top_leftcat_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    top_leftcat_2.frameNStart = frameN  # exact frame index
                    top_leftcat_2.tStart = t  # local t and not account for scr refresh
                    top_leftcat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(top_leftcat_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    top_leftcat_2.status = STARTED
                    top_leftcat_2.setAutoDraw(True)
                
                # if top_leftcat_2 is active this frame...
                if top_leftcat_2.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in readyComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ready" ---
            for thisComponent in readyComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ready.stopped', globalClock.getTime(format='float'))
            # Run 'End Routine' code from text_color_2
            top_leftw = ''
            top_leftw_color = 'black'
            bot_leftw = ''
            bot_leftw_color = 'black'
            leftw = ''
            leftw_color = 'black'
            
            rightw = ''
            rightw_color = 'black'
            top_rightw = ''
            top_rightw_color = 'black'
            bot_rightw = ''
            bot_rightw_color = 'black'
            # the Routine "ready" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            trials = data.TrialHandler(nReps=1.0, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions(conds_file),
                seed=None, name='trials')
            thisExp.addLoop(trials)  # add the loop to the experiment
            thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            for thisTrial in trials:
                currentLoop = trials
                thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer], 
                        playbackComponents=[]
                )
                # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
                if thisTrial != None:
                    for paramName in thisTrial:
                        globals()[paramName] = thisTrial[paramName]
                
                # --- Prepare to start Routine "trial" ---
                continueRoutine = True
                # update component parameters for each repeat
                thisExp.addData('trial.started', globalClock.getTime(format='float'))
                # Run 'Begin Routine' code from text_color
                #check couleur mots de gauche
                if '"E" = Sciences' in label_left:
                    leftw = '"E" = Sciences'
                    leftw_color = [-0.9137, -0.7490, -0.6941]
                elif '"E" = Masculin  ' in label_left:
                    leftw = '"E" = Masculin'
                    leftw_color = 'green'
                elif '"E" = Masculin ou Sciences'  in label_left:
                    top_leftw = '"E" = Masculin'
                    top_leftw_color = 'green'
                    bot_leftw = 'ou Sciences'
                    bot_leftw_color = [-0.9137, -0.7490, -0.6941]
                elif '"E" = Lettres' in label_left:
                    leftw = '"E" = Lettres'
                    leftw_color = [-0.9137, -0.7490, -0.6941]
                elif '"E" = Masculin ou Lettres' in label_left:
                    top_leftw = '"E" = Masculin'
                    top_leftw_color = 'green'
                    bot_leftw = 'ou Lettres'
                    bot_leftw_color = [-0.9137, -0.7490, -0.6941]
                else:
                    top_leftw = '"E" = elsem'
                    top_leftw_color = 'green'
                    bot_leftw = 'ou else'
                    bot_leftw_color = [-0.9137, -0.7490, -0.6941]
                    leftw = '"E" = else'
                    leftw_color = [-0.9137, -0.7490, -0.6941]
                
                #check couleur mots de droite
                if '"I" = Lettres' in label_right:
                    rightw = '"I" = Lettres'
                    rightw_color = [-0.9137, -0.7490, -0.6941]
                elif '"I" = Féminin  ' in label_right:
                    rightw = '"I" = Féminin'
                    rightw_color = 'green'
                elif '"I" = Féminin ou Lettres' in label_right:
                    top_rightw = '"I" = Féminin'
                    top_rightw_color = 'green'
                    bot_rightw = 'ou Lettres'
                    bot_rightw_color = [-0.9137, -0.7490, -0.6941]
                elif '"I" = Sciences' in label_right:
                    rightw = '"I" = Sciences'
                    rightw_color = [-0.9137, -0.7490, -0.6941]
                elif '"I" = Féminin ou Sciences' in label_right:
                    top_rightw = '"I" = Féminin'
                    top_rightw_color = 'green'
                    bot_rightw = 'ou Sciences'
                    bot_rightw_color = [-0.9137, -0.7490, -0.6941]
                '''
                else:
                    top_rightw = '"I" = elsef'
                    top_rightw_color = 'green'
                    bot_rightw = 'ou else'
                    bot_rightw_color = 'black'
                    rightw = '"I" = else'
                    rightw_color = 'black'
                '''
                
                #check couleur stimulus
                if stimWord in liste_mots_genre:
                    text_stim_color = 'green'
                elif stimWord in liste_mots_sciences:
                    text_stim_color = 'black'
                # Run 'Begin Routine' code from check_corr
                cor_resp = 1
                text_stim.setColor(text_stim_color, colorSpace='rgb')
                text_stim.setText(stimWord)
                keyboard_resp.keys = []
                keyboard_resp.rt = []
                _keyboard_resp_allKeys = []
                error_msg.setText('Erreur')
                rightcat.setColor(rightw_color, colorSpace='rgb')
                rightcat.setText(rightw)
                top_rightcat.setColor(top_rightw_color, colorSpace='rgb')
                top_rightcat.setText(top_rightw)
                bot_rightcat.setColor(bot_rightw_color, colorSpace='rgb')
                bot_rightcat.setText(bot_rightw)
                leftcat.setColor(leftw_color, colorSpace='rgb')
                leftcat.setText(leftw)
                bot_leftcat.setColor(bot_leftw_color, colorSpace='rgb')
                bot_leftcat.setText(bot_leftw)
                top_leftcat.setColor(top_leftw_color, colorSpace='rgb')
                top_leftcat.setText(top_leftw)
                # keep track of which components have finished
                trialComponents = [fixation, text_stim, keyboard_resp, error_msg, rightcat, top_rightcat, bot_rightcat, leftcat, bot_leftcat, top_leftcat]
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
                frameN = -1
                
                # --- Run Routine "trial" ---
                routineForceEnded = not continueRoutine
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from check_corr
                    if keyboard_resp.keys:
                        if keyboard_resp.keys[0] != CorrAns and len(keyboard_resp.keys) >  0 : #affiche le message "erreur" si la première touche appuyée n'est pas la bonne
                            cor_resp = 0
                        else:
                            cor_resp = 1 #active la condition pour afficher le composant error_msg
                    
                    
                    if keyboard_resp.keys:
                        if len(keyboard_resp.keys) > 0 and keyboard_resp.keys[-1] == CorrAns: #vérifie si la touche est correcte et passe à l'essai suivant le cas échéant
                            keyboard_resp.corr = True
                            continueRoutine = False
                    
                    # *fixation* updates
                    
                    # if fixation is starting this frame...
                    if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        fixation.frameNStart = frameN  # exact frame index
                        fixation.tStart = t  # local t and not account for scr refresh
                        fixation.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        fixation.status = STARTED
                        fixation.setAutoDraw(True)
                    
                    # if fixation is active this frame...
                    if fixation.status == STARTED:
                        # update params
                        pass
                    
                    # if fixation is stopping this frame...
                    if fixation.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
                            # keep track of stop time/frame for later
                            fixation.tStop = t  # not accounting for scr refresh
                            fixation.tStopRefresh = tThisFlipGlobal  # on global time
                            fixation.frameNStop = frameN  # exact frame index
                            # update status
                            fixation.status = FINISHED
                            fixation.setAutoDraw(False)
                    
                    # *text_stim* updates
                    
                    # if text_stim is starting this frame...
                    if text_stim.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                        # keep track of start time/frame for later
                        text_stim.frameNStart = frameN  # exact frame index
                        text_stim.tStart = t  # local t and not account for scr refresh
                        text_stim.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(text_stim, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        text_stim.status = STARTED
                        text_stim.setAutoDraw(True)
                    
                    # if text_stim is active this frame...
                    if text_stim.status == STARTED:
                        # update params
                        pass
                    
                    # *keyboard_resp* updates
                    waitOnFlip = False
                    
                    # if keyboard_resp is starting this frame...
                    if keyboard_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                        # keep track of start time/frame for later
                        keyboard_resp.frameNStart = frameN  # exact frame index
                        keyboard_resp.tStart = t  # local t and not account for scr refresh
                        keyboard_resp.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(keyboard_resp, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        keyboard_resp.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(keyboard_resp.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(keyboard_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if keyboard_resp.status == STARTED and not waitOnFlip:
                        theseKeys = keyboard_resp.getKeys(keyList=['e','i'], ignoreKeys=["escape"], waitRelease=False)
                        _keyboard_resp_allKeys.extend(theseKeys)
                        if len(_keyboard_resp_allKeys):
                            keyboard_resp.keys = [key.name for key in _keyboard_resp_allKeys]  # storing all keys
                            keyboard_resp.rt = [key.rt for key in _keyboard_resp_allKeys]
                            keyboard_resp.duration = [key.duration for key in _keyboard_resp_allKeys]
                            # was this correct?
                            if (keyboard_resp.keys == str(CorrAns)) or (keyboard_resp.keys == CorrAns):
                                keyboard_resp.corr = 1
                            else:
                                keyboard_resp.corr = 0
                    
                    # *error_msg* updates
                    
                    # if error_msg is starting this frame...
                    if error_msg.status == NOT_STARTED and cor_resp == 0:
                        # keep track of start time/frame for later
                        error_msg.frameNStart = frameN  # exact frame index
                        error_msg.tStart = t  # local t and not account for scr refresh
                        error_msg.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(error_msg, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        error_msg.status = STARTED
                        error_msg.setAutoDraw(True)
                    
                    # if error_msg is active this frame...
                    if error_msg.status == STARTED:
                        # update params
                        pass
                    
                    # *rightcat* updates
                    
                    # if rightcat is starting this frame...
                    if rightcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        rightcat.frameNStart = frameN  # exact frame index
                        rightcat.tStart = t  # local t and not account for scr refresh
                        rightcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(rightcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        rightcat.status = STARTED
                        rightcat.setAutoDraw(True)
                    
                    # if rightcat is active this frame...
                    if rightcat.status == STARTED:
                        # update params
                        pass
                    
                    # *top_rightcat* updates
                    
                    # if top_rightcat is starting this frame...
                    if top_rightcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        top_rightcat.frameNStart = frameN  # exact frame index
                        top_rightcat.tStart = t  # local t and not account for scr refresh
                        top_rightcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(top_rightcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        top_rightcat.status = STARTED
                        top_rightcat.setAutoDraw(True)
                    
                    # if top_rightcat is active this frame...
                    if top_rightcat.status == STARTED:
                        # update params
                        pass
                    
                    # *bot_rightcat* updates
                    
                    # if bot_rightcat is starting this frame...
                    if bot_rightcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        bot_rightcat.frameNStart = frameN  # exact frame index
                        bot_rightcat.tStart = t  # local t and not account for scr refresh
                        bot_rightcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(bot_rightcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        bot_rightcat.status = STARTED
                        bot_rightcat.setAutoDraw(True)
                    
                    # if bot_rightcat is active this frame...
                    if bot_rightcat.status == STARTED:
                        # update params
                        pass
                    
                    # *leftcat* updates
                    
                    # if leftcat is starting this frame...
                    if leftcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        leftcat.frameNStart = frameN  # exact frame index
                        leftcat.tStart = t  # local t and not account for scr refresh
                        leftcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(leftcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        leftcat.status = STARTED
                        leftcat.setAutoDraw(True)
                    
                    # if leftcat is active this frame...
                    if leftcat.status == STARTED:
                        # update params
                        pass
                    
                    # *bot_leftcat* updates
                    
                    # if bot_leftcat is starting this frame...
                    if bot_leftcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        bot_leftcat.frameNStart = frameN  # exact frame index
                        bot_leftcat.tStart = t  # local t and not account for scr refresh
                        bot_leftcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(bot_leftcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        bot_leftcat.status = STARTED
                        bot_leftcat.setAutoDraw(True)
                    
                    # if bot_leftcat is active this frame...
                    if bot_leftcat.status == STARTED:
                        # update params
                        pass
                    
                    # *top_leftcat* updates
                    
                    # if top_leftcat is starting this frame...
                    if top_leftcat.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        top_leftcat.frameNStart = frameN  # exact frame index
                        top_leftcat.tStart = t  # local t and not account for scr refresh
                        top_leftcat.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(top_leftcat, 'tStartRefresh')  # time at next scr refresh
                        # update status
                        top_leftcat.status = STARTED
                        top_leftcat.setAutoDraw(True)
                    
                    # if top_leftcat is active this frame...
                    if top_leftcat.status == STARTED:
                        # update params
                        pass
                    
                    # check for quit (typically the Esc key)
                    if defaultKeyboard.getKeys(keyList=["escape"]):
                        thisExp.status = FINISHED
                    if thisExp.status == FINISHED or endExpNow:
                        endExperiment(thisExp, win=win)
                        return
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trialComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trial" ---
                for thisComponent in trialComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                thisExp.addData('trial.stopped', globalClock.getTime(format='float'))
                # Run 'End Routine' code from text_color
                top_leftw = ''
                top_leftw_color = [-0.9137, -0.7490, -0.6941]
                bot_leftw = ''
                bot_leftw_color = [-0.9137, -0.7490, -0.6941]
                leftw = ''
                leftw_color = [-0.9137, -0.7490, -0.6941]
                
                rightw = ''
                rightw_color = [-0.9137, -0.7490, -0.6941]
                top_rightw = ''
                top_rightw_color = [-0.9137, -0.7490, -0.6941]
                bot_rightw = ''
                bot_rightw_color = [-0.9137, -0.7490, -0.6941]
                text_stim_color = [-0.9137, -0.7490, -0.6941]
                # Run 'End Routine' code from compute_score
                '''Bloc 3'''
                if conds_file == "cong_test - 20.xlsx": #ajout du temps de réponse pour le bloc 3
                    if isinstance(keyboard_resp.rt[-1], float): #évite le bug tant qu'aucune touche n'est touchée
                        rt_block3.append(keyboard_resp.rt[-1]) #ajoute rt aux rép du bloc 
                        if keyboard_resp.keys[0] != CorrAns: #calcul du nb d'erreurs du bloc 4
                            err_block3 = err_block3 + 1 
                            incorr_rt_block3.append(keyboard_resp.rt[-1]) #ajoute rt aux rép incorrectes du bloc
                        elif keyboard_resp.keys[0] == CorrAns:
                            corr_rt_block3.append(keyboard_resp.rt[-1]) #ajoute rt aux rép correctes du bloc
                
                
                '''Bloc 4'''
                if conds_file == "cong_test - 40.xlsx": #ajout du temps de réponse pour le bloc 4
                    if isinstance(keyboard_resp.rt[-1], float): #évite le bug tant qu'aucune touche n'est touchée
                        rt_block4.append(keyboard_resp.rt[-1]) #ajoute rt aux rép du bloc 
                        if keyboard_resp.keys[0] != CorrAns: #calcul du nb d'erreurs du bloc 4
                            err_block4 = err_block4 + 1 
                            incorr_rt_block4.append(keyboard_resp.rt[-1]) #ajoute rt aux rép incorrectes du bloc
                        elif keyboard_resp.keys[0] == CorrAns:
                            corr_rt_block4.append(keyboard_resp.rt[-1]) #ajoute rt aux rép correctes du bloc
                
                '''Bloc 6'''
                if conds_file == "incong_test - 20.xlsx": #ajout du temps de réponse pour le bloc 6
                    if isinstance(keyboard_resp.rt[-1], float): #évite le bug tant qu'aucune touche n'est touchée
                        rt_block6.append(keyboard_resp.rt[-1]) #ajoute rt aux rép du bloc 
                        if keyboard_resp.keys[0] != CorrAns: #calcul du nb d'erreurs du bloc 4
                            err_block6 = err_block6 + 1 
                            incorr_rt_block6.append(keyboard_resp.rt[-1]) #ajoute rt aux rép incorrectes du bloc
                        elif keyboard_resp.keys[0] == CorrAns:
                            corr_rt_block6.append(keyboard_resp.rt[-1]) #ajoute rt aux rép correctes du bloc
                
                '''Bloc 7'''
                if conds_file == "incong_test - 40.xlsx": #ajout du temps de réponse pour le bloc 7
                    if isinstance(keyboard_resp.rt[-1], float): #évite le bug tant qu'aucune touche n'est touchée
                        rt_block7.append(keyboard_resp.rt[-1]) #ajoute rt aux rép du bloc 
                        if keyboard_resp.keys[0] != CorrAns: #calcul du nb d'erreurs du bloc 4
                            err_block7 = err_block7 + 1 
                            incorr_rt_block7.append(keyboard_resp.rt[-1]) #ajoute rt aux rép incorrectes du bloc
                        elif keyboard_resp.keys[0] == CorrAns:
                            corr_rt_block7.append(keyboard_resp.rt[-1]) #ajoute rt aux rép correctes du bloc
                
                '''Autre'''
                if keyboard_resp.keys[0] != CorrAns and keyboard_resp.keys: #store le nb total d'erreurs
                    num_errors = num_errors+ 1
                            
                if keyboard_resp.rt[-1] > 3 and keyboard_resp.keys: #verification si la réponse est trop lente
                    slow_responses = slow_responses + 1 
                elif keyboard_resp.rt[-1] < 0.3 and keyboard_resp.keys : #vérification si la réponse est trop rapide
                    fast_responses = fast_responses + 1
                
                total_responses = total_responses + 1 #nb total d'essais
                
                keyboard_resp.keys = []
                # check responses
                if keyboard_resp.keys in ['', [], None]:  # No response was made
                    keyboard_resp.keys = None
                    # was no response the correct answer?!
                    if str(CorrAns).lower() == 'none':
                       keyboard_resp.corr = 1;  # correct non-response
                    else:
                       keyboard_resp.corr = 0;  # failed to respond (incorrectly)
                # store data for trials (TrialHandler)
                trials.addData('keyboard_resp.keys',keyboard_resp.keys)
                trials.addData('keyboard_resp.corr', keyboard_resp.corr)
                if keyboard_resp.keys != None:  # we had a response
                    trials.addData('keyboard_resp.rt', keyboard_resp.rt)
                    trials.addData('keyboard_resp.duration', keyboard_resp.duration)
                # the Routine "trial" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # --- Prepare to start Routine "transition" ---
                continueRoutine = True
                # update component parameters for each repeat
                thisExp.addData('transition.started', globalClock.getTime(format='float'))
                # keep track of which components have finished
                transitionComponents = [cross]
                for thisComponent in transitionComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "transition" ---
                routineForceEnded = not continueRoutine
                while continueRoutine and routineTimer.getTime() < 0.5:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *cross* updates
                    
                    # if cross is starting this frame...
                    if cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        cross.frameNStart = frameN  # exact frame index
                        cross.tStart = t  # local t and not account for scr refresh
                        cross.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'cross.started')
                        # update status
                        cross.status = STARTED
                        cross.setAutoDraw(True)
                    
                    # if cross is active this frame...
                    if cross.status == STARTED:
                        # update params
                        pass
                    
                    # if cross is stopping this frame...
                    if cross.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > cross.tStartRefresh + 0.5-frameTolerance:
                            # keep track of stop time/frame for later
                            cross.tStop = t  # not accounting for scr refresh
                            cross.tStopRefresh = tThisFlipGlobal  # on global time
                            cross.frameNStop = frameN  # exact frame index
                            # add timestamp to datafile
                            thisExp.timestampOnFlip(win, 'cross.stopped')
                            # update status
                            cross.status = FINISHED
                            cross.setAutoDraw(False)
                    
                    # check for quit (typically the Esc key)
                    if defaultKeyboard.getKeys(keyList=["escape"]):
                        thisExp.status = FINISHED
                    if thisExp.status == FINISHED or endExpNow:
                        endExperiment(thisExp, win=win)
                        return
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in transitionComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "transition" ---
                for thisComponent in transitionComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                thisExp.addData('transition.stopped', globalClock.getTime(format='float'))
                # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
                if routineForceEnded:
                    routineTimer.reset()
                else:
                    routineTimer.addTime(-0.500000)
                thisExp.nextEntry()
                
                if thisSession is not None:
                    # if running in a Session with a Liaison client, send data up to now
                    thisSession.sendExperimentData()
            # completed 1.0 repeats of 'trials'
            
        # completed 1.0 repeats of 'blocks'
        
        
        # --- Prepare to start Routine "score" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('score.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from score
        # Initialisation des variables pour JS
        score_msg = ""
        err_msg = ""
        feedback_msg = ""
        mean_rt_block3 = 0
        mean_rt_block4 = 0
        mean_rt_block6 = 0
        mean_rt_block7 = 0
        std_rt_block3 = 0
        std_rt_block4 = 0
        std_rt_block6 = 0
        std_rt_block7 = 0
        pooled_std36 = 0
        pooled_std47 = 0
        new_value3 = 0
        new_value4 = 0
        new_value6 = 0
        new_value7 = 0
        fblock3 = []
        fblock4 = []
        fblock6 = []
        fblock7 = []
        mb3 = 0
        mb4 = 0
        mb6 = 0
        mb7 = 0
        iat_score = 0
        
        # Fonctions utilitaires
        def moyenne(liste):
            return sum(liste) / len(liste) if liste else 0
        
        def ecart_type(liste, moyenne):
            if len(liste) > 1:
                variance = sum((x - moyenne) ** 2 for x in liste) / (len(liste) - 1)
                return variance ** 0.5
            return 0
        
        def pooled_std(liste1, liste2, std1, std2):
            if len(liste1) > 1 and len(liste2) > 1:
                pooled_variance = ((len(liste1) - 1) * std1 ** 2 + (len(liste2) - 1) * std2 ** 2) / (len(liste1) + len(liste2) - 2)
                return pooled_variance ** 0.5
            return 0
        
        def remplacer_incorrects(par_moyenne, incorrects):
            return [par_moyenne + 0.6] * len(incorrects)
        
        # Calcul des données
        if (fast_responses / total_responses) > 0.1:
            score_msg = "Vous avez répondu trop rapidement pour obtenir un score valide. Recommencez le test en répondant correctement et sans vous précipiter."
            err_msg = "Vous avez fait " + str(num_errors) + " erreurs."
        elif (slow_responses / total_responses) > 0.05:
            score_msg = "Vous avez répondu trop lentement pour obtenir un score valide. Recommencez le test en répondant correctement le plus rapidement possible."
            err_msg = "Vous avez fait " + str(num_errors) + " erreurs."
        else:
            # Moyennes des réponses correctes de chaque bloc
            corr_mean_rt_block3 = moyenne(corr_rt_block3)
            corr_mean_rt_block4 = moyenne(corr_rt_block4)
            corr_mean_rt_block6 = moyenne(corr_rt_block6)
            corr_mean_rt_block7 = moyenne(corr_rt_block7)
            
            # Moyennes des blocs
            mean_rt_block3 = moyenne(rt_block3)
            mean_rt_block6 = moyenne(rt_block6)
            mean_rt_block4 = moyenne(rt_block4)
            mean_rt_block7 = moyenne(rt_block7)
            
            # Écarts types des blocs
            std_rt_block3 = ecart_type(rt_block3, mean_rt_block3)
            std_rt_block6 = ecart_type(rt_block6, mean_rt_block6)
            std_rt_block4 = ecart_type(rt_block4, mean_rt_block4)
            std_rt_block7 = ecart_type(rt_block7, mean_rt_block7)
            
            # Pooled std des blocs
            pooled_std36 = pooled_std(rt_block3, rt_block6, std_rt_block3, std_rt_block6)
            pooled_std47 = pooled_std(rt_block4, rt_block7, std_rt_block4, std_rt_block7)
            
            # Remplacement des RT incorrects
            incorr_rt_block3 = remplacer_incorrects(mean_rt_block3, incorr_rt_block3)
            incorr_rt_block4 = remplacer_incorrects(mean_rt_block4, incorr_rt_block4)
            incorr_rt_block6 = remplacer_incorrects(mean_rt_block6, incorr_rt_block6)
            incorr_rt_block7 = remplacer_incorrects(mean_rt_block7, incorr_rt_block7)
            
            # Fusion des blocs incorrects modifiés et des blocs corrects
            fblock3 = incorr_rt_block3 + corr_rt_block3
            fblock4 = incorr_rt_block4 + corr_rt_block4
            fblock6 = incorr_rt_block6 + corr_rt_block6
            fblock7 = incorr_rt_block7 + corr_rt_block7
            
            # Calcul des moyennes des blocs mis à jour
            mb3 = moyenne(fblock3)
            mb4 = moyenne(fblock4)
            mb6 = moyenne(fblock6)
            mb7 = moyenne(fblock7)
            
            # Score de l'IAT
            if pooled_std36 != 0 and pooled_std47 != 0:
                iat_score = ((mb6 - mb3) / pooled_std36 + (mb7 - mb4) / pooled_std47) / 2
            else: 
                iat_score = 0
            score_msg = "Votre score à l'IAT est de " + str(iat_score)[:5]
            # message adapté en fonction du score A RECODER EN JS
            if 0 <= iat_score <= 0.5:
                feedback_msg = "Un score positif inférieur à 0.5 traduit des associations stéréotypiques entre masculin et science et féminin et lettres."
            elif -0.5 <= iat_score < 0:
                feedback_msg = "Un score négatif supérieur à -0.5 traduit des associations contre-stéréotypiques entre féminin et science et masculin et lettres."
            elif iat_score < -0.5:
                feedback_msg = "Un score inférieur à -0.5 traduit des associations contre-stéréotypiques fortes entre féminin et science et masculin et lettres."
            elif iat_score > 0.5:
                feedback_msg = "Un score supérieur à 0.5 traduit des associations stéréotypiques fortes entre masculin et science et féminin et lettres."
                
                
                
                
        score_feedback.setText(score_msg)
        end_score.keys = []
        end_score.rt = []
        _end_score_allKeys = []
        err_feedback.setText(err_msg)
        adapted_fb.setText(feedback_msg)
        # keep track of which components have finished
        scoreComponents = [score_feedback, end_score, err_feedback, adapted_fb]
        for thisComponent in scoreComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "score" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *score_feedback* updates
            
            # if score_feedback is starting this frame...
            if score_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                score_feedback.frameNStart = frameN  # exact frame index
                score_feedback.tStart = t  # local t and not account for scr refresh
                score_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(score_feedback, 'tStartRefresh')  # time at next scr refresh
                # update status
                score_feedback.status = STARTED
                score_feedback.setAutoDraw(True)
            
            # if score_feedback is active this frame...
            if score_feedback.status == STARTED:
                # update params
                pass
            
            # *end_score* updates
            
            # if end_score is starting this frame...
            if end_score.status == NOT_STARTED and t >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                end_score.frameNStart = frameN  # exact frame index
                end_score.tStart = t  # local t and not account for scr refresh
                end_score.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(end_score, 'tStartRefresh')  # time at next scr refresh
                # update status
                end_score.status = STARTED
                # keyboard checking is just starting
                end_score.clock.reset()  # now t=0
            if end_score.status == STARTED:
                theseKeys = end_score.getKeys(keyList=['space',], ignoreKeys=["escape"], waitRelease=False)
                _end_score_allKeys.extend(theseKeys)
                if len(_end_score_allKeys):
                    end_score.keys = _end_score_allKeys[-1].name  # just the last key pressed
                    end_score.rt = _end_score_allKeys[-1].rt
                    end_score.duration = _end_score_allKeys[-1].duration
                    # was this correct?
                    if (end_score.keys == str("'space'")) or (end_score.keys == "'space'"):
                        end_score.corr = 1
                    else:
                        end_score.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *err_feedback* updates
            
            # if err_feedback is starting this frame...
            if err_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                err_feedback.frameNStart = frameN  # exact frame index
                err_feedback.tStart = t  # local t and not account for scr refresh
                err_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(err_feedback, 'tStartRefresh')  # time at next scr refresh
                # update status
                err_feedback.status = STARTED
                err_feedback.setAutoDraw(True)
            
            # if err_feedback is active this frame...
            if err_feedback.status == STARTED:
                # update params
                pass
            
            # *adapted_fb* updates
            
            # if adapted_fb is starting this frame...
            if adapted_fb.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                adapted_fb.frameNStart = frameN  # exact frame index
                adapted_fb.tStart = t  # local t and not account for scr refresh
                adapted_fb.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(adapted_fb, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'adapted_fb.started')
                # update status
                adapted_fb.status = STARTED
                adapted_fb.setAutoDraw(True)
            
            # if adapted_fb is active this frame...
            if adapted_fb.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in scoreComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "score" ---
        for thisComponent in scoreComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('score.stopped', globalClock.getTime(format='float'))
        # the Routine "score" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "score2" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('score2.started', globalClock.getTime(format='float'))
        # keep track of which components have finished
        score2Components = [score_meaning_2]
        for thisComponent in score2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "score2" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *score_meaning_2* updates
            
            # if score_meaning_2 is starting this frame...
            if score_meaning_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                score_meaning_2.frameNStart = frameN  # exact frame index
                score_meaning_2.tStart = t  # local t and not account for scr refresh
                score_meaning_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(score_meaning_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'score_meaning_2.started')
                # update status
                score_meaning_2.status = STARTED
                score_meaning_2.setAutoDraw(True)
            
            # if score_meaning_2 is active this frame...
            if score_meaning_2.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in score2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "score2" ---
        for thisComponent in score2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('score2.stopped', globalClock.getTime(format='float'))
        # the Routine "score2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'restart'
    
    
    # --- Prepare to start Routine "end" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('end.started', globalClock.getTime(format='float'))
    end_key_resp.keys = []
    end_key_resp.rt = []
    _end_key_resp_allKeys = []
    # keep track of which components have finished
    endComponents = [text, end_key_resp, mosaique_4]
    for thisComponent in endComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *end_key_resp* updates
        
        # if end_key_resp is starting this frame...
        if end_key_resp.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            end_key_resp.frameNStart = frameN  # exact frame index
            end_key_resp.tStart = t  # local t and not account for scr refresh
            end_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_key_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            end_key_resp.status = STARTED
            # keyboard checking is just starting
            end_key_resp.clock.reset()  # now t=0
        if end_key_resp.status == STARTED:
            theseKeys = end_key_resp.getKeys(keyList=None, ignoreKeys=["escape"], waitRelease=False)
            _end_key_resp_allKeys.extend(theseKeys)
            if len(_end_key_resp_allKeys):
                end_key_resp.keys = _end_key_resp_allKeys[-1].name  # just the last key pressed
                end_key_resp.rt = _end_key_resp_allKeys[-1].rt
                end_key_resp.duration = _end_key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *mosaique_4* updates
        
        # if mosaique_4 is starting this frame...
        if mosaique_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mosaique_4.frameNStart = frameN  # exact frame index
            mosaique_4.tStart = t  # local t and not account for scr refresh
            mosaique_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mosaique_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'mosaique_4.started')
            # update status
            mosaique_4.status = STARTED
            mosaique_4.setAutoDraw(True)
        
        # if mosaique_4 is active this frame...
        if mosaique_4.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in endComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in endComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('end.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)

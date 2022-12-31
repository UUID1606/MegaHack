// ==UserScript==
// @name         Hurricane JS
// @author       KasketVIP
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @version      6.22.9
// @description  Tanki Online Cheat
// @grant        GM_xmlhttpRequest
// ==/UserScript==

class HTML {

    static findElementByDataset(type, property, value) {
        const elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            const element = elements[i]

            if (element.dataset[property] == value) {
                return element;
            }
        }

    }

    static findElementByAttribute(type, property, value) {
        var elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            var element = elements[i]

            if (element.attribute[property] == value)
                return element;
        }
    }

    static findElementByChildProperty(type, key, property, value) {
        var elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            var element = elements[i]

            for (let j = 0; j < element.children.length; j++) {
                var child = element[j]

                if (element.children.length) {
                    if (child[key][property] == value)
                        return element;

                }
            }

        }
    }

    static convertToCss(css, selector) {
        if (css && selector) {
            var selectorType, selectorValue
            selector.includes('.') ? selectorType = '.' : selectorType = '#'
            return `
        ${selector.type + selector.value}  {
        ${css}
        }
        `
        }

        return ''
    }

    static #createElementWithOptions(type, options) {

        var init = type && options ? true : false

        if (init) {}
    }

    static find(type, options) {

        switch (options.by) {

        case 'data':
            return this.findElementByDataset(type, options.property, options.value);
            break;
        case 'attribute':
            return this.findElementByAttribute(type, options.property, options.value);
            break;
        case 'child':
            return this.findElementByChildProperty(type, options.key, options.property, options.value);

        }
    }

    static create = function(type, options) {

        return type && options ? this.#createElementWithOptions(type, options) : null
    }

    static addStyle(styleString) {
        const style = document.createElement('style');
        style.innerHTML = styleString;
        document.head.appendChild(style)
        return style;
    }

}

class Details {

    static background = {
        commonContainer: 'radial-gradient(50% 100% at 50% 100%, #48070787,black,#06090e, #362d1d6b)',
        battleList: '#000028',
        parkourConfirmation: '#070763',
        popupCard: 'transparent',
        battleMenu: 'border-box',
        tankWaitingBox: 'brown',
        playerMenu: 'red',
        bluePlayers: '#030311',
        redPlayers: '#160000',
        buyMoreContainer: 'brown',
        generalChat: 'black',
        rewardPreview: '#000019',
        clanView: '#080814',
        proTypeSelection: '#000015',
        proModeSelection: '#000000',
        createBattle: 'rgb(22 8 48)',
        proModeCreate: '#580001',
        createBattleEnlarged: '#6b009d69',
        news: 'border-box',
        newsInnerBox: '#0e0612',
        loadingScreen: '#010028',
        enterScreen: '#0000009c',
        emptyBattleSlot: '#010047',
        autoPause: '#2c0047',
        settingsContainer: 'radial-gradient(#221717, #5a115e45)',
        loginForm: 'radial-gradient(farthest-side at 60% 55%,#201504, #ed5fd91c)',
        leaveBattleButton: 'rgb(160 32 32)',

        //
        propertyName: 'background',

    };

    static borderRadius = {
        parkourConfirmation: '5px',
        battleMenu: '5px',
        battleMenuItems: '0.388em',
        tankWaitingBox: '0.488em',
        leaveBattleButton: '0.388em',
        playerMenu: '4px',
        otherPlayerTableItem: '4px',
        myTableItem: '4px',
        rewardPreview: '4px',
        proTypeSelection: '5px',
        proModeSelection: '4px',
        newsInnerBox: '5px',
        autoPause: '5px',
        loginForm: '6px',

        //
        propertyName: 'border-radius'
    };

    static boxShadow = {

        proTypeSelection: '2px 2px 6px violet',

        propertyName: 'box-shadow',
    };
    static minWidth = {
        battleMenu: '10em',

        //
        propertyName: 'min-width'
    };

    static outline = {
        buyMoreContainer: '1px solid brown',
        proTypeSelection: '-1px 1px 8px violet',

        propertyName: 'outline',
    };
    static width = {
        tankWaitingBox: '93%',
        propertyName: 'width',
        createBattle: '6.1em',
        createBattleEnlarged: '22.6em',
        proModeCreate: '22.8em',

        propertyName: 'width',
    };
    static classNames = {

        commonContainer: '.jhvmvA',
        popupCard: '.cHWQGs',
        battleList: '.eQIdEy',
        parkourConfirmation: '.kjWesa',
        battleMenu: '.gBSJRi',
        battleMenuItems: '.kEHGcw',
        tankWaitingBox: '.bVKdVw',
        leaveBattleButton: '.bsWSmO',
        playerMenu: '.klaDRA',
        redPlayers: '.dJcmtF',
        bluePlayers: '.gJOHtR',
        otherPlayerTableItem: '.fqvYOx',
        myTableItem: '.knTkoA',
        buyMoreContainer: '.bjgcek',
        generalChat: '.eVpBab',
        rewardPreview: '.lhjXuY',
        clanView: '.iAkjQm',
        proTypeSelection: '.jdlZDR',
        proModeSelection: '.gEIuxp',
        createBattle: '.hgbMQJ',
        createBattleEnlarged: '.xWodt',
        proModeCreate: '.rUamI',
        news: '.dsItLK',
        newsInnerBox: '.kBGkBc',
        loadingScreen: '.Yfwvt',
        enterScreen: '.liPcsK',
        emptyBattleSlot: '.AKhpB',
        autoPause: '.bTaEno',
        joinA: '.hyaCSf',
        joinB: '.kBXDvK',
        checkboxChecked: '.bCVAbE, .kvTmWg',
        checkboxUnchecked: '.knLUAV,.dSzBwx',
        settingsContainer: '.ezpZWY',
        loginForm: '.fyHuHX,.cYOoGI'

    };

    static getClassName(key) {

        return this.classNames[key];
    }

}

//

class ThemeChanger {

    static enableDarkMode() {
        const container = GameElements.getCommonContainer();
        if (!container)
            return;
        const className = container.classList[1];
        HTML.addStyle(`.${className}{background:black}`)

    }

    static manualString() {
return `
        .GlobalStyle-html, .GlobalStyle-body {
         background:#00000a;
        }
        ${Details.classNames.playerMenu} > tbody[0]{
        background:#030303
        }

        ${Details.classNames.playerMenu} > tbody[1]{
        background:#000016;
        }

        .gOEOMi{
        visibility:hidden;
        }

        ${Details.classNames.checkboxChecked} {
        background:linear-gradient(45deg, #44234f, #0c202f);
        width:3.75em;
        }

         .bCVAbE:before, ${Details.classNames.checkboxChecked}:before {
         border-radius:15px;
         left:2.5em;

         }

         ${Details.classNames.checkboxUnchecked} {
         width:3.75em;
         background:rgb(26 17 17 / 25%);
         }
         .knLUAV:before,${Details.classNames.checkboxUnchecked}:before {
         border-radius:15px;
         left:0.05em;

         }

         .ibYVzf,.hcypUA  {
         padding-left:1.9em;
         }

         .stibK  {
         backdrop-filter:blur(5px);
         }

         .modal.hover {
         backdrop-filter:blur(0.5px);
         }



        `
    }

    static getMainStyleString() {
        var main = '';
        var f = []

        for (let i in Details) {

            if (Details[i]?.propertyName) {
                var curr = '';
                const propertyObj = Details[i];
                const type = propertyObj.propertyName;
                for (let j in propertyObj) {
                    if (j !== 'propertyName') {
                        const className = Details.getClassName(j);
                        const value = propertyObj[j]
                        curr += `${className}{${type}:${value} !important;}  `;
                        f.push(document.querySelector(className))
                    }

                }
                main += curr;
            }
        }
        //console.log(f)

        return main
    }

    static setStaticStyles() {

        const mainStyles = this.getMainStyleString();
        const manualSet = this.manualString();
        const merge = mainStyles + manualSet;
        return HTML.addStyle(merge);
    }

}

let counter = 0;
const main = ()=>{
    if (counter == 10) {
        clearInterval(mainInterval)
    }
    counter += 1
    ThemeChanger.setStaticStyles();
}

const mainInterval = setInterval(main, 50);

let safeMode

if (window.location.href == 'https://tankionline.com/play') {
    safeMode = true
} else {
    safeMode = false;
}

const root = document.getElementById('root');

const startupLoop = ()=>{
    try {
        init(root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store)
    } catch (e) {
        requestAnimationFrame(()=>startupLoop());
    }
}

startupLoop();

const init = (store)=>{
    setInterval(()=>{
        store.state.shop.enabled = true;
    }
    , 100);
}

class commons {
}

class game {
}

class hacks {

}

class vars {

}

commons.searchObject = function(object, item) {
    try {
        for (let i = 0; i < object.length; i++) {
            if (object[i].hasOwnProperty(item))
                return object[i]

        }
    } catch (error) {}
}

function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

commons.getRoot = function() {
    root = document.querySelector("#root")
    return root
}

commons.getReactRoot = function() {
    return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0

}

commons.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

getPing = ()=>{
    var dataStyle = "BattleHudFpsComponentStyle-value";
    var spans = document.querySelectorAll("span");
    var values = [];
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].dataset.style == dataStyle) {
            values.push(spans[i]);
        }
    }
    if (values && values[1]) {
        return values[1];
    }
}
;

fake = {
    ping: null,
    minPing: 15,
    maxPing: 29,
    setVar: null,
    setPing: null
}

fake.setVar = function() {

    fake.ping = commons.getRandom(fake.minPing, fake.maxPing)

}

fake.setPing = function() {

    getPing() ? getPing().textContent = fake.ping : null
    window.fp = requestAnimationFrame(fake.setPing)
}

s1p = 0

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 120 && commons.getChatState() == null) {
        s1p++
        if (s1p % 2 == 1) {
            setInterval(fake.setVar, 3000)
            fake.setPing()
        }
        if (s1p % 2 == 0) {
            cancelAnimationFrame(window.fp)
            clearInterval(fake.setVar)
        }

    }
}
)

aimHack = ()=>{
    try {
        for (let i = 0; i < game.getTank().components_0.array.length; i++) {
            game.getTank().components_0.array[i].pulled_0 = true
        }
    } catch (error) {}
}

s2p = 0

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 121 && commons.getChatState() == null) {
        s2p++
        if (s2p % 2 == 1) {
            aimHack()

        }
        if (s2p % 2 == 0) {

            for (let i = 0; i < game.getTank().components_0.array.length; i++) {
                game.getTank().components_0.array[i].pulled_0 = false
            }

        }

    }
}
)

//keypressing

class KeyPressing {
    static k = [];
    static i() {
        document.addEventListener('keydown', (e)=>{
            const c = e.keyCode;
            if (KeyPressing.k.includes(c) == !1) {
                KeyPressing.k.push(c)
            }
        }
        );
        document.addEventListener('keyup', (e)=>{
            const c = e.keyCode;
            if (KeyPressing.k.includes(c) == !0) {
                const a = KeyPressing.k.indexOf(c);
                if (a !== -1) {
                    KeyPressing.k.splice(a, 1)
                }
            }
        }
        )
    }
    static isKeyPressed(c) {
        return KeyPressing.k.includes(c)
    }
}
KeyPressing.i()

//GAME ITEMS

game.getTank = function() {
    return commons.searchObject(commons.getReactRoot(), "tank").tank

}

game.getWorld = function() {
    return game.getTank().world

}

game.getMines = function() {
    return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);

}

game.getMapBoundary = function() {
    return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}

game.getPlayers = function() {
    return game.getTank().components_0.array[34].gameMode_0.tanksOnField

}

game.isNotKillZone = function(world, position) {
    if (!world)
        return false;

    let bounds = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;

    if (!bounds)
        return false;

    if (position.x != 0 && (position.x >= bounds.maxX || position.x <= bounds.minX))
        return false;

    if (position.y != 0 && (position.y >= bounds.maxY || position.y <= bounds.minY))
        return false;

    return true;
}

game.getBattleState = function() {

    return commons.getReactRoot().at(1).state.inBattle
}

commons.getChatState = function() {
    return document.querySelector(".sc-bwzfXH.iokmvL")
}

game.getStriker = function() {
    return commons.searchObject(game.getTank().components_0.array, "strikerWeapon_jjsiik$_0").strikerWeapon_jjsiik$_0

}

game.getParkour = function() {
    let rootObject = this.getRootObject();

    if (!rootObject)
        return false;

    return rootObject.store.state.battleStatistics.isParkourMode;
}

game.getHealth = function() {
    return game.getTank().components_0.array[1].isFullHealth()

}

game.getTankPhysics = function() {
    return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0

}

game.getCamera = function() {
    for (let i = 0; i < game.getTank().components_0.array.length; i++) {
        if (game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
            return game.getTank().components_0.array[i].followCamera_0.currState_0

    }
}

game.getFlags = function() {
    try {
        if (game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.teamType.name == "TEAM_A") {
            vars.FlagA = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.getPosition()

            vars.FlagB = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[0]._value_0.getPosition()

        }
    } catch (error) {}
}

gtf = setInterval(game.getFlags, 150)

game.getAirwalk = function() {
    return commons.searchObject(game.getTank().components_0.array, "trackedChassis_eytv59$_0").trackedChassis_eytv59$_0

}

game.getSupplies = function(supply) {
    try {
        for (key in game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0) {
            if (game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply) {
                return key
            }

        }
    } catch (error) {}

}

game.isNotKillZone = function(world, position) {
    if (!world)
        return false;

    let bounds = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;

    if (!bounds)
        return false;

    if (position.x != 0 && (position.x >= bounds.maxX || position.x <= bounds.minX))
        return false;

    if (position.y != 0 && (position.y >= bounds.maxY || position.y <= bounds.minY))
        return false;

    return true;
}

function getSupplyArrays() {
    try {
        window.mines = game.getSupplies("MINE")
        window.repairs = game.getSupplies("FIRST_AID")
        window.DA = game.getSupplies("DOUBLE_ARMOR")
        window.DD = game.getSupplies("DOUBLE_DAMAGE")
        window.NITRO = game.getSupplies("NITRO")

    } catch (error) {}
}

supps = setInterval(getSupplyArrays, 500)

//HACKS

hacks.noLaser = function() {
    try {
        game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply()
        game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply()
        game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply()
        if (game.getHealth() == false) {
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
        }
    } catch (error) {}

}


    hacks.speedhack = function() {
        if (safeMode = true) {} else {
        try {
            game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.currentValue_58o4vw$_0 = slider.value
            game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.targetValue_mmhheo$_0 = slider.value
            game.getAirwalk().speedCharacteristics_0.acceleration = slider2.value
            game.getAirwalk().speedCharacteristics_9bexma$_0.reverseAcceleration = slider2.value
            game.getAirwalk().speedCharacteristics_9bexma$_0.sideAcceleration = slider2.value

        } catch (error) {
            return Error
        }

    }
}


    hacks.gv = function() {
        if (safeMode = true) {} else {
        try {
            game.getTank().world.physicsScene_0.gravity.z = slider5.value
        } catch (error) {}
    }
}

slider3 = document.createElement("input")

slider3.type = "range"

slider3.step = 10

slider3.min = 0
slider3.max = 100
slider3.style.position = "absolute"
slider3.style.marginLeft = "43%"
slider3.style.bottom = "39%"

hacks.recoil = ()=>{
    for (let i = 0; i < game.getTank().components_0.array.length; i++)
        try {

            game.getTank().components_0.array[i].recoilForce_0 = slider3.value * 100000

        } catch (error) {}
}


    hacks.simpleTP = function() {
        try {
            if (KeyPressing.isKeyPressed(38 /*key: W*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.y += 25

            }

            if (KeyPressing.isKeyPressed(40 /*key: S*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.y -= 25

            }

            if (KeyPressing.isKeyPressed(37 /*key: A*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.x -= 25

            }

            if (KeyPressing.isKeyPressed(39 /*key: D*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.x += 25

            }

            if (KeyPressing.isKeyPressed(74 /*key: J*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z += 25

            }

            if (KeyPressing.isKeyPressed(75 /*key: K*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z -= 25

            }

            if (KeyPressing.isKeyPressed(117 /*key: F6*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z = game.getMapBoundary().maxZ - 5000

            }

            if (KeyPressing.isKeyPressed(118 /*key: F7*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z = game.getMapBoundary().maxZ - 1000

            }

            if (KeyPressing.isKeyPressed(119 /*key: F8*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z = game.getMapBoundary().maxZ + 1900

            }

            game.getTankPhysics().body.state.orientation.w = 0;
            game.getTankPhysics().body.state.orientation.x = 0;
            game.getTankPhysics().body.state.orientation.y = 0;
            game.getTankPhysics().body.state.orientation.z = 0;
            game.getTankPhysics().body.state.angularVelocity.x = 0;
            game.getTankPhysics().body.state.angularVelocity.y = 0;
            game.getTankPhysics().body.state.angularVelocity.z = 0;
            game.getTankPhysics().body.state.velocity.x = 0;
            game.getTankPhysics().body.state.velocity.y = 0;
            game.getTankPhysics().body.state.velocity.z = 0;
            game.getTankPhysics().body.movable = false;

        } catch (error) {}

}


    function updown() {
        try {
            game.getTankPhysics().body.state.position.z = game.getMapBoundary().minZ + 3500

            setTimeout(()=>{

                game.getTankPhysics().body.state.position.z = game.getMapBoundary().maxZ - 1000

            }
            , 100)

            setTimeout(()=>{
                game.getTankPhysics().body.state.position.z = game.getMapBoundary().maxZ + 1900
            }
            , 100)

        } catch (error) {}

}

//map clicker

join = {

    teamA: 'A',
    teamB: 'B',
    getTeamButton: null,
    getConfirmationButton: null,
    joinTeamA: null,
    joinTeamB: null,
    joinDM: null,
    on: true,
    team: null,
    ref: null
}

join.getTeamButton = function(team) {
    var teamName
    team == 'A' ? teamName = 'ALFA' : teamName = 'BRAVO'

    var spans = document.querySelectorAll('span')
    for (let i = 0; i < spans.length; i++) {
        if (spans[i] && spans[i].textContent.trim().toLowerCase() == `join team ${teamName.toLowerCase()}`) {

            return spans[i].parentElement
        }

    }

}

join.getConfirmationButton = function() {

    var spans = document.querySelectorAll('span')
    for (let i = 0; i < spans.length; i++) {
        if (spans[i] && spans[i].textContent.trim().toLowerCase() == 'join') {

            return spans[i].parentElement
        }

    }

}

join.joinTeamA = function() {
    try {
        if (join.on == true) {

            click(join.getTeamButton(join.teamA))

            click(join.getConfirmationButton())

        }

    } catch (error) {}
    window.A = requestAnimationFrame(join.joinTeamA)
}

join.joinTeamB = function() {
    try {
        if (join.on == true) {

            click(join.getTeamButton(join.teamB))

            click(join.getConfirmationButton())
        }

    } catch (error) {}
    window.B = requestAnimationFrame(join.joinTeamB)
}

join.joinDM = function() {
    try {

        for (let i = 0; i < document.querySelectorAll(".sc-bwzfXH").length; i++) {
            if (document.querySelectorAll(".sc-bwzfXH")[i].innerText == "JOIN\nJ")
                document.querySelectorAll(".sc-bwzfXH")[i].click()
            click(join.getConfirmationButton())

        }
    } catch (error) {}
    window.DM = requestAnimationFrame(join.joinDM)
}

join.ref = function() {
    try {

        for (let i = 0; i < document.querySelectorAll(".sc-bwzfXH").length; i++) {
            if (document.querySelectorAll(".sc-bwzfXH")[i].innerText == "RESTART")
                document.querySelectorAll(".sc-bwzfXH")[i].click()
        }
    } catch (error) {}
}

function click(el) {
    var event = new Event('click',{
        bubbles: true,
        cancelable: true,
    });

    el.dispatchEvent(event)

}

function getTarget() {
    try {
        enemyID = game.getStriker().playerIdQuery_0.playerId
        //window.target = game.getStriker().getPreferredTarget_0(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition

    } catch (error) {}
}

let gtr = setInterval(getTarget, 100)


supplyMap =

{
    firstAID: null,
    mine: null
};

hacks.clicker = function() {
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let gameActions = GameObjects.getGameActions();

    if (!gameActions)
    {
        return;
    }

    let healthComponent = GameObjects.getHealthComponent();

    if (!healthComponent)
    {
        return;
    }

    if (!supplyMap.firstAID || !supplyMap.mine)
    {
        for (let i = 0; i < localPlayer.length; i++)
        {
            if (localPlayer.at(i).hasOwnProperty("supplyTypeConfigs_0"))
            {
                let map = localPlayer.at(i).supplyTypeConfigs_0.map_97q5dv$_0.
                    internalMap_uxhen5$_0.backingMap_0;

                for (let key in map)
                {
                    if (map[key].key_5xhq3d$_0.name$ == "FIRST_AID")
                    {
                        supplyMap.firstAID = map[key]._value_0._value_0;
                    }

                    if (map[key].key_5xhq3d$_0.name$ == "MINE")
                    {
                        supplyMap.mine = map[key]._value_0._value_0;
                    }
                }

                break;
            }
        }
    }


    if (autoHealing.value)
    {
        gameObjects.localPlayer.at(37).sendState_0(gameObjects.localPlayer.at(37).tankPhysicsComponent_0.getInterpolatedBodyState());
        supplyMap.firstAID.onUserActivatedSupply();
        supplyMap.mine.onUserActivatedSupply();
    }
    else if (!healthComponent.isFullHealth() && healthComponent.alive && autoSupplies.value)
    {
        supplyMap.firstAID.onUserActivatedSupply();
        supplyMap.mine.onUserActivatedSupply();
    }

    if (autoSupplies.value)
    {
        gameActions.at(6).at(1).wasPressed = true;
        gameActions.at(6).at(1).wasReleased = true;

        gameActions.at(7).at(1).wasPressed = true;
        gameActions.at(7).at(1).wasReleased = true;

        gameActions.at(8).at(1).wasPressed = true;
        gameActions.at(8).at(1).wasReleased = true;
    }

    if (autoMining.value)
    {
        gameActions.at(9).at(1).wasPressed = true;
        gameActions.at(9).at(1).wasReleased = true;

        gameActions.at(10).at(1).wasPressed = true;
        gameActions.at(10).at(1).wasReleased = true;
        supplyMap.firstAID.onUserActivatedSupply();
        supplyMap.mine.onUserActivatedSupply();
    }
}

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 35 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        autoMining.value = !autoMining.value;
    }
})

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 36 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        autoHealing.value = !autoHealing.value;
    }
})

}

    hacks.rapidUpdate = function() {
        try {
            for (let i = 0; i < game.getTank().components_0.array.length; i++)
                game.getTank().components_0.array[39].needImmediateUpdate_0 = true
        } catch (error) {}
}


    hacks.TPFlagA = function() {
        try {
            if (commons.getChatState() == null) {
                game.getTankPhysics().body_xsop3k$_0.state.position.x = vars.FlagA.x
                game.getTankPhysics().body_xsop3k$_0.state.position.y = vars.FlagA.y
                game.getTankPhysics().body_xsop3k$_0.state.position.z = vars.FlagA.z
            }
        } catch (error) {}
}


    hacks.TPFlagB = function() {
        try {
            if (commons.getChatState() == null) {
                game.getTankPhysics().body_xsop3k$_0.state.position.x = vars.FlagB.x
                game.getTankPhysics().body_xsop3k$_0.state.position.y = vars.FlagB.y
                game.getTankPhysics().body_xsop3k$_0.state.position.z = vars.FlagB.z
            }
        } catch (error) {}
}

function getNames() {
    try {
        Table = document.getElementsByTagName("table")
        cName = Table[0].children[1].children[1].children[0].className
        tElems = document.getElementsByClassName(cName)
        for (let i = 0; i < tElems.length; i++) {
            tElems[i].addEventListener("click", function() {
                splitArray = (tElems[i].innerText).split("]")
                if (splitArray.length == 1) {
                    tpName = (tElems[i].innerText).trim()
                }
                if (splitArray.length == 2) {
                    tpName = (splitArray[1]).trim()
                }

            })
        }
    } catch (error) {}
}

let gn = setInterval(getNames, 100)

function tpByName() {
    try {
        for (key in commons.searchObject(commons.getReactRoot(), "tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0) {
            if (commons.searchObject(commons.getReactRoot(), "tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key]._value_0._value_0 == tpName) {
                tpUserID = commons.searchObject(commons.getReactRoot(), "tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0
            }

        }

    } catch (error) {}

}

setInterval(tpByName, 300)


   hacks.BoxTP = function() {
    try {
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    if (boxTeleport.value)
    {
        let triggers = world.triggers_0.triggers_0.array;

        if (triggers && triggers.length != 0)
        {
            for (let i = 0; i < triggers.length; i++)
            {
                if (triggers.at(i).enabled)
                {
                    let triggerPosition = triggers.at(i).bonus_0;

                    if (!triggerPosition)
                    {
                        continue;
                    }

                    if (!triggerPosition.hasOwnProperty("_bonusMesh_0"))
                    {
                        continue;
                    }

                    triggerPosition = triggerPosition._bonusMesh_0.object3d.aabb;

                    if (!triggerPosition)
                    {
                        continue;
                    }

                    physicsComponent.body.state.position.x = triggerPosition.center.x;
                    physicsComponent.body.state.position.y = triggerPosition.center.y;
                    physicsComponent.body.state.position.z = triggerPosition.maxZ;

                    physicsComponent.body.state.orientation.w = Math.sin(-(camera.direction - Math.PI) / 2);
                    physicsComponent.body.state.orientation.z = Math.cos(-(camera.direction - Math.PI) / 2);
                    physicsComponent.body.state.orientation.x = 0;
                    physicsComponent.body.state.orientation.y = 0;

                    physicsComponent.body.state.angularVelocity.x = 0;
                    physicsComponent.body.state.angularVelocity.y = 0;
                    physicsComponent.body.state.angularVelocity.z = 0;

                    physicsComponent.body.state.velocity.x = 0;
                    physicsComponent.body.state.velocity.y = 0;
                    physicsComponent.body.state.velocity.z = 0;
                }
            }
        }
    }
}

    } catch (error) {}

}

    hacks.randomTP = function() {
        try {
            game.getTank().components_0.array[5].tankPhysicsComponent_0.interpolatedPosition.x = commons.getRandom(game.getMapBoundary().minX, game.getMapBoundary().maxX)
            game.getTank().components_0.array[5].tankPhysicsComponent_0.interpolatedPosition.y = commons.getRandom(game.getMapBoundary().minY, game.getMapBoundary().maxY)
            game.getTank().components_0.array[5].tankPhysicsComponent_0.interpolatedPosition.z = game.getMapBoundary().maxZ + 1900
            window.fakeR = requestAnimationFrame(hacks.randomTP)

        } catch (error) {}

}

function stopTank() {
    try {
        if (KeyPressing.isKeyPressed(37) == false || KeyPressing.isKeyPressed(38) == false || KeyPressing.isKeyPressed(39) == false || KeyPressing.isKeyPressed(40) == false || KeyPressing.isKeyPressed(87) == false || KeyPressing.isKeyPressed(68) == false || KeyPressing.isKeyPressed(65) == false || KeyPressing.isKeyPressed(83) == false) {
            game.getTankPhysics().body.movable = false

        }

        if (KeyPressing.isKeyPressed(37) == true || KeyPressing.isKeyPressed(38) == true || KeyPressing.isKeyPressed(39) == true || KeyPressing.isKeyPressed(40) == true || KeyPressing.isKeyPressed(87) == true || KeyPressing.isKeyPressed(68) == true || KeyPressing.isKeyPressed(65) == true || KeyPressing.isKeyPressed(83) == true) {

            game.getTankPhysics().body.movable = true

        }

    } catch (error) {}

}


    hacks.airWalk = function() {
        try {
            vars.intAng = game.getTankPhysics().body.integrateAngularVelocity_mx4ult$ = function() {}
            ;

            game.getAirwalk().params_nd1j3b$_0.maxRayLength = 111111
            game.getAirwalk().params_nd1j3b$_0.dampingCoeff = 0
            game.getAirwalk().params_nd1j3b$_0.springCoeff = 0
            stopTank();

            if (KeyPressing.isKeyPressed(74 /*key: J*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z += 50

            }

            if (KeyPressing.isKeyPressed(75 /*key: K*/
            ) && commons.getChatState() == null) {

                game.getTankPhysics().body.state.position.z -= 50

            }

        } catch (error) {}

}


    function sap() {
        try {
            for (let i = 0; i < vars.shellCache.length; i++) {
                vars.shellCache.at(i).components_0.array.at(1).maxSpeed_0 = 0
                vars.shellCache.at(i).components_0.array.at(1).minSpeed_0 = 0;

            }
        } catch (error) {}

    function sapm() {
        try {
            for (let i = 0; i < vars.shellCache.length; i++) {
                vars.shellCache.at(i).components_0.array.at(1).maxSpeed_0 = 35000
                vars.shellCache.at(i).components_0.array.at(1).minSpeed_0 = 2000;

            }
        } catch (error) {}
    }

    function ap() {
        try {
            for (let i = 0; i < vars.shellCache.length; i++) {
                vars.shellCache.at(i).components_0.array.at(1).direction.x = 0;
                vars.shellCache.at(i).components_0.array.at(1).direction.y = 0;
                vars.shellCache.at(i).components_0.array.at(1).direction.z = 0;

            }
        } catch (error) {}
    }

    function apm() {
        try {
            for (let i = 0; i < vars.shellCache.length; i++) {

                vars.shellCache.at(i).components_0.array.at(1).position.x = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.x
                vars.shellCache.at(i).components_0.array.at(1).position.y = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.y
                vars.shellCache.at(i).components_0.array.at(1).position.z = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.z
                commons.searchObject(game.getTank().components_0.array, "shellCache_0").createShell_0 = function(t) {
                    var enemyPos = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.body.state
                    game.getTank().components_0.array[39].sendUpdate_0(enemyPos, game.getWorld().physicsTime)
                    this.createShell_2(t.shellId, t.barrelIndex, t.direction)
                }

                setTimeout(()=>{
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                }
                , 500)

            }
        } catch (error) {}
    }

    function tapm() {
        try {
            for (let i = 0; i < vars.shellCache.length; i++) {

                vars.shellCache.at(i).components_0.array.at(1).position.x = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.x
                vars.shellCache.at(i).components_0.array.at(1).position.y = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.y
                vars.shellCache.at(i).components_0.array.at(1).position.z = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.z + 100
                commons.searchObject(game.getTank().components_0.array, "shellCache_0").createShell_0 = function(t) {
                    var enemyPos = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.body.state
                    game.getTank().components_0.array[39].sendUpdate_0(enemyPos, game.getWorld().physicsTime)
                    this.createShell_2(t.shellId, t.barrelIndex, t.direction)
                }

                setTimeout(()=>{
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                    game.getStriker().explodeRockets()
                }
                , 500)
            }
        } catch (error) {}
    }
}

isTarget = false

hacks.oneHitKill = function() {
    try {
        vars.shellCache = commons.searchObject(game.getTank().components_0.array, "shellCache_0").shellCache_0.itemsInUse_123ot1$_0.array_hd7ov6$_0

        if (tprc % 2 == 1) {
            if (vars.shellCache.length < 8) {
                ap()

            }

            if (vars.shellCache.length == 8) {
                ap()
                if (isTarget) {
                    setTimeout(tapm, 1500)
                }
                if (isTarget == false) {
                    setTimeout(apm, 1500)

                }

            }

            if (tprc % 2 == 0) {
                if (vars.shellCache.length < 8) {
                    sap()
                    setTimeout(sapm, 1500)

                }

                if (vars.shellCache.length == 8) {
                    sap()
                    setTimeout(sapm, 1500)

                }

            }

        }

    } catch (error) {}
}


    hacks.goldTP = function() {
        try {
            if (commons.getChatState() == null) {
                for (let i = 0; i < game.getWorld().triggers_0.triggers_0.array.length; i++) {
                    try {
                        if (game.getWorld().triggers_0.triggers_0.array[i].bonus_0.bonusData_cqilaj$_0.bonusLight.lightColor.color == 16777215) {
                            game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.x = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minX
                            game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.y = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minY
                            game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.z = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minZ + 150
                        }
                    } catch (error) {}
                }

            }

        } catch (error) {}
}


    function noZVelocity() {

        try {
            game.getTankPhysics().body_xsop3k$_0.state.velocity.z = 0
            game.getWorld().physicsScene_0.gravity.z = 0

        } catch (error) {}

    }

    function nt() {
        try {
            game.getTankPhysics().body.state.orientation.x = 0;
            game.getTankPhysics().body.state.orientation.y = 0;
            game.getTankPhysics().body.state.angularVelocity.y = 0;
            game.getTankPhysics().body.state.angularVelocity.x = 0;
        } catch (error) {}
}

function removeAllMines() {
    for (let i in game.getTank().world.triggers_0.triggers_0.array)
        try {
            game.getTank().world.triggers_0.triggers_0.array[i].deactivateMine_0()
        } catch (error) {}
}

const getMines = ()=>{
    var mines = []
    var triggers = game.getWorld().triggers_0.triggers_0.array
    for (let i = 0; i < triggers.length; i++) {
        if (!triggers[i].hasOwnProperty('bonus_0') && !triggers[i].hasOwnProperty('flagBaseTriggerListener_0') && !triggers[i].hasOwnProperty('flag_0')) {
            var mine = triggers[i]
            mines.push(mine)
        }

    }

    return mines

}

function getUniquePositions() {
    var mines = getMines()
    var minePositions = []

    for (let i = 0; i < mines.length; i++) {
        var minePos = mines[i].position
        if (minePos && minePos.x) {
            minePositions.push(minePos.x)
        }
    }

    return Array.from(new Set(minePositions))

}

function getDuplicateMines() {
    var mines = getMines()
    var duplicateMines = []
    var uniquePositions = getUniquePositions()

    for (let i = 0; i < uniquePositions.length; i++) {
        var sameArray = []
        for (let k = 0; k < mines.length; k++) {

            if (mines[k].position.x == uniquePositions[i] && mines[k]) {
                sameArray.push(mines[k])

            }

        }
        if (sameArray.length > 1) {
            duplicateMines.push(sameArray)
        }
    }
    return duplicateMines

}

function decl() {
    var duplicates = getDuplicateMines()
    var n = duplicates.length
    var innerMines
    var o

    for (let i = 0; i < n; i++) {
        innerMines = duplicates[i]
        o = innerMines.length
        if (o > 1) {

            for (let k = 0; k < o - 1; k++) {

                innerMines[k].removeMine_0()

                for (const element of mines) {
                    if (!element.removeMine_0 || element.id === mine.id)
                        continue;

                    if (element.position.distance_ry1qwf$(mine.position) <= 30)
                        element.removeMine_0();
                }
            }

        }

    }

}

function removeMyMines() {
    let array = game.getWorld().triggers_0.triggers_0.array;
    for (let i = 0; i < array.length; i++) {
        try {
            let object = array[i];
            if (object.ownerId != null) {
                let userId = game.getTank().components_0.array[4].userId
                if (object.ownerId.low_ == userId.low_) {
                    object.removeMine_0()
                }
            }

        } catch (error) {}

    }
}

//event listeners

WpressCount = 0
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 96 || event.keyCode === 45) {
        WpressCount++
        if (WpressCount % 2 == 1) {
            root.appendChild(hackWindow)

        }

        if (WpressCount % 2 == 0) {

            root.removeChild(hackWindow)

        }

    }
})

hackWindow = document.createElement("div")
hackWindow_style = {
    display: "flex",
    backgroundColor: "rgb(12 12 12 / 28%)",
    height: "500px",
    width: "265px",
    position: "absolute",
    right: "10%",
    transform: "translate(-50%,-50%)",
    borderRadius: "20px",
    borderWidth: "3px",
    top: "35%"
}
hackWindow.style.outline = "3px solid red"
//Object.assign():
Object.assign(hackWindow.style, hackWindow_style);
root.appendChild(hackWindow)

title = document.createElement("span")
title.innerText = "Hurricane"
hackWindow.appendChild(title)

creds = document.createElement("span")
creds.innerText = " 6.22.9"
hackWindow.appendChild(creds)

title_style = {
    position: "absolute",
    color: "red",
    textAlign: "center",
    fontSize: "23px",
    padding: "24px 30%",

}

creds_style = {
    position: "absolute",
    color: "red",
    textAlign: "center",
    fontSize: "17px",
    padding: "24px 42%",
    top: "26px"
}

Object.assign(title.style, title_style)
Object.assign(creds.style, creds_style)

checkboxUnticked_style = {
    position: "absolute",
    width: "0.1px",
    height: "0.1px",
    backgroundColor: "#8080803b",
    outline: "none",
    borderRadius: "12px",
    boxShadow: "inset 0 0 5px tgba(0,0,0,.2)",
    transition: ".5s",
    padding: "6px 8%",

}

checkboxTicked_style = {
    backgroundColor: "#fffffff",

}

function draggable(el) {

    el.addEventListener('mousedown', function(e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e) {
            if (e.target != slider && e.target != slider2 && e.target != slider3 && e.target != slider4 && e.target != slider6 && e.target != slider5) {
                el.style.top = (e.clientY - offsetY) + 'px';
                el.style.left = (e.clientX - offsetX) + 'px';
            }
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}

draggable(hackWindow)

function applyButtons(b1, b2, b3, b4, b5, b6, b7, b8, b9) {

    b1 ? Object.assign(b1.style, checkboxUnticked_style) : null;
    b2 ? Object.assign(b2.style, checkboxUnticked_style) : null;
    b3 ? Object.assign(b3.style, checkboxUnticked_style) : null;
    b4 ? Object.assign(b4.style, checkboxUnticked_style) : null;
    b5 ? Object.assign(b5.style, checkboxUnticked_style) : null;
    b6 ? Object.assign(b6.style, checkboxUnticked_style) : null;
    b7 ? Object.assign(b7.style, checkboxUnticked_style) : null;
    b8 ? Object.assign(b8.style, checkboxUnticked_style) : null;
    b9 ? Object.assign(b9.style, checkboxUnticked_style) : null;

    b1 ? b1.style.marginLeft = "70%" : null;
    b2 ? b2.style.marginLeft = "70%" : null;
    b3 ? b3.style.marginLeft = "70%" : null;
    b4 ? b4.style.marginLeft = "70%" : null;
    b5 ? b5.style.marginLeft = "70%" : null;
    b6 ? b6.style.marginLeft = "70%" : null;
    b7 ? b7.style.marginLeft = "70%" : null;
    b8 ? b8.style.marginLeft = '70%' : null;
    b9 ? b9.style.marginLeft = '70%' : null;

    b1 ? b1.style.bottom = "400px" : null;
    b2 ? b2.style.bottom = "360.5px" : null;
    b3 ? b3.style.bottom = "320px" : null;
    b4 ? b4.style.bottom = "280px" : null;
    b5 ? b5.style.bottom = "240px" : null;
    b6 ? b6.style.bottom = "200px" : null;
    b7 ? b7.style.bottom = "160px" : null;
    b8 ? b8.style.bottom = '118.75px' : null;
    b9 ? b9.style.bottom = '145px' : null;

}

function applyLabels(l1, l2, l3, l4, l5, l6, l7, l8, l9) {

    l1 ? l1.style.fontSize = "15px" : null
    l2 ? l2.style.fontSize = "15px" : null
    l3 ? l3.style.fontSize = "15px" : null
    l4 ? l4.style.fontSize = "15px" : null
    l5 ? l5.style.fontSize = "15px" : null
    l6 ? l6.style.fontSize = "15px" : null
    l7 ? l7.style.fontSize = "15px" : null
    l8 ? l8.style.fontSize = '15px' : null
    l9 ? l9.style.fontSize = '15px' : null

    l1 ? l1.style.position = "absolute" : null
    l2 ? l2.style.position = "absolute" : null
    l3 ? l3.style.position = "absolute" : null
    l4 ? l4.style.position = "absolute" : null
    l5 ? l5.style.position = "absolute" : null
    l6 ? l6.style.position = "absolute" : null
    l7 ? l7.style.position = "absolute" : null
    l8 ? l8.style.fontSize = 'absolute' : null
    l9 ? l9.style.fontSize = 'absolute' : null

    l1 ? l1.style.bottom = "400px" : null
    l1 ? l1.style.padding = "65.8% 0px 0px 25px" : null
    l2 ? l2.style.padding = "46% 0px 0px 25px" : null
    l2 ? l2.style.bottom = "360.5" : null
    l3 ? l3.style.padding = "65.8% 0px 0px 25px" : null
    l3 ? l3.style.bottom = "320px" : null
    l4 ? l4.style.padding = "65.8% 0px 0px 25px" : null
    l4 ? l4.style.bottom = "280px" : null
    l5 ? l5.style.bottom = "240px" : null
    l5 ? l5.style.padding = "65.8% 0px 0px 25px" : null
    l6 ? l6.style.bottom = "200px" : null
    l6 ? l6.style.padding = "65.8% 0px 0px 25px" : null
    l7 ? l7.style.padding = "65.8% 0px 0px 25px" : null
    l7 ? l7.style.bottom = "160px" : null
    l8 ? l8.style.padding = "65.8% 0px 0px 25px" : null
    l8 ? l8.style.bottom = "118.75px" : null
    l9 ? l9.style.padding = "65.8% 0px 0px 25px" : null
    l9 ? l9.style.bottom = "80px" : null

}

notiltButton = document.createElement("div")
autoclickerButton = document.createElement("div")
autoHealButton = document.createElement("div")
BoxTPButton = document.createElement("div")
SpeedhackButton = document.createElement("div")
SimpleTPButton = document.createElement("div")
rapidUpdateButton = document.createElement("div")
ghackButton = document.createElement("div")
safeModeButton = document.createElement("div")

applyButtons(notiltButton, autoclickerButton, autoHealButton, BoxTPButton, SpeedhackButton, SimpleTPButton, rapidUpdateButton, ghackButton, safeModeButton)

//page1

innerTxt_style = {
    position: "absolute",
    fontSize: "16px",
    padding: "5px 7%",
    color: "white",
}

Notilt = document.createElement("span")
Autoclicker = document.createElement("span")
Autoheal = document.createElement("span")
BoxTP = document.createElement("span")
GoldTP = document.createElement("span")
rapidUpdate = document.createElement("span")
Airwalk = document.createElement("span")
SimpleTP = document.createElement("span")
Speedhack = document.createElement("span")
Ghack = document.createElement("span")
minerr = document.createElement("span")
safeM = document.createElement("span")

Notilt.innerText = "No Tilt:"
Autoclicker.innerText = "Clicker:"
Autoheal.innerText = "Autoheal:"
BoxTP.innerText = "Box TP [V]:"
SimpleTP.innerText = "FlyHack:"
rapidUpdate.innerText = "R.Update:"
Speedhack.innerText = "Speedhack:"
Ghack.innerText = "Gravity:"
safeM.innerText = "Safe Mode:"

Object.assign(Notilt.style, innerTxt_style)
Object.assign(Autoclicker.style, innerTxt_style)
Object.assign(Autoheal.style, innerTxt_style)
Object.assign(BoxTP.style, innerTxt_style)
Object.assign(rapidUpdate.style, innerTxt_style)
Object.assign(SimpleTP.style, innerTxt_style)
Object.assign(Speedhack.style, innerTxt_style)
Object.assign(Ghack.style, innerTxt_style)
Object.assign(minerr.style, innerTxt_style)
Object.assign(safeM.style, innerTxt_style)

applyLabels(Notilt, Autoclicker, Autoheal, BoxTP, Speedhack, SimpleTP, rapidUpdate, Ghack, minerr, safeM)

hackWindow.appendChild(notiltButton)
hackWindow.appendChild(autoclickerButton)
hackWindow.appendChild(autoHealButton)
hackWindow.appendChild(BoxTPButton)
hackWindow.appendChild(SpeedhackButton)
hackWindow.appendChild(SimpleTPButton)
hackWindow.appendChild(rapidUpdateButton)
hackWindow.appendChild(ghackButton)

hackWindow.appendChild(Notilt)
hackWindow.appendChild(Autoclicker)
hackWindow.appendChild(Autoheal)
hackWindow.appendChild(BoxTP)
hackWindow.appendChild(Speedhack)
hackWindow.appendChild(SimpleTP)
hackWindow.appendChild(BoxTP)
hackWindow.appendChild(rapidUpdate)
hackWindow.appendChild(Ghack)

innerCircle1 = document.createElement("div")
innerCircle2 = document.createElement("div")
innerCircle3 = document.createElement("div")
innerCircle4 = document.createElement("div")
innerCircle5 = document.createElement("div")
innerCircle6 = document.createElement("div")
innerCircle7 = document.createElement("div")
innerCircle50 = document.createElement("div")
innerCircle51 = document.createElement("div")

innerCircle_style = {
    width: "30%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    borderRadius: "10px",
    top: "2%",
    right: "63%",
    transition: "right 0.7s"

}

Object.assign(innerCircle1.style, innerCircle_style)
Object.assign(innerCircle2.style, innerCircle_style)
Object.assign(innerCircle3.style, innerCircle_style)
Object.assign(innerCircle4.style, innerCircle_style)
Object.assign(innerCircle5.style, innerCircle_style)
Object.assign(innerCircle6.style, innerCircle_style)
Object.assign(innerCircle7.style, innerCircle_style)
Object.assign(innerCircle50.style, innerCircle_style)
Object.assign(innerCircle51.style, innerCircle_style)

notiltButton.appendChild(innerCircle1)
autoclickerButton.appendChild(innerCircle2)
autoHealButton.appendChild(innerCircle3)
BoxTPButton.appendChild(innerCircle4)
SpeedhackButton.appendChild(innerCircle5)
SimpleTPButton.appendChild(innerCircle6)
rapidUpdateButton.appendChild(innerCircle7)
ghackButton.appendChild(innerCircle50)
safeModeButton.appendChild(innerCircle51)

page1 = document.createElement("div")
page2 = document.createElement("div")
page3 = document.createElement("div")
page4 = document.createElement("div")
page5 = document.createElement("div")

page_style = {
    position: 'absolute',
    width: "6%",
    height: "3%",
    borderRadius: "20px",
    backgroundColor: "black",
    bottom: "11%",

}

Object.assign(page1.style, page_style)
Object.assign(page2.style, page_style)
Object.assign(page3.style, page_style)
Object.assign(page4.style, page_style)
Object.assign(page5.style, page_style)

hackWindow.appendChild(page1)
hackWindow.appendChild(page2)
hackWindow.appendChild(page3)
hackWindow.appendChild(page4)
hackWindow.appendChild(page5)

page1.style.marginLeft = "40px"
page2.style.marginLeft = "82.5px"
page3.style.marginLeft = "125px"
page4.style.marginLeft = "167.5px"
page5.style.marginLeft = "210px"

//page1 end

//page2

hackWindow.style.backdropFilter = "blur(10px)"

//page2 end

//click count vars
ncc = 0
acc = 0
ahc = 0
ptc = 0
shc = 0
smc = 0
rtc = 0
gtc = 0
sfdm = 0

//end vars

//js for buttons

safeModeButton.addEventListener('click', function() {
    sfdm += 1
    if (sfdm % 2 == 1) {
        safeModeButton.style.backgroundColor = "white"
        safeModeButton.children[0].style.right = "10%"
        safeModeButton.children[0].style.backgroundColor = "#404040"

        safeMode = true
    }
    if (sfdm % 2 == 0) {
        safeModeButton.style.backgroundColor = "#8080803b"
        safeModeButton.children[0].style.right = "63%"
        safeModeButton.children[0].style.backgroundColor = "white"
        safeMode = false

    }
})

notiltButton.addEventListener("click", function() {
    ncc += 1

    if (ncc % 2 == 1) {
        notiltButton.style.backgroundColor = "white"
        notiltButton.children[0].style.right = "10%"
        notiltButton.children[0].style.backgroundColor = "#404040"
        window.NZR = setInterval(noZVelocity, 1)
        window.ntr = setInterval(nt, 1)
        window.rgt = game.getWorld().physicsScene_0.gravity.z
    }

    if (ncc % 2 == 0) {
        notiltButton.style.backgroundColor = "#8080803b"
        notiltButton.children[0].style.right = "63%"
        notiltButton.children[0].style.backgroundColor = "white"
        clearInterval(window.NZR)
        clearInterval(window.ntr)
        game.getTankPhysics().body_xsop3k$_0.state.velocity.z = -1.3
        game.getWorld().physicsScene_0.gravity.z = window.rgt
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 107 && commons.getChatState() == null) {
        ncc += 1

        if (ncc % 2 == 1) {
            notiltButton.style.backgroundColor = "white"
            notiltButton.children[0].style.right = "10%"
            notiltButton.children[0].style.backgroundColor = "#404040"
            window.NZR = setInterval(noZVelocity, 1)
            window.ntr = setInterval(nt, 1)
            window.rgt = game.getWorld().physicsScene_0.gravity.z
        }

        if (ncc % 2 == 0) {
            notiltButton.style.backgroundColor = "#8080803b"
            notiltButton.children[0].style.right = "63%"
            notiltButton.children[0].style.backgroundColor = "white"
            clearInterval(window.NZR)
            clearInterval(window.ntr)
            game.getTankPhysics().body_xsop3k$_0.state.velocity.z = -1.3
            game.getWorld().physicsScene_0.gravity.z = window.rgt
        }

    }
}
)

autoclickerButton.addEventListener('click', (e)=>{

    acc++
    if (acc % 2 == 1) {
        autoclickerButton.style.backgroundColor = "white"
        autoclickerButton.children[0].style.right = "10%"
        autoclickerButton.children[0].style.backgroundColor = "#404040"
        window.p = setInterval(hacks.clicker, slider4.value)

    }

    if (acc % 2 == 0) {

        autoclickerButton.style.backgroundColor = "#8080803b"
        autoclickerButton.children[0].style.right = "63%"
        autoclickerButton.children[0].style.backgroundColor = "white"
        clearInterval(window.p)

    }

}
)

document.addEventListener('keydown', (e)=>{
    if (e.keyCode === 35 && commons.getChatState() == null) {
        acc++
        if (acc % 2 == 1) {
            autoclickerButton.style.backgroundColor = "white"
            autoclickerButton.children[0].style.right = "10%"
            autoclickerButton.children[0].style.backgroundColor = "#404040"
            window.p = setInterval(hacks.clicker, slider4.value)

        }

        if (acc % 2 == 0) {

            autoclickerButton.style.backgroundColor = "#8080803b"
            autoclickerButton.children[0].style.right = "63%"
            autoclickerButton.children[0].style.backgroundColor = "white"
            clearInterval(window.p)

        }

    }
}
)

ghackButton.addEventListener("click", function() {
    gtc += 1

    if (gtc % 2 == 1) {
        ghackButton.style.backgroundColor = "white"
        ghackButton.children[0].style.right = "10%"
        ghackButton.children[0].style.backgroundColor = "#404040"
        window.grv = setInterval(hacks.gv, 1000)
    }

    if (gtc % 2 == 0) {
        ghackButton.style.backgroundColor = "#8080803b"
        ghackButton.children[0].style.right = "63%"
        ghackButton.children[0].style.backgroundColor = "white"
        clearInterval(window.grv)
    }

})

autoHealButton.addEventListener("click", (e)=>{
    ahc++

    if (ahc % 2 == 1) {
        autoHealButton.style.backgroundColor = "white"
        autoHealButton.children[0].style.right = "10%"
        autoHealButton.children[0].style.backgroundColor = "#404040"
        window.autoR = setInterval(hacks.autoHeal, 1)
    }

    if (ahc % 2 == 0) {
        autoHealButton.style.backgroundColor = "#8080803b"
        autoHealButton.children[0].style.right = "63%"
        autoHealButton.children[0].style.backgroundColor = "white"
        clearInterval(window.autoR)

    }

}
)

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 102 && commons.getChatState() == null) {
        ahc++

        if (ahc % 2 == 1) {
            autoHealButton.style.backgroundColor = "white"
            autoHealButton.children[0].style.right = "10%"
            autoHealButton.children[0].style.backgroundColor = "#404040"
            window.autoR = setInterval(hacks.autoHeal, 1)
        }

        if (ahc % 2 == 0) {
            autoHealButton.style.backgroundColor = "#8080803b"
            autoHealButton.children[0].style.right = "63%"
            autoHealButton.children[0].style.backgroundColor = "white"
            clearInterval(window.autoR)

        }

    }
}
)

SpeedhackButton.addEventListener("click", function() {
    shc += 1

    if (shc % 2 == 1) {
        SpeedhackButton.style.backgroundColor = "white"
        SpeedhackButton.children[0].style.right = "10%"
        SpeedhackButton.children[0].style.backgroundColor = "#404040"
        window.speed = setInterval(hacks.speedhack, 500)
    }

    if (shc % 2 == 0) {
        SpeedhackButton.style.backgroundColor = "#8080803b"
        SpeedhackButton.children[0].style.right = "63%"
        SpeedhackButton.children[0].style.backgroundColor = "white"
        clearInterval(window.speed)
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 107 && commons.getChatState() == null) {
        shc += 1

        if (shc % 2 == 1) {
            SpeedhackButton.style.backgroundColor = "white"
            SpeedhackButton.children[0].style.right = "10%"
            SpeedhackButton.children[0].style.backgroundColor = "#404040"
            window.speed = setInterval(hacks.speedhack, 500)
        }

        if (shc % 2 == 0) {
            SpeedhackButton.style.backgroundColor = "#8080803b"
            SpeedhackButton.children[0].style.right = "63%"
            SpeedhackButton.children[0].style.backgroundColor = "white"
            clearInterval(window.speed)
        }

    }
}
)

SimpleTPButton.addEventListener('click', window.smp = (e)=>{
    smc++
    if (smc % 2 == 1) {
        SimpleTPButton.style.backgroundColor = "white"
        SimpleTPButton.children[0].style.right = "10%"
        SimpleTPButton.children[0].style.backgroundColor = "#404040"
        window.ckp = setInterval(hacks.simpleTP, 1)
        let jp = 0

        document.addEventListener('keydown', window.xxx = function(e) {
            if (e.keyCode == 89 && commons.getChatState() == null) {
                jp += 1

                if (jp % 2 == 1) {
                    window.jmp = setInterval(updown, 1)
                }

                if (jp % 2 == 0) {
                    clearInterval(window.jmp)
                }

            }
        }
        )

    }
    if (smc % 2 == 0) {
        SimpleTPButton.style.backgroundColor = "#8080803b"
        SimpleTPButton.children[0].style.right = "63%"
        SimpleTPButton.children[0].style.backgroundColor = "white"
        clearInterval(window.ckp)
        game.getTankPhysics().body.movable = true
        clearInterval(window.jm)
        document.removeEventListener('keydown', window.xxx)
    }

}
)

document.addEventListener('keydown', window.smp = (e)=>{
    if (e.keyCode == 103 && commons.getChatState() == null) {
        smc++
        if (smc % 2 == 1) {
            SimpleTPButton.style.backgroundColor = "white"
            SimpleTPButton.children[0].style.right = "10%"
            SimpleTPButton.children[0].style.backgroundColor = "#404040"
            window.ckp = setInterval(hacks.simpleTP, 1)
            let jp = 0

            document.addEventListener('keydown', window.xxx = function(e) {
                if (e.keyCode == 89 && commons.getChatState() == null) {
                    jp += 1

                    if (jp % 2 == 1) {
                        window.jm = setInterval(updown, 200)
                    }

                    if (jp % 2 == 0) {
                        clearInterval(window.jm)
                    }

                }
            }
            )

        }

        if (smc % 2 == 0) {
            SimpleTPButton.style.backgroundColor = "#8080803b"
            SimpleTPButton.children[0].style.right = "63%"
            SimpleTPButton.children[0].style.backgroundColor = "white"
            clearInterval(window.ckp)
            game.getTankPhysics().body.movable = true
            clearInterval(window.jm)
            document.removeEventListener('keydown', window.xxx)
        }

    }
}
)

rapidUpdateButton.addEventListener('click', (e)=>{

    rtc++
    if (rtc % 2 == 1) {
        rapidUpdateButton.style.backgroundColor = "white"
        rapidUpdateButton.children[0].style.right = "10%"
        rapidUpdateButton.children[0].style.backgroundColor = "#404040"
        window.ru = setInterval(hacks.rapidUpdate, 10)

    }

    if (rtc % 2 == 0) {
        rapidUpdateButton.style.backgroundColor = "#8080803b"
        rapidUpdateButton.children[0].style.right = "63%"
        rapidUpdateButton.children[0].style.backgroundColor = "white"
        clearInterval(window.ru)

    }

}
)

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 105 && commons.getChatState() == null) {
        rtc++
        if (rtc % 2 == 1) {
            rapidUpdateButton.style.backgroundColor = "white"
            rapidUpdateButton.children[0].style.right = "10%"
            rapidUpdateButton.children[0].style.backgroundColor = "#404040"
            window.ru = setInterval(hacks.rapidUpdate, 10)

        }

        if (rtc % 2 == 0) {
            rapidUpdateButton.style.backgroundColor = "#8080803b"
            rapidUpdateButton.children[0].style.right = "63%"
            rapidUpdateButton.children[0].style.backgroundColor = "white"
            clearInterval(window.ru)

        }

    }
}
)

root.removeChild(hackWindow)

//rgba(114, 56, 56, 0.08);

//document.addEventListener('keydown',   function (event) { if (event.key === 'r'){unAim()}})

//page2

Gtext = document.createElement("span")
setInterval(function() {
    try {
        Gtext.innerText = `Grav [${slider5.value}]:`
    } catch (error) {}
}, 100)

Object.assign(Gtext.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '23.1%'
})

airwalkBtn = document.createElement("div")
randomBtn = document.createElement("div")
FlagTPBtn = document.createElement("div")
GoldTPBtn = document.createElement("div")
MineHackBtn = document.createElement("div")
NoKnockbackBtn = document.createElement("div")
IgnoreTexturesBtn = document.createElement("div")

innerCircle8 = document.createElement("div")
innerCircle9 = document.createElement("div")
innerCircle10 = document.createElement("div")
innerCircle11 = document.createElement("div")
innerCircle12 = document.createElement("div")
innerCircle13 = document.createElement("div")
innerCircle14 = document.createElement("div")

Object.assign(innerCircle8.style, innerCircle_style)
Object.assign(innerCircle9.style, innerCircle_style)
Object.assign(innerCircle10.style, innerCircle_style)
Object.assign(innerCircle11.style, innerCircle_style)
Object.assign(innerCircle12.style, innerCircle_style)
Object.assign(innerCircle13.style, innerCircle_style)
Object.assign(innerCircle14.style, innerCircle_style)

airwalkBtn.appendChild(innerCircle8)
randomBtn.appendChild(innerCircle9)
FlagTPBtn.appendChild(innerCircle10)
GoldTPBtn.appendChild(innerCircle11)
MineHackBtn.appendChild(innerCircle12)
NoKnockbackBtn.appendChild(innerCircle13)
IgnoreTexturesBtn.appendChild(innerCircle14)

applyButtons(airwalkBtn, randomBtn, FlagTPBtn, GoldTPBtn, MineHackBtn, NoKnockbackBtn, IgnoreTexturesBtn)

Airwalk = document.createElement("span")
randomTP = document.createElement("span")
flagTP = document.createElement("span")
GoldTP = document.createElement("span")
Minehack = document.createElement("span")
NoKnockback = document.createElement("span")
IgnoreTextures = document.createElement("span")

applyLabels(Airwalk, randomTP, flagTP, GoldTP, Minehack, NoKnockback, IgnoreTextures)

Airwalk.innerText = "Airwalk:"
randomTP.innerText = "Anti Aim:"
flagTP.innerText = "Flag TP [N]:"
GoldTP.innerText = "Gold TP [T]:"
Minehack.innerText = "Minehack:"
NoKnockback.innerText = "No Knockback:"
IgnoreTextures.innerText = "Ignore Textures:"

//counts
awc = 0
rwc = 0
ftbc = 0
gtbc = 0
mhc = 0
nkc = 0
itc = 0
//inner counts
ftc = 0
gtc = 0
//end

//event listeners

airwalkBtn.addEventListener("click", function() {
    awc += 1

    if (awc % 2 == 1) {
        airwalkBtn.style.backgroundColor = "white"
        airwalkBtn.children[0].style.right = "10%"
        airwalkBtn.children[0].style.backgroundColor = "#404040"
        airw = setInterval(hacks.airWalk, 10)
    }

    if (awc % 2 == 0) {
        airwalkBtn.style.backgroundColor = "#8080803b"
        airwalkBtn.children[0].style.right = "63%"
        airwalkBtn.children[0].style.backgroundColor = "white"
        try {
            clearInterval(airw)
            game.getAirwalk().params_nd1j3b$_0.dampingCoeff = 2000
            game.getAirwalk().params_nd1j3b$_0.maxRayLength = 50
            game.getAirwalk().params_nd1j3b$_0.springCoeff = 16000
            game.getTankPhysics().body.integrateAngularVelocity_mx4ult$ = vars.intAng;
        } catch (error) {}
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 107 && commons.getChatState() == null) {
        awc += 1

        if (awc % 2 == 1) {
            airwalkBtn.style.backgroundColor = "white"
            airwalkBtn.children[0].style.right = "10%"
            airwalkBtn.children[0].style.backgroundColor = "#404040"
            airw = setInterval(hacks.airWalk, 10)
        }

        if (awc % 2 == 0) {
            airwalkBtn.style.backgroundColor = "#8080803b"
            airwalkBtn.children[0].style.right = "63%"
            airwalkBtn.children[0].style.backgroundColor = "white"
            try {
                clearInterval(airw)
                game.getAirwalk().params_nd1j3b$_0.dampingCoeff = 2000
                game.getAirwalk().params_nd1j3b$_0.maxRayLength = 50
                game.getAirwalk().params_nd1j3b$_0.springCoeff = 16000
                game.getTankPhysics().body.integrateAngularVelocity_mx4ult$ = vars.intAng;
            } catch (error) {}
        }

    }
}
)

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 85 && commons.getChatState() == null) {
        awc++

        if (awc % 2 == 1) {
            randomBtn.style.backgroundColor = "white"
            randomBtn.children[0].style.right = "10%"
            randomBtn.children[0].style.backgroundColor = "#404040"
            hacks.randomTP()

        }

        if (awc % 2 == 0) {
            randomBtn.style.backgroundColor = "#8080803b"
            randomBtn.children[0].style.right = "63%"
            randomBtn.children[0].style.backgroundColor = "white"
            cancelAnimationFrame(window.fakeR)
        }

    }
}
)

randomBtn.addEventListener("click", (e)=>{
    awc++

    if (awc % 2 == 1) {
        randomBtn.style.backgroundColor = "white"
        randomBtn.children[0].style.right = "10%"
        randomBtn.children[0].style.backgroundColor = "#404040"
        hacks.randomTP()

    }

    if (awc % 2 == 0) {
        randomBtn.style.backgroundColor = "#8080803b"
        randomBtn.children[0].style.right = "63%"
        randomBtn.children[0].style.backgroundColor = "white"
        cancelAnimationFrame(window.fakeR)
    }

}
)

FlagTPBtn.addEventListener("click", function() {
    ftbc += 1

    if (ftbc % 2 == 1) {
        FlagTPBtn.style.backgroundColor = "white"
        FlagTPBtn.children[0].style.right = "10%"
        FlagTPBtn.children[0].style.backgroundColor = "#404040"
        document.addEventListener("keydown", window.ftp = function(e) {
            if (e.key == "n") {

                ftc += 1
                if (ftc % 2 == 1) {

                    hacks.TPFlagA()
                }

                if (ftc % 2 == 0) {

                    hacks.TPFlagB()
                }

            }

        }
        )

    }

    if (ftbc % 2 == 0) {
        FlagTPBtn.style.backgroundColor = "#8080803b"
        FlagTPBtn.children[0].style.right = "63%"
        FlagTPBtn.children[0].style.backgroundColor = "white"
        document.removeEventListener("keydown", window.ftp)

    }

})

slider5 = document.createElement("input")

slider5.type = "range"

slider5.step = 100

slider5.min = -1000
slider5.max = -300
slider5.style.position = "absolute"
slider5.style.bottom = "23%"
slider5.style.marginLeft = "43%"

slider6 = document.createElement("input")

slider6.type = "range"

slider6.step = 5

slider6.min = 0
slider6.max = 200
slider6.style.position = "absolute"
slider6.style.bottom = "23%"
slider6.style.marginLeft = "43%"

GoldTPBtn.addEventListener("click", function() {
    gtbc += 1

    if (gtbc % 2 == 1) {
        GoldTPBtn.style.backgroundColor = "white"
        GoldTPBtn.children[0].style.right = "10%"
        GoldTPBtn.children[0].style.backgroundColor = "#404040"
        document.addEventListener("keydown", window.gtp = function(e) {
            if (e.key == "t" && commons.getChatState() == null) {

                gtc += 1
                if (gtc % 2 == 1) {

                    window.gtr = setInterval(hacks.goldTP, 10)
                }

                if (gtc % 2 == 0) {

                    clearInterval(window.gtr)
                }

            }

        }
        )

    }

    if (gtbc % 2 == 0) {
        GoldTPBtn.style.backgroundColor = "#8080803b"
        GoldTPBtn.children[0].style.right = "63%"
        GoldTPBtn.children[0].style.backgroundColor = "white"
        document.removeEventListener("keydown", window.gtp)

    }

})

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 99 && commons.getChatState() == null) {
        mhc += 1

        if (mhc % 2 == 1) {
            MineHackBtn.style.backgroundColor = "white"
            MineHackBtn.children[0].style.right = "10%"
            MineHackBtn.children[0].style.backgroundColor = "#404040"
            window.ram = setInterval(removeAllMines, 100)
        }

        if (mhc % 2 == 0) {
            MineHackBtn.style.backgroundColor = "#8080803b"
            MineHackBtn.children[0].style.right = "63%"
            MineHackBtn.children[0].style.backgroundColor = "white"
            clearInterval(window.ram)
        }

    }
}
)

MineHackBtn.addEventListener('click', (e)=>{
    mhc += 1

    if (mhc % 2 == 1) {
        MineHackBtn.style.backgroundColor = "white"
        MineHackBtn.children[0].style.right = "10%"
        MineHackBtn.children[0].style.backgroundColor = "#404040"
        window.ram = setInterval(removeAllMines, 100)
    }

    if (mhc % 2 == 0) {
        MineHackBtn.style.backgroundColor = "#8080803b"
        MineHackBtn.children[0].style.right = "63%"
        MineHackBtn.children[0].style.backgroundColor = "white"
        clearInterval(window.ram)
    }

}
)


    NoKnockbackBtn.addEventListener("click", function() {
        nkc += 1

        if (nkc % 2 == 1) {
            NoKnockbackBtn.style.backgroundColor = "white"
            NoKnockbackBtn.children[0].style.right = "10%"
            NoKnockbackBtn.children[0].style.backgroundColor = "#404040"

            nkr = setInterval(function() {
                try {
                    game.getTankPhysics().body.addWorldForce_f5o1bj$ = ()=>{}

                } catch (error) {}
            }, 1500)

        }

        if (nkc % 2 == 0) {
            NoKnockbackBtn.style.backgroundColor = "#8080803b"
            NoKnockbackBtn.children[0].style.right = "63%"
            NoKnockbackBtn.children[0].style.backgroundColor = "white"
            clearInterval(nkr)
            game.getTankPhysics().body.addWorldForce_f5o1bj$ = function(t, e, n) {
                var o = n * e.x
                  , i = n * e.y
                  , r = n * e.z;
                this.forceAccum_0.x = this.forceAccum_0.x + o,
                this.forceAccum_0.y = this.forceAccum_0.y + i,
                this.forceAccum_0.z = this.forceAccum_0.z + r;
                var s = this.state.position
                  , a = t.x - s.x
                  , c = t.y - s.y
                  , u = t.z - s.z;
                this.torqueAccum_0.x = this.torqueAccum_0.x + (c * r - u * i),
                this.torqueAccum_0.y = this.torqueAccum_0.y + (u * o - a * r),
                this.torqueAccum_0.z = this.torqueAccum_0.z + (a * i - c * o)
            }

        }

})


    IgnoreTexturesBtn.addEventListener("click", function() {
        itc += 1

        if (itc % 2 == 1) {
            IgnoreTexturesBtn.style.backgroundColor = "white"
            IgnoreTexturesBtn.children[0].style.right = "10%"
            IgnoreTexturesBtn.children[0].style.backgroundColor = "#404040"
            itr = setInterval(function() {
                try {
                    game.getTankPhysics().body.scene.getBodyContacts_9pl3r9$ = function(t, e) {}
                    clearInterval(itre)
                } catch (error) {}
            }, 1500)
        }

        if (itc % 2 == 0) {
            IgnoreTexturesBtn.style.backgroundColor = "#8080803b"
            IgnoreTexturesBtn.children[0].style.right = "63%"
            IgnoreTexturesBtn.children[0].style.backgroundColor = "white"
            clearInterval(itr)
            itre = setInterval(function() {
                try {
                    game.getTankPhysics().body.scene.getBodyContacts_9pl3r9$ = function(t, e) {
                        return this.$delegate_jkpsdr$_0.getBodyContacts_9pl3r9$(t, e)
                    }

                } catch (error) {}
            }, 1500)
        }

})

whiteIcon = document.createElement("div")

whiteIcon.style.width = "100%"
whiteIcon.style.height = "100%"
whiteIcon.style.background = "white"
whiteIcon.style.borderRadius = "20px"

page1.appendChild(whiteIcon)

page1.addEventListener("click", page1func)
page2.addEventListener("click", page2func)
page3.addEventListener("click", page3func)
page4.addEventListener("click", page4func)
page5.addEventListener("click", page5func)

function page1func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(title)
    hackWindow.appendChild(creds)
    hackWindow.appendChild(notiltButton)
    hackWindow.appendChild(autoclickerButton)
    hackWindow.appendChild(autoHealButton)
    hackWindow.appendChild(BoxTPButton)
    hackWindow.appendChild(SpeedhackButton)
    hackWindow.appendChild(SimpleTPButton)
    hackWindow.appendChild(rapidUpdateButton)
    hackWindow.appendChild(ghackButton)

    notiltButton.appendChild(innerCircle1)
    autoclickerButton.appendChild(innerCircle2)
    autoHealButton.appendChild(innerCircle3)
    BoxTPButton.appendChild(innerCircle4)
    SpeedhackButton.appendChild(innerCircle5)
    SimpleTPButton.appendChild(innerCircle6)
    rapidUpdateButton.appendChild(innerCircle7)
    ghackButton.appendChild(innerCircle50)

    hackWindow.appendChild(Notilt)
    hackWindow.appendChild(Autoclicker)
    hackWindow.appendChild(Autoheal)
    hackWindow.appendChild(BoxTP)
    hackWindow.appendChild(Speedhack)
    hackWindow.appendChild(SimpleTP)
    hackWindow.appendChild(BoxTP)
    hackWindow.appendChild(rapidUpdate)
    hackWindow.appendChild(Ghack)

    page1.appendChild(whiteIcon)

    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)
    hackWindow.appendChild(page5)

}

function page2func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(title)
    hackWindow.appendChild(creds)
    hackWindow.appendChild(airwalkBtn)
    hackWindow.appendChild(randomBtn)
    hackWindow.appendChild(GoldTPBtn)
    hackWindow.appendChild(FlagTPBtn)
    hackWindow.appendChild(MineHackBtn)
    hackWindow.appendChild(NoKnockbackBtn)
    hackWindow.appendChild(IgnoreTexturesBtn)

    hackWindow.appendChild(Airwalk)
    hackWindow.appendChild(GoldTP)
    hackWindow.appendChild(flagTP)
    hackWindow.appendChild(randomTP)
    hackWindow.appendChild(Minehack)
    hackWindow.appendChild(NoKnockback)
    hackWindow.appendChild(IgnoreTextures)
    hackWindow.appendChild(Gtext)
    hackWindow.appendChild(slider5)

    airwalkBtn.appendChild(innerCircle8)
    randomBtn.appendChild(innerCircle9)
    FlagTPBtn.appendChild(innerCircle10)
    GoldTPBtn.appendChild(innerCircle11)
    MineHackBtn.appendChild(innerCircle12)
    NoKnockbackBtn.appendChild(innerCircle13)
    IgnoreTexturesBtn.appendChild(innerCircle14)

    page2.appendChild(whiteIcon)

    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)
    hackWindow.appendChild(page5)

}

//page5

State1 = document.createElement("span")
State2 = document.createElement("span")
State3 = document.createElement("span")
State4 = document.createElement("span")

function applyButtons1(b111, b222, b333, b444) {

    b111 ? Object.assign(b111.style, checkboxUnticked_style) : null;
    b222 ? Object.assign(b222.style, checkboxUnticked_style) : null;
    b333 ? Object.assign(b333.style, checkboxUnticked_style) : null;
    b444 ? Object.assign(b444.style, checkboxUnticked_style) : null;

    b111 ? b111.style.marginLeft = "70%" : null;
    b222 ? b222.style.marginLeft = "70%" : null;
    b333 ? b333.style.marginLeft = "70%" : null;
    b444 ? b444.style.marginLeft = "70%" : null;

    b111 ? b111.style.bottom = "80%" : null;
    b222 ? b222.style.bottom = "71.9%" : null;
    b333 ? b333.style.bottom = "64%" : null;
    b444 ? b444.style.bottom = "56%" : null;
}
applyButtons1(State2, State3, State4, State1)

State2.style.bottom = "400px"
State3.style.bottom = "335px"
State4.style.bottom = "270px"
State1.style.bottom = "205px"

label_style = {
    position: "absolute",
    fontSize: "15px",
    padding: "25px 10%",
    color: "white",
    fontWeight: "1000"
}

n_style = {
    position: "absolute",
    fontSize: "15px",
    padding: "25px 25%",
    textAlign: "center",
    color: "white",
    fontWeight: "1000"
}

innerCircle111 = document.createElement("div")
innerCircle222 = document.createElement("div")
innerCircle333 = document.createElement("div")
innerCircle444 = document.createElement("div")

Object.assign(innerCircle111.style, innerCircle_style)
Object.assign(innerCircle222.style, innerCircle_style)
Object.assign(innerCircle333.style, innerCircle_style)
Object.assign(innerCircle444.style, innerCircle_style)

State2.appendChild(innerCircle111)
State3.appendChild(innerCircle222)
State4.appendChild(innerCircle333)
State1.appendChild(innerCircle444)

Sclose = document.createElement("span")
SclickA = document.createElement("span")
SclickB = document.createElement("span")
SclickJ = document.createElement("span")
SautoShot = document.createElement("span")

Object.assign(SclickA.style, label_style)
Object.assign(Sclose.style, n_style)
Object.assign(SclickB.style, label_style)
Object.assign(SclickJ.style, label_style)
Object.assign(SautoShot.style, label_style)

applyLabels(SautoShot, SclickJ, SclickB, SclickA)

Sclose.innerText = "Toggle UI [Insert]"
SclickA.innerText = "JOIN A:"
SclickB.innerText = "JOIN B:"
SclickJ.innerText = "JOIN DM:"
SautoShot.innerText = "Auto Shooting:"

SclickA.style.bottom = "400px"
SclickB.style.bottom = "335px"
SclickJ.style.bottom = "270px"
Sclose.style.bottom = "70px"
SautoShot.style.bottom = "205px"
safeM.style.bottom = "140px"
safeM.style.left = "10px"

function page5func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(title)
    hackWindow.appendChild(creds)
    hackWindow.appendChild(State1)
    hackWindow.appendChild(State2)
    hackWindow.appendChild(State3)
    hackWindow.appendChild(State4)

    hackWindow.appendChild(Sclose)
    hackWindow.appendChild(SautoShot)
    hackWindow.appendChild(SclickA)
    hackWindow.appendChild(SclickB)
    hackWindow.appendChild(SclickJ)
    hackWindow.appendChild(safeM)
    hackWindow.appendChild(safeModeButton)

    State2.appendChild(innerCircle111)
    State3.appendChild(innerCircle222)
    State4.appendChild(innerCircle333)

    page5.appendChild(whiteIcon)

    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)
    hackWindow.appendChild(page5)

}

freezeTanksBtn = document.createElement("div")
noStunBtn = document.createElement("div")
declusterBtn = document.createElement("div")
playerMinesBtn = document.createElement("div")
ohkBtn = document.createElement("div")
aimbotBtn = document.createElement("div")
tprBtn = document.createElement("div")

freezeTanks = document.createElement("span")
noStun = document.createElement("span")
decluster = document.createElement("span")
playerMines = document.createElement("span")
ohk = document.createElement("span")
aimbot = document.createElement("span")
tpr = document.createElement("span")

freezeTanks.innerText = "Freeze Tanks:"
noStun.innerText = "Physics Fix:"
decluster.innerText = "Mine Decluster:"
playerMines.innerText = "Player Mines [H]:"
ohk.innerText = "Mines Click [Num1]:"
aimbot.innerText = "Striker Angle:"
tpr.innerText = "TP Rockets [Scr Lk]:"

applyLabels(freezeTanks, noStun, decluster, playerMines, aimbot, ohk, tpr)
applyButtons(freezeTanksBtn, noStunBtn, declusterBtn, playerMinesBtn, aimbotBtn, ohkBtn, tprBtn)

innerCircle15 = document.createElement("div")
innerCircle16 = document.createElement("div")
innerCircle17 = document.createElement("div")
innerCircle18 = document.createElement("div")
innerCircle19 = document.createElement("div")
innerCircle20 = document.createElement("div")
innerCircle21 = document.createElement("div")

Object.assign(innerCircle15.style, innerCircle_style)
Object.assign(innerCircle16.style, innerCircle_style)
Object.assign(innerCircle17.style, innerCircle_style)
Object.assign(innerCircle18.style, innerCircle_style)
Object.assign(innerCircle19.style, innerCircle_style)
Object.assign(innerCircle20.style, innerCircle_style)
Object.assign(innerCircle21.style, innerCircle_style)

freezeTanksBtn.appendChild(innerCircle15)
noStunBtn.appendChild(innerCircle16)
playerMinesBtn.appendChild(innerCircle17)
declusterBtn.appendChild(innerCircle18)
ohkBtn.appendChild(innerCircle19)
aimbotBtn.appendChild(innerCircle20)
tprBtn.appendChild(innerCircle21)

function page3func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(title)
    hackWindow.appendChild(creds)
    hackWindow.appendChild(noStunBtn)
    hackWindow.appendChild(tprBtn)
    hackWindow.appendChild(aimbotBtn)
    hackWindow.appendChild(declusterBtn)
    hackWindow.appendChild(playerMinesBtn)
    hackWindow.appendChild(ohkBtn)
    hackWindow.appendChild(freezeTanksBtn)

    hackWindow.appendChild(freezeTanks)
    hackWindow.appendChild(tpr)
    hackWindow.appendChild(aimbot)
    hackWindow.appendChild(playerMines)
    hackWindow.appendChild(ohk)
    hackWindow.appendChild(noStun)
    hackWindow.appendChild(decluster)
    hackWindow.appendChild(slider6)
    hackWindow.appendChild(minerr)
    hackWindow.appendChild(minerText)

    page3.appendChild(whiteIcon)

    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)
    hackWindow.appendChild(page5)

}

minerr.style.bottom = "22.3%";

ffc = 0
nsc = 0
mdc = 0
pmc = 0
amc = 0
ohkc = 0
tprc = 0

//event listeners

freezeTanksBtn.addEventListener("click", (e)=>{
    ffc++

    if (ffc % 2 == 1) {
        freezeTanksBtn.style.backgroundColor = "white"
        freezeTanksBtn.children[0].style.right = "10%"
        freezeTanksBtn.children[0].style.backgroundColor = "#404040"

        ftr = setInterval(function() {
            try {
                for (let i = 0; i < game.getPlayers().list_0.array.length; i++) {
                    if (game.getPlayers().list_0.array[i].components_0.array[4].userId.low_ != game.getTank().components_0.array[4].userId.low_) {

                        game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable = false

                    }

                }

            } catch (error) {}

        }, 1000)

    }

    if (ffc % 2 == 0) {
        freezeTanksBtn.style.backgroundColor = "#8080803b"
        freezeTanksBtn.children[0].style.right = "63%"
        freezeTanksBtn.children[0].style.backgroundColor = "white"
        clearInterval(ftr)

        try {
            for (let i = 0; i < game.getPlayers().list_0.array.length; i++) {

                game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable = true

            }

        } catch (error) {}

    }

}
)

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 36 && commons.getChatState() == null) {
        ffc++

        if (ffc % 2 == 1) {
            freezeTanksBtn.style.backgroundColor = "white"
            freezeTanksBtn.children[0].style.right = "10%"
            freezeTanksBtn.children[0].style.backgroundColor = "#404040"

            ftr = setInterval(function() {
                try {
                    for (let i = 0; i < game.getPlayers().list_0.array.length; i++) {
                        if (game.getPlayers().list_0.array[i].components_0.array[4].userId.low_ != game.getTank().components_0.array[4].userId.low_) {

                            game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable = false

                        }

                    }

                } catch (error) {}

            }, 1000)

        }

        if (ffc % 2 == 0) {
            freezeTanksBtn.style.backgroundColor = "#8080803b"
            freezeTanksBtn.children[0].style.right = "63%"
            freezeTanksBtn.children[0].style.backgroundColor = "white"
            clearInterval(ftr)

            try {
                for (let i = 0; i < game.getPlayers().list_0.array.length; i++) {

                    game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable = true

                }

            } catch (error) {}

        }

    }
}
)

noStunBtn.addEventListener("click", function() {
    nsc += 1

    if (nsc % 2 == 1) {
        noStunBtn.style.backgroundColor = "white"
        noStunBtn.children[0].style.right = "10%"
        noStunBtn.children[0].style.backgroundColor = "#404040"
        nsr = setInterval(function() {
            for (let i = 0; i < game.getTank().components_0.array.length; i++)
                try {

                    game.getTank().components_0.array[i].params_m76zm3$_0.tiltStabilityScale = 9.5
                    game.getTank().components_0.array[i].params_m76zm3$_0.tiltStabilityMaxAngle = 1

                } catch (error) {}

        }, 1000)
    }

    if (nsc % 2 == 0) {
        noStunBtn.style.backgroundColor = "#8080803b"
        noStunBtn.children[0].style.right = "63%"
        noStunBtn.children[0].style.backgroundColor = "white"

        clearInterval(nsr)
        for (let i = 0; i < game.getTank().components_0.array.length; i++)
            try {

                for (let i = 0; i < game.getTank().components_0.array.length; i++)
                    try {

                        game.getTank().components_0.array[i].params_m76zm3$_0.tiltStabilityScale = 3
                        game.getTank().components_0.array[i].params_m76zm3$_0.tiltStabilityMaxAngle = 6.2831854820251465

                    } catch (error) {}

            } catch (error) {}
    }

})

declusterBtn.addEventListener("click", function() {
    mdc += 1

    if (mdc % 2 == 1) {
        declusterBtn.style.backgroundColor = "white"
        declusterBtn.children[0].style.right = "10%"
        declusterBtn.children[0].style.backgroundColor = "#404040"

        document.addEventListener('keydown', (e)=>{
            if (e.keyCode == 73 && commons.getChatState() == null) {
                clearInterval(window.dcm)
                decl()
            }
        }
        )

    }

    if (mdc % 2 == 0) {
        declusterBtn.style.backgroundColor = "#8080803b"
        declusterBtn.children[0].style.right = "63%"
        declusterBtn.children[0].style.backgroundColor = "white"

    }

})

sep = 0

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 36 && commons.getChatState() == null) {
        sep++
        if (sep % 2 == 1) {
            declusterBtn.style.backgroundColor = "white"
            declusterBtn.children[0].style.right = "10%"
            declusterBtn.children[0].style.backgroundColor = "#404040"

            window.dcm = setInterval(decl, 10000)
        }
        if (sep % 2 == 0) {
            declusterBtn.style.backgroundColor = "#8080803b"
            declusterBtn.children[0].style.right = "63%"
            declusterBtn.children[0].style.backgroundColor = "white"
            clearInterval(window.dcm)
        }
    }
}
)

playerMinesBtn.addEventListener("click", function() {
    pmc += 1

    if (pmc % 2 == 1) {
        playerMinesBtn.style.backgroundColor = "white"
        playerMinesBtn.children[0].style.right = "10%"
        playerMinesBtn.children[0].style.backgroundColor = "#404040"

        document.addEventListener("keydown", window.rmm = function(e) {

            if (e.key == "h" && commons.getChatState() == null) {

                removeMyMines()
            }

        }
        )

    }

    if (pmc % 2 == 0) {
        playerMinesBtn.style.backgroundColor = "#8080803b"
        playerMinesBtn.children[0].style.right = "63%"
        playerMinesBtn.children[0].style.backgroundColor = "white"

        document.removeEventListener("keydown", window.rmm)

    }

})

aimbotBtn.addEventListener("click", function() {
    amc += 1

    if (amc % 2 == 1) {
        aimbotBtn.style.backgroundColor = "white"
        aimbotBtn.children[0].style.right = "10%"
        aimbotBtn.children[0].style.backgroundColor = "#404040"
        aimb = setInterval(function() {
            if (game.getStriker().targetingSystem_0 && game.getStriker().targetingSystem_0.targetingSystem_vutpoz$_0) {
                let targetingSystem_0 = game.getStriker().targetingSystem_0.targetingSystem_vutpoz$_0;

                if (targetingSystem_0.directionCalculator_0 && targetingSystem_0.directionCalculator_0.targetingSectorsCalculator_0) {
                    let targetingSectorsCalculator_0 = targetingSystem_0.directionCalculator_0.targetingSectorsCalculator_0;

                    targetingSectorsCalculator_0.maxElevationAngle_0 = 100000;
                    targetingSectorsCalculator_0.minElevationAngle_0 = -100000;
                }
            }
        }, 1500)

    }

    if (amc % 2 == 0) {
        aimbotBtn.style.backgroundColor = "#8080803b"
        aimbotBtn.children[0].style.right = "63%"
        aimbotBtn.children[0].style.backgroundColor = "white"

        try {
            clearInterval(aimb)
            game.getStriker().proto.lockTarget_gcez93$ = function(t, e, n) {
                return void 0 === e && (e = null),
                n ? n(t, e) : this.lockTarget_gcez93$$default(t, e)
            }
        } catch (error) {}

    }

})

ohkBtn.addEventListener("click", function() {
    ohkc += 1

    if (ohkc % 2 == 1) {
        ohkBtn.style.backgroundColor = "white"
        ohkBtn.children[0].style.right = "10%"
        ohkBtn.children[0].style.backgroundColor = "#404040"

    }

    if (ohkc % 2 == 0) {
        ohkBtn.style.backgroundColor = "#8080803b"
        ohkBtn.children[0].style.right = "63%"
        ohkBtn.children[0].style.backgroundColor = "white"

    }

})

tprBtn.addEventListener("click", function() {
    tprc += 1

    if (tprc % 2 == 1) {
        tprBtn.style.backgroundColor = "white"
        tprBtn.children[0].style.right = "10%"
        tprBtn.children[0].style.backgroundColor = "#404040"
        window.ohkr = setInterval(hacks.oneHitKill, 1)

    }

    if (tprc % 2 == 0) {
        tprBtn.style.backgroundColor = "#8080803b"
        tprBtn.children[0].style.right = "63%"
        tprBtn.children[0].style.backgroundColor = "white"
        clearInterval(window.ohkr)
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 145 && commons.getChatState() == null) {
        tprc += 1

        if (tprc % 2 == 1) {
            tprBtn.style.backgroundColor = "white"
            tprBtn.children[0].style.right = "10%"
            tprBtn.children[0].style.backgroundColor = "#404040"
            window.ohkr = setInterval(hacks.oneHitKill, 1)

        }

        if (tprc % 2 == 0) {
            tprBtn.style.backgroundColor = "#8080803b"
            tprBtn.children[0].style.right = "63%"
            tprBtn.children[0].style.backgroundColor = "white"
            clearInterval(window.ohkr)
        }

    }
}
)

document.addEventListener('keydown', (e)=>{
    if (e.keyCode === 82 && commons.getChatState() == null) {

        if (isTarget) {
            tapm()
        }
        if (isTarget == false) {
            apm()

        }

    }
}
)

pigg = 0

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 97 && commons.getChatState() == null) {
        pigg++

        if (pigg % 2 == 1) {
            ohkBtn.style.backgroundColor = "white"
            ohkBtn.children[0].style.right = "10%"
            ohkBtn.children[0].style.backgroundColor = "#404040"
            window.pig = setInterval(hacks.miner, slider6.value)

        }

        if (pigg % 2 == 0) {
            ohkBtn.style.backgroundColor = "#8080803b"
            ohkBtn.children[0].style.right = "63%"
            ohkBtn.children[0].style.backgroundColor = "white"
            clearInterval(window.pig)
        }

    }
}
)

ohkBtn.addEventListener("click", (e)=>{
    pigg++

    if (pigg % 2 == 1) {
        ohkBtn.style.backgroundColor = "white"
        ohkBtn.children[0].style.right = "10%"
        ohkBtn.children[0].style.backgroundColor = "#404040"
        window.pig = setInterval(hacks.miner, slider6.value)

    }

    if (pigg % 2 == 0) {
        ohkBtn.style.backgroundColor = "#8080803b"
        ohkBtn.children[0].style.right = "63%"
        ohkBtn.children[0].style.backgroundColor = "white"
        clearInterval(window.pig)
    }

}
)

/*configTitle = document.createElement("span")
configTitle.innerText = "CONFIG"
Object.assign(configTitle.style, title_style)

tps = document.createElement("span")

plusButton = document.createElement("button")
minusButton = document.createElement("button")

tps.innerText = TPspeed

tps.style.position = "absolute"
tps.style.color = "white"
tps.style.bottom = "76%"
tps.style.right = "46%"
tps.style.fontSize = "18px"


pmb_style = {
    width: '35px',
    height: '25px',
    position: 'absolute',
    borderRadius: '100px',

}

Object.assign(plusButton.style, pmb_style)
Object.assign(minusButton.style, pmb_style)

minusButton.style.backgroundColor = "red"
plusButton.style.backgroundColor = "green"

minusButton.style.bottom = "76%"
plusButton.style.bottom = "76%"


minusButton.style.left = "14%"
plusButton.style.right = "14%"

//hackWindow.appendChild(plusButton)
//hackWindow.appendChild(minusButton)

pSign = document.createElement("span")
mSign = document.createElement("span")

pSign.innerText = "+"
mSign.innerText = "-"

plusButton.appendChild(pSign)
minusButton.appendChild(mSign)

plusButton.addEventListener("click", function() {

    tps.innerText = parseInt(tps.innerText) + 20
    TPspeed+=20

})
minusButton.addEventListener("click", function() {

    tps.innerText = parseInt(tps.innerText) - 20
    TPspeed-=20

})
*/
function page4func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(title)
    hackWindow.appendChild(creds)
    page4.appendChild(whiteIcon)

    /*hackWindow.appendChild(plusButton)
    hackWindow.appendChild(minusButton)
    hackWindow.appendChild(tps)

    hackWindow.appendChild(clickPlusButton)
    hackWindow.appendChild(clickMinusButton)
    hackWindow.appendChild(cps)*/
    hackWindow.appendChild(noLaser)
    hackWindow.appendChild(noLaserBtn)
    hackWindow.appendChild(DeathSpawn)
    hackWindow.appendChild(DeathSpawnBtn)
    hackWindow.appendChild(accText)
    hackWindow.appendChild(tpText)
    hackWindow.appendChild(clickText)
    hackWindow.appendChild(slider2)
    hackWindow.appendChild(slider3)
    hackWindow.appendChild(slider4)

    hackWindow.appendChild(fastClickerBtn)
    hackWindow.appendChild(fastClicker)

    hackWindow.appendChild(targetModeBtn)
    hackWindow.appendChild(targetMode)
    hackWindow.appendChild(slider)
    hackWindow.appendChild(speedText)

    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)
    hackWindow.appendChild(page5)

}

/*clickSpeed = 30
cps = document.createElement("span")
cps.innerText = clickSpeed

clickPlusButton = document.createElement("button")
clickMinusButton = document.createElement("button")

cps.innerText = clickSpeed

cps.style.position = "absolute"
cps.style.color = "white"
cps.style.bottom = "62%"
cps.style.right = "46%"
cps.style.fontSize = "18px"



Object.assign(clickPlusButton.style, pmb_style)
Object.assign(clickMinusButton.style, pmb_style)

clickMinusButton.style.backgroundColor = "red"
clickPlusButton.style.backgroundColor = "green"

clickMinusButton.style.bottom = "62%"
clickPlusButton.style.bottom = "62%"


clickMinusButton.style.left = "14%"
clickPlusButton.style.right = "14%"

//hackWindow.appendChild(plusButton)
//hackWindow.appendChild(minusButton)

cpSign = document.createElement("span")
cmSign = document.createElement("span")

cpSign.innerText = "+"
cmSign.innerText = "-"

clickPlusButton.appendChild(cpSign)
clickMinusButton.appendChild(cmSign)

clickPlusButton.addEventListener("click", function() {

    cps.innerText = parseInt(cps.innerText) + 1
    clickSpeed+=1

})
clickMinusButton.addEventListener("click", function() {

    cps.innerText = parseInt(cps.innerText) - 1
    clickSpeed-=1

})

*/

fastClickerBtn = document.createElement("div")
targetModeBtn = document.createElement("div")

fastClicker = document.createElement("span")
targetMode = document.createElement("span")

Object.assign(fastClickerBtn.style, checkboxUnticked_style)
Object.assign(targetModeBtn.style, checkboxUnticked_style)

//fastClickerBtn.style.bottom = "35.5%"
fastClickerBtn.style.marginLeft = "70%"
targetModeBtn.style.marginLeft = "70%"
//targetModeBtn.style.bottom = "46.7%"

//targetMode.style.bottom = "46%"
fastClicker.style.fontSize = "15px"
fastClicker.style.padding = "65.8% 0px 0px 25px"
fastClicker.style.position = "absolute"

//fastClicker.style.bottom = "35%"
targetMode.style.fontSize = "15px"
targetMode.style.padding = "65.8% 0px 0px 25px"
targetMode.style.position = "absolute"

fastClicker.innerText = "Super Clicker [F4]:"
targetMode.innerText = "Target Mode:"

innerCircle22 = document.createElement("div")
innerCircle23 = document.createElement("div")

Object.assign(innerCircle22.style, innerCircle_style)
Object.assign(innerCircle23.style, innerCircle_style)

fastClickerBtn.appendChild(innerCircle22)
targetModeBtn.appendChild(innerCircle23)

//
slider = document.createElement("input")

slider.type = "range"

slider.step = 100

slider.min = 0
slider.max = 10000
slider.style.position = "absolute"
slider.style.bottom = "23%"
slider.style.marginLeft = "43%"

speedText = document.createElement("span")
setInterval(function() {
    try {
        speedText.innerText = `Speed [${slider.value}]:`
    } catch (error) {}
}, 100)

Object.assign(speedText.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '23%'
})

twc = 0
swc = 0

targetModeBtn.addEventListener("click", function() {
    twc += 1

    if (twc % 2 == 1) {
        targetModeBtn.style.backgroundColor = "white"
        targetModeBtn.children[0].style.right = "10%"
        targetModeBtn.children[0].style.backgroundColor = "#404040"
        isTarget = true
    }

    if (twc % 2 == 0) {
        targetModeBtn.style.backgroundColor = "#8080803b"
        targetModeBtn.children[0].style.right = "63%"
        targetModeBtn.children[0].style.backgroundColor = "white"
        isTarget = false
    }

})

fastClickerBtn.addEventListener('click', (e)=>{
    swc++
    if (swc % 2 == 1) {
        fastClickerBtn.style.backgroundColor = "white"
        fastClickerBtn.children[0].style.right = "10%"
        fastClickerBtn.children[0].style.backgroundColor = "#404040"
        Superclicker()

    }

    if (swc % 2 == 0) {
        fastClickerBtn.style.backgroundColor = "#8080803b"
        fastClickerBtn.children[0].style.right = "63%"
        fastClickerBtn.children[0].style.backgroundColor = "white"

        cancelAnimationFrame(ck)

    }

}
)

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 115 && commons.getChatState() == null) {
        swc++
        if (swc % 2 == 1) {
            fastClickerBtn.style.backgroundColor = "white"
            fastClickerBtn.children[0].style.right = "10%"
            fastClickerBtn.children[0].style.backgroundColor = "#404040"
            Superclicker()

        }

        if (swc % 2 == 0) {
            fastClickerBtn.style.backgroundColor = "#8080803b"
            fastClickerBtn.children[0].style.right = "63%"
            fastClickerBtn.children[0].style.backgroundColor = "white"

            cancelAnimationFrame(ck)

        }

    }
}
)


    Superclicker = function() {
        try {
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply()
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply()
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply()
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
            game.getTank().components_0.array[28].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()

            ck = requestAnimationFrame(Superclicker)

        } catch (error) {}

}

//

DeathSpawnBtn = document.createElement("div")
noLaserBtn = document.createElement("div")

DeathSpawn = document.createElement("span")
noLaser = document.createElement("span")

Object.assign(DeathSpawnBtn.style, checkboxUnticked_style)
Object.assign(noLaserBtn.style, checkboxUnticked_style)

targetModeBtn.style.bottom = "80%"
targetMode.style.bottom = "80%"
fastClickerBtn.style.bottom = "71.9%"
fastClicker.style.bottom = "71.9%"

DeathSpawnBtn.style.marginLeft = "70%"
noLaserBtn.style.marginLeft = "70%"

DeathSpawnBtn.style.bottom = "64%"
noLaserBtn.style.bottom = "56%"

DeathSpawn.innerText = "Recoil:"
noLaser.innerText = "Supplies [Num5]:"

DeathSpawn.style.bottom = "64%"
noLaser.style.bottom = "56%"

Object.assign(DeathSpawn.style, {
    fontSize: '15px',
    padding: '65.8% 0px 0px 25px',
    position: 'absolute',
})

Object.assign(noLaser.style, {
    fontSize: '15px',
    padding: '65.8% 0px 0px 25px',
    position: 'absolute',
})

innerCircle24 = document.createElement("div")
innerCircle25 = document.createElement("div")

Object.assign(innerCircle24.style, innerCircle_style)
Object.assign(innerCircle25.style, innerCircle_style)

DeathSpawnBtn.appendChild(innerCircle24)
noLaserBtn.appendChild(innerCircle25)

slider2 = document.createElement("input")

slider2.type = "range"

slider2.step = 1000

slider2.min = 1000
slider2.max = 50000
slider2.style.position = "absolute"
slider2.style.marginLeft = "43%"
slider2.style.bottom = "48.3%"

slider4 = document.createElement("input")

slider4.type = "range"

slider4.step = 5

slider4.min = 0
slider4.max = 200
slider4.style.position = "absolute"
slider4.style.marginLeft = "43%"
slider4.style.bottom = "30%"

var rVal = slider4.value = 10
var sVal = slider.value = 5000
var aVal = slider2.value = 20000

//text

accText = document.createElement("span")
setInterval(function() {
    try {
        accText.innerText = `Accel [${slider2.value}]:`
    } catch (error) {}
}, 100)

Object.assign(accText.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '48.3%'
})

tpText = document.createElement("span")
setInterval(function() {
    try {
        tpText.innerText = `Recoil [${slider3.value}]:`
    } catch (error) {}
}, 100)

Object.assign(tpText.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '39%'
})

clickText = document.createElement("span")
setInterval(function() {
    try {
        clickText.innerText = `Clicker [${slider4.value}]:`
    } catch (error) {}
}, 100)

minerText = document.createElement("span")
setInterval(function() {
    try {
        minerText.innerText = `Mines [${slider6.value}] Ms:`
    } catch (error) {}
}, 100)

Object.assign(clickText.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '30%'
})

Object.assign(minerText.style, {
    fontSize: '15px',
    position: 'absolute',
    padding: '64.8% 0px 0px 26px',
    bottom: '23.1%'
})

slider.style.bottom = "21%"
speedText.style.bottom = "21.3%"

dsc = 0
nlc = 0
DeathSpawnBtn.addEventListener("click", function() {
    dsc += 1

    if (dsc % 2 == 1) {
        DeathSpawnBtn.style.backgroundColor = "white"
        DeathSpawnBtn.children[0].style.right = "10%"
        DeathSpawnBtn.children[0].style.backgroundColor = "#404040"
        dsr = setInterval(function() {
            try {

                hacks.recoil()

            } catch (error) {}

        }, 1000)
    }

    if (dsc % 2 == 0) {
        DeathSpawnBtn.style.backgroundColor = "#8080803b"
        DeathSpawnBtn.children[0].style.right = "63%"
        DeathSpawnBtn.children[0].style.backgroundColor = "white"
        try {
            clearInterval(dsr)
        } catch (error) {}
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 101 && commons.getChatState() == null) {
        nlc++

        if (nlc % 2 == 1) {
            noLaserBtn.style.backgroundColor = "white"
            noLaserBtn.children[0].style.right = "10%"
            noLaserBtn.children[0].style.backgroundColor = "#404040"
            nlr = setInterval(hacks.noLaser, 150)
        }

        if (nlc % 2 == 0) {
            noLaserBtn.style.backgroundColor = "#8080803b"
            noLaserBtn.children[0].style.right = "63%"
            noLaserBtn.children[0].style.backgroundColor = "white"
            try {
                clearInterval(nlr)

            } catch (error) {}
        }

    }
}
)

noLaserBtn.addEventListener("click", (e)=>{
    nlc++

    if (nlc % 2 == 1) {
        noLaserBtn.style.backgroundColor = "white"
        noLaserBtn.children[0].style.right = "10%"
        noLaserBtn.children[0].style.backgroundColor = "#404040"
        nlr = setInterval(hacks.noLaser, 150)
    }

    if (nlc % 2 == 0) {
        noLaserBtn.style.backgroundColor = "#8080803b"
        noLaserBtn.children[0].style.right = "63%"
        noLaserBtn.children[0].style.backgroundColor = "white"
        try {
            clearInterval(nlr)

        } catch (error) {}
    }

}
)

s1p = 0
s2p = 0
s3p = 0
s4p = 0

State2.addEventListener("click", function() {
    s2p += 1
    if (s2p % 2 == 1) {
        State2.style.backgroundColor = "white"
        State2.children[0].style.right = "10%"
        State2.children[0].style.backgroundColor = "#404040"
        join.joinTeamA()
        window.res = setInterval(join.ref, 500)

    }

    if (s2p % 2 == 0) {

        cancelAnimationFrame(window.A)
        State2.style.backgroundColor = "#8080803b"
        State2.children[0].style.right = "63%"
        State2.children[0].style.backgroundColor = "white"
    }

})

State3.addEventListener("click", function() {
    s3p += 1
    if (s3p % 2 == 1) {
        State3.style.backgroundColor = "white"
        State3.children[0].style.right = "10%"
        State3.children[0].style.backgroundColor = "#404040"
        join.joinTeamB()
        window.rej = setInterval(join.ref, 500)

    }

    if (s3p % 2 == 0) {

        cancelAnimationFrame(window.B)
        State3.style.backgroundColor = "#8080803b"
        State3.children[0].style.right = "63%"
        State3.children[0].style.backgroundColor = "white"
    }

})

State4.addEventListener("click", function() {

    s4p += 1
    if (s4p % 2 == 1) {
        State4.style.backgroundColor = "white"
        State4.children[0].style.right = "10%"
        State4.children[0].style.backgroundColor = "#404040"
        join.joinDM()
        window.ret = setInterval(join.ref, 500)

    }

    if (s4p % 2 == 0) {

        cancelAnimationFrame(window.DM)
        State4.style.backgroundColor = "#8080803b"
        State4.children[0].style.right = "63%"
        State4.children[0].style.backgroundColor = "white"
    }
})

s9p = 0

document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 121 && commons.getChatState() == null) {
        s9p++
        if (s9p % 2 == 1) {
            aimHack()
            State1.style.backgroundColor = "white"
            State1.children[0].style.right = "10%"
            State1.children[0].style.backgroundColor = "#404040"

        }
        if (s9p % 2 == 0) {
            State1.style.backgroundColor = "#8080803b"
            State1.children[0].style.right = "63%"
            State1.children[0].style.backgroundColor = "white"
            for (let i = 0; i < game.getTank().components_0.array.length; i++) {
                game.getTank().components_0.array[i].pulled_0 = false
            }

        }

    }
}
)

sliderStyle = `
.slider {
    user-select: none;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    font-family: Open-Sans;
    font-size: 1em;
    -webkit-appearance: none;
    border-radius: 10px;
    height: 17px;
    outline: 1px solid white;
    background:rgb(12 12 12 / 28%);
    width: 70px;
    left: 15%;

}

.slider::-webkit-slider-thumb{
cursor:pointer;
appearance:none;
height:17px;
width:17px;
outline:none;
border-radius:50%;
position:revert;
background: black;
border:1px solid white;
}


`

addStyle = function(styleString) {
    var style = document.createElement('style')

    style.innerHTML = styleString

    document.head.appendChild(style)

    return style

}
addStyle(sliderStyle)
slider.className = 'slider'
slider2.className = 'slider'
slider3.className = 'slider'
slider4.className = 'slider'
slider5.className = 'slider'
slider6.className = 'slider'


console.clear();
console.log('DieHard By Akz || Creds: Broo123');

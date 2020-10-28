let drawIsOpen = false;
let menuIsOpen = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    
    initializeUI();
    
    makeMenuUI();
    makeDrawToolsUI();
    
    menuContainer.hide();
    drawSizeContainer.hide();
    
    repositionUI();
}

function draw() {
    
    cSize = drawSize.value();
    stroke(pickBrushColor.color());
    strokeWeight(cSize);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    buttonMenu.mousePressed(toggleMenu);
    buttonDraw.mousePressed(toggleDrawTools);
    
    saveIcon.mousePressed(saveAsFile);
    newIcon.mousePressed(restartCanvas);
}

function initializeUI() {
    
    //UI container
    mainUI = createDiv();
    mainUI.class("ui-parent");
    mainUI.size(125,75);
    
    //create Draw button with Div
    buttonDraw = createDiv();
    buttonDraw.class("draw-icon");
    buttonDraw.size(40,40);
    
    //create icon image for draw
    drawIcon = createImg('assets/draw-icon.png', 'chalk icon')
    drawIcon.size(40,40);
    
    //place icon image inside Div
    buttonDraw.child(drawIcon);
    
    //create Menu button with Div
    buttonMenu = createDiv();
    buttonMenu.class("menu-icon");
    buttonMenu.size(40,40);
    
    //create icon image for menu
    menuIcon = createImg('assets/home.png', 'menu icon with home image')
    menuIcon.size(40,40);
    
    //place icon image inside Div
    buttonMenu.child(menuIcon);
    
}

function makeDrawToolsUI() {
    
    //container
    drawSizeContainer = createDiv('Brush size and color');
    drawSizeContainer.parent(mainUI);
    drawSizeContainer.class("draw-size-box");
    drawSizeContainer.size(260,50);
    drawSizeContainer.position(140,10);
    
    //slider to control brush size
    drawSize = createSlider(1,10,2);
    drawSize.size(175);
    drawSize.position(15, 30)
    
    //brush color
    pickBrushColor = createColorPicker('#ffffff');
    pickBrushColor.position(210, 17);
    drawSizeContainer.child(pickBrushColor);
    drawSizeContainer.child(drawSize);
}

function makeMenuUI() {
    //container
    menuContainer = createDiv();
    menuContainer.parent(mainUI);
    menuContainer.class("menu-box");
    menuContainer.size(90, 100);
    menuContainer.position(140, -15);
    //save button
    saveIcon = createImg('assets/save-icon.png', 'arrow pointing down')
    saveIcon.class("save-icon-img");
    saveIcon.size(25, 25);
    saveIcon.position(10, 55);
    //save text
    saveText = createP('Save');
    saveText.position(50, 50);
    //restart button
    newIcon = createImg('assets/restart.png', 'circular arrow')
    newIcon.class("new-icon-img");
    newIcon.size(25, 25);
    newIcon.position(10, 15);
    //restart text
    newText = createP('New')
    newText.position(50, 10);
    
    menuContainer.child(saveIcon);
    menuContainer.child(saveText);
    menuContainer.child(newIcon);
    menuContainer.child(newText);
    
}

function saveAsFile() {
    saveCanvas('myCreation', 'jpg')
}

function restartCanvas() {
    clear();
    background(50);
}

function toggleMenu() {
    
    if (menuIsOpen === false) {
        menuContainer.show();
        
        if (drawIsOpen === true) {
            drawSizeContainer.hide();
            drawIsOpen = !drawIsOpen;
        }
        
    } else {
        menuContainer.hide();
    }
    
    menuIsOpen = !menuIsOpen;
}

function toggleDrawTools() {
    
    if (drawIsOpen === false) {
        drawSizeContainer.show();
        
        if (menuIsOpen === true) {
            menuContainer.hide();
            menuIsOpen = !menuIsOpen;
        }
        
    } else {
        drawSizeContainer.hide();
    }
    
    drawIsOpen = !drawIsOpen;
}

function repositionUI() {
    mainUI.position(25, height-105);
    buttonMenu.position(40, height-90);
    buttonDraw.position(90, height-90);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(50);
    
    repositionUI();
}
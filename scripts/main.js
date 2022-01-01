let init = {
    /*Create objects, arrays and so on to the HTML objects and values*/
    btn: document.getElementById("btn"),
    auto: document.getElementById("auto"),
    clipboard : document.getElementById("clipboard"),
    hex: document.getElementById("hex"),
    colorInput: document.getElementById("color"),
    incSpeed: document.getElementById("autoIncrease"),
    decSpeed: document.getElementById("autoDecrease"),
    showSpeed: document.getElementById("showSpeed"),
    num: ["","",""],
    numHex: ["","","","","",""],
    numInd: 0,
    indHex: null,

    /*Storage of Booleans and Number to control speed of Interval*/
    state: {
        autoStatus: false,
        autoHex: false,
        intervalSpeed: 2000,
    },

    /*Start some functions that have to be called when the code runs*/
    startMethods(){
        this.auto.addEventListener("click", init.autoGenerate);
        this.incSpeed.addEventListener("click", init.increaseSpeed);
        this.decSpeed.addEventListener("click", init.decreaseSpeed);
        this.clipboard.addEventListener("click", init.copyClipboard);
        this.hex.addEventListener("click", init.switchHex);
        this.colorInput.addEventListener("keydown", (e) => {
            switch(e) {
                case e.key == "Enter"&&init.state.autoHex===false:
                    document.body.style.backgroundColor = "rgb("+init.colorInput.value+")";
                    break;

                case e.key == "Enter"&&init.state.autoHex:
                    document.body.style.backgroundColor = "#"+init.colorInput.value;
                    break;

                default:
                    break;
            }
        });
    },

    /*Logic that generate RGB colors randomly*/
    newGenerate(){
        this.num[0] = Math.floor(Math.random() * 256);
        this.num[1] = Math.floor(Math.random() * 256);
        this.num[2] = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = "rgb("+this.num[0]+","+this.num[1]+","+this.num[2]+")";
        switch (init.state.autoHex) {
            case true:
                init.convertHex()
                break;
            
            case false:
                this.colorInput.value = this.num[0] + ", " + this.num[1] + ", " + this.num[2];
                break;

            default:
                break;
        }
    },

    /*Here stop generating automaticaly new colors*/
    stopGenerate(){
        this.auto.style.display = "flex";
        this.state.autoStatus = false;
        this.decSpeed.style.display = "none";
        this.incSpeed.style.display = "none";
    },

    /*Here start generating automaticaly new colors*/
    autoGenerate(){
        init.auto.innerHTML = "Stop generation of colors";
        init.state.autoStatus = !init.state.autoStatus;

        if (init.state.autoStatus){
            newInterval = setInterval(() => {
                init.newGenerate() 
            }, init.state.intervalSpeed);
            init.decSpeed.style.display = "flex";
            init.incSpeed.style.display = "flex";
        }
        else {
            clearInterval(newInterval);
            init.auto.innerHTML = "Resume generation of colors";
            init.decSpeed.style.display = "none";
            init.incSpeed.style.display = "none";
        }
    },

    /*Here you can increase the speed which the colors are automatically generated*/
    increaseSpeed(){
        init.state.intervalSpeed = init.state.intervalSpeed - 100;
        clearInterval(newInterval);
        newInterval = setInterval(() => {
            init.newGenerate() 
        }, init.state.intervalSpeed);
        init.showSpeed.style.display = "flex";
        init.showSpeed.innerHTML = "Your actual speed is " + init.state.intervalSpeed + " ms";
        setTimeout(() => {
            init.showSpeed.style.display = "none";
        }, 3000);
    },

    /*Here you can decrease the speed which the colors are automatically generated*/
    decreaseSpeed(){
        init.state.intervalSpeed = init.state.intervalSpeed + 100;
        clearInterval(newInterval);
        newInterval = setInterval(() => {
            init.newGenerate() 
        }, init.state.intervalSpeed);
        init.showSpeed.style.display = "flex";
        init.showSpeed.innerHTML = "Your actual speed is " + init.state.intervalSpeed + " ms";
        setTimeout(() => {
            init.showSpeed.style.display = "none";
        }, 3000);
    },

    /*Here is the logic to convert RGB colors into HEX colors*/
    convertHex(){
        init.numHex[0] = (Math.floor(init.num[0]/16)).toString();
        init.numHex[1] = (((init.num[0]/16) - (init.numHex[0]))*16).toString();
        init.numHex[2] = (Math.floor(init.num[1]/16)).toString();
        init.numHex[3] = (((init.num[1]/16) - (init.numHex[2]))*16).toString();
        init.numHex[4] = (Math.floor(init.num[2]/16)).toString();
        init.numHex[5] = (((init.num[2]/16) - (init.numHex[4]))*16).toString();    
   
        switch (init.numHex[0]) {
            case "10":
                init.numHex[0] = "A";
                break;
            case "11":
                init.numHex[0] = "B";
                break;
            case "12":
                init.numHex[0] = "C";
                break;
            case "13":
                init.numHex[0] = "D";
                break;
            case "14":
                init.numHex[0] = "E";
                break;
            case "15":
                init.numHex[0] = "F";
                break;
            default:
                break;
        }

       switch (init.numHex[1]) {
            case "10":
                init.numHex[1] = "A";
                break;
            case "11":
                init.numHex[1] = "B";
                break;
            case "12":
                init.numHex[1] = "C";
                break;
            case "13":
                init.numHex[1] = "D";
                break;
            case "14":
                init.numHex[1] = "E";
                break;
            case "15":
                init.numHex[1] = "F";
                break;
            default:
                break;
            }

        switch (init.numHex[2]) {
            case "10":
                init.numHex[2] = "A";
                break;
            case "11":
                init.numHex[2] = "B";
                break;
            case "12":
                init.numHex[2] = "C";
                break;
            case "13":
                init.numHex[2] = "D";
                break;
            case "14":
                init.numHex[2] = "E";
                break;
            case "15":
                init.numHex[2] = "F";
                break;
            default:
                break;
            }

            switch (init.numHex[3]) {
                case "10":
                    init.numHex[3] = "A";
                    break;
                case "11":
                    init.numHex[3] = "B";
                    break;
                case "12":
                    init.numHex[3] = "C";
                    break;
                case "13":
                    init.numHex[3] = "D";
                    break;
                case "14":
                    init.numHex[3] = "E";
                    break;
                case "15":
                    init.numHex[3] = "F";
                    break;
                default:
                    break;
                }

            switch (init.numHex[4]) {
                case "10":
                    init.numHex[4] = "A";
                    break;
                case "11":
                    init.numHex[4] = "B";
                    break;
                case "12":
                    init.numHex[4] = "C";
                    break;
                case "13":
                    init.numHex[4] = "D";
                    break;
                case "14":
                    init.numHex[4] = "E";
                    break;
                case "15":
                    init.numHex[4] = "F";
                    break;
                default:
                    break;
                }

            switch (init.numHex[5]) {
                case "10":
                    init.numHex[5] = "A";
                    break;
                case "11":
                    init.numHex[5] = "B";
                    break;
                case "12":
                    init.numHex[5] = "C";
                    break;
                case "13":
                    init.numHex[5] = "D";
                    break;
                case "14":
                    init.numHex[5] = "E";
                    break;
                case "15":
                    init.numHex[5] = "F";
                    break;
                default:
                    break;
                }

        init.colorInput.value = init.numHex[0]+init.numHex[1]+init.numHex[2]+init.numHex[3]+init.numHex[4]+init.numHex[5];
        },

    /*That function works to give the auto hex button an off/on switch and to fire the Hex converter under some requirements*/
    switchHex(){
        init.state.autoHex = !init.state.autoHex;
        if (init.state.autoHex) {
            init.convertHex();
        }
        else{
            init.colorInput.value = init.num[0] + ", " + init.num[1] + ", " + init.num[2];
        }
    },

    /*Here is the function to make clipboard button works properly*/
    copyClipboard(){
        init.colorInput.select();
        init.colorInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(init.colorInput.value);
    },
}
init.startMethods();
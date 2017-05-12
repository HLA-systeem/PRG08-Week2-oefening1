class Rock {
    public static speed:number;
    private div:HTMLElement;
    private x: number;
    private y: number;
    private width:number = 62;

    public getWidth():number{
        return this.width;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.x;
    }
                        
    constructor(){
        let container:HTMLElement = document.getElementById("container"); // het DOM element waar de div in geplaatst wordt:
        this.div = document.createElement("rock");
        container.appendChild(this.div);
        this.div.setAttribute("id", "rock");

        Rock.speed = 0;
        this.x = 490;
        this.y = 210;
        this.move();
    }

    public move():void {

        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt
        if(Rock.speed > 0){
            this.x += Rock.speed;
        }
        
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";     
    }
}
# PRG08-Week2-oefening1
# https://hla-systeem.github.io/PRG08-Week2-oefening1/index

## Singleton

- Ga verder met de code van 'Close Call' uit week 1
- Maak de Game class een singleton.
- Roep de game instance aan vanuit car en wheel.
- Maak een Util class met een static method `checkCollision`. Deze method krijgt twee instances binnen als arguments, en kan checken of die elkaar raken. De instances moeten een x,y, width en height eigenschap hebben.
- Vraag: Hoe zorg je er voor dat je alleen arguments kan doorgeven die daadwerkelijk een x,y, width en height eigenschap hebben?
- In de game loop roep je de collision method van Util aan om te zien of de car en de rock elkaar raken.

## Voorbeeldcode

### Singleton

```
class SingletonExample {
    private static instance: SingletonExample;

    private constructor() { }

    public static getInstance() {
        if (! SingletonExample.instance) {
            SingletonExample.instance = new SingletonExample();
        }
        return SingletonExample.instance;
    }
}
```
### Game instance ophalen via Singleton
```
let g : Game = Game.getInstance();
```

### Collision 

Let op dat de instances een x, y, width en height moeten hebben:

```
let instance1 = new Car();
let instance2 = new Rock();

if (instance1.x < instance2.x + instance2.width &&
   instance1.x + instance1.width > instance2.x &&
   instance1.y < instance2.y + instance2.height &&
   instance1.height + instance1.y > instance2.y) {
    // collision detected!
}
```

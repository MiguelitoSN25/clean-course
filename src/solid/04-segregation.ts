interface Bird{
 eat():void;
}

interface FlyingBird{
fly():number;
}

interface SwimmingBird{
    swim():void
}
interface RunningBird{
    run():void
}

class Tucan implements Bird, FlyingBird{
    public fly(){return 200}
    public eat(){}


}

class Humingbird implements Bird,FlyingBird{
    public fly(){return 200}
    public eat(){}
}

class Ostrich implements Bird,RunningBird{
    public eat(){}
    public run(){}
    
}

class Penguin implements Bird,SwimmingBird{
    public eat(){}
    public swim(){}
}
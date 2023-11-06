class room {
    constructor(name, length, width, capacity = 15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;

    }

    getArea() {
        return this.length * this.width;
        
    }

    getPerimeter() {
        return this.length * 2 + this.width * 2;  

    }

}

const room1 = new room("Sun", 30, 20);
const room2 = new room("Green", 15, 20, 18);
room2.available = false;

console.log(`room1 name: ${room1.name} length: ${room1.length} width: ${room1.width} area: ${room1.getArea()} perimeter: ${room1.getPerimeter()}`);
console.log(room1.available);
console.log(`room2 name: ${room2.name} length: ${room2.length} width: ${room2.width} area: ${room2.getArea()} perimeter: ${room2.getPerimeter()} capacity: ${room2.capacity}`);
console.log(room2.available);




class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('buzinando')
  }

  turnOn(): void {
    console.log('liga carro')
  }

  turnOff(): void {
    console.log('desliga carro')
  }

  speedUp(): void {
    console.log('acelera')
  }

  speedDown(): void {
    console.log('reduz velocidade')
  }

  stop(): void {
    console.log('parar carro')
  }

  turn(direction: string): void {
    console.log(`virar para a ${direction}`)
  }
} 

export default Car;
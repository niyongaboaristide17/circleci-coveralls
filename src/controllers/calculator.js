export class Calculator{

    static add(a, b){
        return a + b
    }

    static substract(a, b){
        return a - b
    }

    static multiply(a, b){
        return a * b
    }

    static divide(a, b){
        try {
            return a / b
        } catch (error) {
            return 0
        }
    }

}
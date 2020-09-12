class Dispatcher {
    
    postEventHandler;

    constructor() {
        this.eventHandlersByType = {}    
    }

    static dispatch(event) {
        const handler = this.eventHandlersByType[event.type];
        if (handler) {
            handler(event);
            this.postEventHandler(event);
        }
    }

    static addEventHandler(type, handler) {
        if (this.eventHandlersByType[type]) {
            throw new Error(`Já existe um handler para ${type}. Transformar os handlers em um vetor!`);
        } 
        this.eventHandlersByType[type] = handler;
    }

    static initPostEventHandler(handler) {
        this.postEventHandler = handler;
    }

}
export default Dispatcher;
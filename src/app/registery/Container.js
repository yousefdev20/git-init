class Container {

    static _instance = null;
    static services = [];

    static getInstance()
    {
        if (this._instance) {
            return this._instance;
        }
        return this._instance = new Container();
    }
}

module.exports = Container;

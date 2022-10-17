var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Type = /** @class */ (function () {
    function Type(name, type, paws, color) {
        this.name = name;
        this.type = type;
        this.paws = paws;
        this.color = color;
    }
    return Type;
}());
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(name, type, paws, color) {
        return _super.call(this, name, type, paws, color) || this;
    }
    Actions.prototype.photo = function () {
        console.log("Je peux photographier les ".concat(this.name));
    };
    Actions.prototype.miauler = function () {
        if (this.name === 'Chat') {
            console.log("Tous les ".concat(this.name, " peuvent miauler"));
        }
    };
    Actions.prototype.aboyer = function () {
        if (this.name === 'Chien') {
            console.log("Tous les ".concat(this.name, " peuvent aboyer"));
        }
    };
    Actions.prototype.voler = function () {
        if (this.name === 'Oiseau') {
            console.log("Tous les ".concat(this.name, " peuvent voler"));
        }
    };
    Actions.prototype.nager = function () {
        if (this.name === 'Poisson') {
            console.log("Tous les ".concat(this.name, " peuvent nager"));
        }
    };
    Actions.prototype.caresser = function () {
        if (this.paws === 4) {
            console.log("Tous les ".concat(this.name, " peuvent etre caresser"));
        }
    };
    Actions.prototype.nourrir = function () {
        if (this.color === 'noir') {
            console.log("Tous les ".concat(this.name, " peuvent etre nourris"));
        }
    };
    return Actions;
}(Type));
var européen = new Actions("Chat", "Européen", 4, "noir");
var chartreux = new Actions("Chat", "Chartreux", 4);
var terreneuve = new Actions("Chien", "Terre-neuve", 4, "noir");
var moon = new Actions("Chien", "Moon Moon", 4);
var mésange = new Actions("Oiseau", "Mésange", 2);
var merle = new Actions("Oiseau", "Merle", 2, "noir");
var thon = new Actions("Poisson", "Thon", 0);
var requin = new Actions("Poisson", "Requin", 0);
var asticot = new Actions("Insecte", "Asticot", 0);
moon.photo();
console.log('first', moon.photo());

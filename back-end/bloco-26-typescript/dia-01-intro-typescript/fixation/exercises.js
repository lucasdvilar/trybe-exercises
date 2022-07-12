var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["sunday"] = 1] = "sunday";
    WeekDays[WeekDays["monday"] = 2] = "monday";
    WeekDays[WeekDays["tuesday"] = 3] = "tuesday";
    WeekDays[WeekDays["wednesday"] = 4] = "wednesday";
    WeekDays[WeekDays["thursday"] = 5] = "thursday";
    WeekDays[WeekDays["friday"] = 6] = "friday";
    WeekDays[WeekDays["saturday"] = 7] = "saturday";
})(WeekDays || (WeekDays = {}));
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["red"] = "Vermelho";
    RainbowColors["orange"] = "Laranja";
    RainbowColors["yellow"] = "Amarelo";
    RainbowColors["green"] = "Verde";
    RainbowColors["blue"] = "Azul";
    RainbowColors["indigo"] = "Ciano";
    RainbowColors["violet"] = "Violeta";
})(RainbowColors || (RainbowColors = {}));
var Actions;
(function (Actions) {
    Actions[Actions["save"] = 0] = "save";
    Actions[Actions["print"] = 1] = "print";
    Actions[Actions["open"] = 2] = "open";
    Actions[Actions["view"] = 3] = "view";
    Actions[Actions["close"] = 4] = "close";
})(Actions || (Actions = {}));
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints["north"] = "N";
    CardinalPoints["south"] = "S";
    CardinalPoints["east"] = "E";
    CardinalPoints["west"] = "W";
})(CardinalPoints || (CardinalPoints = {}));
console.log(WeekDays.tuesday);
console.log(RainbowColors.blue);
console.log(Actions.save);
console.log(CardinalPoints.north);

class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    Show() {
        let strRes = `(${this.x},${this.y})`;
        return strRes;
    };
    Equals(p) {
        if (p.x == this.x && p.y == this.y ) {
            return true;
        }
        return false;
    }
}


function IfValuesExist (pointsArr,x,y) {
    if (pointsArr == null) {
        return;
    }
    let res = pointsArr.find(i => i.x == x && i.y == y);
    if (res != undefined)
        return true;
    return false; 

    // Arr = [(4, 5),(3, 6),(8, 9)];

    //Example that the function will return true: (4,5);
    //Example that the function will return false: (3,5);
   
}


function IfPointInArray(pointsArr, point) {
    for (var i = 0; i < pointsArr.length; i++) {
        if (pointsArr[i].Equals(point))
            return true;
    }
    return false;

    // Arr = [(4, 5),(3, 6),(8, 9)];

    //Example that the function will return true: (4,5);
    //Example that the function will return false: (2,5);
}


function PointDistance(p1, p2) {
    let disRes = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    return disRes;
}
function RouteLength(pointsArr) {

    var distance = 0;
    for (let i = 0; i < pointsArr.length - 1; i++) {
        distance += PointDistance(pointsArr[i], pointsArr[i + 1]);
    }
    return distance;
}



function ShowPoints() {
    // Example:
    var P1 = { x: 4, y: 5 };
    var P2 = { x: 3, y: 6 };
    var P3 = { x: 8, y: 9 };
    var P4 = { x: 2, y: 6 };
    var P5 = { x: 1, y: 5 };

    var NArr = [P1, P2, P3, P4, P5];
    var totalDistance = RouteLength(NArr);

    var tempStr = "my points:";

    for (var i = 0; i < NArr.length; i++) {
        tempStr += `<p> Point: (${NArr[i].x},${NArr[i].y})</p>`;
    }
    tempStr += `<p>Total Distance: ${totalDistance}</p>`;

    document.getElementById("EmptyDiv").innerHTML = tempStr;
}

ShowPoints();




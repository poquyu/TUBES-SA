const datav = [
    { id: 0, x: 50.8427501, y: 4.3515499, demand: 0, name: "BRUSSEL" },
    { id: 55, x: 50.4812987, y: 5.5198048, demand: 15, name: "ANTHISNES" },
    { id: 110, x: 50.1085676, y: 5.1429583, demand: 16, name: "AVE-ET-AUFFE" },
    { id: 165, x: 50.8753581, y: 3.3113744, demand: 31, name: "BAVIKHOVE" },
    { id: 220, x: 50.2624949, y: 4.1523037, demand: 14, name: "BERSILLIES-L'ABBAYE" },
    { id: 330, x: 50.025208, y: 4.3409814, demand: 7, name: "BOURLERS" },
    { id: 385, x: 51.0432467, y: 2.6501345, demand: 9, name: "BULSKAMP" },
    { id: 495, x: 51.2365829, y: 3.3400765, demand: 33, name: "DAMME" },
    { id: 660, x: 50.411922, y: 5.173705, demand: 10, name: "EVELETTE" },
    { id: 715, x: 50.4100558, y: 4.3249526, demand: 32, name: "FONTAINE-L'EVEQUE" },
    { id: 770, x: 50.7670559, y: 5.2628934, demand: 26, name: "GELINDEN" },
    { id: 880, x: 50.5499808, y: 3.3727285, demand: 32, name: "GUIGNIES" },
    { id: 1045, x: 50.9912912, y: 4.492735, demand: 25, name: "HOFSTADE_BT." },
    { id: 1155, x: 50.5208191, y: 3.9017078, demand: 26, name: "JURBISE" },
    { id: 1210, x: 50.77614, y: 3.007366, demand: 2, name: "KOMEN" },
    { id: 1265, x: 51.0566021, y: 3.573045, demand: 25, name: "LANDEGEM" },
    { id: 1375, x: 51.2948381, y: 3.1994146, demand: 3, name: "LISSEWEGE" },
    { id: 1430, x: 50.6200815, y: 3.8018102, demand: 28, name: "MAFFLE" },
    { id: 1485, x: 50.6165736, y: 3.5470846, demand: 9, name: "MAULDE" },
    { id: 1540, x: 51.361787, y: 4.861625, demand: 21, name: "MERKSPLAS" },
    { id: 1595, x: 50.3534706, y: 4.9014191, demand: 7, name: "MONT_NAM." },
    { id: 1650, x: 50.5504316, y: 4.0964803, demand: 24, name: "NAAST" },
    { id: 1705, x: 51.1936164, y: 4.1787815, demand: 1, name: "NIEUWKERKEN-WAAS" },
    { id: 1870, x: 50.7360287, y: 4.1360863, demand: 4, name: "PEPINGEN" },
    { id: 1925, x: 49.8122243, y: 5.0029, demand: 9, name: "POUPEHAN" },
    { id: 1980, x: 50.9477884, y: 2.7891722, demand: 7, name: "RENINGE" },
    { id: 2035, x: 50.8460854, y: 5.5750235, demand: 16, name: "ROSMEER" },
    { id: 2090, x: 50.5009515, y: 4.6473657, demand: 27, name: "SAINT-MARTIN" },
    { id: 2145, x: 49.6096472, y: 5.8560275, demand: 15, name: "SELANGE" },
    { id: 2255, x: 50.2950667, y: 4.4831638, demand: 20, name: "SOMZEE" },
    { id: 2310, x: 50.2273877, y: 5.7437507, demand: 27, name: "TAILLES" },
    { id: 2365, x: 50.5695196, y: 5.5844061, demand: 33, name: "TILFF" },
    { id: 2420, x: 49.9102794, y: 5.5659053, demand: 18, name: "VAUX-LEZ-ROSIERES" },
    { id: 2530, x: 50.8346073, y: 4.557627, demand: 19, name: "VOSSEM" },
    { id: 2640, x: 51.0005742, y: 3.8693544, demand: 16, name: "WETTEREN" },
    { id: 2695, x: 50.6061517, y: 5.7830075, demand: 32, name: "XHENDELESSE" }
];


const metadata = {  
    name: "belgium-n50-k10",
    comment: "Generated for OptaPlanner Examples with GraphHopper by Geoffrey De Smet.",
    type: "CVRP",
    dimension: 50,
    edgeWeightType: "EUC_2D",
    capacity: 125,
    depot: { id: 0, x: 50.8427501, y: 4.3515499, demand: 0, name: "BRUSSEL" }
};

data = datav.slice(0,50)


// Set up SVG dimensions
const width = 800;
const height = 600;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Scale the data to fit the SVG
const xScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.x) - 0.1, d3.max(data, d => d.x) + 0.1])
    .range([0, innerWidth]);

const yScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.y) - 0.1, d3.max(data, d => d.y) + 0.1])
    .range([innerHeight, 0]);

// Create SVG container
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Buat Node
const nodes = g.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", d => (d.id === 0) ? 8 : 5)  
    .attr("fill", d => (d.id === 0) ? "red" : "blue");

// Tambahkan Label
const labels = g.selectAll("text")
    .data(data) 
    .enter()
    .append("text")
    .attr("x", d => xScale(d.x) - 20)
    .attr("y", d => yScale(d.y) - 15)
    .text(d => d.name)
    .attr("font-size", "12px")


let t0 = performance.now();
function calculateRouteCost(route) {
    let cost = 0;
    for (let i = 0; i < route.length - 1; i++) {
        cost += distance(route[i], route[i + 1]);
    }
    return cost;
}
function distance(node1, node2) {
    const dx = xScale(node2.x) - xScale(node1.x);
    const dy = yScale(node2.y) - yScale(node1.y);
    return Math.sqrt(dx * dx + dy * dy);
}


function findNearest(node, unvisited) {
    let nearest = null;
    let minDistance = Infinity;

    unvisited.forEach(target => {
        const dist = distance(node, target);
        if (dist < minDistance) {
            minDistance = dist;
            nearest = target;
        }
    });

    return nearest;
}

function calculateTotalCost(routes) {
    return routes.reduce((acc, route) => acc + calculateRouteCost(route), 0);
}


function Greedy(data, K) {
    let unvisited = data.slice(1);  
    let current = data[0];  
    let maxCapacity = metadata.capacity;
    K = 10;  
    let k = Array.from({length: K}, (_, i) => ({id: i, capacity: 0}));  
    let routes = Array.from({length: K}, () => [data[0]]);
    let i = 0;  
    while (unvisited.length > 0 && i < K) {
        const nearest = findNearest(current, unvisited);
        if (k[i].capacity + nearest.demand <= maxCapacity) {
            k[i].capacity += nearest.demand;
            routes[i].push(nearest);
            unvisited = unvisited.filter(node => node !== nearest);
            current = nearest;
        } else {
            routes[i].push(data[0]);  // Return to the depot
            i++;  // Move to the next vehicle
            current = data[0];  // Start from the depot
            k[i] = {id: i, capacity: 0};  // Initialize the next vehicle
        }
    }

    routes.forEach(route => {
        if (route[route.length - 1].id !== 0) {
            route.push(data[0]);
        }
    });
    return routes;

}


const routes = Greedy(data, 10);
let t1 = performance.now();
console.log("Greedy took " + (t1 - t0) + " milliseconds.");

function flattenRoutes(routes) {
    let segments = [];
    routes.forEach((route, routeIndex) => {
        for (let i = 0; i < route.length - 1; i++) {
            segments.push({
                source: route[i],
                target: route[i + 1],
                routeIndex: routeIndex
            });
        }
    });
    return segments;
}

// Flatten routes into segments
const segments = flattenRoutes(routes);

// Create a line generator
const lineGenerator = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));



// Prepare for route animation
const routePaths = g.selectAll("path")
    .data(segments)
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", d => d3.schemeCategory10[d.routeIndex % 10])
    .attr("stroke-width", 2)
    .attr("d", d => lineGenerator([d.source, d.source]))  // Start with a point
    .attr("opacity", 0);

// Function to start the animation
function startAnimation() {
    routePaths
        .transition()
        .duration(20)  // Duration of each segment's animation
        .delay((d, i) => i * 60)  // Delay between segments
        .attr("d", d => lineGenerator([d.source, d.target]))
        .attr("opacity", 1)
        .transition()
        .duration(100)  // Quick fade out
        .attr("opacity", 0.5);  // Don't completely disappear
    let totalCostBox = d3.select("body")
        .append("div")
        .style("border", "1px solid black")
        .style("padding", "10px")
        .style("margin", "10px");
    updateTotalCostBox(totalCostBox);
    function updateTotalCostBox(cost) {
        totalCostBox.text(`Total cost: ${calculateTotalCost(routes)}`);
    }
}

// Function to reset the animation
function resetAnimation() {
    routePaths
        .interrupt()  
        .attr("d", d => lineGenerator([d.source, d.source]))
        .attr("opacity", 0);
    
}


d3.select("body")
    .append("button")
    .text("Start Animation")
    .style("display", "block")
    .style("margin", "auto")
    .on("click", startAnimation);

d3.select("body")
    .append("button")
    .text("Reset")
    .style("display", "block")
    .style("margin", "auto")
    .on("click", resetAnimation);

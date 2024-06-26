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

const width = 800;
const height = 600;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const xScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.x) - 0.1, d3.max(data, d => d.x) + 0.1])
    .range([0, innerWidth]);

const yScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.y) - 0.1, d3.max(data, d => d.y) + 0.1])
    .range([innerHeight, 0]);

const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

const nodes = g.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", d => (d.id === 0) ? 8 : 5)
    .attr("fill", d => (d.id === 0) ? "red" : "blue");

const labels = g.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => xScale(d.x) - 20)
    .attr("y", d => yScale(d.y) - 15)
    .text(d => d.name)
    .attr("font-size", "12px");

    
let t0 = performance.now();
function distance(node1, node2) {
    const dx = xScale(node2.x) - xScale(node1.x);
    const dy = yScale(node2.y) - yScale(node1.y);
    return Math.sqrt(dx * dx + dy * dy);
}
function calculateRouteCost(route) {
    let cost = 0;
    for (let i = 0; i < route.length - 1; i++) {
        cost += distance(route[i], route[i + 1]);
    }
    return cost;
}

function branchAndBound(data, K) {
    const maxCapacity = metadata.capacity;
    let bestSolution = { routes: [], cost: Infinity };
    let vehicles = Array.from({ length: K }, (_, i) => ({ id: i, capacity: 0, route: [data[0]] })); // Initialize vehicles with the depot
    let queue = [];
    let initialNode = {
        routes: vehicles.map(v => [data[0]]), // Initialize routes with the depot
        capacities: vehicles.map(v => 0),
        cost: 0
    };
    queue.push(initialNode);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        let unvisited = data.filter(node => !currentNode.routes.flat().includes(node) && node.id !== 0);

        if (unvisited.length === 0) {
            // All nodes are visited, calculate the total cost
            let totalCost = 0;
            for (let i = 0; i < currentNode.routes.length; i++) {
                currentNode.routes[i].push(data[0]); // Add the depot at the end of each route
                totalCost += calculateRouteCost(currentNode.routes[i]);
            }

            if (totalCost < bestSolution.cost) {
                bestSolution = {
                    routes: currentNode.routes,
                    cost: totalCost
                };
            }
        } else {
            // Generate children nodes by assigning unvisited nodes to vehicles
            for (let i = 0; i < K; i++) {
                if (currentNode.capacities[i] < maxCapacity) {
                    let children = generateChildren(currentNode, unvisited, i, maxCapacity);
                    children.forEach(child => {
                        child.lowerBound = calculateLowerBound(child, unvisited);
                        console.log(bestSolution.cost);
                        if (child.lowerBound < bestSolution.cost) {
                            queue.push(child);
                        }
                    });
                }
            }
            queue.sort((a, b) => a.lowerBound - b.lowerBound);
        }
    }

    return bestSolution;
}

function generateChildren(node, unvisited, vehicleIndex, capacity) {
    let children = [];
    unvisited.forEach((customer, index) => {
        if (node.capacities[vehicleIndex] + customer.demand <= capacity) {
            let newRoutes = node.routes.map(route => [...route]);
            let newCapacities = node.capacities.slice();
            newRoutes[vehicleIndex].push(customer);
            newCapacities[vehicleIndex] += customer.demand;
            children.push({
                routes: newRoutes,
                capacities: newCapacities,
                cost: node.cost + calculateRouteCost(newRoutes[vehicleIndex])
            });
        }
    });
    return children;
}

function calculateLowerBound(node, unvisited) {
    let cost = node.cost;
    for (let i = 0; i < node.routes.length; i++) {
        let lastNode = node.routes[i][node.routes[i].length - 1];
        unvisited.forEach(customer => {
            cost += distance(lastNode, customer);
        });
    }
    return cost;
}

let bestRoute = branchAndBound(data,6);


let t1 = performance.now();
console.log(bestRoute);
console.log("Branch and bound took " + (t1 - t0) + " milliseconds.");

// Visualize the best route
function flattenRoute(routes) {
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
const segments = flattenRoute(bestRoute.routes);


const lineGenerator = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

const routePaths = g.selectAll("path")
    .data(segments)
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", d => d3.schemeCategory10[d.routeIndex % 10])
    .attr("stroke-width", 2)
    .attr("d", d => lineGenerator([d.source, d.source]))
    .attr("opacity", 0);

function startAnimation() {
    routePaths
        .transition()
        .duration(20)
        .delay((d, i) => i * 60)
        .attr("d", d => lineGenerator([d.source, d.target]))
        .attr("opacity", 1)
        .transition()
        .duration(100)
        .attr("opacity", 0.5);
    let totalCostBox = d3.select("body")
        .append("div")
        .style("border", "1px solid black")
        .style("padding", "10px")
        .style("margin", "10px");
    updateTotalCostBox(totalCostBox);
    function updateTotalCostBox(cost) {
        totalCostBox.text(`Total cost: ${bestRoute.cost}`);
    }
}

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
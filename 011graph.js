// create a graph class
class Graph {
  // defining node array and adjacent list
  constructor(noOfNodes) {
    this.noOfVertices = noOfNodes;
    this.adjacencyList = new Map();
  }

  addNode(node) {
    // initialize the adjacent list with a null array
    this.adjacencyList.set(node, []);
  }

  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);

    // since graph is undirected, add an edge from destination to origin also
    this.adjacencyList.get(destination).push(origin);
  }

  // prints the node and adjacency list
  printGraph() {
    // get all the nodes
    var get_keys = this.adjacencyList.keys();

    for (const i of get_keys) {
      console.log (i + " -> " + this.adjacencyList.get(i))
    }
    
  }

  // bfs(v)
  // dfs(v)
}

// using the above implemented graph class
var graph = new Graph(6);
var nodes = ["A", "B", "C", "D", "E", "F"];

// adding nodes
for (node of nodes) {
  graph.addNode(node);
}

// adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");

graph.printGraph();


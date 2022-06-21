import Queue from "/workspace/GrokkingAlgorithms-codePractice/011queue.js";

// create a graph class
class Graph {
  // defining node array and adjacent list
  constructor(noOfNodes) {
    this.noOfNodes = noOfNodes;
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
      console.log(i + " -> " + this.adjacencyList.get(i));
    }
  }

  // function to performs BFS
  bfs(startingNode) {
    // create a visited object
    var visited = {};

    // Create an object for queue
    var q = new Queue();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);

    // loop until queue is empty
    while (!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

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

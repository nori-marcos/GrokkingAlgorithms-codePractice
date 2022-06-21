// podemos representar um grafo, reunindo todas as ligações entre os vértices
// time complexity O(e) onde e é o número de ligações
// o ruim desta abortagem é que preciso percorrer toda a lista para encontrar a conexão específica

const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// findAdjacentNodes
// como pensamos neste caso?
// procuramos todas as edges que possuem o vértice específico
// por isso, seria um loop
// em cada loop verifico: o meu vértice se encontra neste loop?

const findAdjacentNodes = function (node) {
  const adjacentNodes = [];

  for (let edge of edges) {
    // procurar o index de determina vértice em uma lista de vértices
    // aqui pegaremos numeros que oscilam entre 0, 1 ou -1 considerando os pares
    // -1 é quando o elemento não existe na lista de pares
    const nodeIdx = edge.indexOf(node);

    // se o índice do vértice for maior que -1, isto significa que ele existe no par
    // sendo assim, verificamos se ele está na posição 0
    // se sim, chamamos o que está na posição 1 (o seu par)
    // se não, chamamos o que está na posição 0 (o seu par anterior)
    if (nodeIdx > -1) {
      let adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode)
    }
  }

  return adjacentNodes;
};

// isConnected
console.log(findAdjacentNodes("A"))
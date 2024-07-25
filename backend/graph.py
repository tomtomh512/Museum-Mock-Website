import heapq


class Edge:
    def __init__(self, name, point1, point2, distance):
        self.name = name
        self.point1 = point1
        self.point2 = point2
        self.distance = distance


class Node:
    def __init__(self, name, current_distance):
        self.name = name
        self.current_distance = current_distance

    def __lt__(self, other):
        return self.current_distance < other.current_distance


# names must match edge ID from map.js
edge1 = Edge("children-lobby-path", "Children's Center", "Lobby", 1.5)
edge2 = Edge("lobby-cafe-path", "Cafe", "Lobby", 2)
edge3 = Edge("lobby-entrance-path", "Entrance", "Lobby", 2)
edge4 = Edge("lobby-fossils-path", "Fossils", "Lobby", 3.5)
edge5 = Edge("lobby-stone-age-path", "Stone Age", "Lobby", 2)
edge6 = Edge("lobby-ocean-path", "Ocean", "Lobby", 3.5)
edge7 = Edge("fossils-industrial-rev-path", "Fossils", "Industrial Revolution", 2.25)
edge8 = Edge("stone-age-industrial-rev-path", "Stone Age", "Industrial Revolution", 1.5)
edge9 = Edge("ocean-industrial-rev-path", "Ocean", "Industrial Revolution", 2.25)
edge10 = Edge("fossils-rocks-path", "Rocks", "Fossils", 1.5)
edge11 = Edge("ocean-plants-path", "Ocean", "Plants", 1.5)
edge12 = Edge("rocks-industrial-rev-path", "Rocks", "Industrial Revolution", 2.25)
edge13 = Edge("industrial-rev-digital-age-path", "Digital Age", "Industrial Revolution", 1.5)
edge14 = Edge("plants-industrial-rev-path", "Plants", "Industrial Revolution", 2.25)
edge15 = Edge("rocks-gift-shop-path", "Rocks", "Gift Shop", 3.5)
edge16 = Edge("digital-age-gift-shop-path", "Digital Age", "Gift Shop", 2)
edge17 = Edge("plants-gift-shop-path", "Plants", "Gift Shop", 3.5)
edge18 = Edge("gift-shop-bathroom-path", "Bathroom", "Gift Shop", 2)
edge19 = Edge("gift-shop-exit-path", "Exit", "Gift Shop", 2)
edge20 = Edge("gift-shop-vivarium-path", "Vivarium", "Gift Shop", 2)

outgoingEdges = {
    "Entrance": [edge3],
    "Lobby": [edge1, edge2, edge3, edge4, edge5, edge6],
    "Children's Center": [edge1],
    "Cafe": [edge2],
    "Fossils": [edge4, edge7, edge10],
    "Stone Age": [edge5, edge8],
    "Ocean": [edge6, edge9, edge11],
    "Industrial Revolution": [edge7, edge8, edge9, edge12, edge13, edge14],
    "Rocks": [edge10, edge12, edge15],
    "Digital Age": [edge13, edge16],
    "Plants": [edge11, edge14, edge17],
    "Gift Shop": [edge15, edge16, edge17, edge18, edge19, edge20],
    "Bathroom": [edge18],
    "Vivarium": [edge20],
    "Exit": [edge19]
}


def retrieve_directions(start, end):
    visited = {}  # tracks visited nodes
    distances = {}  # tracks distances to nodes from start
    pqueue = []  # priority queue
    discoveredBy = {}  # KEY node -DISCOVERED BY- VALUE edge
    returnInfo = {
        "nodePath": [],
        "edgePath": [],
    }

    if start == '' or end == '':
        return returnInfo

    for exhibit in outgoingEdges:
        visited[exhibit] = False

    heapq.heappush(pqueue, Node(start, 0))

    while not len(pqueue) == 0:
        current = heapq.heappop(pqueue)
        currentName = current.name
        currentDistance = current.current_distance

        if not visited[currentName]:
            visited[currentName] = True

            edges = outgoingEdges[currentName]
            for edge in edges:

                # assign neighbor to the other point
                neighbor = edge.point2 if edge.point1 == currentName else edge.point1
                edgeDistance = edge.distance

                # if neighbor is unexplored, push to pq
                if not visited[neighbor]:
                    newDistance = currentDistance + edgeDistance
                    heapq.heappush(pqueue, Node(neighbor, newDistance))

                    # if neighbor is not in distances OR
                    # if neighbor is in distances, compare that distance with newDistance; replace with smaller
                    if neighbor not in distances or newDistance <= distances[neighbor]:
                        distances[neighbor] = newDistance
                        discoveredBy[neighbor] = edge

    # trace
    current = end
    while current != start:
        returnInfo["nodePath"].insert(0, current)
        returnInfo["edgePath"].append(discoveredBy[current].name)
        current = discoveredBy[current].point2 if discoveredBy[current].point1 == current else discoveredBy[current].point1

    return returnInfo

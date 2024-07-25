import heapq


class Node:
    def __init__(self, name, current_distance):
        self.name = name
        self.current_distance = current_distance

    def __lt__(self, other):
        return self.current_distance < other.current_distance


adj_list = {
    "Children's Center": [("Lobby", 1.5)],
    "Cafe": [("Lobby", 2)],
    "Entrance": [("Lobby", 2)],
    "Lobby": [("Children's Center", 1.5), ("Cafe", 2), ("Entrance", 2), ("Fossils", 3.5), ("Stone Age", 2), ("Ocean", 3.5)],
    "Fossils": [("Lobby", 3.5), ("Industrial Revolution", 2.25), ("Rocks", 1.5)],
    "Stone Age": [("Lobby", 2), ("Industrial Revolution", 1.5)],
    "Ocean": [("Lobby", 3.5), ("Industrial Revolution", 2.25), ("Plants", 1.5)],
    "Industrial Revolution": [("Fossils", 2.25), ("Stone Age", 1.5), ("Ocean", 2.25), ("Rocks", 2.25), ("Digital Age", 1.5), ("Plants", 2.25)],
    "Rocks": [("Fossils", 1.5), ("Industrial Revolution", 2.25), ("Gift Shop", 3.5)],
    "Digital Age": [("Industrial Revolution", 1.5), ("Gift Shop", 2)],
    "Plants": [("Ocean", 1.5), ("Industrial Revolution", 2.25), ("Gift Shop", 3.5)],
    "Gift Shop": [("Rocks", 3.5), ("Digital Age", 2), ("Plants", 3.5), ("Bathroom", 2), ("Vivarium", 2), ("Exit", 2)],
    "Bathroom": [("Gift Shop", 2)],
    "Vivarium": [("Gift Shop", 2)],
    "Exit": [("Gift Shop", 2)],
}


def get_directions(start, end):
    visited = {}
    distances = {}
    pqueue = []
    found = {}

    for exhibit in adj_list:
        visited[exhibit] = False

    heapq.heappush(pqueue, Node(start, 0))

    while not len(pqueue) == 0:

        current = heapq.heappop(pqueue)

        if not visited[current.name]:
            visited[current.name] = True

            neighbors = adj_list[current.name]
            for neighbor in neighbors:
                neighborName = neighbor[0]
                neighborDistance = neighbor[1]

                if not visited[neighborName]:
                    new_distance = current.current_distance + neighborDistance
                    heapq.heappush(pqueue, Node(neighborName, new_distance))

                    if neighborName not in distances or new_distance <= distances[neighborName]:
                        distances[neighborName] = new_distance
                        found[neighborName] = current.name

    path = []

    current = end
    while current != start:
        path.insert(0, current)
        current = found[current]

    path.insert(0, current)

    return path


start = "Plants"
end = "Lobby"
print(get_directions(start, end))
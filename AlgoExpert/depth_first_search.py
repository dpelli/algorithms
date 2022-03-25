class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array

node1 = Node("A")
node1.addChild("B").addChild("D")
node1.addChild("C").addChild("E")
node1.addChild("F")
node1.addChild("Z").addChild("Y").addChild("X")

arr = node1.depthFirstSearch([])

print(arr)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topological Sorting in DAG</title>
</head>
<body>
    <h2>Topological Sorting in DAG</h2>
    <script>
            class Graph{
                constructor(v){
                    this.V = v
        
                    this.adj = new Array(this.V)
                    for (let i = 0 ; i < this.V ; i+=1){
                        this.adj[i] = new Array()
                    }
                }
        
                addEdge(v, w){
                    this.adj[v].push(w)
                }
        
                topological(v, visit, stack){
                    visit[v] = true;
                    let i = 0;
        
                    for(i = 0 ; i < this.adj[v].length ; i++){
                        if(!visit[this.adj[v][i]]){
                            this.topological(this.adj[v][i], visit, stack)
                        }
                    }
        
                    stack.push(v);
                }
        
                topologicalSort(){
                    let stack = new Array()
        
                    let visit = new Array(this.V);
                    for (let i = 0 ; i < this.V ; i++){
                        visit[i] = false;
                    }
        
                    for (let i = 0 ; i < this.V ; i++){
                        if (visit[i] == false){
                            this.topological(i, visit, stack);
                        }
                    }
        
                    while (stack.length != 0){
                        console.log(stack.pop() + " ")
                    }
                }
            }

            var g = new Graph(6)
            g.addEdge(5, 3)
            g.addEdge(4, 0)
            g.addEdge(2, 1)
            g.addEdge(5, 2)
            g.addEdge(2, 4)
            g.addEdge(4, 3)
            
            console.log("Topological sort is ")
            
            g.topologicalSort()
            
            // This code is written by Ayush Solanki :-)
        </script>
        
</body>
</html>

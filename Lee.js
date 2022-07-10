<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lee algorithm</title>
</head>

<body>
    <h2>Lee algorithm</h2>
    <script>
        const ROW = 9
        const COL = 10

        class Point {
            constructor(x, y) {
                this.x = x
                this.y = y
            }
        }

        class queueNode {
            constructor(pt, dist) {
                this.pt = pt;
                this.dist = dist;
            }
        }

        function isValid(row, col) {
            return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL)
        }

        let rowNum = [-1, 0, 0, 1]
        let colNum = [0, -1, 1, 0]

        function BFS(mat, src, dest) {
            if (mat[src.x][src.y] != 1 || mat[dest.x][dest.y] != 1)
                return -1

            let visited = new Array(ROW).fill(false).map(() => new Array(COL).fill(false));

            visited[src.x][src.y] = true

            let q = []

            let s = new queueNode(src, 0)
            q.push(s)

            while (q) {
                let curr = q.shift()

                let pt = curr.pt
                if (pt.x == dest.x && pt.y == dest.y)
                    return curr.dist

                for (let i = 0; i < 4; i++) {
                    let row = pt.x + rowNum[i]
                    let col = pt.y + colNum[i]

                    if (isValid(row, col) && mat[row][col] == 1 && !visited[row][col]) {
                        visited[row][col] = true
                        let Adjcell = new queueNode(new Point(row, col),curr.dist + 1)
                        q.push(Adjcell)
                    }
                }
            }
            return -1
        }

        function main() {

            let mat = [[1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]]

            let source = new Point(0, 0)
            let dest = new Point(3, 4)

            let dist = BFS(mat, source, dest)

            if (dist != -1)
                console.log("Shortest Path is", dist)
            else
                console.log("Shortest Path doesn't exist")
        }

        main()
    </script>

    </script>
</body>
</html>
